import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const StarEmptyCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill color="white" size={10} key={"star-fill-" + i} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf color="white" size={10} key="star-half-1" />);
  }
  for (let i = 1; i <= StarEmptyCount; i++) {
    starList.push(
      <StarEmpty color="white" size={10} key={"star-empty-" + i} />
    );
  }

  return <div>{starList}</div>;
}
