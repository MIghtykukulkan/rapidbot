


module.exports = function(controller) {

    const apiaibotkit = require('api-ai-botkit');
    const apiai = apiaibotkit("3ff489bba4b14c20bdb7e6567be6f659");

    controller.hears('.*', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
        apiai.process(message, bot);
    });

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });
    

    controller.on('reaction_added', function (bot, message) {
        console.log(message);
     });
}