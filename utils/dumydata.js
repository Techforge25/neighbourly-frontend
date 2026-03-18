import { FaClockRotateLeft, FaUserGroup, FaUsers } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiHandHeartFill, RiShakeHandsLine } from "react-icons/ri";
import { TbMap } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
export const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/our_story",
    label: "Our Story",
  },
  {
    href: "/discover",
    label: "Discover",
  },
  {
    href: "/getin_touch",
    label: "Get in Touch",
  },
];

export const work_Data = [
  {
    icon: <HiOutlineSearch size={35} />,
    title: "Search yoursuburb",
    text: "Discover local services recommended by people nearby.",
    iconBg: "bg-[#FE9A86]",
    bg: "bg-[#FFEFEA]",
  },
  {
    icon: <PiThumbsUpBold size={35} />,
    title: "See who locals recommend",
    text: "Browse trusted recommendations from neighbours in your area.",
    iconBg: "bg-[#8FA58A]",
    bg: "bg-[#EAF9E7]",
  },
  {
    icon: <RiHandHeartFill size={35} />,
    title: "See who locals recommend",
    text: "Browse trusted recommendations from neighbours in your area.",
    iconBg: "bg-[#718496]",
    bg: "bg-[#E0E7ED]",
  },
];

export const trusted_Data = [
  {
    num: "+2,846",
    text: "Neighbour recommendations",
    textColor: "text-[#8FA58A]",
  },
  {
    num: "+312",
    text: "Local businesses",
    textColor: "text-[#FFFFFF]",
  },
  {
    num: "+3",
    text: "Total suburbs",
    textColor: "text-[#F3B39D]",
  },
];

export const feel_Diff = [
  {
    icon: <FaClockRotateLeft color="#D98C74" size={30} />,
    text: "Recommendations from people nearby, not strangers online.",
    iconBorder: "border-[#D98C74]",
    ib: "bg-[#D98C74]/20",
  },
  {
    icon: <RiShakeHandsLine color="#3A5670" size={30} />,
    text: "A free service designed to help neighbours find trusted local services.",
    iconBorder: "border-[#3A5670]",
    ib: "bg-[#3A5670]/20",
  },
  {
    icon: <FaUsers color="#C167A6" size={30} />,
    text: "Built to connect communities and shine a light on great local businesses.",
    iconBorder: "border-[#C167A6]",
    ib: "bg-[#C167A6]/20",
  },
];

export const our_story_data = [
  "We kept going through the same cycle — searching online, comparing options, second-guessing reviews, and hoping we were making the right call. While we had some disappointing experiences, we also found some brilliant local businesses we still trust and see around the community today.",
  "That made us realise something important: the most valuable recommendations rarely come from anonymous ratings sites. They come from people nearby. Neighbourly was created to bring that kind of local trust online — a free, community-led service that helps people discover trusted local businesses through genuine recommendations from neighbours and nearby households, not paid listings or lead generation.",
];

export const Community_Sec_Data = [
  {
    icon:<TbMap size={24} color="white" />,
    title:"Suburb-first",
    text:"Recommendations shaped by the people, streets and services closest to you.",
    iconBg:"bg-[#FE9A86]"
  },
  {
    icon:<FaUserGroup size={24} color="white" />,
    title:"People nearby",
    text:"Discover local services recommended by neighbours, not strangers online.",
    iconBg:"bg-[#8FA58A]"
  },
  {
    icon:<IoShieldCheckmarkOutline size={24} color="white" />,
    title:"Trusted locally",
    text:"Built on genuine community recommendations that help you choose with confidence.",
    iconBg:"bg-[#3A5670]"
  },
]