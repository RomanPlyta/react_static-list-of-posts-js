import postsFromServer from '../../api/posts.json';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = () => (
  <div className="PostList">
    {postsFromServer.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
