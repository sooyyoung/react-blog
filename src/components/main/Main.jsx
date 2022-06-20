import About from '../../components/about/About'
import PostList from '../postList/PostList'
import './main.css'

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