import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service (SendGrid, Resend, etc.)
    // TODO: Connect to your Render backend API
    // For now, this is a placeholder that returns success
    
    // Example: Send to your Render backend
    // const response = await fetch(`${process.env.BACKEND_URL}/api/contact`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, company, message }),
    // })

    // Log the contact form submission (in production, send to your backend)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

