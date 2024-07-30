import { nanoid } from "nanoid";
import { FaComputer } from "react-icons/fa6";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#mission", text: "mission" },
  { id: nanoid(), href: "#responsibilities", text: "responsibilities" },
  { id: nanoid(), href: "#timeline", text: "timeline" },
  { id: nanoid(), href: "#members", text: "members" },
];

export const intro = [
  {
    id: nanoid(),
    icon: <FaComputer style={{ height: "5rem", width: "5rem" }} />,
    title: "Tech the World",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt veniam sint a dignissimos voluptates! Animi aut quod, hic ex adipisci voluptatem sequi eaque itaque perferendis in saepe nam qui.",
  },
  {
    id: nanoid(),
    icon: <FaComputer style={{ height: "5rem", width: "5rem" }} />,
    title: "Tech the World",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt veniam sint a dignissimos voluptates! Animi aut quod, hic ex adipisci voluptatem sequi eaque itaque perferendis in saepe nam qui.",
  },
];
