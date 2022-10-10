const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = async (message, senderID) => {
  try {
    await client.messages.create({
      from: `whatsapp:+14155238886`,
      body: message,
      to: senderID,
    });
    return res.status(200).json({ message: "SUCESSO" }).end();
  } catch (error) {
    return res.status(500).json({ message: "FALHA" }).end();
  }
};

module.exports = { sendMessage };
