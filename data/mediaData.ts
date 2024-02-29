interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "Official Instagram Page",
    description: `Our main content is on Instagram!`,
    imgSrc: "/static/images/instagram.jpg",
    href: "https://instagram.com/remotestartupsenpai",
  },
  {
    title: "Official YouTube Archives",
    description: `We also post on YouTube as an archiving tool.`,
    imgSrc: "/static/images/youtube.png",
    href: "https://youtube.com/@remotestartupsenpai",
  },
  {
    title: "(Old) X.com Archives",
    description: `Mayu's story`,
    imgSrc: "/static/images/x.jpg",
    href: "https://x.com/i/events/1598474389217251328",
  },
  {
    title: "(Old) Pre-acquisition Storyline (Venture)",
    description: `RSS in its incubation stage, formerly named Venture`,
    imgSrc: "/static/images/venture.jpg",
    href: "https://venture-anime.jp/",
  },
];

export default projectsData;
