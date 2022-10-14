'use strict';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const response = new MessagingResponse();

const sendMessage = async (customer_name, customer_phone) => {
  await client.messages.create({
          body: response.message(`Olá ${customer_name}, muito obrigado por comprar conosco.Este é numero do seu pedido: ${Math.floor(9999* Math.random() + 1)}`),
          from: '+14155238886',
          to: `+55${customer_phone}`
  }).then(message => console.log(message.sid));
}
 module.exports = {sendMessage};
