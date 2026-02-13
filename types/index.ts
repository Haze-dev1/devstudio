export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
  borderColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  description: string;
  techUsed: string[];
  emoji: string;
  stickyColor: string;
}

export interface MainQuestExperience {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  duration: string;
  impactPoints: string[];
  techStack: string[];
  emoji: string;
  stickyColor: string;
}

export interface GuildActivity {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  description: string;
  emoji: string;
  impactMetric?: string;
  stickyColor: string;
}

export interface DevSighting {
  id: string;
  eventName: string;
  emoji: string;
  takeaway: string;
  reflection: string;
  stickyColor: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  category: "award" | "milestone" | "community" | "learning" | "fun";
  stickyColor: string;
}
