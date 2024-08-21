import { nanoid } from "nanoid";
import { FaComputer } from "react-icons/fa6";

export const links = [
  { id: nanoid(), href: "#", text: "Home" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#mission", text: "Mission" },
  { id: nanoid(), href: "#responsibilities", text: "Responsibilities" },
  { id: nanoid(), href: "#timeline", text: "Timeline" },
  { id: nanoid(), href: "#members", text: "Members" },
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
