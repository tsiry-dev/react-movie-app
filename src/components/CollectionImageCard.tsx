import { useState } from "react";
import { CollectionImageSkeleton } from "./skeleton/CollectionImageSkeleton";

// Composant pour une image de collection avec loader
export const CollectionImageCard = ({ image, alt }: { image: string; alt: string }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [imageError, setImageError] = useState<boolean>(false);
  
    return (
      <div className="relative group">
        {isLoading && <CollectionImageSkeleton />}
        {!imageError ? (
          <img 
            src={image} 
            alt={alt}
            className={`w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg transition-all duration-300 shadow-md ${
              isLoading ? 'opacity-0 absolute' : 'opacity-100 group-hover:scale-105'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-40 sm:h-44 md:h-48 flex items-center justify-center text-gray-400 bg-gray-100 rounded-lg text-xs sm:text-sm">
            Erreur
          </div>
        )}
      </div>
    );
  };