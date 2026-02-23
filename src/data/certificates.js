import stc from "../assets/images/stc.png";
import albeda from "../assets/images/albeda.png";
import tcr from "../assets/images/tcr.jpg"; // Voeg het nieuwe plaatje toe aan assets

export const certificates = [
  {
    id: "stc-diploma",
    title: "STC Diploma",
    school: "Scheepvaart en Transport College",
    year: "2018",
    image: stc,
    description: "Diploma behaald in scheepvaarttechniek met focus op navigatie en veiligheid.",
    type: "VMBO",
    duration: "4 jaar",
    link: "https://example.com/stc-diploma"
  },
  {
    id: "albeda-diploma",
    title: "Albeda Sportcollege Diploma",
    school: "Albeda Sportcollege",
    year: "2022",
    image: albeda,
    description: "Diploma sport en beweging, met extra cursussen in coaching en EHBO.",
    type: "MBO",
    duration: "2 jaar",
    link: "https://example.com/albeda-diploma"
  },
  {
    id: "tcr-diploma",
    title: "Techniek College Rotterdam Diploma",
    school: "Techniek College Rotterdam",
    year: "2025",
    image: tcr, // Zorg dat dit plaatje bestaat in je assets
    description: "Diploma behaald in techniek en industriële processen, met focus op praktijk en innovatie.",
    type: "MBO",
    duration: "2 jaar",
    link: "https://example.com/tcr-diploma"
  },
];
