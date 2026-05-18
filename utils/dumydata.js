import {
  FaBookOpenReader,
  FaClockRotateLeft,
  FaUserGroup,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiHandHeartFill, RiShakeHandsLine } from "react-icons/ri";
import { TbMap } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import CustomIcon from "@/components/CustomIcon";
import {
  MdCleaningServices,
  MdCreditCardOff,
  MdOutlineEmail,
  MdOutlineHandyman,
} from "react-icons/md";
import { FiLink, FiUsers } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
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
    href: "/get-in-touch",
    label: "Get in Touch",
  },
];

export const work_Data = [
  {
    icon: <HiOutlineSearch size={35} />,
    title: "Search your suburb",
    bg: "bg-share-modal-icon",
  },
  {
    icon: <PiThumbsUpBold size={35} />,
    title: "Discover who locals trust",
    bg: "bg-green",
  },
  {
    icon: <RiHandHeartFill size={35} />,
    title: "Share a recommendation",
    bg: "bg-secondary",
  },
];

export const trusted_Data = [
  {
    num: `+ 623`,
    text: "Recommendations",
    textColor: "text-[#FFFFFF]",
  },
  {
    num: `24`,
    text: "Suburbs",
    textColor: "text-[#FFFFFF]",
  },
  {
    num: `5`,
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
  "Suburb says started with a simple frustration: finding a local service provider you can genuinely trust.",
  "We realised the best recommendations come from people nearby not anonymous reviews.",
  "So we built Suburb says to help people discover trusted local businesses through genuine recommendations from neighbours.",
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
    title: "Plumber",
    icon: <CustomIcon variant="fixer" />,
  },
  {
    title: "Electrician",
    icon: <CustomIcon variant="plugh" />,
  },
  {
    title: "Handyman",
    icon: <MdOutlineHandyman />,
  },
  {
    title: "Gardener",
    icon: <CustomIcon variant="gardners" />,
  },
  {
    title: "Cleaner",
    icon: <MdCleaningServices />,
  },
];

export const address_Data = [
  {
    isVerified: true,
    verifiedBy: "by Suburb says",
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
    verifiedBy: "by Suburb says",
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
    verifiedBy: "by Suburb says",
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
  {
    value: "Plumber",
    icon: "/images/plumber.svg",
  },
  {
    value: "Electrician",
    icon: "/images/electrician.svg",
  },
  {
    value: "Gardener",
    icon: "/images/gardners.svg",
  },
  {
    value: "Handyman",
    icon: "/images/handymen.svg",
  },
  {
    value: "Cleaner",
    icon: "/images/cleaner.svg",
  },
];

export const RECOMMEND_OPTIONS = [
  { value: "Reliable", label: "Reliable" },
  { value: "Fair pricing", label: "Fair pricing" },
  { value: "Quality Work", label: "Quality work" },
  { value: "Responsive", label: "Responsive" },
  { value: "Local reputation", label: "Local reputation" },
  { value: "Easy to deal with", label: "Easy to deal with" },
  { value: "Helpful", label: "Helpful" },
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
      return "text-share-modal-icon";

    case "Electrician":
      return "text-green";

    case "Handyman":
      return "text-secondary";

    case "Gardener":
      return "text-[#7FB3B0]";

    case "Cleaner":
      return "text-[#E8C088]";

    default:
      return "text-red-500";
  }
};

