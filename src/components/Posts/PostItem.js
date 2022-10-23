import { Link } from "react-router-dom";
import { Post, Thumbnail, Main, Date, Title } from "./PostItem.style";

const PostItem = ({ title, image, date }) => {
  console.log({ title, image, date });

  return (
    <div className="col-3 mb-5 px-4">
      <Post className="text-condensed">
        <Link to="/">
          <Thumbnail style={{ backgroundImage: `url(${image})` }} />
          <Main className="p-4">
            <Date className="text-xs">{date}</Date>
            <Title>{title}</Title>
          </Main>
        </Link>
      </Post>
    </div>
  );
};

export default PostItem;
