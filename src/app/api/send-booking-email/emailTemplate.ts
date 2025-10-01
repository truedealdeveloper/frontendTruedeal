export interface EnquiryData {
    name: string;
    destination: string;
    email?: string;
    phone: string;
    departureCity?: string;
    startDate?: string;
    packageType?: string;
}

export function generateBookingEmailHTML(enquiryData: EnquiryData) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking Request</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f0f0f0;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #017ae3, #00f6ff);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 300;
              letter-spacing: 2px;
            }
            .content {
              padding: 30px;
            }
            .intro {
              font-size: 18px;
              color: #017ae3;
              margin-bottom: 25px;
              text-align: center;
            }
            .info-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0 10px;
            }
            .info-row {
              background-color: #f9f9f9;
              transition: all 0.3s ease;
            }
            .info-row:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 6px rgba(1, 122, 227, 0.1);
            }
            .info-label {
              padding: 12px 15px;
              font-weight: bold;
              color: #017ae3;
              border-radius: 5px 0 0 5px;
              width: 40%;
            }
            .info-value {
              padding: 12px 15px;
              color: #333;
              border-radius: 0 5px 5px 0;
            }
            .footer {
              background-color: #f9f9f9;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #666;
              border-top: 1px solid #eaeaea;
            }
            .priority-notice {
              background-color: #fff3cd;
              border: 1px solid #ffeaa7;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 20px;
              text-align: center;
              color: #856404;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌟 New Booking Request 🌟</h1>
            </div>
            <div class="content">
              <div class="priority-notice">
                <strong>🚨 Priority Lead Alert!</strong><br>
                New booking request requires immediate attention
              </div>
              <p class="intro">A new booking request has been received from <strong>${enquiryData.name}</strong>.</p>
              <table class="info-table">
                <tr class="info-row">
                  <td class="info-label">📍 Destination</td>
                  <td class="info-value"><strong>${enquiryData.destination}</strong></td>
                </tr>
                <tr class="info-row">
                  <td class="info-label">👤 Customer Name</td>
                  <td class="info-value">${enquiryData.name}</td>
                </tr>
                <tr class="info-row">
                  <td class="info-label">📞 Phone Number</td>
                  <td class="info-value"><a href="tel:${enquiryData.phone}" style="color: #017ae3; text-decoration: none;">${enquiryData.phone}</a></td>
                </tr>
                ${enquiryData.email ? `
                <tr class="info-row">
                  <td class="info-label">📧 Email</td>
                  <td class="info-value"><a href="mailto:${enquiryData.email}" style="color: #017ae3; text-decoration: none;">${enquiryData.email}</a></td>
                </tr>
                ` : ''}
                ${enquiryData.startDate ? `
                <tr class="info-row">
                  <td class="info-label">📅 Travel Start Date</td>
                  <td class="info-value">${new Date(enquiryData.startDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</td>
                </tr>
                ` : ''}
                ${enquiryData.departureCity ? `
                <tr class="info-row">
                  <td class="info-label">🛫 Departure City</td>
                  <td class="info-value">${enquiryData.departureCity}</td>
                </tr>
                ` : ''}
                ${enquiryData.packageType ? `
                <tr class="info-row">
                  <td class="info-label">📦 Package Type</td>
                  <td class="info-value">${enquiryData.packageType}</td>
                </tr>
                ` : ''}
              </table>
              <div style="margin-top: 25px; padding: 15px; background-color: #e7f3ff; border-radius: 5px; border-left: 4px solid #017ae3;">
                <h3 style="margin: 0 0 10px 0; color: #017ae3;">Next Steps:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #333;">
                  <li>Contact the customer within 2 hours for best conversion</li>
                  <li>Prepare customized package options for ${enquiryData.destination}</li>
                  <li>Check availability for ${enquiryData.startDate ? new Date(enquiryData.startDate).toLocaleDateString() : 'the requested dates'}</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <p><strong>This booking request has been automatically added to SEMBARK CRM</strong></p>
              <p>Contact the customer immediately to convert this lead!</p>
              <p>&copy; 2024 Truedeal Travel. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
}

// Keep the old function for backward compatibility
export function generateEmailHTML(enquiryData: EnquiryData) {
    return generateBookingEmailHTML(enquiryData);
}
