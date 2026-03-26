import { FaClockRotateLeft, FaUserGroup, FaUsers } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiHandHeartFill, RiShakeHandsLine } from "react-icons/ri";
import { TbMap } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import CustomIcon from "@/components/CustomIcon";
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
    iconBg: "bg-[#FE9A86]",
    bg: "bg-[#FFEFEA]",
  },
  {
    icon: <PiThumbsUpBold size={35} />,
    title: "See who locals trust",
    text: "Browse the people and businesses most recommended in your area.",
    iconBg: "bg-[#8FA58A]",
    bg: "bg-[#EAF9E7]",
  },
  {
    icon: <RiHandHeartFill size={35} />,
    title: "Share a recommendation",
    text: "Help others discover great local services in your suburb.",
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
    title: "Suburb-first",
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
    title: "most recommended",
    icon: "",
  },
  {
    title: "Plumbers",
    icon: <CustomIcon variant="fixer"   />,
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

export const Suburb_Data = [
  {
    isVerified: true,
    verifiedBy:"by Neighbourly",
    name:"Shannon",
    image:"/images/suburb1.png",
    category:"Plumberss",
    slug:"dave at A to Z plumbing",
    recommendation:"recommended by 5 neighbours",
    res:[
      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      },

    ],
    trusted:{
      title:"Trusted across",
      tag:["curl curl","freshwater","manly"],
    },
    mine:{
      image:["/images/suburb1.png","/images/suburb1.png","/images/suburb1.png"],
      data:"Alex in manly + 11 others"
    }


  },
  {
    isVerified: true,
    verifiedBy:"by Neighbourly",
    name:"Shannon",
    image:"/images/suburb1.png",
    category:"Electricianss",
    slug:"dave at A to Z plumbing",
    recommendation:"recommended by 5 neighbours",
    res:[
      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      },

    ],
    trusted:{
      title:"Trusted across",
      tag:["curl curl","freshwater","manly"],
    },
    mine:{
      image:["/images/suburb1.png","/images/suburb1.png","/images/suburb1.png"],
      data:"Alex in manly + 11 others"
    }


  },
  {
    isVerified: true,
    verifiedBy:"by Neighbourly",
    name:"Shannon",
    image:"/images/suburb1.png",
    category:"handyman",
    slug:"dave at A to Z plumbing",
    recommendation:"recommended by 5 neighbours",
    res:[
      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      },

    ],
    trusted:{
      title:"Trusted across",
      tag:["curl curl","freshwater","manly"],
    },
    mine:{
      image:["/images/suburb1.png","/images/suburb1.png","/images/suburb1.png"],
      data:"Alex in manly + 11 others"
    }


  },
]


export const comment = [

  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },
  {
    image:"/images/sayavatar.png",
    name:"Olivia",
    email:"Olivia@gmail.com",
    phone:"+138474957",
    address:"block 2 away",
    rating:[

      {
        text:"fast response",
        bg:"bg-[#D98C74]/20",
        textColor:"text-[#D98C74]"
      },
      {
        text:"reliable",
        bg:"bg-[#64A256]/20",
        textColor:"text-[#64A256]"
      },
      {
        text:"fair price",
        bg:"bg-[#4D6D8C]/20",
        textColor:"text-[#4D6D8C]"
      }
    ],
    date:'2 weeks ago'
  },


]

