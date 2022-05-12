import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req, res) => {
  const { email, message, name } = req.body;
  const msg = {
    to: "adamseanflorez@gmail.com",
    from: email,
    email,
    name,
    message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
