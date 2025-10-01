# Email Setup Guide for Booking Notifications

Your booking form can now send email notifications using either **SendGrid** or **Gmail SMTP**. The system automatically detects which service to use based on your environment variables.

## 🔄 How It Works

When someone submits the booking form:
1. ✅ **SEMBARK CRM**: Customer details are submitted to SEMBARK CRM
2. ✅ **Email Notifications**: Automatic emails sent to both `info@truedeal4u.com` and `web@truedeal4u.com`
3. ✅ **Customer Experience**: User gets redirected to thank you page

---

## Option 1: SendGrid Setup (Recommended)

### Step 1: Get SendGrid API Key
1. Go to [SendGrid](https://sendgrid.com/) and create/login to your account
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Choose **Full Access** or **Restricted Access** with Mail Send permissions
5. Copy the generated API key (starts with `SG.`)

### Step 2: Update Environment Variables
Add this to your `.env.local` file:
```bash
SENDGRID_API_KEY=SG.your_api_key_here
```

### Step 3: Verify Domain (Important!)
1. In SendGrid dashboard, go to **Settings** → **Sender Authentication**
2. Verify your domain `truedeal4u.com`
3. This prevents emails from going to spam

---

## Option 2: Gmail SMTP Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** → **App passwords**
3. Select **Mail** and **Other (Custom name)**
4. Enter "Truedeal Booking System"
5. Copy the generated 16-character password

### Step 3: Update Environment Variables
Add these to your `.env.local` file:
```bash
GMAIL_USER=web@truedeal4u.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

### Important Notes for Gmail:
- ⚠️ Use the **App Password**, NOT your regular Gmail password
- ⚠️ The `GMAIL_USER` should be the email you want to send FROM
- ⚠️ Gmail has daily sending limits (500 emails/day for free accounts)

---

## 🧪 Testing Email Setup

### Option 1: Test via API
```bash
curl -X POST http://localhost:3001/api/test-email
```

### Option 2: Test via Booking Form
1. Go to your website
2. Open any destination page
3. Click "Book Now" 
4. Fill and submit the form
5. Check your email inboxes

---

## 🔍 Troubleshooting

### SendGrid Issues:
- **"Maximum credits exceeded"**: Upgrade your SendGrid plan or wait for reset
- **"Unauthorized"**: Check your API key is correct and has mail send permissions
- **Emails in spam**: Verify your domain in SendGrid

### Gmail Issues:
- **"Invalid login"**: Make sure you're using App Password, not regular password
- **"Less secure app access"**: This is no longer needed with App Passwords
- **Rate limiting**: Gmail limits to 500 emails/day for free accounts

### General Issues:
- Check `.env.local` file is in the root directory
- Restart your development server after changing environment variables
- Check the browser console and terminal for error messages

---

## 📧 Email Template Features

The email notifications include:
- 🚨 **Priority Alert**: Eye-catching design for immediate attention
- 📋 **Complete Details**: Customer info, destination, dates, etc.
- 📞 **Clickable Links**: Phone numbers and emails are clickable
- 📅 **Formatted Dates**: User-friendly date formatting
- ✅ **CRM Confirmation**: Notes that data was added to SEMBARK CRM
- 🎯 **Action Items**: Clear next steps for sales team

---

## 🔧 Current Configuration

The system will automatically choose:
- **Gmail SMTP** if both `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set
- **SendGrid** if only `SENDGRID_API_KEY` is set
- **Error** if neither is properly configured

---

## 📞 Support

If you need help with setup:
1. Check the terminal output for specific error messages
2. Verify your environment variables are correct
3. Test with the `/api/test-email` endpoint
4. Make sure your email service has sufficient credits/limits
