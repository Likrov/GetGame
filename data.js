const MySportsFeeds = require("mysportsfeeds-node");

const msf = new MySportsFeeds("1.2", true, null);
msf.authenticate("*******", "******");
// authenticate log in sci
 
let today = new Date();
 
exports.getData = function() {
 
        return msf.getData('all', '2019-2020-regular', 'scoreboard', 'json', {
        fordate: today.getFullYear() +
            ('0' + parseInt(today.getMonth() + 1)).slice(-2) +
            ('0' + today.getDate()).slice(-2),
        force: true
        });
 
};