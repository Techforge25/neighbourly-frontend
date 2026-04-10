import {
  FaBookOpenReader,
  FaClockRotateLeft,
  FaUserGroup,
  FaUsers,
} from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiHandHeartFill, RiShakeHandsLine } from "react-icons/ri";
import { TbCurrencyDollarOff, TbMap } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import CustomIcon from "@/components/CustomIcon";
import { MdCreditCardOff } from "react-icons/md";
export const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/our-story",
    label: "Our Story",
  },
  {
    href: "/discover",
    label: "Discover",
  },
  {
    href: "/getin-touch",
    label: "Get in Touch",
  },
];

export const work_Data = [
  {
    icon: <HiOutlineSearch size={35} />,
    title: "Search your suburb",
    text: "Discover local services recommended by people nearby.",
    bg: "bg-primary",
  },
  {
    icon: <PiThumbsUpBold size={35} />,
    title: "Discover who locals trust",
    text: "Browse the people and businesses most recommended in your suburb.",
    bg: "bg-green",
  },
  {
    icon: <RiHandHeartFill size={35} />,
    title: "Share a recommendation",
    text: "Help others discover great local services in your suburb.",
    bg: "bg-secondary",
  },
];

export const trusted_Data = [
  {
    num: `+ 334`,
    text: "Recommendations",
    textColor: "text-[#FFFFFF]",
  },
  {
    num: `+ 3`,
    text: "Suburbs",
    textColor: "text-[#FFFFFF]",
  },
  {
    num: `+ 3`,
    text: "Services",
    textColor: "text-[#FFFFFF]",
  },
];

export const feel_Diff = [
  {
    icon: <FaClockRotateLeft color="#D98C74" size={24} />,
    text: "Recommendations from people nearby, not strangers online.",
    iconBorder: "border-[#D98C74]",
    ib: "bg-[#D98C74]/20",
  },
  {
    icon: <RiShakeHandsLine color="#3A5670" size={24} />,
    text: "A free service designed to help neighbours find trusted local services.",
    iconBorder: "border-[#3A5670]",
    ib: "bg-[#3A5670]/20",
  },
  {
    icon: <FaUsers color="#C167A6" size={24} />,
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
    icon: <TbMap size={24} color="white" />,
    title: "Address-first",
    text: "Recommendations shaped by the people, streets and services closest to you.",
    iconBg: "bg-[#FE9A86]",
  },
  {
    icon: <FaUserGroup size={24} color="white" />,
    title: "People nearby",
    text: "Discover local services recommended by neighbours, not strangers online.",
    iconBg: "bg-[#8FA58A]",
  },
  {
    icon: <IoShieldCheckmarkOutline size={24} color="white" />,
    title: "Trusted locally",
    text: "Built on genuine community recommendations that help you choose with confidence.",
    iconBg: "bg-[#3A5670]",
  },
];

export const Tab_Data = [
  {
    servicetype: "most recommended",
    icon: "",
  },
  {
    title: "Plumbers",
    icon: <CustomIcon variant="fixer" />,
  },
  {
    title: "Electricians",
    icon: <CustomIcon variant="plugh" />,
  },
  {
    title: "Handyman",
    icon: <CustomIcon variant="handyman" />,
  },
];

export const address_Data = [
  {
    isVerified: true,
    verifiedBy: "by Neighbourly",
    name: "Shannon",
    image: "/images/address1.png",
    category: "Plumberss",
    slug: "dave at A to Z plumbing",
    recommendation: "recommended by 5 neighbours",
    res: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    trusted: {
      title: "Trusted across",
      tag: ["curl curl", "freshwater", "manly"],
    },
    mine: {
      image: [
        "/images/address1.png",
        "/images/address1.png",
        "/images/address1.png",
      ],
      data: "Alex in manly + 11 others",
    },
  },
  {
    isVerified: true,
    verifiedBy: "by Neighbourly",
    name: "Shannon",
    image: "/images/address1.png",
    category: "Electricianss",
    slug: "dave at A to Z plumbing",
    recommendation: "recommended by 5 neighbours",
    res: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    trusted: {
      title: "Trusted across",
      tag: ["curl curl", "freshwater", "manly"],
    },
    mine: {
      image: [
        "/images/address1.png",
        "/images/address1.png",
        "/images/address1.png",
      ],
      data: "Alex in manly + 11 others",
    },
  },
  {
    isVerified: true,
    verifiedBy: "by Neighbourly",
    name: "Shannon",
    image: "/images/address1.png",
    category: "handyman",
    slug: "dave at A to Z plumbing",
    recommendation: "recommended by 5 neighbours",
    res: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    trusted: {
      title: "Trusted across",
      tag: ["curl curl", "freshwater", "manly"],
    },
    mine: {
      image: [
        "/images/address1.png",
        "/images/address1.png",
        "/images/address1.png",
      ],
      data: "Alex in manly + 11 others",
    },
  },
];

