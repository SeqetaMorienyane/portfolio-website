import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // Here you would typically integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll simulate a successful email send

    console.log("Email would be sent to morienyaneblessings@gmail.com with:")
    console.log("From:", name, email)
    console.log("Message:", message)

    // In a real implementation, you would add your email sending logic here
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'morienyaneblessings@gmail.com',
    //   from: email,
    //   subject: `Contact form submission from ${name}`,
    //   text: message,
    // });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
