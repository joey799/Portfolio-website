import p1 from "../assets/images/p1.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";

export const projects = [
  {
    id: 1,
    title: "Vampire Escape Room",
    description:
      "Een interactieve vampieren-escape room ontwikkeld met HTML, CSS, JavaScript en PHP.",
    image: p1,
    details:
      "Dit project was een schoolopdracht waarbij ik een volledige interactieve vampieren-escape room heb gebouwd. De game bevat meerdere uitdagende puzzels, een spannend verhaal en dynamische interactieve elementen. PHP werd gebruikt voor de server-side logica en sessiebeheer, terwijl JavaScript zorgde voor de real-time interacties en animaties.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/jouwusername/vampire-escape",
    role: "Frontend & Backend Developer",
    duration: "2 weken",
  },

  {
    id: 3,
    title: "Webshop Project",
    description:
      "Een platform waar gebruikers tweedehands kleding en accessoires kunnen kopen en verkopen.",
    image: p3,
    details:
      "Een volledig functioneel webshop-platform voor tweedehands kleding en accessoires. Gebruikers kunnen producten bekijken, filteren op categorie en toevoegen aan een winkelwagen. Het platform beschikt over een responsive design dat optimaal werkt op zowel desktop als mobiel, en een intuïtieve gebruikersinterface gebouwd met React en Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    role: "Fullstack Developer",
    duration: "2 weken",
  },

  {
    id: 4,
    title: "Bugs Fixes en Verbeteringen",
    description:
      "Een websiteproject gericht op het opsporen en oplossen van bugs en het doorvoeren van verbeteringen om de functionaliteit en gebruikerservaring te optimaliseren.",
    image: p4,
    details:
      "Bugs project gericht op het systematisch opsporen, analyseren en oplossen van bugs binnen een bestaande webapplicatie. Naast bugfixes zijn er ook structurele verbeteringen doorgevoerd op het gebied van performance, toegankelijkheid en codestructuur. Dit project heeft mijn analytisch denkvermogen en debuggingvaardigheden sterk verbeterd.",
    technologies: ["React", "CSS", "JavaScript"],
    role: "Backend Developer",
    duration: "2 weken",
  },

  {
    id: 5,
    title: "Boter kaas en eieren",
    description:
      "Een interactieve Boter, Kaas en Eieren-website waarin gebruikers tegen elkaar kunnen spelen, met een eenvoudige en gebruiksvriendelijke interface.",
    image: p5,
    details:
      "Een interactieve Boter, Kaas en Eieren-website waarmee twee spelers tegen elkaar kunnen spelen op hetzelfde apparaat. De game bevat een scorebord, een herstarfunctie en vloeiende animaties voor een prettige gebruikerservaring. Gebouwd met Electron.js, waardoor de applicatie ook als desktopapp kan draaien.",
    technologies: ["Electron.js", "CSS", "JavaScript"],
    role: "Frontend Developer",
    duration: "1 week",
  },

  {
    id: 6,
    title: "Fitness-app",
    description:
      "Een interactieve Fitness-app waarin gebruikers trainingsschema's kunnen bekijken en bijhouden, met een overzichtelijk design en gebruiksvriendelijke interface.",
    image: p6,
    details:
      "Een uitgebreide fitness-app waarmee gebruikers persoonlijke trainingsschema's kunnen bekijken, aanmaken en bijhouden. De app biedt een overzichtelijk dashboard met voortgangsindicatoren en is volledig responsive voor gebruik op verschillende apparaten. React werd ingezet voor een snelle en dynamische gebruikerservaring.",
    technologies: ["React", "CSS", "JavaScript"],
    role: "Fullstack Developer",
    duration: "1 week",
  },
];