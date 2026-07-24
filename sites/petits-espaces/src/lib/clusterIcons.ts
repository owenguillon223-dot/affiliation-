import type { ClusterIconLayout } from "@/components/ClusterIcon";

/** Maps the 3 highest-priority content clusters to a ClusterIcon layout. */
export const CLUSTER_ICON_LAYOUT: Record<string, ClusterIconLayout> = {
  "renter-friendly-storage": "a",
  "studio-and-small-apartment": "b",
  "moving-and-setup": "c",
};
