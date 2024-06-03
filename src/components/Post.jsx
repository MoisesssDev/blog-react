import { useState } from 'react';
import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { Avatar } from './Avatar';


export function Post({ author, publishedAt, content}) {
  const dateFormatted = format(publishedAt, "dd 'de' MMM yyyy 'ás' HH:mm'h'", {locale: ptBR});

  const dateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: 'Há'
  });

  const [comments, setComments] = useState([1, 2]);
  
  function createComment() {
    event.preventDefault()

    setComments([...comments, comments.length + 1]);
  }

  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
         </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()} >
          {dateRelative} 
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if (item.type === 'link') {
            return <p><a href='#' >{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={createComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
          
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment  />
        })}
      </div>

    </article>
  )
}
