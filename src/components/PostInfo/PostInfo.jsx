/* eslint-disable indent */
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div key={post.id} className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {usersFromServer
          .filter(user => user.id === post.userId)
          .map(user => (
            <UserInfo user={user} />
          ))}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {commentsFromServer.filter(coment => coment.postId === post.id).length >
    0 ? (
      <CommentList post={post} />
    ) : null}
  </div>
);
