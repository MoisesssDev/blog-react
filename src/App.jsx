import { Post } from './components/Post'
import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/92608807?v=4',
      name: 'Moisés Almeida',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio.'},
      {type: 'paragraph', content: 'Aqui tá o link: '},
      {type: 'link', content: 'moises.dev/projeto'},
    ],
    publishedAt: new Date('2024-05-29 12:32:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0SyZQL4pUSPzitr6Mqa9WOXfJCcuG6JzDQ&s',
      name: 'João Silva',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio.'},
      {type: 'paragraph', content: 'Aqui tá o link: '},
      {type: 'link', content: 'joaoSilva.dev/projeto'},
    ],
    publishedAt: new Date('2024-05-28 12:32:00')
  }
];

export function App() {

  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
        
      </div>
    </div>
  )
}
