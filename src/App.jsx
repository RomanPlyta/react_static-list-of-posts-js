import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const preparedPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const postComments = commentsFromServer.filter(c => c.postId === post.id);

  return {
    ...post,
    user,
    comments: postComments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </section>
);
