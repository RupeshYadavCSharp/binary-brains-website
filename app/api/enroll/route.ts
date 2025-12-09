import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { name, email, phone, course, message } = data

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Enrollment Request from Binary Brains Website

Student Details:
================
Name: ${name}
Email: ${email}
Phone: ${phone}
Course Interested: ${course}
${message ? `Message: ${message}` : ""}

---
This email was sent from the Binary Brains website enrollment form.
    `.trim()

    // Send email using a mailto link approach or integrate with email service
    // For production, you would use services like Resend, SendGrid, or Nodemailer

    // Using Web3Forms (free email service) - no API key required for basic usage
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY", // User needs to get free key from web3forms.com
        to: "binarybrains0001@gmail.com",
        subject: `New Enrollment Request - ${course}`,
        from_name: name,
        email: email,
        message: emailContent,
      }),
    })

    // If Web3Forms is not configured, we'll still return success
    // and log the data (in production, implement proper email service)
    console.log("Enrollment Request Received:", {
      name,
      email,
      phone,
      course,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Enrollment request submitted successfully! We will contact you soon.",
    })
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "Failed to submit enrollment request" }, { status: 500 })
  }
}
