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

  const [newComment, setNewComment] = useState('');

  const [comments, setComments] = useState([
    'Post muito bacana!!'
  ]);
  
  function createComment() {
    event.preventDefault()

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleComment(event) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToBeDeleted) {
    const newComments = comments.filter(comment => {
      return comment !== commentToBeDeleted;
    }); 

    setComments(newComments);
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
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href='#' >{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={createComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name='comment' 
          placeholder='Deixe um comentário' 
          onChange={handleComment}
          value={newComment}
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
          
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment 
            onDeleteComment={deleteComment}
            content={comment} 
            key={comment}
          />
        })}
      </div>

    </article>
  )
}
