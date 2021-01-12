
const line = require('line/bot-sdk');
var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient();
const line_client = new line.Client({
    channelAccessToken: process.env.ACCESS_TOKEN
})
exports.lambdaHandler = async (event) => {

    // pdf作成
    // const doc = new PDFDocument();

    // const randomName = faker.name.findName();

    // doc.text(randomName, { align: 'right' });
    // doc.text(faker.address.streetAddress(), { align: 'right' });
    // doc.text(faker.address.secondaryAddress(), { align: 'right' });
    // doc.text(faker.address.zipCode() + ' ' + faker.address.city(), { align: 'right' });
    // doc.moveDown();
    // doc.text('Dear ' + randomName + ',');
    // doc.moveDown();
    // for(let i = 0; i < 3; i++) {
    //     doc.text(faker.lorem.paragraph());
    //     doc.moveDown();
    // }
    // doc.text(faker.name.findName(), { align: 'right' });
    // doc.end();

    
    // pdfBuffer = await getStream.buffer(doc);
    // pdfBase64 = pdfBuffer.toString('base64');

    // const response = {
    //     statusCode: 200,
    //     headers: {
    //         'Content-Length': Buffer.byteLength(pdfBase64),
    //         'Content-Type': 'application/pdf',
    //         'Content-disposition': 'attachment;filename=test.pdf'
    //     },
    //     isBase64Encoded: true,
    //     body: pdfBase64
    // };
    console.log('event', event);
    event_data = JSON.parse(event.body);
    console.log('event_data', JSON.stringfy(event_data));
    const messageData = event_data.events && event_data.events[0]; 

    const response = {
        'type': 'text',
        'text': messageData.message.text,
    }
    try {
        await line_client.replyMessage(messageData.replyToken, response)
    } catch (e) {
        console.log(e)
    }
};