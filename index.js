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

  console.log(today);

  for (const { phone } of profiles) {
    await send({
      to: phone,
      body: today,
    });
  }
};

init();
