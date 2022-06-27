// import { ApolloProvider } from '@apollo/client';
import Link from 'next/link';

// function api(){
//     return<div></div>
// }

export default function Rick_Morty ({client}) {
    return (<>
    <div className='container'>
        <h1>Rick and Morty</h1>
        <h3>Welcome</h3>
        <nav> 
            <Link href={'/'}> 
                <a>
                    Home
                </a>
            </Link>
        </nav>

        {/* <ApolloProvider client={client}>
            <api />
        </ApolloProvider> */}
        
    </div>

    <style jsx>{`
        .container {
            padding: 0 2rem;
        }
        
        nav{
            width: 100%;
        }

        h1{
            color: #000;
            text-align: center;
            font-size: 32px;
        }
        h3{
            color: #000;
            text-align: center;
            font-size: 16px;
        }

        a{
            color: blue;
            font-size: 15px
            text-align: center;
        }

        `}</style>
    </>)
}

// Rick_Morty.getInitialProps = () => {
//     return fetch('http://localhost:3000/api/api_rick')
//         .then(res => res.json())
//         .then(res => {
//             const {client} = res
//             return {client}
//         })
// }