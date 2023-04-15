import React, { useEffect, useState } from 'react';
import styles from './postspage.module.css';
import Post from '../../components/Post/Post';
import postService from '../../services/posts';

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    postService.get().then(res => setPosts(res.data))
  }, [])
   
  return (
    <section className={styles.posts}>
      {
        posts.map(post => {    
          return (
            <Post
              key={post._id}
              img={post.img}
              title={post.title}
              descr={post.descr}
              date={post.createdAt}
              id={post._id}
            />
          )
        })
      }
    </section>
  );
};

export default PostsPage;
