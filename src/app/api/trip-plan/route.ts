import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import EmailService from '@/lib/email-service';
import { generateBookingEmailHTML, EnquiryData } from '../send-booking-email/emailTemplate';

interface TripPlanRequestBody {
  name: string;
  phone_number: string;
  email?: string;
  start_date: string;
  no_of_days: string;
  no_of_adults: string;
  no_of_children?: string;
  destination: string;
  comments?: string;
  origin_city?: string;
  package_type?: string;
}

interface SembarkErrorResponse {
  message: string;
  [key: string]: unknown;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as TripPlanRequestBody;

    // Get token from environment variable (removed NEXT_PUBLIC_ prefix)
    const token = process.env.SEMBARK_ACCESS_TOKEN;

    if (!token) {
      console.error('Sembark token is not configured');
      return NextResponse.json(
        { message: 'API configuration error' },
        { status: 500 }
      );
    }

    const response = await axios({
      method: 'post',
      url: 'https://api.sembark.com/integrations/v1/trip-plan-requests',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: body
    });

    // If SEMBARK submission is successful, send email notifications
    try {
      const emailService = new EmailService();
      
      const enquiryData: EnquiryData = {
        name: body.name,
        destination: body.destination,
        email: body.email,
        phone: body.phone_number,
        departureCity: body.origin_city,
        startDate: body.start_date,
        packageType: body.package_type || 'Standard'
      };

      const emailHTML = generateBookingEmailHTML(enquiryData);
      const emailSubject = `🌟 New Booking Request: ${body.destination} - ${body.name}`;

      // Send to both email addresses
      await emailService.sendEmail({
        to: ['info@truedeal4u.com', 'web@truedeal4u.com'],
        from: 'web@truedeal4u.com',
        subject: emailSubject,
        html: emailHTML,
      });

      console.log(`Email notifications sent successfully to both addresses using ${emailService.getProvider()}`);
    } catch (emailError) {
      // Log email error but don't fail the request since SEMBARK submission was successful
      console.error('Error sending email notifications:', emailError);
    }

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const axiosError = error as AxiosError<SembarkErrorResponse>;
    console.error('Sembark API Error:', {
      status: axiosError.response?.status,
      data: axiosError.response?.data,
      message: axiosError.message
    });

    if (axiosError.response?.status === 401) {
      return NextResponse.json(
        { message: 'Authentication failed. Please check API token.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: axiosError.response?.data?.message || 'Something went wrong' },
      { status: axiosError.response?.status || 500 }
    );
  }
}
