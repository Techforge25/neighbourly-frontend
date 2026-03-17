import { FaClockRotateLeft, FaUsers } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiHandHeartFill, RiShakeHandsLine } from "react-icons/ri";
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
    bg:"bg-[#EAF9E7]"
  },
  {
    icon: <RiHandHeartFill size={35} />,
    title: "See who locals recommend",
    text: "Browse trusted recommendations from neighbours in your area.",
    iconBg: "bg-[#718496]",
    bg: "bg-[#E0E7ED]",
  },
];

export const  trusted_Data = [
    {
        num:"+2,846",
        text:"Neighbour recommendations",
        textColor:"text-[#8FA58A]"
    },
    {
        num:"+312",
        text:"Local businesses",
        textColor:"text-[#FFFFFF]"
    },
    {
        num:"+3",
        text:"Total suburbs",
        textColor:"text-[#F3B39D]"
    },
]

export const feel_Diff=[
    {
        icon:<FaClockRotateLeft color="#D98C74" size={30} />,
        text:"Recommendations from people nearby, not strangers online.",
        iconBorder:'border-[#D98C74]',
        ib:'bg-[#D98C74]/20',

    },
    {
        icon:<RiShakeHandsLine color="#3A5670" size={30} />,
        text:"A free service designed to help neighbours find trusted local services.",
        iconBorder:'border-[#3A5670]',
        ib:'bg-[#3A5670]/20',
    },
    {
        icon:<FaUsers color="#C167A6" size={30} />,
        text:"Built to connect communities and shine a light on great local businesses.",
        iconBorder:'border-[#C167A6]',
        ib:'bg-[#C167A6]/20',
    },
]