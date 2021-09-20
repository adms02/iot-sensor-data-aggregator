import sgMail from "@sendgrid/mail";

const emailLoader = () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
};

export default emailLoader;
