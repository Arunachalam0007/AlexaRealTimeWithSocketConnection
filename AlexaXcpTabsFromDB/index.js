var AWS = require("aws-sdk");
var DynamoDB = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
    TableName: "xcpTabs",
    key: {
        "tabId": 0
    }
};
var xcpTabNameToDisplay = "TabNameis not called ";

exports.handler = (event, context, callback) => {
    docClient.get(params, function (err, data) {

        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        }
        var payload = JSON.stringify(data, null, 2);
        var obj = JSON.parse(payload);
        xcpTabNameToDisplay = obj.Item.tabsToShow;

        callback(null, { "xcpTabName": xcpTabNameToDisplay });
    });
}