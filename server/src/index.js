const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ArtistAPI = require('./datasources/artist');
const iTunes = require('./datasources/iTunes');
const Lyrics = require('./datasources/Lyrics');

// Apollo Server will automatically add the artistAPI to our resolvers' context so we can easily call it.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    artistAPI: new ArtistAPI(),
    iTunes: new iTunes(),
    Lyrics: new Lyrics()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
