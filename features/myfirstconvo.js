
const { Botkit, BotkitConversation } = require('botkit');



module.exports = function(controller) {

    const MY_DIALOG_ID = 'my-dialog-name-constant';
    let convo = new BotkitConversation(MY_DIALOG_ID, controller);

    convo.say('Howdy!');

}