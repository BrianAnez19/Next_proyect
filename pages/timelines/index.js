import Link from 'next/link';

export default function Timelines ({userName}) {
    return <>
    <div className='container'>
        <h1>Timelines of {userName}</h1>

        <Link href={'/'}> 
            <a>
                Go to Home
            </a>
        </Link>
    </div>

    <style jsx>{`
        .container {
            padding: 0 2rem;
        }

        h1{
            color: #000;
            text-align: center;
            font-size: 32px;
        }

        a{
            color: blue;
            font-size: 15px
            text-align: center;
        }

        `}</style>
    </>
}

Timelines.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(res => {
            const {userName} = res
            return {userName}
        })
}