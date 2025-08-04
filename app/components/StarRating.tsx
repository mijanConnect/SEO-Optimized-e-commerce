import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          fill="currentColor"
          stroke="none"
          className="w-5 h-5"
        />
      ))}
      {hasHalf && (
        <StarHalf fill="currentColor" stroke="none" className="w-5 h-5" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          fill="currentColor"
          stroke="none"
          className="w-5 h-5 text-gray-300"
        />
      ))}
    </div>
  );
}
