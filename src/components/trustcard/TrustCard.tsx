import { FC } from "react";
import { RatingStats } from "../ratingstats/RatingStats";
import { Rating } from "../ui/rating/Rating";
import "./TrustCard.scss";

interface TrustCardProps {
  site: string;
  store: string;
  rating: number;
  percent: number;
}

export const TrustCard: FC<TrustCardProps> = ({
  site,
  store,
  rating,
  percent,
}) => {
  return (
    <div className="trust-card">
      <div className="trust-card__site">{site}</div>
      <div className="trust-card__store">{store}</div>
      <RatingStats percent={percent} rating={rating} size={"sm"} />
    </div>
  );
};
