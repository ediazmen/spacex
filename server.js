const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // This is the line that shows the visual tool :-)
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { `Server listening port ${PORT}` });