import { useState } from 'react'
import Search from '../components/search'
import { Card, CardHeader, CardTitle } from '../components/ui/card'
import { galleryData } from '../db/gallery'
import type { GalleryItem } from '../db/gallery'
import { X, Star, Users } from 'lucide-react'
import { GalleryModal } from '../components/GalleryModal'
import { ImageSkeleton } from '../components/skeleton/ImageSkeleton'

// Composant Skeleton pour le chargement


// Composant Skeleton pour les images de la collection


// Composant pour une carte avec image et skeleton
const ImageCard = ({ image }: { image: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  return (
      <picture className='h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden relative flex items-center justify-center rounded-lg'>
        {isLoading && <ImageSkeleton />}
        {!imageError ? (
          <img 
            src={image} 
            alt={`Image `}
            className={`w-full h-full rounded-lg object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200 rounded-lg">
            Erreur de chargement
          </div>
        )}
      </picture>
  );
};



// Composant d'étoiles moderne


// Composant Modal


export default function Home() {
  const [search, setSearch] = useState("");

  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  
  const filteredGallery = galleryData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <>
        <div className="header min-h-[100vh] p-4 sm:p-6 md:p-8 lg:p-10">
          <header className='pt-40 lg:pt-0'>
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-[4rem] mt-8 sm:mt-12 md:mt-15 text-gray-800 font-extrabold text-center px-4">
                Explorez notre <em className="text-white">galerie</em> <br className="hidden sm:block" /> de collections exceptionnelles
            </h1>

            <Search value={search} onChange={setSearch} />
          </header>

          {
          filteredGallery.length !== 0 ?
              <section className='max-w-7xl m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6'>
                {filteredGallery.map( data => (
                  <Card 
                    key={data.id} 
                    className='p-3 sm:p-4 cursor-pointer hover:shadow-lg transition-shadow'
                    onClick={() => handleCardClick(data)}
                  >
                    <ImageCard image={data.image} />
                    <CardHeader>
                      <CardTitle className="text-sm sm:text-base">
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))} 
              </section>
          :
            <div className='my-20 text-center text-white text-4xl'>
              Aucun donnée trouvée!!!
            </div>
          }
        </div>

        {/* Modal */}
        <GalleryModal 
          gallery={selectedGallery}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
    </>
  )
}
