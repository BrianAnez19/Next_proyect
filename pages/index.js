import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import AppLayout from "../components/AppLayout"
import Button from "../components/Button"
import GitHub from "../components/Icons/GitHub"
import Logo from "../components/Icons/Logo"
import Spinner from "../components/Spinner"

import { colors } from "../styles/theme"

import { loginWithGitHub } from "../firebase/client"
import useUser, {USER_STATES} from "../hooks/useUser"


export default function Home() {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    user && router.replace("/Home")
  }, [user, router])

  const handleClick = () => {
    loginWithGitHub()
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Logo width="100" />
          <h1>Devter</h1>
          <h2>
            Talk about development
            <br />
            with developers 👩‍💻👨‍💻
          </h2>

          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            { user === USER_STATES.NOT_KNOWN && <Spinner />}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: 32px;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}