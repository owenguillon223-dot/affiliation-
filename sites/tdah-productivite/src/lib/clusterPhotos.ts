/** Real photo for each priority content cluster — falls back to the generated banner when absent. */
export const CLUSTER_PHOTO: Record<
  string,
  { src: string; alt: string; credit?: string }
> = {
  "morning-routines": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Enjoying_a_warm_beverage_while_working_at_home_in_a_cozy_environment.jpg/1920px-Enjoying_a_warm_beverage_while_working_at_home_in_a_cozy_environment.jpg",
    alt: "Woman smiling and holding a cup of coffee at her desk during a cozy morning work session",
    credit: "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
  },
  "task-management": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Young_person_writes_notes_in_planner_while_drinking_coffee_from_above.jpg/1920px-Young_person_writes_notes_in_planner_while_drinking_coffee_from_above.jpg",
    alt: "Overhead view of a person writing in a paper planner with sticky notes, holding a coffee",
    credit: "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
  },
  "tools-and-planners": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gadgets_on_a_desk_%28Unsplash%29.jpg/1920px-Gadgets_on_a_desk_%28Unsplash%29.jpg",
    alt: "Desk flat lay with a computer, tablet, keyboard and phone neatly arranged",
  },
};
