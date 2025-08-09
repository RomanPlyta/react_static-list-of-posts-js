import commentsFromServer from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <div className="CommentList">
    {commentsFromServer
      .filter(coment => coment.postId === post.id)
      .map(coment => (
        <CommentInfo coment={coment} />
      ))}
  </div>
);
