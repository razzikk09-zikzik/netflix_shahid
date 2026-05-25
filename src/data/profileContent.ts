export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

const RESUME_LINK =
  'https://drive.google.com/file/d/1_nxX5ui3DmKEyZ3ywYwMWdQmq24ezWNS/view?usp=sharing';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/mohamed-shahid-53562a309/';

export interface ProfileBannerContent {
  headline: string;
  tagline: string;
  profileSummary: string;
  footerLine: string;
  resumeLink: string;
  linkedinLink: string;
}

export const profileBannerContent: Record<ProfileType, ProfileBannerContent> = {
  recruiter: {
    headline: 'S. Mohamed Shahid – Software Engineer & Full-Stack Developer',
    tagline: 'Full-Stack Developer | IoT Innovator | ML Enthusiast',
    profileSummary:
      'Final-year B.Tech (ECE) graduate with hands-on experience in full-stack web development, embedded systems, IoT, and machine learning. Delivered award-winning projects including a ₹10 Lakhs GENESIS grant-winning IoT solution. Proficient in Python, JavaScript, and hardware-software integration; seeking a Software Engineer role to build impactful, scalable applications.',
    footerLine: 'Building intelligent systems with software + hardware integration.',
    resumeLink: RESUME_LINK,
    linkedinLink: LINKEDIN_LINK,
  },
  developer: {
    headline: 'S. Mohamed Shahid – Software Engineer & Full-Stack Developer',
    tagline: 'Full-Stack Developer | IoT Innovator | ML Enthusiast',
    profileSummary:
      'Final-year B.Tech (ECE) graduate with hands-on experience in full-stack web development, embedded systems, IoT, and machine learning.',
    footerLine: 'Building intelligent systems with software + hardware integration.',
    resumeLink: RESUME_LINK,
    linkedinLink: LINKEDIN_LINK,
  },
  stalker: {
    headline: 'S. Mohamed Shahid – Software Engineer & Full-Stack Developer',
    tagline: 'Full-Stack Developer | IoT Innovator | ML Enthusiast',
    profileSummary:
      'Final-year B.Tech (ECE) graduate with hands-on experience in full-stack web development, embedded systems, IoT, and machine learning.',
    footerLine: 'Building intelligent systems with software + hardware integration.',
    resumeLink: RESUME_LINK,
    linkedinLink: LINKEDIN_LINK,
  },
  adventure: {
    headline: 'S. Mohamed Shahid – Software Engineer & Full-Stack Developer',
    tagline: 'Full-Stack Developer | IoT Innovator | ML Enthusiast',
    profileSummary:
      'Final-year B.Tech (ECE) graduate with hands-on experience in full-stack web development, embedded systems, IoT, and machine learning.',
    footerLine: 'Building intelligent systems with software + hardware integration.',
    resumeLink: 'https://drive.google.com/file/d/1o1emjCUQ5AOyb1X6WQRN6tkS6P03C8g8/view?usp=sharing',
    linkedinLink: LINKEDIN_LINK,
  },
};
