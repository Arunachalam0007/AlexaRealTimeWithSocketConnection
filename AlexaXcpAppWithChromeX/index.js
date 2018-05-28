//the lambda function that your Alexa skill will connect to.

'use strict';

const AWS = require('aws-sdk');
const Alexa = require('alexa-sdk');
AWS.config.update({
    region: "us-east-1" // or whatever region your lambda and dynamo is
});
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'welcome to alexa with XCP application');
    },
    'OpenXcpTabs': function () {
        var docClient = new AWS.DynamoDB.DocumentClient();
        var xcpTabName = this.event.request.intent.slots.string.value;

        var params = {
            TableName: "xcpTabTables",
            Key: {
                "tabId": 0,
            },
            UpdateExpression: "set tabsToShow = :newTabName",
            ExpressionAttributeValues: {
                ":newTabName": xcpTabName
            }
        };
        docClient.update(params, (() => {
            this.emit(':ask', 'you are opened the ' + xcpTabName + "   tab");
        }));
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'you can ask for a tabName by using name of the xcpTab');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'bye bye, have a nice day');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'bye bye, have a nice day');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};





//data from db

// var AWS = require("aws-sdk");
// var DynamoDB = new AWS.DynamoDB();
// var docClient = new AWS.DynamoDB.DocumentClient();
// var params = {
//     TableName: "xcpTabs",
//     key: {
//         "tabId": 0
//     }
// };
// var xcpTabNameToDisplay = "TabNameis not called ";

// exprots.handlers = (event, context, callback) => {
//     docClient.get(params, function (err, data) {
//         if (err) {
//             return console.error("that didn't work");
//         }
//         var payload = JSON.stringify(data, null, 2);
//         var obj = JSON.parse(payload);
//         xcpTabNameToDisplay = obj.Item.tabsToShow;

//         callback(null, { "xcpTabName": xcpTabNameToDisplay });
//     });
// }



