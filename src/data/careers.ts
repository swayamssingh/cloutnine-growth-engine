export type Job = {
  slug: string;
  title: string;
  tags: string[];
  shortDescription: string;
  location: string;
  experience: string;
  startDate: string;
  duration?: string;
  metaTitle: string;
  metaDescription: string;
  applyUrl: string;
  about: string[];
  roleOverview: string[];
  responsibilities: string[];
  requirements: string[];
  preferredSkills: string[];
  whatYouWillLearn: string[];
  whatWeOffer: string[];
  whoShouldApply: string[];
  applicationChecklist: string[];
};

export const JOBS: Job[] = [
  {
    slug: "content-presenter-intern",
    title: "Content Presenter Intern",
    tags: ["Internship", "Mumbai (Remote)", "Entry Level (0–1 Year)", "3 Months (Extendable)"],
    shortDescription:
      "Become the face of CloutNine's educational content. Present engaging videos, build confidence on camera, and gain hands-on experience in digital marketing.",
    location: "Mumbai (Remote)",
    experience: "Entry Level (0–1 Year)",
    startDate: "Immediate",
    duration: "3 Months (Extendable)",
    metaTitle: "Content Presenter Intern | Careers | CloutNine",
    metaDescription:
      "Apply for the Content Presenter Internship at CloutNine. Gain real agency experience while creating educational content and growing your personal skills.",
    applyUrl: "https://forms.gle/LQJBfjk8qY9Hb2YNA",
    about: [
      "CloutNine is a Mumbai-based digital growth agency helping businesses grow through SEO, websites, branding, content marketing, and performance marketing.",
      "We create educational content that simplifies digital marketing for business owners while building our own brand online.",
      "We're looking for someone who enjoys being in front of the camera and wants to become the face of our educational content.",
    ],
    roleOverview: [
      "We're looking for a confident and enthusiastic Content Presenter Intern who is comfortable speaking on camera and can communicate ideas naturally.",
      "You don't need prior marketing experience. We'll provide the topics, content direction, and guidance. Your role is to present engaging short-form videos for our social media platforms.",
      "This is an excellent opportunity for students, fresh graduates, aspiring creators, or anyone looking to build confidence while gaining real agency experience.",
    ],
    responsibilities: [
      "Present educational short-form videos for Instagram and other social media platforms.",
      "Record approximately 3 videos per week.",
      "Understand the content brief before recording.",
      "Deliver videos with confidence, energy, and clarity.",
      "Collaborate with the team during content planning sessions.",
      "Be open to feedback and continuously improve your presentation skills.",
      "Maintain a professional on-camera presence.",
    ],
    requirements: [
      "Entry-level candidates are welcome.",
      "No prior experience required.",
      "Comfortable speaking in front of a camera.",
      "Excellent communication skills.",
      "Fluent in English and Hindi.",
      "Confident and energetic personality.",
      "Reliable and eager to learn.",
      "Ability to explain ideas in a simple and engaging manner.",
    ],
    preferredSkills: [
      "Interest in content creation.",
      "Interest in social media.",
      "Familiarity with Instagram Reels.",
      "Good body language.",
      "Comfortable speaking without relying heavily on scripts.",
    ],
    whatYouWillLearn: [
      "Digital Marketing",
      "SEO Fundamentals",
      "Branding",
      "Content Strategy",
      "Social Media Marketing",
      "Copywriting",
      "AI-assisted Content Creation",
      "Agency Workflows",
      "Personal Branding",
    ],
    whatWeOffer: [
      "Internship Certificate",
      "Letter of Recommendation (Performance Based)",
      "Practical Agency Experience",
      "One-on-one Mentorship",
      "Portfolio-building Opportunities",
      "Potential Full-time Opportunity",
    ],
    whoShouldApply: [
      "Students",
      "Fresh Graduates",
      "Aspiring Content Creators",
      "Individuals looking to improve their confidence on camera",
      "Anyone passionate about communication and digital marketing",
    ],
    applicationChecklist: [
      "Resume (PDF)",
      "30–60 second Introduction Video",
      "LinkedIn Profile (Optional)",
      "Instagram Profile (Optional)",
    ],
  },
];
