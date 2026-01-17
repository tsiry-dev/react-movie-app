export const CollectionImageSkeleton = () => {
    return (
      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-200 rounded-lg animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    );
  };