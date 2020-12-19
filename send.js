require("dotenv").config();

const {TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM} = process.env;

const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN);

// await
const send = ({to, body}) => {
	const message = client.messages.create({
		to, body,
		from: TWILIO_FROM
	});

	return message;
}

module.exports = send;