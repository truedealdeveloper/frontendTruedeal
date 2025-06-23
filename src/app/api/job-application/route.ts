import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Import the generateEmailHTML function
import { generateJobApplicationHTML, JobApplicationData } from './emailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const position = formData.get('position') as string;
        const whyHireYou = formData.get('whyHireYou') as string;
        const bestWork = formData.get('bestWork') as string;
        const resume = formData.get('resume') as File;

        // Validate required fields
        if (!fullName || !email || !phone || !position || !whyHireYou || !bestWork) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Create an object that matches the JobApplicationData interface
        const applicationData: JobApplicationData = {
            fullName,
            email,
            phone,
            position,
            whyHireYou,
            bestWork
        };

        // Prepare attachment if resume is provided
        const attachments: { content: string; filename: string; type: string; disposition: string }[] = [];
        if (resume && resume.size > 0) {
            const buffer = await resume.arrayBuffer();
            const attachment = {
                content: Buffer.from(buffer).toString('base64'),
                filename: resume.name,
                type: resume.type,
                disposition: 'attachment'
            };
            attachments.push(attachment);
        }

        const msg = {
            to: 'web@truedeal4u.com',
            from: 'web@truedeal4u.com',
            subject: `New Job Application - ${position} - ${fullName}`,
            html: generateJobApplicationHTML(applicationData),
            attachments: attachments.length > 0 ? attachments : undefined,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error sending job application email:', error);
        return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
    }
} 