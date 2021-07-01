function miraysfirstproject(options) {
    if (options <= 1) {
        console.log("this number is smaller than 1");
    } else if (options > 1 && options < 10) {
        console.log("this number is between 1 and 10");
    }
}

module.exports.miraysfirstproject = miraysfirstproject;