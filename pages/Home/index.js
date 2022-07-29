import AppLayout from "../../components/AppLayout"
import { useEffect, useState } from "react"
import Devit from "../../components/Devit"
import Link from 'next/link';
import useUser from "../../hooks/useUser";
import { fetchLatestDevits } from "../../firebase/client";


export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits()
      .then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
        <Link href={'/compose/tweet'}>
          <a>
            devittwee
          </a>
        </Link>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((
            { id, userID, userName, avatar,
              content, createdAt, likesCount,
              sharedCount }) => (
            <Devit
              id={id}
              key={id}
              userID={userID}
              avatar={avatar}
              userName={ userName}
              content={content}
              createdAt={createdAt}
              likesCount={likesCount}
              sharedCount={sharedCount}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          z-index: 1;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left:15px;
        }

        section {
          padding-top: 5px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}