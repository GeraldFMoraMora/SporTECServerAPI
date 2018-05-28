import express from 'express';
const app = express();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/sporTEC-mongo-Test')
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));
import User from './models/User';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// settings
app.set('port', process.env.PORT || 3000);

app.use('/graphql', express.json(), graphqlExpress({
  schema,
  context: {
    User
  }
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// start the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
