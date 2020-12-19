const {promises: fs, constants: fsConstants} = require("fs");
const send = require("./send");


const init = async () => {
    for(const file of ["promises.json", "profiles.json"]) {
        await fs.access(file, fsConstants.F_OK).catch(() => {
            throw new Error("Either promises or profiles are missing.")
        });
    }

    const promises = JSON.parse(await fs.readFile("./promises.json")),
        profiles = JSON.parse(await fs.readFile("./profiles.json"));

    const now = Date.now(),
        thisYear = new Date((new Date()).getFullYear()),
        day = 1000 * 60 * 60 * 24;


    // Fix this line
    const today = promises[(now - thisYear) / day];
       
    console.log((now - thisYear) / day);

    // for(const {phone} of profiles) {
    //     await send({
    //         to: phone,
    //         body: today
    //     });
    // }
}

init();