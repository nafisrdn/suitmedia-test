import { Link } from "react-router-dom";
import { getMonthName } from "../../utils/date-utils";
import { Post, Thumbnail, Main, DateText, Title } from "./PostItem.style";

const PostItem = ({ title, image, date }) => {
  //   console.log({ title, image, date });

  const dateTime = new Date(date);
  const dateDay = dateTime.getDay();
  const dateMonth = getMonthName(dateTime.getMonth());
  const dateYear = dateTime.getFullYear();


  return (
    <div className="col-3 mb-5 px-4">
      <Post className="text-condensed">
        <Link to="/">
          <Thumbnail style={{ backgroundImage: `url(${image})` }} />
          <Main className="p-4">
            <DateText className="text-xs">
              {dateDay} {dateMonth} {dateYear}
            </DateText>
            <Title>{title}</Title>
          </Main>
        </Link>
      </Post>
    </div>
  );
};

export default PostItem;
