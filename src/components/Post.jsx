import avatar from '../assets/foto-perfil.png';
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={avatar} alt="imagem do perfil" className={styles.avatar} />
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

    </article>
  )
}
