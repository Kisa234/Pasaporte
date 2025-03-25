import { Mailer } from "../../../config/nodemailer";


class MailService {
    private mailer: Mailer;

    constructor(mailAdapter: Mailer) {
        this.mailer = mailAdapter;
    }

    async sendMail(to: string, subject: string, html: string): Promise<void> {
        await this.mailer.sendMail({to, subject, html});
    }
}

export default MailService;