export const accordianData = [
  {
    question: "Can I recommend myself?",
    answer:
      "Nice try. No — you can’t recommend your own business. But you can absolutely recommend a tradie you genuinely trust — including someone you regularly work with on jobs.",
  },
  {
    question: "Why isn’t my recommendation showing up?",
    answer:
      "We don’t publish instantly. We check things before posting them online, and we use our secret spidey senses help us make sure recommendations are genuine. It can take us a little time, but it’s in the interests of ensuring our content can be trusted.",
  },
  {
    question: "How do you know these recommendations are real?",
    answer:
      "We take that seriously – more than anything. We use one-time passwords, AI to detect unusual patterns, and submission limits so people can’t recommend more than once in a 24-hour period.",
  },
  {
    question: "Why are only some businesses showing up?",
    answer:
      "Because this is just the beginning. We’ve already spoken to more than 350 people across Manly, Curl Curl and Freshie, but we need the community’s help to keep building it out.",
  },
  {
    question: "How do I get my suburb included?",
    answer:
      "Easy — tell us who you trust and submit a recommendation. The more local recommendations we get, the faster we can grow coverage in your area.",
  },
];

export const cardData = [
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Plumber",
  },
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Electrician",
  },
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Handyman",
  },
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Handyman",
  },
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Plumber",
  },
  {
    businessId: "69ca652d0a5a64d8d9772e53",
    personName: "The Team",
    businessName: "Plumbers to U",
    businessContact: "0414905303",
    serviceType: "Electrician",
  },
];

export const sugestidSuburbData = ["Curl Curl", "Freshwater", "Manly"];

const SERVICE_COLORS = {
  Plumber: "bg-primary",
  Electrician: "bg-green",
  Handyman: "bg-secondary",
  Gardener: "bg-[#93B3B1]",
  Cleaner: "bg-[#E8C088]",
};

export const getServiceColor = (type) => SERVICE_COLORS[type] ?? "bg-red-500";

export const sponsors = [
  {
    personName: "Sally",
    businessName: "Sandcastle Finance",
    serviceType: "Mortgage Broker",
    businessContact: "+61422242661",
    profileImage: "/images/sallyAvatar.svg",
    isNotDisabled: true,
  },
  {
    personName: "",
    businessName: " ",
    serviceType: "Real Estate Agent",
    businessContact: "+61400000001",
    profileImage: "/images/dummyAvatar.svg",
    isNotDisabled: false,
  },
  {
    personName: " ",
    businessName: " ",
    serviceType: "Conveyancer",
    businessContact: "+61400000002",
    profileImage: "/images/dummyAvatar.svg",
    isNotDisabled: false,
  },
];

const SPONSOR_THEMES = {
  "Mortgage Broker": {
    banner: "bg-primary",
    bannerText: "text-white",
    serviceText: "text-primary",
    button: "bg-primary hover:bg-primary/90",
    ring: "ring-primary",
    cardBg: "bg-white border-primary/30",
  },
  "Real Estate Agent": {
    banner: "bg-secondary",
    bannerText: "text-white",
    serviceText: "text-secondary",
    button: "bg-secondary hover:bg-secondary/90",
    ring: "ring-secondary",
    cardBg: "bg-white border-secondary/30",
  },
  Conveyancer: {
    banner: "bg-green",
    bannerText: "text-white",
    serviceText: "text-green",
    button: "bg-green hover:bg-green/90",
    ring: "ring-green",
    cardBg: "bg-white border-green/30",
  },
  default: {
    banner: "bg-primary",
    bannerText: "text-white",
    serviceText: "text-primary",
    button: "bg-primary hover:bg-primary/90",
    ring: "ring-primary",
    cardBg: "bg-white border-primary/30",
  },
};

export const getTheme = (serviceType) =>
  SPONSOR_THEMES[serviceType] ?? SPONSOR_THEMES.default;

