import { NextRequest, NextResponse } from 'next/server';
import { getJdoodleLanguage, getJdoodleVersionIndex } from '@/utils/jdoodleMapping';

export async function POST(request: NextRequest) {
  try {
    const { code, language } = await request.json();

    if (!code || !language) {
      return NextResponse.json(
        { error: 'Code and language are required' },
        { status: 400 }
      );
    }

    const jdoodleLanguage = getJdoodleLanguage(language);
    const versionIndex = getJdoodleVersionIndex(language);

    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId: process.env.JDOODLE_CLIENT_ID || "60b8c764ba129e3ad943e1092cbe1462",
        clientSecret: process.env.JDOODLE_CLIENT_SECRET || "d34bb0c16bd28c60db3b40c8ccd0d1499bb33bd23ab9ccc03b6594ac05decfd3",
        script: code,
        language: jdoodleLanguage,
        versionIndex: versionIndex,
      }),
    });

    const data = await response.json();

    // Handle JDoodle API errors
    if (data.error) {
      return NextResponse.json(
        { error: data.error },
        { status: 400 }
      );
    }

    // Return the response
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error executing code:', error);
    return NextResponse.json(
      { error: 'Failed to execute code' },
      { status: 500 }
    );
  }
}
