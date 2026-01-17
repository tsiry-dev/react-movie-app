// Interface pour les données de galerie
export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  stars: number; // Note de 1 à 5 étoiles
  visitors: number; // Nombre de visiteurs
  collectionImage: string[]; // Tableau d'images du même endroit sous différents angles (4 ou 6 images)
}

// Base de données de galerie avec 20 images
export const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/gallery-1/400/600",
    title: "Paysage Montagneux",
    description: "Une vue spectaculaire sur les montagnes enneigées au coucher du soleil, offrant un panorama à couper le souffle.",
    stars: 5,
    visitors: 12450,
    collectionImage: [
      "https://picsum.photos/seed/gallery-1-angle1/400/600",
      "https://picsum.photos/seed/gallery-1-angle2/400/600",
      "https://picsum.photos/seed/gallery-1-angle3/400/600",
      "https://picsum.photos/seed/gallery-1-angle4/400/600",
      "https://picsum.photos/seed/gallery-1-angle5/400/600",
      "https://picsum.photos/seed/gallery-1-angle6/400/600"
    ]
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/gallery-2/400/600",
    title: "Forêt Enchantée",
    description: "Un sentier mystérieux traversant une forêt dense, où la lumière filtre à travers les feuillages.",
    stars: 4,
    visitors: 8920,
    collectionImage: [
      "https://picsum.photos/seed/gallery-2-angle1/400/600",
      "https://picsum.photos/seed/gallery-2-angle2/400/600",
      "https://picsum.photos/seed/gallery-2-angle3/400/600",
      "https://picsum.photos/seed/gallery-2-angle4/400/600"
    ]
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/gallery-3/400/600",
    title: "Plage Paradisiaque",
    description: "Une plage de sable fin avec des eaux turquoise, parfaite pour se détendre et profiter du soleil.",
    stars: 5,
    visitors: 18750,
    collectionImage: [
      "https://picsum.photos/seed/gallery-3-angle1/400/600",
      "https://picsum.photos/seed/gallery-3-angle2/400/600",
      "https://picsum.photos/seed/gallery-3-angle3/400/600",
      "https://picsum.photos/seed/gallery-3-angle4/400/600",
      "https://picsum.photos/seed/gallery-3-angle5/400/600",
      "https://picsum.photos/seed/gallery-3-angle6/400/600"
    ]
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/gallery-4/400/600",
    title: "Ville Moderne",
    description: "Skyline urbain avec des gratte-ciels illuminés, symbole de la vie citadine moderne.",
    stars: 4,
    visitors: 23400,
    collectionImage: [
      "https://picsum.photos/seed/gallery-4-angle1/400/600",
      "https://picsum.photos/seed/gallery-4-angle2/400/600",
      "https://picsum.photos/seed/gallery-4-angle3/400/600",
      "https://picsum.photos/seed/gallery-4-angle4/400/600"
    ]
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/gallery-5/400/600",
    title: "Fleurs Colorées",
    description: "Un jardin rempli de fleurs éclatantes aux couleurs vives, créant un tableau naturel magnifique.",
    stars: 5,
    visitors: 15680,
    collectionImage: [
      "https://picsum.photos/seed/gallery-5-angle1/400/600",
      "https://picsum.photos/seed/gallery-5-angle2/400/600",
      "https://picsum.photos/seed/gallery-5-angle3/400/600",
      "https://picsum.photos/seed/gallery-5-angle4/400/600",
      "https://picsum.photos/seed/gallery-5-angle5/400/600",
      "https://picsum.photos/seed/gallery-5-angle6/400/600"
    ]
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/gallery-6/400/600",
    title: "Désert Infini",
    description: "Les dunes de sable doré s'étendent à perte de vue sous un ciel bleu sans nuages.",
    stars: 4,
    visitors: 11200,
    collectionImage: [
      "https://picsum.photos/seed/gallery-6-angle1/400/600",
      "https://picsum.photos/seed/gallery-6-angle2/400/600",
      "https://picsum.photos/seed/gallery-6-angle3/400/600",
      "https://picsum.photos/seed/gallery-6-angle4/400/600"
    ]
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/gallery-7/400/600",
    title: "Lac Serein",
    description: "Un lac calme reflétant les montagnes environnantes, créant une scène de paix et tranquillité.",
    stars: 5,
    visitors: 14320,
    collectionImage: [
      "https://picsum.photos/seed/gallery-7-angle1/400/600",
      "https://picsum.photos/seed/gallery-7-angle2/400/600",
      "https://picsum.photos/seed/gallery-7-angle3/400/600",
      "https://picsum.photos/seed/gallery-7-angle4/400/600",
      "https://picsum.photos/seed/gallery-7-angle5/400/600",
      "https://picsum.photos/seed/gallery-7-angle6/400/600"
    ]
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/gallery-8/400/600",
    title: "Architecture Antique",
    description: "Un monument historique majestueux témoignant de l'art et de la culture d'une époque révolue.",
    stars: 4,
    visitors: 19800,
    collectionImage: [
      "https://picsum.photos/seed/gallery-8-angle1/400/600",
      "https://picsum.photos/seed/gallery-8-angle2/400/600",
      "https://picsum.photos/seed/gallery-8-angle3/400/600",
      "https://picsum.photos/seed/gallery-8-angle4/400/600"
    ]
  },
  {
    id: 9,
    image: "https://picsum.photos/seed/gallery-9/400/600",
    title: "Cascade Naturelle",
    description: "Une cascade puissante dévalant les rochers, créant une brume rafraîchissante dans l'air.",
    stars: 5,
    visitors: 16750,
    collectionImage: [
      "https://picsum.photos/seed/gallery-9-angle1/400/600",
      "https://picsum.photos/seed/gallery-9-angle2/400/600",
      "https://picsum.photos/seed/gallery-9-angle3/400/600",
      "https://picsum.photos/seed/gallery-9-angle4/400/600",
      "https://picsum.photos/seed/gallery-9-angle5/400/600",
      "https://picsum.photos/seed/gallery-9-angle6/400/600"
    ]
  },
  {
    id: 10,
    image: "https://picsum.photos/seed/gallery-10/400/600",
    title: "Coucher de Soleil",
    description: "Le soleil se couche à l'horizon, peignant le ciel de nuances orange, rose et violet.",
    stars: 5,
    visitors: 22100,
    collectionImage: [
      "https://picsum.photos/seed/gallery-10-angle1/400/600",
      "https://picsum.photos/seed/gallery-10-angle2/400/600",
      "https://picsum.photos/seed/gallery-10-angle3/400/600",
      "https://picsum.photos/seed/gallery-10-angle4/400/600"
    ]
  },
  {
    id: 11,
    image: "https://picsum.photos/seed/gallery-11/400/600",
    title: "Champ de Lavande",
    description: "Des rangées infinies de lavande créant un tapis violet parfumé sous le ciel bleu.",
    stars: 4,
    visitors: 13450,
    collectionImage: [
      "https://picsum.photos/seed/gallery-11-angle1/400/600",
      "https://picsum.photos/seed/gallery-11-angle2/400/600",
      "https://picsum.photos/seed/gallery-11-angle3/400/600",
      "https://picsum.photos/seed/gallery-11-angle4/400/600",
      "https://picsum.photos/seed/gallery-11-angle5/400/600",
      "https://picsum.photos/seed/gallery-11-angle6/400/600"
    ]
  },
  {
    id: 12,
    image: "https://picsum.photos/seed/gallery-12/400/600",
    title: "Village Pittoresque",
    description: "Un petit village charmant avec ses maisons colorées et ses rues pavées, plein de caractère.",
    stars: 4,
    visitors: 9800,
    collectionImage: [
      "https://picsum.photos/seed/gallery-12-angle1/400/600",
      "https://picsum.photos/seed/gallery-12-angle2/400/600",
      "https://picsum.photos/seed/gallery-12-angle3/400/600",
      "https://picsum.photos/seed/gallery-12-angle4/400/600"
    ]
  },
  {
    id: 13,
    image: "https://picsum.photos/seed/gallery-13/400/600",
    title: "Océan Agité",
    description: "Les vagues puissantes de l'océan s'écrasent sur les rochers, montrant la force de la nature.",
    stars: 5,
    visitors: 18900,
    collectionImage: [
      "https://picsum.photos/seed/gallery-13-angle1/400/600",
      "https://picsum.photos/seed/gallery-13-angle2/400/600",
      "https://picsum.photos/seed/gallery-13-angle3/400/600",
      "https://picsum.photos/seed/gallery-13-angle4/400/600",
      "https://picsum.photos/seed/gallery-13-angle5/400/600",
      "https://picsum.photos/seed/gallery-13-angle6/400/600"
    ]
  },
  {
    id: 14,
    image: "https://picsum.photos/seed/gallery-14/400/600",
    title: "Forêt d'Automne",
    description: "Les arbres aux feuilles dorées et rouges créent un paysage automnal féerique.",
    stars: 4,
    visitors: 11250,
    collectionImage: [
      "https://picsum.photos/seed/gallery-14-angle1/400/600",
      "https://picsum.photos/seed/gallery-14-angle2/400/600",
      "https://picsum.photos/seed/gallery-14-angle3/400/600",
      "https://picsum.photos/seed/gallery-14-angle4/400/600"
    ]
  },
  {
    id: 15,
    image: "https://picsum.photos/seed/gallery-15/400/600",
    title: "Pont Suspendu",
    description: "Un pont élégant enjambant une rivière, symbole de connexion et d'architecture moderne.",
    stars: 4,
    visitors: 14500,
    collectionImage: [
      "https://picsum.photos/seed/gallery-15-angle1/400/600",
      "https://picsum.photos/seed/gallery-15-angle2/400/600",
      "https://picsum.photos/seed/gallery-15-angle3/400/600",
      "https://picsum.photos/seed/gallery-15-angle4/400/600",
      "https://picsum.photos/seed/gallery-15-angle5/400/600",
      "https://picsum.photos/seed/gallery-15-angle6/400/600"
    ]
  },
  {
    id: 16,
    image: "https://picsum.photos/seed/gallery-16/400/600",
    title: "Prairie Verte",
    description: "Une vaste prairie verdoyante où paissent tranquillement les animaux, sous un ciel dégagé.",
    stars: 3,
    visitors: 7650,
    collectionImage: [
      "https://picsum.photos/seed/gallery-16-angle1/400/600",
      "https://picsum.photos/seed/gallery-16-angle2/400/600",
      "https://picsum.photos/seed/gallery-16-angle3/400/600",
      "https://picsum.photos/seed/gallery-16-angle4/400/600"
    ]
  },
  {
    id: 17,
    image: "https://picsum.photos/seed/gallery-17/400/600",
    title: "Volcan Actif",
    description: "Un volcan imposant avec sa fumée s'élevant vers le ciel, rappelant la puissance de la Terre.",
    stars: 5,
    visitors: 20300,
    collectionImage: [
      "https://picsum.photos/seed/gallery-17-angle1/400/600",
      "https://picsum.photos/seed/gallery-17-angle2/400/600",
      "https://picsum.photos/seed/gallery-17-angle3/400/600",
      "https://picsum.photos/seed/gallery-17-angle4/400/600",
      "https://picsum.photos/seed/gallery-17-angle5/400/600",
      "https://picsum.photos/seed/gallery-17-angle6/400/600"
    ]
  },
  {
    id: 18,
    image: "https://picsum.photos/seed/gallery-18/400/600",
    title: "Jardin Zen",
    description: "Un jardin japonais soigneusement aménagé, offrant paix et sérénité à ceux qui le contemplent.",
    stars: 5,
    visitors: 17800,
    collectionImage: [
      "https://picsum.photos/seed/gallery-18-angle1/400/600",
      "https://picsum.photos/seed/gallery-18-angle2/400/600",
      "https://picsum.photos/seed/gallery-18-angle3/400/600",
      "https://picsum.photos/seed/gallery-18-angle4/400/600"
    ]
  },
  {
    id: 19,
    image: "https://picsum.photos/seed/gallery-19/400/600",
    title: "Aurore Boréale",
    description: "Les lumières magiques de l'aurore boréale dansent dans le ciel nocturne arctique.",
    stars: 5,
    visitors: 25600,
    collectionImage: [
      "https://picsum.photos/seed/gallery-19-angle1/400/600",
      "https://picsum.photos/seed/gallery-19-angle2/400/600",
      "https://picsum.photos/seed/gallery-19-angle3/400/600",
      "https://picsum.photos/seed/gallery-19-angle4/400/600",
      "https://picsum.photos/seed/gallery-19-angle5/400/600",
      "https://picsum.photos/seed/gallery-19-angle6/400/600"
    ]
  },
  {
    id: 20,
    image: "https://picsum.photos/seed/gallery-20/400/600",
    title: "Rivière Cachée",
    description: "Une rivière sinueuse traversant une forêt dense, créant un chemin d'eau cristalline.",
    stars: 4,
    visitors: 13200,
    collectionImage: [
      "https://picsum.photos/seed/gallery-20-angle1/400/600",
      "https://picsum.photos/seed/gallery-20-angle2/400/600",
      "https://picsum.photos/seed/gallery-20-angle3/400/600",
      "https://picsum.photos/seed/gallery-20-angle4/400/600"
    ]
  }
];
