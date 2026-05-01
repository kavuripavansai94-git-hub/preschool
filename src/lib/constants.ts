import { 
  SchoolInfo, 
  Stat, 
  Program, 
  Feature, 
  TimelineItem, 
  Testimonial, 
  FAQ, 
  AdmissionsStep, 
  NavLink 
} from "../types";

export const SCHOOL_INFO: SchoolInfo = {
  name: "Little Stars Academy",
  tagline: "Where Every Child's Journey Begins ✨",
  address: "123 Sunshine Lane, Jubilee Hills",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500081",
  phone: "+91 98765 43210",
  email: "hello@littlestarsacademy.in",
  hours: "Mon–Sat, 8:00 AM – 2:00 PM",
  socials: {
    instagram: "https://instagram.com/LittleStarsAcademy",
    facebook: "https://facebook.com/LittleStarsAcademy",
    youtube: "https://youtube.com/LittleStarsAcademy",
    whatsapp: "https://wa.me/919876543210",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: 500, label: "Happy Graduates", suffix: "+" },
  { value: 15, label: "Years of Excellence", suffix: "+" },
  { value: 98, label: "Parent Satisfaction", suffix: "%" },
  { value: 20, label: "Expert Educators" },
];

export const FEATURES: Feature[] = [
  {
    icon: "🎨",
    title: "Creative Arts Program",
    description: "Unleashing imagination through painting, music, and theater to build self-expression.",
  },
  {
    icon: "📚",
    title: "Phonics & Early Literacy",
    description: "Building strong foundations in reading and writing using world-class phonics methods.",
  },
  {
    icon: "🌱",
    title: "Nature & Outdoor Play",
    description: "Daily outdoor activities in our lush green garden to foster a love for nature.",
  },
  {
    icon: "🧩",
    title: "STEAM Learning",
    description: "Integrating Science, Tech, Engineering, Arts, and Math in playful explorations.",
  },
  {
    icon: "🍎",
    title: "Healthy Meals Provided",
    description: "Nutritious, child-friendly meals prepared fresh daily in our hygienic kitchen.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure Environment",
    description: "CCTV monitored campus with trained security and child-safe infrastructure.",
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "toddlers",
    title: "Toddlers",
    ageRange: "2–3 yrs",
    description: "A gentle introduction to the world outside home, focusing on sensory play and social skills.",
    features: ["Sensory-based learning", "Potty training support", "Music & movement", "Social interaction"],
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "pre-kg",
    title: "Pre-KG",
    ageRange: "3–4 yrs",
    description: "Fostering independence and curiosity through structured play and early concept building.",
    features: ["Language development", "Basic numeracy", "Fine motor skills", "Group activities"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1372&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    ageRange: "4–6 yrs",
    description: "Preparing children for primary school with advanced literacy, numeracy, and life skills.",
    features: ["Advanced phonics", "Creative writing", "Problem solving", "Confidence building"],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    time: "8:00 AM",
    title: "Arrival & Greeting",
    description: "Children are welcomed with smiles and soft music.",
    color: "#FFD54F",
    icon: "👋",
  },
  {
    time: "8:30 AM",
    title: "Morning Circle",
    description: "Rhymes, prayers, and daily discussion.",
    color: "#FF7043",
    icon: "⭕",
  },
  {
    time: "9:30 AM",
    title: "Learning Session",
    description: "Thematic literacy and numeracy activities.",
    color: "#42A5F5",
    icon: "📝",
  },
  {
    time: "10:30 AM",
    title: "Snack Time",
    description: "Nutritious break with supervised handwashing.",
    color: "#66BB6A",
    icon: "🍎",
  },
  {
    time: "11:00 AM",
    title: "Outdoor Play",
    description: "Physical activity in the play area.",
    color: "#FFD54F",
    icon: "🛝",
  },
  {
    time: "12:00 PM",
    title: "Creative Arts",
    description: "Painting, crafts, or music sessions.",
    color: "#FF7043",
    icon: "🎨",
  },
  {
    time: "1:00 PM",
    title: "Story Time",
    description: "Interactive storytelling and calm down period.",
    color: "#42A5F5",
    icon: "📖",
  },
  {
    time: "2:00 PM",
    title: "Pickup",
    description: "Safe dispersal and parent interaction.",
    color: "#66BB6A",
    icon: "🏠",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    childInfo: "Mother of Advait (Pre-KG)",
    rating: 5,
    review: "Little Stars Academy has been a blessing for Advait. He used to be shy, but now he's so confident and loves going to school every day!",
    initials: "PS",
  },
  {
    name: "Rahul Reddy",
    childInfo: "Father of Ananya (Kindergarten)",
    rating: 5,
    review: "The curriculum is fantastic. Ananya has picked up reading so quickly. The teachers are incredibly caring and professional.",
    initials: "RR",
  },
  {
    name: "Sneha Kapoor",
    childInfo: "Mother of Kabir (Toddlers)",
    rating: 5,
    review: "The safety standards and the clean environment give me peace of mind. Kabir enjoys the sensory play sessions immensely.",
    initials: "SK",
  },
  {
    name: "Vikram Malhotra",
    childInfo: "Father of Sia (Kindergarten)",
    rating: 5,
    review: "The best preschool in Jubilee Hills! Their holistic approach to learning truly sets them apart from others.",
    initials: "VM",
  },
  {
    name: "Lakshmi Rao",
    childInfo: "Mother of Arjun (Pre-KG)",
    rating: 5,
    review: "Excellent communication from the school. I love getting updates about Arjun's progress and the healthy meals are a plus!",
    initials: "LR",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What age groups do you accept?",
    answer: "We accept children from 2 years (Toddlers) up to 6 years (Kindergarten).",
  },
  {
    question: "What are your operating hours?",
    answer: "Our school hours are Monday to Saturday, 8:00 AM to 2:00 PM.",
  },
  {
    question: "Do you provide transportation?",
    answer: "Yes, we provide safe, GPS-tracked transportation within a 5km radius of Jubilee Hills.",
  },
  {
    question: "What is your teacher-to-child ratio?",
    answer: "We maintain a low ratio of 1:10 for Toddlers and 1:15 for Pre-KG and Kindergarten to ensure individual attention.",
  },
  {
    question: "How do you handle allergies and nutrition?",
    answer: "We maintain detailed health records for every child and our kitchen is strictly nut-free and hygienic.",
  },
  {
    question: "What curriculum do you follow?",
    answer: "We follow an integrated Play-way and Montessori-based curriculum focused on holistic development.",
  },
  {
    question: "Are after-school programs available?",
    answer: "Yes, we offer daycare and hobby classes (Music, Dance, Chess) until 5:00 PM.",
  },
  {
    question: "How do I begin the enrollment process?",
    answer: "You can start by filling out the inquiry form on our website or booking a tour to visit our campus.",
  },
];

export const ADMISSIONS_STEPS: AdmissionsStep[] = [
  {
    step: 1,
    title: "Fill Inquiry Form",
    description: "Provide basic details about your child and your program of interest.",
  },
  {
    step: 2,
    title: "Schedule a Tour",
    description: "Visit our campus to see our facilities and meet our expert educators.",
  },
  {
    step: 3,
    title: "Application & Documents",
    description: "Submit the enrollment form along with necessary medical and birth records.",
  },
  {
    step: 4,
    title: "Welcome to Little Stars!",
    description: "Once approved, receive your welcome kit and join our growing family.",
  },
];
