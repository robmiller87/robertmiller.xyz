// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://robertmillerconsultancy.com",
  author: "Robert Miller",
  profile: "https://robertmillerconsultancy.com/about",
  desc: "Notes on technology, markets, and human systems — plus the occasional field report from real life.",
  title: "Robert Miller",
  ogImage: "robert-avatar.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Paris",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://x.com/rob_miller87",
    label: "Twitter", // icon maps to twitter
  },
  {
    href: "https://www.linkedin.com/in/rm16/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/robmiller87",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/je_suis_robert_miller/",
    label: "Instagram",
  },
  {
    href: "https://t.me/robmiller",
    label: "Telegram",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  LinkedIn: "linkedin",
  Instagram: "instagram",
  Telegram: "telegram",
  RSS: "rss",
  Email: "mail",
};
