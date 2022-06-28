import './style/postList.css';

function PostCard(props){
    return(
        <>
            <li>
                <a href="post-view.html" className="post">
                    <article>
                        <img src={props.img} alt="" />
                        <div className="contents-wrap">
                            <dl className="category">
                                <dt className="a11y-hidden">Category</dt>
                                <dd>Life</dd>
                                <dd>Style</dd>
                            </dl>

                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                            <dl className="author-wrap">
                                <dt className="a11y-hidden">Author</dt>
                                <dd className="author"><img src="../../../assets/profile.jpg" alt="" /> Chilli</dd>
                                <dt className="a11y-hidden">Created</dt>
                                <dd className="created">2022.05.25</dd>
                            </dl>

                            <p className="post-description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. 
                            </p>
                        </div>
                    </article>
                </a>
            </li>
        </>
    )
}

export default function PostList(){
    return (
        <>
            <h2 className="a11y-hidden">Post</h2>
            <ul className="posts">
                <PostCard img={'../../../assets/post-img6.jpg'}/>
                <PostCard img={'../../../assets/post-img5.jpg'}/>
                <PostCard img={'../../../assets/post-img4.jpg'}/>
                <PostCard img={'../../../assets/post-img3.jpg'}/>
                <PostCard img={'../../../assets/post-img2.jpg'}/>
                <PostCard img={'../../../assets/post-img1.jpg'}/>
			</ul>
        </>
    )
}