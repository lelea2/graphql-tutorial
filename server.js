import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import mongoose from 'mongoose';

const server = express();

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

mongoose.connect('mongodb://localhost/graphqlTutorial', {
  useMongoClient: true
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connection to DB is successful');
});

server.listen(4000, () => {
  console.log('listening on port 4000');
});
