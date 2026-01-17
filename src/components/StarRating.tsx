import { Star } from "lucide-react";

export const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-200 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm'
                : 'text-gray-300 fill-gray-200'
            }`}
            style={{
              filter: star <= rating ? 'drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3))' : 'none'
            }}
          />
        ))}
        <span className="ml-2 text-base sm:text-lg font-bold text-gray-700">
          {rating}.0
        </span>
      </div>
    );
  };