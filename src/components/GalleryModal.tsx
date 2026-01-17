import type { GalleryItem } from '../db/gallery'
import { X, Star, Users } from 'lucide-react'
import { StarRating } from './StarRating';
import { CollectionImageCard } from './CollectionImageCard';


export const GalleryModal = ({ 
    gallery, 
    isOpen, 
    onClose 
  }: { 
    gallery: GalleryItem | null; 
    isOpen: boolean; 
    onClose: () => void 
  }) => {
    if (!isOpen || !gallery) return null;
  
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="max-w-7xl w-full mx-2 sm:mx-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header avec bouton fermer */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b bg-white">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 pr-2">{gallery.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
  
          {/* Contenu en deux colonnes comme un livre ouvert */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            {/* Div gauche : Image principale et description */}
            <div className="w-full lg:w-1/2 lg:border-r border-gray-200 overflow-y-auto bg-gray-50 modal-scrollbar">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Image principale */}
                <div>
                  <img 
                    src={gallery.image} 
                    alt={gallery.title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
  
                {/* Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Description</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{gallery.description}</p>
                </div>
  
                {/* Stats */}
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Note
                    </span>
                    <StarRating rating={gallery.stars} />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-gray-500 block">Visiteurs</span>
                      <span className="text-base sm:text-lg font-bold text-gray-800">
                        {gallery.visitors.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Div droite : Collection d'images */}
            <div className="w-full lg:w-1/2 overflow-y-auto bg-white modal-scrollbar border-t lg:border-t-0 border-gray-200">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                  Collection d'images ({gallery.collectionImage.length} photos)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {gallery.collectionImage.map((img, index) => (
                    <CollectionImageCard
                      key={index}
                      image={img}
                      alt={`${gallery.title} - Vue ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };