import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ENV VARIABLES
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

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
    const body = await req.json();

    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();

    // 🛑 HARD VALIDATION (blank submit block)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email and Message are required" },
        { status: 400 }
      );
    }

    if (message.length < 5) {
      return NextResponse.json(
        { error: "Message is too short" },
        { status: 400 }
      );
    }

    // EMAIL TO OWNER
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
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // CONFIRMATION EMAIL TO USER
    const mailToUser = {
      from: `"Shubham Choubey" <${EMAIL_USER}>`,
      to: email,
      replyTo: EMAIL_USER,
      subject: "Thanks for contacting me — Shubham Choubey",
      html: `
        <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:30px 15px;">
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

            <!-- Header -->
            <div style="text-align:center;padding:25px 20px;border-bottom:1px solid #e5e7eb;">
              <img
                src="https://shubhamchoubey-portfolio.vercel.app/mail.png"
                alt="Shubham Logo"
                style="width:120px;max-width:100%;height:auto;display:block;margin:auto;"
              />
            </div>

            <!-- Body -->
            <div style="padding:25px;color:#111827;">
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

            <!-- Social Footer -->
            <div style="background:#f9fafb;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">

              <p style="font-size:14px;color:#6b7280;margin-bottom:12px;">
                Connect with me
              </p>

              <div style="margin-bottom:15px;">
                <a href="https://linkedin.com/in/shubhamchoubeyx" 
                  style="display:inline-block;margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      width="28" height="28" alt="LinkedIn"/>
                </a>

                <a href="https://instagram.com/shubham_choubey_121"
                  style="display:inline-block;margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      width="28" height="28" alt="Instagram"/>
                </a>

                <a href="https://wa.me/917202979172"
                  style="display:inline-block;margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                      width="28" height="28" alt="WhatsApp"/>
                </a>
              </div>

              <div style="font-size:12px;color:#9ca3af;">
                © ${new Date().getFullYear()} Shubham Choubey · 
                <a href="https://shubhamchoubey-portfolio.vercel.app" 
                  style="color:#2563eb;text-decoration:none;">
                  shubham.dev
                </a>
              </div>

            </div>

          </div>
        </div>
      `,
    };

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
