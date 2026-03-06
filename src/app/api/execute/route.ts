import { NextRequest, NextResponse } from "next/server";
import { getJdoodleLanguage, getJdoodleVersionIndex } from "@/utils/jdoodleMapping";
import { executeWithRotation } from "@/utils/jdoodleClient";

export async function POST(request: NextRequest) {

  try {

    const { code, language } = await request.json();

    const result = await executeWithRotation({
      script: code,
      language: getJdoodleLanguage(language),
      versionIndex: getJdoodleVersionIndex(language),
    });

    return NextResponse.json(result);

  } catch {

    return NextResponse.json(
      { error: "Execution limit reached for today" },
      { status: 500 }
    );
  }
}