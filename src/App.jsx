import { Post } from './Post'
import { Header } from './components/Header'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        
        <main>
          <Post 
            author="João Gomes"
            content= "Um texto muito legal, como primeiro post, aprendendo sobre reactjs." 
          /> 
          <Post 
            author="Fernanda Silva"
            content= "Um texto muito legal, como segundo post, aprendendo sobre reactjs."
          /> 
        </main>
        
      </div>
    </div>
  )
}
