import Avatar from "../../components/Avatar"
import useTimeAgo from "../../hooks/useTimeAgo"


export default function Devit({ avatar, userName, createdAt, content, id }) {
  const timeago = useTimeAgo(createdAt)
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <strong>{userName}</strong>
          <span> . </span>
          <date>{timeago}</date>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          display: flex;
          padding: 10px 15px;
        }

        div {
          padding-right: 10px;
        }

        p {
          line-height: 1.3125;
          margin: 0;
        }

        date{
          color: #555;
          font-size: 14px; 
        }
      `}</style>
    </>
  )
}