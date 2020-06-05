const { readdirSync } = require("fs")

const ascii = require("ascii-table")

let table = new ascii(`Saurien Commands`);
table.setHeading("Names", "Loaded?");

module.exports = (Saurien) => {
    
    readdirSync("./cmd/").forEach(dir => {
        
        const commands = readdirSync(`./cmd/${dir}/`).filter(file => file.endsWith(".js"));


        for (let file of commands) {
            let pull = require(`../cmd/${dir}/${file}`);

            if (pull.name) {
                Saurien.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }

            
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => Saurien.aliases.set(alias, pull.name));
        }
    });
    
    console.log(table.toString());
}
