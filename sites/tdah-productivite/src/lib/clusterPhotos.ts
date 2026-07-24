/** Real photo for each priority content cluster — falls back to the generated banner when absent. */
export const CLUSTER_PHOTO: Record<
  string,
  { src: string; alt: string; credit?: string }
> = {
  "morning-routines": {
    src: "/photos/morning-routines.jpg",
    alt: "Woman smiling and holding a cup of coffee at her desk during a cozy morning work session",
    credit: "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
  },
  "task-management": {
    src: "/photos/task-management.jpg",
    alt: "Overhead view of a person writing in a paper planner with sticky notes, holding a coffee",
    credit: "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
  },
  "tools-and-planners": {
    src: "/photos/tools-and-planners.jpg",
    alt: "Desk flat lay with a computer, tablet, keyboard and phone neatly arranged",
  },
};
