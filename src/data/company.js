// Import team member images
import ceoImage from "../assets/images/ceo.jpeg";
import consultantImage from "../assets/images/consultant.jpeg";
import mdImage from "../assets/images/md.jpeg";
import legalImage from "../assets/images/legal.jpeg";

export const companyInfo = {
  name: "Nico Farms",
  tagline: "Fresh Eggs & Quality Poultry Raised Responsibly",
  
  farmAddress:
    "Nico Farms Crescent by Ola Jesu Busstop, Ejila, Ado-Odo/Ota, Ogun State, Nigeria",

  officeAddress:
    "7 Austin Obiador Street, Ago Palace Way, Okota, Isolo, Lagos",

  founded: 2020,
};

// ABOUT CONTENT

export const aboutContent = {
  intro: `
Here at Nico AgriFarms Limited DBA Nico Farms, we believe in the power of farming done right. Founded in 2020 by Kenneth Geoffrey in consultation with his long-time friend and partner Raji Bomodeoku, Nico Farms’ journey began with a simple but powerful vision: to cultivate a farm where the welfare of our animals and the quality of our products always come first.
  `,

  story: `
Nico Farms started as a social project aligned with the Sustainable Development Goals (SDGs) to contribute to the agricultural sector. Over time, it has evolved into a full-scale business venture driven by increasing demand and a growing customer base.
  `,
};

// MISSION & VISION

export const missionVision = {
  mission: `
To be an all-round agriculture enterprise providing high-quality poultry products that are affordable and accessible to businesses and households across Nigeria.
  `,

  vision: `
To cultivate a farm where the welfare of our animals and the quality of our products always come first, while expanding distribution and reducing operational costs through feed production and business growth.
  `,
};

// VALUES

export const values = [
  "Quality Assurance",
  "Animal Welfare",
  "Sustainable Farming",
  "Integrity",
  "Community Impact",
];

// PRODUCTS

export const products = [
  {
    name: "Fresh Eggs",
    description:
      "Nutritious farm-fresh eggs produced from properly fed and healthy birds.",
  },
  {
    name: "Broiler Chickens",
    description:
      "Healthy broiler birds raised using responsible farming practices for quality poultry meat.",
  },
];

// TEAM MEMBERS

export const team = [
  {
    name: "Kenneth Geoffrey",
    role: "Founder & Chief Executive Officer",
    bio: "Kenneth Geoffrey founded Nico Farms in 2020 with a vision to create sustainable poultry farming operations. His leadership and commitment to quality have established Nico Farms as a trusted name in the industry. Kenneth works closely with his partner to ensure every aspect of the farm meets the highest standards of quality and animal welfare.",
    image: ceoImage,
  },
];

// CONSULTANTS & SPECIALISTS

export const consultants = [
  {
    name: "Dr. Adewole Saidi Abiola",
    role: "Nutritionist, Farm Consultant & Poultry Veterinary Specialist",
    company: "Golden Farm Care",
    bio: "Dr. Adewole is a passionate poultry farmer and poultry veterinary specialist dedicated to raising healthy and productive birds. With practical knowledge in poultry health management, disease prevention, and modern poultry farming techniques, he ensures high-quality poultry production at Nico Farms.",
    specialties: [
      "Poultry Nutrition & Feeding Programs",
      "Disease Prevention & Health Management",
      "Veterinary Care & Bird Health",
      "Biosecurity Protocols",
      "Modern Poultry Farming Techniques",
      "Flock Management & Productivity",
    ],
    about: `Through his firm Golden Farm Care, Dr. Adewole focuses on proper feeding, biosecurity, and professional veterinary care to maintain strong and healthy flocks. His mission is to provide safe, healthy poultry products while supporting farmers with reliable poultry health solutions. He is committed to improving poultry farming through professionalism, innovation, and quality farm management.\n\nDr. Adewole works closely with Nico Farms to ensure that all birds receive optimal nutrition, preventive care, and professional veterinary oversight. His expertise helps maintain the high standards of animal welfare and product quality that Nico Farms is known for.`,
    image: consultantImage,
  },
  {
    name: "Mrs. Ngozi C. Okonkwo",
    role: "Managing Director (MD)",
    company: "Nico AgriFarms Limited",
    bio: "Mrs. Ngozi C. Okonkwo is the Managing Director of Nico AgriFarms Limited, bringing strategic leadership and operational excellence to the organization. With her vision and management expertise, she oversees the company's day-to-day operations and drives growth initiatives.",
    specialties: [
      "Strategic Management",
      "Business Operations",
      "Company Leadership",
      "Business Development",
      "Project Management",
    ],
    about: `As Managing Director, Mrs. Ngozi C. Okonkwo provides strategic direction and operational oversight for Nico AgriFarms Limited. Her leadership ensures that the company maintains its commitment to quality, animal welfare, and sustainable farming practices while achieving business objectives and supporting community development.`,
    image: mdImage,
  },
  {
    name: "Blessing Okonkwo, BA LLB LLM",
    role: "Legal and Compliance Advisor",
    company: "Nico AgriFarms Limited",
    bio: "Blessing Okonkwo is a highly qualified legal professional with expertise in business law, compliance, and regulatory matters. With qualifications including BA, LLB, and LLM degrees, he provides essential legal guidance and ensures that Nico AgriFarms operates in full compliance with all applicable regulations.",
    specialties: [
      "Business Law",
      "Compliance Management",
      "Regulatory Affairs",
      "Contract Management",
      "Legal Advisory Services",
      "Risk Management",
    ],
    about: `Blessing Okonkwo serves as Legal and Compliance Advisor for Nico AgriFarms Limited, ensuring all operations align with Nigerian laws and international standards. His legal expertise protects the company's interests while facilitating compliance with agricultural, environmental, and business regulations. He provides strategic legal counsel on contracts, partnerships, and corporate governance matters.`,
    image: legalImage,
  },
];
