const fs = require("fs");

// HACKY Script to convert ABIs
const path = "./abi/connectors/v2/";
function convert() {
    const files = fs.readdirSync(path);

    for (file of files) {
        const content = fs.readFileSync(path + file, "utf-8");
        const value = content.split("] =")[1].trim();
        const json = eval("JSON.stringify(" + value.split(";")[0] + ")");
        fs.writeFileSync("./abi/v2/" + file.replace(".ts", ".json"), json);
    }
}

convert();