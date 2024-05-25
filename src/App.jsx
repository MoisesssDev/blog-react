import { Post } from './Post'
import { Header } from './components/Header'

export function App() {

  return (
    <div>
      <Header />
  
      <Post 
        author="Paulo Nobre" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores corrupti facere error, placeat eius rem aliquid tenetur quam aperiam quod ipsam cumque consequuntur saepe sapiente expedita, sequi libero? Tempore?" 
      />
    </div>
  )
}
