import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import avatar from '../assets/foto-perfil.png';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      < Avatar hasBorder={false} src={avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Moisés Almeida</strong>
              <time title='28 de Maio às 12:32h' dateTime='2024-05-28 12:32:00' >Cerca de 1h atrás</time>
            </div>


            <button onClick={handleDeleteComment} title='Remover comentário'>
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content}</p>
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