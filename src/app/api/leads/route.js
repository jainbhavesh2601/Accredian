import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validation
    if (!name || !email || !company) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Mocking a database save
    console.log('✅ Mock Database Entry Created:', { name, email, company });

    // Simulate network delay for realistic loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: 'Success', data: { name, email, company } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}