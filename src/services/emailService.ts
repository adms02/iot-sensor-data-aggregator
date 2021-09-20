import sgMail from "@sendgrid/mail";

export const sendAlertEmail = async (email: string, sensorId: string, threshold: number, currentValue: number, timeOfEvent: Date) => {
  const msg = {
    to: email,
    dynamic_template_data: {
      sensorId: sensorId,
      threshold: threshold,
      exceededValue: currentValue,
      timeOfEvent: timeOfEvent,
    },
    from: process.env.SENDGRID_FROM_EMAIL,
    templateId: process.env.SENDGRID_ALERT_TEMPLATE_ID,
  };

  //@ts-ignore
  await sgMail.send(msg);
};
