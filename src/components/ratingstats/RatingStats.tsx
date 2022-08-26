import { FC } from "react";
import { Rating } from "../ui/rating/Rating";
import "./RatingStats.scss";
type RatingStatsSize = "sm" | "lg";

interface RatingStatsProps {
  rating: number;
  percent: number;
  size: RatingStatsSize;
}

export const RatingStats: FC<RatingStatsProps> = ({
  rating,
  percent,
  size,
}) => {
  return (
    <div className="rating-stats">
      <div className="rating-stats__wrapper">
        <div className="rating-stats__recommend">
          <span className="rating-stats__recommend-text">Рекомендуют</span>
          <span className="rating-stats__recommend-value">{percent}%</span>
        </div>
        <Rating blockName="rating-stats" rating={rating} />
      </div>
      <div className="rating-stats__value">{rating}</div>
    </div>
  );
};