export const comment = [
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
  {
    image: "/images/sayavatar.png",
    name: "Olivia",
    email: "Olivia@gmail.com",
    phone: "+138474957",
    address: "block 2 away",
    rating: [
      {
        text: "fast response",
        bg: "bg-[#D98C74]/20",
        textColor: "text-[#D98C74]",
      },
      {
        text: "reliable",
        bg: "bg-[#64A256]/20",
        textColor: "text-[#64A256]",
      },
      {
        text: "fair price",
        bg: "bg-[#4D6D8C]/20",
        textColor: "text-[#4D6D8C]",
      },
    ],
    comment:
      "“Expert leak detection and emergency plumbing services available 24/7”",
    date: "2 weeks ago",
  },
];

export const recommendations = [
  {
    location: "Curl Curl",
    serviceType: "Plumbers",
    personName: "Olivia",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasonsOfRecommendation: ["Good quality work", "Reliable", "Fair pricing"],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Rebecca",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasonsOfRecommendation: [
      "Responsive",
      "Local reputation",
      "Easy to deal with",
    ],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Sara",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasonsOfRecommendation: [
      "Local reputation",
      "Good quality work",
      "Easy to deal with",
    ],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Charlotte",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasonsOfRecommendation: [
      "Good quality work",
      "Helpful / went the extra mile",
      "Local reputation",
    ],
    website: "https://www.affordablehotwater.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Liz",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasonsOfRecommendation: [
      "Tidy and respectful",
      "Helpful / went the extra mile",
      "Local reputation",
    ],
    website: "https://www.affordablehotwater.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Brad",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasonsOfRecommendation: [
      "Local reputation",
      "Problem solved properly",
      "Reliable",
    ],
    website: "https://www.affordablehotwater.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Plumbers",
    recommendedBy: "Amelia",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasonsOfRecommendation: ["Reliable", "Good quality work", "Responsive"],
    website: "https://allinplumbing.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Anne-Marie",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasonsOfRecommendation: [
      "Responsive",
      "Helpful / went the extra mile",
      "Reliable",
    ],
    website: "https://allinplumbing.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Isla",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasonsOfRecommendation: [
      "Helpful / went the extra mile",
      "Responsive",
      "Problem solved properly",
    ],
    website: "https://allinplumbing.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Duncan",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasonsOfRecommendation: [
      "Responsive",
      "Tidy and respectful",
      "Fair pricing",
    ],
    website: "https://allinplumbing.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Plumbers",
    recommendedBy: "Nina",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasonsOfRecommendation: [
      "Reliable",
      "Easy to deal with",
      "Problem solved properly",
    ],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Christian",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasonsOfRecommendation: [
      "Trustworthy",
      "Fair pricing",
      "Easy to deal with",
    ],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Joshua",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasonsOfRecommendation: ["Responsive", "Trustworthy", "Good quality work"],
    website: "",
  },
  {
    location: "Freshwater",
    serviceType: "Handyman",
    recommendedBy: "Mia",
    businessName: "AMS Renovations & Maintenance",
    contactPerson: "John",
    phone: "0425 338 894",
    reasonsOfRecommendation: [
      "Good quality work",
      "Problem solved properly",
      "Local reputation",
    ],
    website: "",
  },
  {
    location: "Manly",
    serviceType: "Handyman",
    recommendedBy: "Ava",
    businessName: "Antika Painting & Handyman Services",
    contactPerson: "Mawi",
    phone: "0452 466 160",
    reasonsOfRecommendation: [
      "Trustworthy",
      "Local reputation",
      "Fair pricing",
    ],
    website: "",
  },
  {
    location: "Curl Curl",
    serviceType: "Plumbers",
    recommendedBy: "Nicole",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasonsOfRecommendation: [
      "Reliable",
      "Tidy and respectful",
      "Good quality work",
    ],
    website: "https://www.anytimedrains.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Electricians",
    recommendedBy: "Andrew",
    businessName: "Fresh Electrical",
    contactPerson: "Ben",
    phone: "0424 841 376",
    reasonsOfRecommendation: ["Trustworthy", "Responsive", "Good quality work"],
    website: "https://www.freshelectrical.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Plumbers",
    recommendedBy: "Mark",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasonsOfRecommendation: [
      "Problem solved properly",
      "Good quality work",
      "Fair pricing",
    ],
    website: "https://www.anytimedrains.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Electricians",
    recommendedBy: "Andrew",
    businessName: "Lumivolt",
    contactPerson: "Shane",
    phone: "0401 204 392",
    reasonsOfRecommendation: ["Reliable", "Trustworthy", "Good quality work"],
    website: "https://www.lumivolt.com.au",
  },
  {
    location: "Manly",
    serviceType: "Plumbers",
    recommendedBy: "Grace",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasonsOfRecommendation: ["Local reputation", "Trustworthy", "Responsive"],
    website: "https://www.anytimedrains.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Electricians",
    recommendedBy: "Chloe",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasonsOfRecommendation: ["Good quality work", "Reliable", "Responsive"],
    website: "https://arcsnsparks.com.au/",
  },
  {
    location: "Freshwater",
    serviceType: "Electricians",
    recommendedBy: "Vanessa",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasonsOfRecommendation: [
      "Fair pricing",
      "Good quality work",
      "Responsive",
    ],
    website: "https://arcsnsparks.com.au/",
  },
  {
    location: "Manly",
    serviceType: "Electricians",
    recommendedBy: "Cindy-Leigh",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasonsOfRecommendation: [
      "Good quality work",
      "Problem solved properly",
      "Fair pricing",
    ],
    website: "https://arcsnsparks.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Plumbers",
    recommendedBy: "Andy",
    businessName: "Hickey Plumbing",
    contactPerson: "Dan",
    phone: "0410 162 926",
    reasonsOfRecommendation: [
      "Good quality work",
      "Responsive",
      "Problem solved properly",
    ],
    website: "https://hickeyplumbing.com.au/",
  },
  {
    location: "Curl Curl",
    serviceType: "Handyman",
    recommendedBy: "Andre",
    businessName: "",
    contactPerson: "Tim",
    phone: "0410 297 637",
    reasonsOfRecommendation: [
      "Trustworthy",
      "Local reputation",
      "Easy to deal with",
    ],
    website: "",
  },
  {
    location: "Manly",
    serviceType: "Plumbers",
    recommendedBy: "Harrison",
    businessName: "At Your Service Plumbing",
    contactPerson: "Reid",
    phone: "0468 175 068",
    reasonsOfRecommendation: [
      "Tidy and respectful",
      "Trustworthy",
      "Easy to deal with",
    ],
    website: "https://atyourserviceplumbing.com.au/",
  },
];

