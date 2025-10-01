export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "hero-background",
    description: "A vast nebula in space, used as the hero background.",
    imageUrl: "/images/photo-1726422904459-4c95695e75f4.jpg",
    imageHint: "space nebula"
  },
  {
    id: "about-us-image",
    description: "A team of engineers collaborating on a project.",
    imageUrl: "/images/photo-1581092459682-ccfffd6ddc37.jpg",
    imageHint: "engineers meeting"
  }
];
