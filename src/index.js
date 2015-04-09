require("./stylesheets/main.less");

var Tab = require("./tab");

var commands = codebox.require("core/commands");


// Modify current command to open settings
var openSettings = commands.get("settings.open");
var baseRunner = openSettings.get("run");

openSettings.set("run", function() {
    console.log("run command settings");
    return codebox.tabs.add(Tab, {}, {
        uniqueId: "settings",
        type: "settings",
        title: "Settings"
    });
});
