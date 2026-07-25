/** Real photo for each priority content cluster — falls back to the generated banner when absent. */
export const CLUSTER_PHOTO: Record<
  string,
  { src: string; alt: string; credit?: string }
> = {
  "renter-friendly-storage": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wardrobe_%28Unsplash%29.jpg/1920px-Wardrobe_%28Unsplash%29.jpg",
    alt: "Clothes and a belt neatly hung on a rack against a bare wall",
  },
  "studio-and-small-apartment": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NY_loft_bedroom_%28Unsplash%29.jpg/1920px-NY_loft_bedroom_%28Unsplash%29.jpg",
    alt: "Compact studio apartment bedroom with a small desk workspace tucked in the corner",
  },
  "moving-and-setup": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ships_out_today_%28Unsplash%29.jpg/1920px-Ships_out_today_%28Unsplash%29.jpg",
    alt: "Person taping up a cardboard moving box on a table surrounded by packing supplies",
  },
};
