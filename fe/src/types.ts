/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "en" | "vi";

export type NavTab = "home" | "solutions" | "about" | "services";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Milestone {
  year: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
}

export interface CaseStudy {
  client: string;
  title: string;
  titleVi: string;
  metric: string;
  metricVi: string;
  tag: string;
  tagVi: string;
}

export interface SolutionOption {
  id: string;
  name: string;
  nameVi: string;
  basePrice: number;
  multiplier: number;
  recommendedStack: string[];
}
