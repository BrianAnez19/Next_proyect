import {ApolloServer, gql} from 'apollo-server';

const persons =[{
    name: "Midu",
    phone: "0245585",
    street: "fullstack",
    id: "20525x562s521",
    last_name: "dev",
},{
    name: "Fazt",
    phone: "4854541564",
    street: "coder",
    id: "c4d5f4sd5216543",
    last_name: "code",
},{
    name: "hola",
    street: "fronts",
    id: "2d65f4sf46848",
    last_name: "mundo",
}];

// se definen primero los campos y sus tipos y despues las acciones
const TypeDfs = gql`
    
    type person {
        name: String!
        last_name: String!
        street: String!
        id: ID!
        phone: String
    }
    type Query {
        CountPerson: Int!
        allpersons: [Person]!
        
    }
`;

const resolvers = {
    Query: {
        CountPerson: () => persons.length,
        allpersons: () => persons,

    }
}

const server = new ApolloServer({
    typeDefs: TypeDfs,
    resolvers
})

server.listen().then(({url}) =>  {
    console.log(`server on port: ${url}`)
});