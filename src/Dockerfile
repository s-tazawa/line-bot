FROM amazon/aws-lambda-nodejs:12
COPY main.js package*.json ./
RUN npm install
CMD [ "app.lambdaHandler" ]