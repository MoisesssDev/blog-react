
import { ThumbsUp, Trash } from 'phosphor-react';
import avatar from '../assets/foto-perfil.png';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src={avatar} alt="imagem do perfil" className={styles.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Moisés Almeida</strong>
              <time title='28 de Maio às 12:32h' dateTime='2024-05-28 12:32:00' >Cerca de 1h atrás</time>
            </div>


            <button title='Remover comentário'>
              <Trash size={20} />
            </button>
          </header>
          
          <p>Muito bom, parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>   
          </button> 
        </footer>
      </div>
    </div>
  )
}