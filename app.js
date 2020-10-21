const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(isAuth);

app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

app.get('/', (req, res, next) => {
    res.send("Working");
})

mongose.connect(`
    mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sn9ly.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority
`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server in listen on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log(err);
});