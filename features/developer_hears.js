/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

  
    
    controller.hears(['opening', 'work' , 'job', 'job opportunities'],'message',async(bot, message) => {
        await bot.reply(message, {
            text: 'Are you looking for a job opportunity??',
            quick_replies: [
                {
                    title: "yes",
                    payload: "yes I am looking for a job",
                },
                {
                    title: "No",
                    payload: "no i am not here for a job"
                }
            ]
        });
    });

    controller.hears(['yes I am looking for a job',],'message',async(bot, message) => {
        await bot.reply(message,{
        text: 'tell us about your work experience ??',
        quick_replies: [
            {
                title: "no experience",
                payload: "fresher",
            },
            {
                title: "2-5 years",
                payload: "mid"
            },
            {
                title: "5-10 years",
                payload: "senior"
            },
            {
                title: "10+ years",
                payload: "executive"
            }
        ]
    });
    });

    controller.hears(['fresher',],'message',async(bot, message) => {
        await bot.reply(message, 'thats great, we might have an exciting offer for you')
        await bot.reply(message, 'may I know your area of interest (example - java/ nodejs/ etc)')
        
    });

    controller.hears(['mid','senior', 'executive'],'message',async(bot, message) => {
        await bot.reply(message, 'hmm.. We may not be having a opening right now for your experience')
        await bot.reply(message, 'but keep looking for our website for any updates')
        
    });

    controller.hears(['nodejs'],'message',async(bot, message) => {
        await bot.reply(message, 'awesome!! we are exited to have a conversation with you')
        await bot.reply(message, 'please tell us your mobile number, type in this for mat xxx-xxx-xxxx')
        
    });

    controller.hears(['java', '.net', 'python', 'html', 'css'],'message',async(bot, message) => {
        await bot.reply(message, 'sorry! we do not have any opening for the mentioned technology')
        
    });

    controller.hears(new RegExp(/^[2-9]\d{2}-\d{3}-\d{4}$/),'message',async(bot, message) => {
        await bot.reply(message, 'thank you!! you will get a call from us soon')
        
        
    });
  

}