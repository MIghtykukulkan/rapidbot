/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

    controller.hears(['hi','hello','howdy','hey','aloha','hola','bonjour','oi'],'message',async(bot, message) => {
        // do something!
        await bot.reply(message, 'hello How can I help you')
    });

    controller.hears(['due'],'message',async(bot, message) => {
        // do something!
        await bot.reply(message, {
            text: 'You have Rs.500 due',
            quick_replies: [
                {
                    title: "Yes, please pay it now",
                    payload: "yes-pay",
                },
                {
                    title: "No, not now",
                    payload: "no-pay"
                }
            ]
        });

        controller.hears(['yes-pay'],'message',async(bot, message) => {
            // do something!
            await bot.reply(message, 'Your payment done!')
        });

        controller.hears(['no-pay'],'message',async(bot, message) => {
            // do something!
            await bot.reply(message, 'Your payment has been post poned!')
        });
    });
    

    controller.hears(['help'],'message',async(bot, message) => {
        console.log("save this message", message.text)
        // do something!
        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
                {
                    title: "Main",
                    payload: "main-menu",
                },
                {
                    title: "Help",
                    payload: "help"
                }
            ]
        });
    });


}