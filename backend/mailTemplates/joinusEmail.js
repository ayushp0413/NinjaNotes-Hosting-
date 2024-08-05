
exports.joinusEmail = (name) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Thanks to Join Us - Ninja Notes</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 130px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-edtech-project.vercel.app"><img class="logo"
                    src="https://res.cloudinary.com/dex0vcx6i/image/upload/v1722692172/logo_yfqpty.png" alt="StudyNotion Logo"></a>
            <div class="message">Join our Team form Ninja Notes </div>
            <div class="body">
                <p>Hey ${name},</p>
                <p>Thank you for choosing us. Ninja Notes will process your details and update you soon.
                 Stay tuned and have a good day. 
                </p>
                <p>If you did not request for Join Us , please contact us immediately to secure your account.</p>
            </div>
            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                at
                <a href="mailto:info@ninjanotes.com">Infoninjanotes@gmail.com</a>. We are here to help!
            </div>
        </div>
    </body>
    </html>`;
};