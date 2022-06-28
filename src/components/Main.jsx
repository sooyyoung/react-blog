import About from './About'
import PostList from './PostList'
import './style/main.css'

export default function Main(){
    return (
        <>
            <main>
                <div className='max-width'>
                    <PostList />
                    <About />
                </div>
            </main>
        </>
    )
}