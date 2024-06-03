import { Comment } from './Comment';
import styles from './Post.module.css'
import { Avatar } from './Avatar';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src="https://avatars.githubusercontent.com/u/92608807?v=4" />
          <div className={styles.authorInfo}>
            <strong>Moisés Almeida</strong>
            <span>Web Developer</span>
         </div>
        </div>

        <time title='28 de Maio às 12:32h' dateTime='2024-05-28 12:32:00' >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Acabei de subir mais um projeto no meu portifolio.</p>
        <p>Aqui tá o link: <a href="#">moises.dev/projeto</a></p>
        <p><a href="#">#web #novoprojero #react</a></p>
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
