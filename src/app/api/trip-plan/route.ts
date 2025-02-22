import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
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
  } catch (error: any) {
    console.error('Sembark API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });

    if (error.response?.status === 401) {
      return NextResponse.json(
        { message: 'Authentication failed. Please check API token.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: error.response?.data?.message || 'Something went wrong' },
      { status: error.response?.status || 500 }
    );
  }
} 