export const recommendations = [
  {
    suburb: "Curl Curl",
    tradeType: "Plumbers",
    recommendedBy: "Olivia",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasons: ["Good quality work", "Reliable", "Fair pricing"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Rebecca",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasons: ["Responsive", "Local reputation", "Easy to deal with"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Sara",
    businessName: "A to Z Plumbing Solutions",
    contactPerson: "Shannon",
    phone: "0400 318 553",
    reasons: ["Local reputation", "Good quality work", "Easy to deal with"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Charlotte",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasons: ["Good quality work", "Helpful / went the extra mile", "Local reputation"],
    website: "https://www.affordablehotwater.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Liz",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasons: ["Tidy and respectful", "Helpful / went the extra mile", "Local reputation"],
    website: "https://www.affordablehotwater.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Brad",
    businessName: "Affordable Hot Water",
    contactPerson: "Marcel",
    phone: "1300 765 764",
    reasons: ["Local reputation", "Problem solved properly", "Reliable"],
    website: "https://www.affordablehotwater.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Plumbers",
    recommendedBy: "Amelia",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasons: ["Reliable", "Good quality work", "Responsive"],
    website: "https://allinplumbing.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Anne-Marie",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasons: ["Responsive", "Helpful / went the extra mile", "Reliable"],
    website: "https://allinplumbing.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Isla",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasons: ["Helpful / went the extra mile", "Responsive", "Problem solved properly"],
    website: "https://allinplumbing.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Duncan",
    businessName: "All In Plumbing",
    contactPerson: "Jeremy",
    phone: "0424 264 849",
    reasons: ["Responsive", "Tidy and respectful", "Fair pricing"],
    website: "https://allinplumbing.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Plumbers",
    recommendedBy: "Nina",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasons: ["Reliable", "Easy to deal with", "Problem solved properly"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Christian",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasons: ["Trustworthy", "Fair pricing", "Easy to deal with"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Joshua",
    businessName: "All Master Plumbing",
    contactPerson: "Damian",
    phone: "0431 156 166",
    reasons: ["Responsive", "Trustworthy", "Good quality work"],
    website: ""
  },
  {
    suburb: "Freshwater",
    tradeType: "Handyman",
    recommendedBy: "Mia",
    businessName: "AMS Renovations & Maintenance",
    contactPerson: "John",
    phone: "0425 338 894",
    reasons: ["Good quality work", "Problem solved properly", "Local reputation"],
    website: ""
  },
  {
    suburb: "Manly",
    tradeType: "Handyman",
    recommendedBy: "Ava",
    businessName: "Antika Painting & Handyman Services",
    contactPerson: "Mawi",
    phone: "0452 466 160",
    reasons: ["Trustworthy", "Local reputation", "Fair pricing"],
    website: ""
  },
  {
    suburb: "Curl Curl",
    tradeType: "Plumbers",
    recommendedBy: "Nicole",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasons: ["Reliable", "Tidy and respectful", "Good quality work"],
    website: "https://www.anytimedrains.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Electricians",
    recommendedBy: "Andrew",
    businessName: "Fresh Electrical",
    contactPerson: "Ben",
    phone: "0424 841 376",
    reasons: ["Trustworthy", "Responsive", "Good quality work"],
    website: "https://www.freshelectrical.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Plumbers",
    recommendedBy: "Mark",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasons: ["Problem solved properly", "Good quality work", "Fair pricing"],
    website: "https://www.anytimedrains.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Electricians",
    recommendedBy: "Andrew",
    businessName: "Lumivolt",
    contactPerson: "Shane",
    phone: "0401 204 392",
    reasons: ["Reliable", "Trustworthy", "Good quality work"],
    website: "https://www.lumivolt.com.au"
  },
  {
    suburb: "Manly",
    tradeType: "Plumbers",
    recommendedBy: "Grace",
    businessName: "Anytime Drains",
    contactPerson: "Mark",
    phone: "0421 149 129",
    reasons: ["Local reputation", "Trustworthy", "Responsive"],
    website: "https://www.anytimedrains.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Electricians",
    recommendedBy: "Chloe",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasons: ["Good quality work", "Reliable", "Responsive"],
    website: "https://arcsnsparks.com.au/"
  },
  {
    suburb: "Freshwater",
    tradeType: "Electricians",
    recommendedBy: "Vanessa",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasons: ["Fair pricing", "Good quality work", "Responsive"],
    website: "https://arcsnsparks.com.au/"
  },
  {
    suburb: "Manly",
    tradeType: "Electricians",
    recommendedBy: "Cindy-Leigh",
    businessName: "Arcs N Sparks Electrical Services",
    contactPerson: "Chris",
    phone: "0404 153 371",
    reasons: ["Good quality work", "Problem solved properly", "Fair pricing"],
    website: "https://arcsnsparks.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Plumbers",
    recommendedBy: "Andy",
    businessName: "Hickey Plumbing",
    contactPerson: "Dan",
    phone: "0410 162 926",
    reasons: ["Good quality work", "Responsive", "Problem solved properly"],
    website: "https://hickeyplumbing.com.au/"
  },
  {
    suburb: "Curl Curl",
    tradeType: "Handyman",
    recommendedBy: "Andre",
    businessName: "",
    contactPerson: "Tim",
    phone: "0410 297 637",
    reasons: ["Trustworthy", "Local reputation", "Easy to deal with"],
    website: ""
  },
  {
    suburb: "Manly",
    tradeType: "Plumbers",
    recommendedBy: "Harrison",
    businessName: "At Your Service Plumbing",
    contactPerson: "Reid",
    phone: "0468 175 068",
    reasons: ["Tidy and respectful", "Trustworthy", "Easy to deal with"],
    website: "https://atyourserviceplumbing.com.au/"
  }
];