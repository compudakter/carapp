import { FC, useState } from "react";
import { getBlockClass } from "../../../utils/utils";

import "./Rating.scss";

interface RatingProps {
  blockName?: string;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating: FC<RatingProps> = ({ rating, setRating, blockName }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const changeHoveredStarHandler = (idx: number | null) => {
    if (setRating) {
      setHoveredStar(idx);
    }
  };
  const getActiveStarCount = () => {
    if (hoveredStar === null) {
      return rating ? Math.floor(rating) : 0;
    } else {
      return Math.floor(hoveredStar);
    }
  };

  const activeStarCount = getActiveStarCount();
  const isRatingEditable = !!setRating;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isActive = activeStarCount > i;
      stars.push(
        <StarButton
          setHovered={changeHoveredStarHandler}
          setRating={setRating}
          editable={isRatingEditable}
          idx={i}
          blockName="rating"
          active={isActive}
        />
      );
    }
    return stars;
  };
  const blockClass = getBlockClass("rating", blockName);
  return <div className={`${blockClass} rating`}>{renderStars()}</div>;
};

interface StarButtonProps {
  active?: boolean;
  editable?: boolean;
  blockName?: string;
  idx: number;
  setHovered: (idx: number | null) => void;
  setRating?: (rating: number) => void;
}

const StarButton: FC<StarButtonProps> = ({
  active,
  editable,
  idx,
  setHovered,
  blockName,
  setRating,
}) => {
  const blockClass = getBlockClass("star-button", blockName);
  const activeClass = active ? "star-button_active" : "";
  const editableClass = editable ? "star-button_editable" : "";

  const changeRatingHandler = () => {
    if (setRating) {
      setRating(idx + 1);
    }
  };
  return (
    <svg
      onClick={changeRatingHandler}
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
      className={`${blockClass} star-button ${activeClass} ${editableClass}`}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.54894 0.927049C6.8483 0.00573789 8.1517 0.00574044 8.45106 0.927051L9.40837 3.87336C9.54224 4.28538 9.9262 4.56434 10.3594 4.56434H13.4574C14.4261 4.56434 14.8289 5.80395 14.0451 6.37336L11.5389 8.19427C11.1884 8.44892 11.0417 8.90028 11.1756 9.31231L12.1329 12.2586C12.4323 13.1799 11.3778 13.946 10.5941 13.3766L8.08778 11.5557C7.7373 11.3011 7.2627 11.3011 6.91221 11.5557L4.40594 13.3766C3.62222 13.946 2.56774 13.1799 2.8671 12.2586L3.82441 9.3123C3.95828 8.90028 3.81162 8.44892 3.46114 8.19427L0.954859 6.37335C0.171145 5.80395 0.573923 4.56434 1.54265 4.56434H4.64058C5.0738 4.56434 5.45776 4.28538 5.59163 3.87336L6.54894 0.927049Z"
        fill="#E1E1E1"
      />
    </svg>
  );
};