export const SERVICE_OPTIONS = [
  "Accountant",
  "Plumber",
  "Electrician",
  "Builder",
  "Handyman",
  "Painter",
  "Landscaper",
  "Cleaner",
  "Mechanic",
  "Other",
];

export const RECOMMEND_OPTIONS = [
  { value: "Fast Response", label: "Fast Response" },
  { value: "Reliable", label: "Reliable" },
  { value: "Fair pricing", label: "Fair pricing" },
  { value: "Good Quality Work", label: "Good quality work" },
  { value: "Responsive", label: "Responsive" },
  { value: "Local reputation", label: "Local reputation" },
  { value: "Easy to deal with", label: "Easy to deal with" },
  {
    value: "Helpful / went the extra mile",
    label: "Helpful / went the extra mile",
  },
  { value: "Tidy and respectful", label: "Tidy and respectful" },
  { value: "Problem solved properly", label: "Problem solved properly" },
  { value: "Trustworthy", label: "Trustworthy" },
];

export const colorClasses = [
  "bg-primary_light text-primary",
  "bg-success_light text-success",
  "text-text-dark bg-light-bg",
  "text-textdark bg-textdark/5",
  "text-verified bg-verified/5",
  "text-green bg-green/5",
  "text-share-modal-icon bg-share-modal-icon/5",
  "text-secondary bg-secondary/5",
  "text-para bg-para/5",
  "text-tabText bg-tabText/5",
  "text-tabText bg-border",
  "text-tabText bg-border",
  "text-modal-line bg-modal-line/5",
];

