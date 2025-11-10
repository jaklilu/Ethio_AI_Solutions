import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

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

    const apiKey = process.env.SENDGRID_API_KEY
    const fromEmail = process.env.SENDGRID_FROM_EMAIL
    const toEmail = process.env.SENDGRID_TO_EMAIL ?? 'contact@ethioaisolutions.com'

    if (!apiKey || !fromEmail) {
      console.error('SendGrid environment variables missing.')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    sgMail.setApiKey(apiKey)

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

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: plainText,
      html: htmlBody,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
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

