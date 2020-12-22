const dateFormat = require("dateformat");

const { promises: fs } = require("fs");
const send = require("./send");

const dayOfYear = () => {
  const date = new Date();
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
};

const init = async () => {
  const promises = JSON.parse(await fs.readFile("./promises.json")),
    profiles = JSON.parse(await fs.readFile("./profiles.json"));

  // Fix this line
  const today = promises[dayOfYear() % promises.length];

  for (const { phone } of profiles) {
    const { errorMessage, errorCode, to } = await send({
      to: phone,
      body: today,
    });

    console.log(
      `[${dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss")}] ${JSON.stringify({
        errorMessage,
        errorCode,
        to,
      })}`
    );
  }
};

init();