export const sydneyAcrossData = [
  {
    icon: (
      <MdCreditCardOff
        size={32}
        className="text-white md:size-[32px] size-[28px]"
      />
    ),
    title: "No paid placement.",
  },
  {
    icon: <CustomIcon variant="trusted" />,
    title: "No anonymous reviews.",
  },
  {
    icon: (
      <FaBookOpenReader
        size={32}
        className="text-white md:size-[32px] size-[28px]"
      />
    ),
    title: "Built from local recommendations.",
  },
];

export const video_Url = [
  {
    url: "http://res.cloudinary.com/dh5msgx99/video/upload/v1774414879/wiqkeqds10d2xa1lcpik.mp4",
  },
  {
    secure_url:
      "https://res.cloudinary.com/dh5msgx99/video/upload/v1774414879/wiqkeqds10d2xa1lcpik.mp4",
  },
  {
    playback_url:
      "https://res.cloudinary.com/dh5msgx99/video/upload/sp_auto/v1774414879/wiqkeqds10d2xa1lcpik.m3u8",
  },
];

export const colorFunctions = (key) => {
  switch (key) {
    case "Plumber":
      return "share-modal-icon";

    case "Electrician":
      return "green";

    case "Handyman":
      return "secondary";

    default:
      return "black";
  }
};

export const accordianData = [
  {
    question:"Can I recommend myself?",
    answer:"Nice try. No — you can’t recommend your own business. But you can absolutely recommend a tradie you genuinely trust — including someone you regularly work with on jobs."
  },
  {
    question:"Why isn’t my recommendation showing up?",
    answer:"We don’t publish instantly. We check things before posting them online, and we use our secret spidey senses help us make sure recommendations are genuine. It can take us a little time, but it’s in the interests of ensuring our content can be trusted."
  },
  {
    question:"How do you know these recommendations are real?",
    answer:"We take that seriously – more than anything. We use one-time passwords, AI to detect unusual patterns, and submission limits so people can’t recommend more than once in a 24-hour period."
  },
  {
    question:"Why are only some businesses showing up?",
    answer:"Because this is just the beginning. We’ve already spoken to more than 350 people across Manly, Curl Curl and Freshie, but we need the community’s help to keep building it out."
  },
  {
    question:"How do I get my suburb included?",
    answer:"Easy — tell us who you trust and submit a recommendation. The more local recommendations we get, the faster we can grow coverage in your area."
  },
  {
    question:"What makes Neighbourly different?",
    answer:"We’re not built around anonymous reviews, paid listings or lead generation. We’re built to celebrate the local businesses people nearby genuinely trust."
  },
  {
    question:"Why not just use Google, HiPages or Airtasker?",
    answer:"They’re great for search and getting quotes from randoms. Neighbourly adds the trust layer real recommendations from people nearby."
  },
  {
    question:"How do you know people actually want this?",
    answer:"We surveyed more than 1,000 Australians and found the same thing we were hearing on the ground: when it comes to local services, people trust recommendations from those closest to them far more than anonymous reviews."
  },
  {
    question:"Do businesses pay to be featured?",
    answer:"No. We don’t support whoever pays the most to be seen. We’d rather help people discover the tradies who might be better on the tools than they are at marketing."
  },
  {
    question:"So what’s the point of Neighbourly?",
    answer:"To make finding a good local service feel less like a gamble and more like getting a recommendation from someone just around the corner."
  },
]
