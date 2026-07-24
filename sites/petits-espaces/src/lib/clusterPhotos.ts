/** Real photo for each priority content cluster — falls back to the generated banner when absent. */
export const CLUSTER_PHOTO: Record<
  string,
  { src: string; alt: string; credit?: string }
> = {
  "renter-friendly-storage": {
    src: "/photos/renter-friendly-storage.jpg",
    alt: "Clothes and a belt neatly hung on a rack against a bare wall",
  },
  "studio-and-small-apartment": {
    src: "/photos/studio-and-small-apartment.jpg",
    alt: "Compact studio apartment bedroom with a small desk workspace tucked in the corner",
  },
  "moving-and-setup": {
    src: "/photos/moving-and-setup.jpg",
    alt: "Person taping up a cardboard moving box on a table surrounded by packing supplies",
  },
};
