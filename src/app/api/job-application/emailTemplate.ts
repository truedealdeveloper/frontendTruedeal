export interface JobApplicationData {
    fullName: string;
    email: string;
    phone: string;
    position: string;
    whyHireYou: string;
    bestWork: string;
}

export function generateJobApplicationHTML(data: JobApplicationData): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Job Application - ${data.fullName}</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #017ae3 0%, #00f6ff 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .section {
                margin-bottom: 25px;
                border-left: 4px solid #017ae3;
                padding-left: 20px;
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
            }
            .section h3 {
                color: #017ae3;
                margin: 0 0 15px 0;
                font-size: 18px;
                font-weight: 600;
                display: flex;
                align-items: center;
            }
            .section h3:before {
                content: "▶";
                margin-right: 10px;
                color: #00f6ff;
            }
            .info-row {
                display: flex;
                margin-bottom: 12px;
                align-items: flex-start;
            }
            .info-label {
                font-weight: 600;
                color: #555;
                min-width: 140px;
                margin-right: 15px;
            }
            .info-value {
                color: #333;
                flex: 1;
            }
            .answer-box {
                background-color: #ffffff;
                border: 1px solid #e0e0e0;
                border-radius: 6px;
                padding: 15px;
                margin-top: 8px;
                line-height: 1.6;
                white-space: pre-wrap;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
            }
            .footer p {
                margin: 0;
                color: #666;
                font-size: 14px;
            }
            .highlight {
                background-color: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 4px;
                padding: 10px;
                margin: 10px 0;
            }
            .badge {
                display: inline-block;
                background: linear-gradient(135deg, #017ae3 0%, #00f6ff 100%);
                color: white;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 New Job Application</h1>
                <p>Someone has applied for a position at Truedeal</p>
                <div class="badge">${data.position}</div>
            </div>
            
            <div class="content">
                <div class="section">
                    <h3>👤 Personal Information</h3>
                    <div class="info-row">
                        <span class="info-label">Full Name:</span>
                        <span class="info-value"><strong>${data.fullName}</strong></span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value"><a href="mailto:${data.email}" style="color: #017ae3; text-decoration: none;">${data.email}</a></span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Phone:</span>
                        <span class="info-value"><a href="tel:${data.phone}" style="color: #017ae3; text-decoration: none;">${data.phone}</a></span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Position:</span>
                        <span class="info-value"><strong>${data.position}</strong></span>
                    </div>
                </div>

                <div class="section">
                    <h3>💼 Why Should We Hire You?</h3>
                    <div class="answer-box">${data.whyHireYou}</div>
                </div>

                <div class="section">
                    <h3>🏆 What's Your Best Work?</h3>
                    <div class="answer-box">${data.bestWork}</div>
                </div>

                <div class="highlight">
                    <strong>📎 Resume:</strong> Please check the attached resume file for detailed information about the candidate's background and experience.
                </div>
            </div>
            
            <div class="footer">
                <p>This application was submitted through the Truedeal careers page.</p>
                <p style="margin-top: 10px;">
                    <strong>Truedeal</strong> | 
                    <a href="mailto:web@truedeal4u.com" style="color: #017ae3; text-decoration: none;">web@truedeal4u.com</a>
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
} 