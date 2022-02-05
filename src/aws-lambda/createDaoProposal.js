const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = async (event, context) => {
    try {
        var obj = JSON.parse(event.body);
    console.log("Processing:", obj);
    const params = {
        Item: {
            proposal_id: context.awsRequestId,
            time_created: Date.now(),
            subject: obj.subject,
            body: obj.body
        },
        TableName: "dao_proposal"
    };
    
    await docClient.put(params).promise();
    console.log("Item entered successfully", params);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify('Uploaded!'),
    };
    } catch (error) {
        context.fail("error", error);
    }
};