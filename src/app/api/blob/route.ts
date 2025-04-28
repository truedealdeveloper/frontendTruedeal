import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(
      { error: 'Filename is required' },
      { status: 400 }
    );
  }

  // Get blob URL from request body
  const blob = await request.blob();
  const contentType = blob.type;

  // Upload to Vercel Blob
  const { url } = await put(filename, blob, {
    contentType,
    access: 'public',
  });

  return NextResponse.json({ url });
} 