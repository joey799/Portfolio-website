// let op: afbeeldingen importeren als ze in src/assets/images staan
import IntellectualImg from "../assets/images/Rectangle.png";
import CreativeImg from "../assets/images/image14.png";
import PhysicalImg from "../assets/images/lebron.png";

export const interests = [
  {
    category: "Intellectual",
    color: "bg-blue-500",
    items: ["Reading", "Coding", "Philosophy"],
    image: IntellectualImg,
  },
  {
    category: "Creative",
    color: "bg-pink-500",
    items: ["Music", "Painting", "Webdesign"],
    image: CreativeImg,
  },
  {
    category: "Physical",
    color: "bg-green-500",
    items: ["Gym", "Basketball", "Football"],
    image: PhysicalImg,
  },
];
