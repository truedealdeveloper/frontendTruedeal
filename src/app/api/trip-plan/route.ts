import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

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

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
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
      { message: (axiosError.response?.data as any)?.message || 'Something went wrong' },
      { status: axiosError.response?.status || 500 }
    );
  }
} 