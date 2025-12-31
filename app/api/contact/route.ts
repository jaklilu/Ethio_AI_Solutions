import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

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

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    const toEmail = process.env.GMAIL_TO_EMAIL ?? 'contact@ethioaisolutions.com'

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail environment variables missing.')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const plainText = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      company ? `Company: ${company}` : '',
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    await transporter.sendMail({
      from: `"Ethio AI Solutions" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `Ethio AI Solutions Job Request`,
      text: plainText,
      html: htmlBody,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    const smtpError = error?.response ?? error?.message ?? 'Unknown error'

    console.error('Error processing contact form:', {
      message: error?.message,
      response: error?.response,
    })

    return NextResponse.json(
      {
        error:
          'Failed to send your message. Please verify email configuration or try again later.',
        details: smtpError,
      },
      { status: 500 }
    )
  }
}

