export const ImageSkeleton = () => {
    return (
      <div className="h-80 w-full bg-gray-300 rounded-lg animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    );
  };