const META_DATA = [
  {
    title: "Suburb Says - Trusted Local Services Near You",
    description:
      "Discover trusted local services recommended by your neighbors. Find reliable businesses, read real community reviews, and connect with the best services near you.",

    alternates: {
      canonical: "https://www.suburbsays.com.au/",
    },
    keywords: [
      "local services near me",
      "trusted local businesses",
      "neighbor recommendations",
      "community reviews",
      "find local services",
      "best services near me",
      "local business directory",
      "Suburb says",
    ],

    openGraph: {
      title: "Suburb Says - Trusted Local Services Near You",
      description:
        "Find the best local services through real recommendations from your neighbors. Trusted, reliable, and community-driven.",
      url: "https://www.suburbsays.com.au/",
      siteName: "Suburb Says",
      type: "website",
      images: [
        {
          url: "https://www.suburbsays.com.au/images/video/banner.mp4",
          width: 1200,
          height: 630,
          alt: "Suburb Says Home",
        },
      ],
    },
  },
  {
    title: "Suburb says - Our Story",
    description:
      "Learn the story behind Suburb says and how we connect you with trusted local services recommended by your neighbors.",
    alternates: {
      canonical: "https://www.suburbsays.com.au/our-story",
    },
    openGraph: {
      title: "Suburb says - Our Story",
      description:
        "Discover how Suburb says helps you find reliable local services through real neighbor recommendations.",
      url: "https://www.suburbsays.com.au/our-story",
      siteName: "Suburb says",

      images: [
        {
          url: "https://www.suburbsays.com.au/images/ourstory.png",
          width: 1200,
          height: 630,
          alt: "Suburb says - Our Story",
        },
      ],
      type: "website",
    },

    keywords: [
      "local services",
      "neighbor recommendations",
      "trusted services",
      "community platform",
      "Suburb says",
    ],
  },
  {
    title: "Discover Places - Suburb says",
    description: "Find the best local recommendations near you.",
    alternates: {
      canonical: "https://www.suburbsays.com.au/discover",
    },
    openGraph: {
      title: "Discover Places",
      description: "Explore top Place around you",
      url: "https://www.suburbsays.com.au/discover",
      siteName: "Suburb says",
      images: [
        {
          url: "https://www.suburbsays.com.au/images/logo.png",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    keywords: [
      "discover local services",
      "local recommendations near me",
      "find nearby services",
      "trusted local businesses",
      "community recommendations",
      "neighbor reviews",
      "best local places",
      "service discovery platform",
      "Suburb says discover",
    ],
  },
  {
    title: "Suburb says - Get In Touch",
    description:
      "Contact Suburb says for support, questions, partnerships, or general inquiries.",
    alternates: {
      canonical: "https://www.suburbsays.com.au/get-in-touch",
    },
    openGraph: {
      title: "Suburb says - Get In Touch",
      description:
        "Reach out to Suburb says for support, feedback, or partnership opportunities. We’re here to help you connect with trusted local services.",
      url: "https://www.suburbsays.com.au/get-in-touch",
      siteName: "Suburb says",
      type: "website",
      images: [
        {
          url: "https://www.suburbsays.com.au/images/getintouch.png",
          width: 1200,
          height: 630,
          alt: "Suburb says Contact Page",
        },
      ],
    },
    keywords: [
      "contact Suburb says",
      "customer support Suburb says",
      "get in touch",
      "help center Suburb says",
      "community support",
      "local services platform support",
      "partnership inquiries",
      "Suburb says contact",
    ],
  },
  {
    title: "Suburb says - Terms of Use",
    description:
      "Read the Terms of Use for Suburb says to understand the rules, guidelines, and conditions for using our platform and services.",

    alternates: {
      canonical: "https://www.suburbsays.com.au/terms-of-use",
    },

    keywords: [
      "terms of use",
      "terms and conditions",
      "user agreement",
      "website terms",
      "Suburb says terms",
      "platform rules",
      "legal terms",
      "service conditions",
    ],

    openGraph: {
      title: "Suburb says - Terms of Use",
      description:
        "Review the terms and conditions for using Suburb says and understand your rights and responsibilities.",
      url: "https://www.suburbsays.com.au/terms-of-use",
      siteName: "Suburb says",
      type: "website",
      images: [
        {
          url: "https://www.suburbsays.com.au/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Suburb says Suburb Search",
        },
      ],
    },
  },
];

export const getMataData = (title) => {
  const data = META_DATA.find((item) => item.title === title);
  return data;
};

export const termsMetadata = {
  effectiveDate: "3 April 2026",
  contact: {
    label: "andrew@suburbsays.com.au",
    href: "mailto:andrew@suburbsays.com.au",
  },
};

export const termsIntro = {
  heading: "Welcome to Suburb says.",
  description:
    "Suburb says is a free, community-led service that celebrates and publishes the local businesses people nearby know and trust. Our role is to help surface and share community trust. We do not make recommendations ourselves.",
  subHeading:
    "By using this website or submitting information to it, you agree to the terms below.",
};

export const termsSections = [
  {
    id: 1,
    title: "1. Using Suburb says",
    paragraphs: [
      "Please use Suburb says in a respectful, honest and lawful way.",
      "You must not misuse the website, interfere with how it works, submit false or misleading information, impersonate another person, or attempt to manipulate what appears on the site.",
      "We may restrict access, remove content, or decline submissions where needed to protect the integrity, safety or proper operation of the service.",
    ],
  },
  {
    id: 2,
    title: "2. Community submissions",
    paragraphs: [
      "Suburb says is built on genuine input from local residents about the businesses and people they trust.",
    ],
    listIntro: "By submitting information to Suburb says, you confirm that:",
    listItems: [
      "it is based on your own real experience",
      "it is honest and genuine",
      "it is not false, misleading, abusive, defamatory or promotional",
      "you are not submitting your own business, service or commercial interest",
      "you have the right to provide the information you submit",
    ],
    afterListParagraphs: [
      "Submissions are not published automatically. We may review, verify, moderate, delay, reject or remove any submission where we believe that is necessary, including where we detect duplication, suspicious activity, unusual behaviour, conflicts of interest, or content that does not meet our standards.",
      "We may also limit the number of submissions made by a person within a certain period to help protect the quality and trustworthiness of the platform.",
    ],
  },
  {
    id: 3,
    title: "3. What Suburb says does",
    paragraphs: [
      "Suburb says celebrates and publishes the businesses, trades and local service providers that members of the community say they trust. Suburb says does not independently recommend, endorse, guarantee or certify any business or provider. Any business shown on the site reflects community input, not a recommendation made by Suburb says.",
    ],
  },
  {
    id: 4,
    title: "4. Why we ask for your details",
    paragraphs: [
      "We may ask for details such as your name, email address, phone number, suburb or other contact information when you submit information to the site.",
    ],
    listIntro: "We ask for this information so we can:",
    listItems: [
      "validate submissions",
      "confirm authenticity",
      "reduce spam, fraud and misuse",
      "maintain the integrity of what appears on the site",
      "communicate with you about something you have submitted",
      "occasionally let you know about relevant updates, improvements or new functionality on Suburb says",
    ],
    afterListParagraphs: [
      "We do not sell your personal information.",
      "We do not knowingly share your personal information with third parties for their own marketing purposes.",
    ],
  },
  {
    id: 5,
    title: "5. How we handle personal information",
    paragraphs: [
      "We collect and use personal information only where it is reasonably needed to operate and improve Suburb says.",
      "This may include using your information to verify submissions, respond to enquiries, maintain the quality of the platform, communicate with users, and support the ongoing operation of the website.",
      "We take reasonable steps to protect the personal information we hold from misuse, loss, unauthorised access, modification or disclosure.",
    ],
  },
];

export const suburbData = [
  "Balgowlah",
  "Fairlight",
  "Manly",
  "Curl Curl",
  "Freshwater",
  "Queenscliff",
  "Dee Why",
  "North Curl Curl",
  "North Manly",
  "Allambie Heights",
  "Beacon Hill",
  "Brookvale",
  "Collaroy",
  "Narrabeen",
  "North Narrabeen",
  "Collaroy Plateau",
  "Cromer",
  "Wheeler Heights",
  "Newport",
  "Bayview",
  "Church Point",
  "Mona Vale",
  "Bilgola Plateau",
  "Avalon Beach",
];
