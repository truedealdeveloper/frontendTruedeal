import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';

// Email service type
type EmailProvider = 'sendgrid' | 'gmail';

interface EmailData {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
}

class EmailService {
  private provider: EmailProvider;
  private gmailTransporter?: nodemailer.Transporter;

  constructor() {
    // Determine which email provider to use based on environment variables
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      this.provider = 'gmail';
      this.setupGmail();
    } else if (process.env.SENDGRID_API_KEY) {
      this.provider = 'sendgrid';
      this.setupSendGrid();
    } else {
      throw new Error('No email service configured. Please set up either SendGrid or Gmail SMTP.');
    }
  }

  private setupSendGrid() {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is required');
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('Email service initialized with SendGrid');
  }

  private setupGmail() {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('GMAIL_USER and GMAIL_APP_PASSWORD are required');
    }

    this.gmailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // This should be an App Password, not your regular password
      },
    });
    console.log('Email service initialized with Gmail SMTP');
  }

  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      if (this.provider === 'sendgrid') {
        await this.sendWithSendGrid(emailData);
      } else if (this.provider === 'gmail') {
        await this.sendWithGmail(emailData);
      }
    } catch (error) {
      console.error(`Email sending failed with ${this.provider}:`, error);
      throw error;
    }
  }

  private async sendWithSendGrid(emailData: EmailData): Promise<void> {
    await sgMail.send({
      to: emailData.to,
      from: emailData.from,
      subject: emailData.subject,
      html: emailData.html,
    });
  }

  private async sendWithGmail(emailData: EmailData): Promise<void> {
    if (!this.gmailTransporter) {
      throw new Error('Gmail transporter not initialized');
    }

    const recipients = Array.isArray(emailData.to) ? emailData.to : [emailData.to];
    
    for (const recipient of recipients) {
      await this.gmailTransporter.sendMail({
        from: emailData.from,
        to: recipient,
        subject: emailData.subject,
        html: emailData.html,
      });
    }
  }

  getProvider(): EmailProvider {
    return this.provider;
  }
}

export default EmailService;
