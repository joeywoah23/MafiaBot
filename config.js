const _ = require('lodash');
const creds = require('./creds.js');

var overrides = {};
if (global.DEBUG) {
    overrides = {
        permissionsInterval: 1000,
        confirmingReminderInterval: 1000*1000,
        nightActionReminderInterval: 15*1000,
        nightActionBufferTime: 1*1000,
        dayTimeLimit: 3*60*1000,
        dayTimeLimitWarning: 3*60*1000,
        dayTimeLimitExtension: 2*60*1000,
        nightTimeLimit: 2*60*1000,
    };
}
module.exports = _.merge({
    admins: [
        '235250915215409154', // gabe
        '302990688293879820', // john
        '272575383520673793', // riley
        '354062182461472771', // wacko
        '630817206145646602', // joey
        '564268621354893312', // quinn
    ],
    feedbackFilePath: 'data/feedback.txt',
    dataJSONPath: 'data/data.json',
    rolesetJSONPath: 'data/rolesets.json',

    loginChecksBeforeRebooting: 20,

    mainLoopInterval: 250,
    permissionsInterval: 3000,
    syncMessageTimeout: 2000,

    dayTimeLimit: 10*60*1000,
    dayTimeLimitWarning: 3*60*1000,
    dayTimeLimitExtension: 5*60*1000,
    nightTimeLimit: 5*60*1000,

    confirmingReminderInterval: 20*1000,
    nightActionReminderInterval: 60*1000,
    nightActionBufferTime: 20*1000,
}, creds, overrides);
