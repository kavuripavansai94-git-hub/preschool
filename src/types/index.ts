export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Program = {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
};

export type TimelineItem = {
  time: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type Testimonial = {
  name: string;
  childInfo: string;
  review: string;
  rating: number;
  initials: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type AdmissionsStep = {
  step: number;
  title: string;
  description: string;
};

export type SchoolInfo = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  hours?: string;
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    youtube?: string;
  };
};
