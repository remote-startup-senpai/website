interface Character {
  title: string;
  description: string;
  imgSrc: string;
  position: string;
}

const projectsData: Character[] = [
  {
    title: "Masahiro Kamiyama (🇯🇵)",
    description: `The eccentric tech lead of the team and self-proclaimed "Remote Startup Senpai"`,
    position: "Full-stack Engineer",
    imgSrc: "/static/characters/hiro.jpg",
  },
  {
    title: "Mayu Maria Ishida (🇯🇵/🇵🇭)",
    description: `A junior backend engineer who looks after everyone as the most level-headed team member`,
    position: "Backend Engineer",
    imgSrc: "/static/characters/mayu.jpg",
  },
  {
    title: "Dan Hawkes (🇬🇧)",
    description: `A super-otaku machine learning engineer who created his own holographic AI waifu and dreams to make her into a real wife`,
    position: "Machine Learning Engineer",
    imgSrc: "/static/characters/dan.jpg",
  },
  {
    title: "Haruto Shimizu (🇯🇵)",
    description: `A hot-headed, self-obsessed, buzzword-loving junior frontend engineer who makes up in confidence what he lacks in skill`,
    position: "Frontend Engineer",
    imgSrc: "/static/characters/haru.jpg",
  },
  {
    title: "Meiko Sumida (🇯🇵)",
    description: `The formidable, terrifying project manager of the team; she commands the room with her unwavering stare and strategic acumen, yet often fumbles in the technical details, creating a mix of awe and frustration among everyone`,
    position: "Project Manager",
    imgSrc: "/static/characters/meiko.jpg",
  },
  {
    title: "Nami",
    description: `Created by Dan, originally the startup's "product" but ended up being the assistant/class-clown/cheerleader after the startup got acquired and pivoted to building "boring corporate apps"`,
    position: "AI Hologram",
    imgSrc: "/static/characters/nami.jpg",
  },
  {
    title: "Hog",
    description: `Some birb that came through the window and now acts as the rubber-duck debugger`,
    position: "Rubber-duck Debugger",
    imgSrc: "/static/characters/hog.jpg",
  },
  {
    title: "Saki Yoshioka (🇯🇵)",
    description: `A part-time data labeller who moonlights as an actress and is Mayu's childhood best friend`,
    position: "Data Labeller",
    imgSrc: "/static/characters/saki.jpg",
  },
];

export default projectsData;
