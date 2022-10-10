const express = require("express");
const messageRoutes = express.Router();
const WA = require("../services/twilio/twilioConfig");
require("dotenv").config();

messageRoutes.post("/", async () => {
  await WA.sendMessage(`Olá`, "whatsapp:+5562982063914");
});

module.exports == messageRoutes;
