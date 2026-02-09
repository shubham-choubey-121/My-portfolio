import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ENV VARIABLES
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || process.env.EMAIL_USER;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS");
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // Gmail App Password
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email and Message are required" },
        { status: 400 }
      );
    }


    // EMAIL TO Me
    const mailToOwner = {
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };


    //  CONFIRMATION EMAIL TO USER
    const mailToUser = {
      from: `"Shubham Choubey" <${EMAIL_USER}>`,
      to: email,
      replyTo: EMAIL_USER,
      subject: "Thanks for contacting me — Shubham Choubey",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">

            <!-- Header -->
            <div style="display:flex; align-items:center; gap:10px; padding:16px 20px; border-bottom:1px solid #e5e7eb;">
              <img
                src="https://your-domain.com/logo.png"
                alt="Shubham Logo"
                width="40"
                height="40"
                style="border-radius:8px;"
              />
              <span style="
                font-size:18px;
                font-weight:700;
                background: linear-gradient(90deg, #2563eb, #60a5fa);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              ">
                Shubham.dev
              </span>
            </div>

            <!-- Body -->
            <div style="padding:20px; color:#111827;">
              <h2 style="margin-top:0;">Hi ${name},</h2>

              <p>
                Thank you for reaching out to me through my portfolio.
                I’ve received your message and will get back to you shortly.
              </p>

              <p>
                I’m always open to discussing new projects, ideas, or opportunities.
              </p>

              <p style="margin-top:24px;">
                Best regards,<br/>
                <strong>Shubham Choubey</strong><br/>
                Full-Stack Developer
              </p>
            </div>

            <!-- Footer -->
            <div style="
              background:#f3f4f6;
              padding:12px 20px;
              font-size:13px;
              color:#6b7280;
              text-align:center;
            ">
              © ${new Date().getFullYear()} Shubham Choubey · shubham.dev
            </div>

          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
