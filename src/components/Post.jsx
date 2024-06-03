import { format, formatDistanceToNow } from 'date-fns';
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
          
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}
