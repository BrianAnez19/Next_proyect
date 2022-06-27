import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  data: await response.json(),
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
    query getinfo {
        characters{
        results{
            id
            name
            origin{name}
        }
        }
        character (id: "2"){
        id
        status
        }
    }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.characters.map(({ character }) => (
    <div key={character.id}>
      <p>
        {character.name}
      </p>
    </div>
  ));
}


export default function handler(req, res) {
  return res.status(200).ExchangeRates()
}
