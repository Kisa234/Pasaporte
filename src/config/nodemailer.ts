const nodemailer = require("nodemailer");
const MailAdapter = require("./MailAdapter");

interface MailOptions {
    to: string;
    subject: string;
    html: string;
}

export class Mailer {
    transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail", // O SMTP
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendMail({to, subject, html}: MailOptions) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
        };

        return this.transporter.sendMail(mailOptions);
    }
}
