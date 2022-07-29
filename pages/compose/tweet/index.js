import { useState } from "react"
import AppLayout from "../../../components/AppLayout"
import Button from "../../../components/Button"
import useUser from "../../../hooks/useUser"
import { addDevit } from "../../../firebase/client"
import { useRouter } from "next/router"

const COMPOSE_STATUS = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
}

export default function ComposeTweet() {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(COMPOSE_STATUS.USER_NOT_KNOWN)
    const router = useRouter()
    const user = useUser()

    const handleChange = (event) => {
        const { value } = event.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATUS.LOADING)
        addDevit({
            userID: user.uid,
            avatar: user.avatar,
            userName: user.userName,
            content: message,
        }).then( () => {
            router.push("/Home")
        }).catch((err) => {
            console.error(err)
            setStatus(COMPOSE_STATUS.ERROR)
        })
    }

    const isButtonDisabled = message.length === 0 ||
        status === COMPOSE_STATUS.LOADING

    return (
        <>
            <AppLayout>
                <form onSubmit={handleSubmit}>
                    <textarea
                        onChange={handleChange}
                        placeholder="¿Qué esta pasando?"
                        value={message}
                    ></textarea>
                    <div>
                        <Button
                            disabled={isButtonDisabled}
                        >Devitear</Button>
                    </div>
                </form>
            </AppLayout>

            <style jsx>{`
            div{
                padding: 15px
                }
            textarea {
                min-height: 200px;
                padding: 15px
                border: 0;
                font-size: 21px;
                outline: 0;
                resize: none;
                width:100%
            }
            `}</style>
        </>
    )
}