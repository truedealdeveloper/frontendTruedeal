import { NextResponse } from 'next/server';
import EmailService from '@/lib/email-service';
import { generateBookingEmailHTML, EnquiryData } from '../send-booking-email/emailTemplate';

export async function POST(request: Request) {
  try {
    const emailService = new EmailService();
    
    // Test data
    const testData: EnquiryData = {
      name: 'Test Customer',
      destination: 'Dubai',
      email: 'test@example.com',
      phone: '+91 9876543210',
      departureCity: 'Delhi',
      startDate: '2025-01-15',
      packageType: 'Standard'
    };

    const emailHTML = generateBookingEmailHTML(testData);

    // Send test emails to both addresses
    await emailService.sendEmail({
      to: ['info@truedeal4u.com', 'web@truedeal4u.com'],
      from: 'web@truedeal4u.com',
      subject: '🧪 Email Test - New Booking System',
      html: emailHTML,
    });

    return NextResponse.json({ 
      success: true, 
      message: `Test emails sent successfully to both info@truedeal4u.com and web@truedeal4u.com using ${emailService.getProvider()}`,
      provider: emailService.getProvider(),
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('Test email error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to send test emails',
      details: error.response?.body || error
    }, { status: 500 });
  }
}

export async function GET() {
  const hasGmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  const hasSendGrid = !!process.env.SENDGRID_API_KEY;
  
  let provider = 'none';
  if (hasGmail) provider = 'gmail';
  else if (hasSendGrid) provider = 'sendgrid';
  
  return NextResponse.json({
    message: 'Email test endpoint is ready. Use POST method to send test emails.',
    provider: provider,
    configured: {
      gmail: hasGmail,
      sendgrid: hasSendGrid,
      gmailUser: process.env.GMAIL_USER || 'not configured',
      sendgridPrefix: process.env.SENDGRID_API_KEY?.substring(0, 10) + '...' || 'not configured'
    }
  });
}
