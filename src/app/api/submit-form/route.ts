// src/app/api/submit-form/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData); // Log the received data

    const googleAppScriptUrl = process.env.GOOGLE_APP_SCRIPT_URL;
    console.log('Google Apps Script URL:', googleAppScriptUrl); // Log the URL

    if (!googleAppScriptUrl) {
      throw new Error('Google Apps Script URL is not configured.');
    }

    const response = await fetch(googleAppScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log('Response from Google Apps Script:', result); // Log the response

    if (result.result === 'success') {
      return NextResponse.json({ success: true, message: 'Form submitted successfully!' });
    } else {
      return NextResponse.json({ success: false, message: 'Something went wrong.' });
    }
  } catch (error) {
    console.error('Error in API route:', error); // Log any errors
    return NextResponse.json({ success: false, message: 'An error occurred.' });
  }
}