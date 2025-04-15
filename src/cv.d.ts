export interface Global {
  footer: string
  hotkeypad: {
    placeholder: string
    section_0: string
    title_0: string
    section_1: string
    title_1: string
  },
  sentences_letter: string[]
  sentences_references: string[]
  sentences_hero: string[]
  sentences_projects: string[]
  words: string[]
  about: string
  experience: string
  education: string
  certificates: string
  projects: string
  skills: string
  languages: string
  references: string
  letter: string
}

export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Array<Certificates>;
  publications: Array<Publications>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  country: string;
  region: string;
  language: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
  image?: string;
  file: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
  courses: Array<string>;
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
  email: string;
  phone: string;
}

type Highlight = Array<string>;
