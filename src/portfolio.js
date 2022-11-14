/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

const baseUrl = "https://api.awasaredu.com/";

//SEO Related settings
const seo = {
  title: "Awasar",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Awasar",
    type: "website",
    url: "http://awasaredu.com/",
  },
};

//Home Page
const greeting = {
  title: "Study Smarter, Not Harder.",
  logo_name: "https://awasar.in/wp-content/uploads/2020/09/awasar-logo.png",
  nickname: "A New Way To get High-Quality Education",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    show: false,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    show: false,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    show: false,
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    show: false,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
    show: false,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    show: false,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    show: false,
  },
  {
    name: "whatsapp",
    link: "https://www.wa.me/",
    fontAwesomeIcon: "fa-whtasapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    show: false,
  },
];

const skills = {
  data: [
    {
      title: "JEE MAIN + ADVANCED",
      fileName: "engineers",
      show: true,
      skills: [
        "⚡ Being a Jee Mains + Advanced student is not easy.",
        "⚡ Which is why we're here to help. Our experienced faculty will guide you on your way to clearing the exams and passing the board.",
        "⚡ Join us for personal mentorship and scientifically designed study materials.",
      ],
      softwareSkills: [
        {
          skillName: "Maths",
          fontAwesomeClassname: "mdi:math-compass",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Physics",
          fontAwesomeClassname: "game-icons:materials-science",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Chemistry",
          fontAwesomeClassname: "healthicons:biochemistry-laboratory-outline",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Neet-UG (Pre-Medical)",
      fileName: "doctors",
      show: false,
      skills: [
        "⚡ You're not alone. It's never too late. NEET-UG is here to help you overcome your NEET-ness and prepare you for a successful career.",
        "⚡ We give you one-on-one coaching to ensure that you can get through the admissions process and start a fulfilling life.",
      ],
      softwareSkills: [
        {
          skillName: "Maths",
          fontAwesomeClassname: "mdi:math-compass",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Physics",
          fontAwesomeClassname: "game-icons:materials-science",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Chemistry",
          fontAwesomeClassname: "healthicons:biochemistry-laboratory-outline",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Biology",
          fontAwesomeClassname: "material-symbols:biotech-rounded",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
	  {
		title: "Become An Awasar",
      fileName: "director",
      show: true,
      skills: [
        "It is indeed exciting to know that, in spite of the setback caused by the Corona pandemic, exams are going to be conducted again at the all-India level to select talented students from different parts of our great country. I am particularly pleased to learn that, despite the difficulties posed by the pandemic, AWASAR Coaching has still managed to send a dozen students to the IITs. This gives me hope and confidence that, next year, more than fifty poor and deserving students will be able to join the IITs thanks to AWASAR's assistance. Such success is vital if we are to provide opportunities for all sections of society regardless of their background or circumstances.",
      ],
      softwareSkills: [
        
      ],
    },
  ],
};

const directorMsg = {
  data: [
	{
	title: "Become An Awasar",
      fileName: "director",
      show: true,
      skills: [
        "It is indeed exciting to know that, in spite of the setback caused by the Corona pandemic, exams are going to be conducted again at the all-India level to select talented students from different parts of our great country. I am particularly pleased to learn that, despite the difficulties posed by the pandemic, AWASAR Coaching has still managed to send a dozen students to the IITs. This gives me hope and confidence that, next year, more than fifty poor and deserving students will be able to join the IITs thanks to AWASAR's assistance. Such success is vital if we are to provide opportunities for all sections of society regardless of their background or circumstances.",
      ],
      softwareSkills: [
        
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "About AWASAR",
      label: "AWASAR",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "awsar",
      duration: "2018 - Present",
      type: false,
      boxShadow: "5px 5px 5px #a93217",
      bodyColor: "#a93217",
      titleColor: "#fff",
      descriptions: [
        "⚡ AWASAR is a Patna based non-profit organisation to provide free education, boarding and lodging to economically weak and talented students through its AWASAR Program.",
        "⚡ AWASAR belives in reaching out to learners accross the country.",
        "⚡ With the vision of delivering quality academics in far flungareas, we have designed different models to reach out to learns.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "About AWASAR-50",
      label: "AWASAR50",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "awasar-50",
      duration: "2018 - Present",
      type: false,
      boxShadow: "rgb(215 136 19) 5px 5px 5px",
      bodyColor: "rgb(215 136 19)",
      titleColor: "#fff",
      descriptions: [
        "⚡ AWASAR-50 is a residential mentoring program for JEE Main / Advanced examination to the selected students.",
        "⚡ In this program selected students are being provided the Free Tution, Free Boarding and lodging.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "Selection Procedure",
      label: "PROCEDURE",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "selection Procedure",
      duration: "",
      type: false,
      boxShadow: "rgb(86 23 169) 5px 5px 5px",
      bodyColor: "rgb(86 23 169)",
      titleColor: "#fff",
      descriptions: [
        "⚡ Each Year we conduct ATSE - AWASAR TALENT SEARCH EXAMINATION (A three-stage exam i.e, Prelims, Mains and Interview) to select students in our AWASAR-50 Program.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "Venue of the ATSE-2023",
      label: "VENUE",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "Venue of the ATSE-2023",
      duration: "",
      type: false,
      boxShadow: "rgb(15 103 122) 5px 5px 5px",
      bodyColor: "rgb(15 103 122)",
      titleColor: "#fff",
      descriptions: [
        "⚡ Last year the exam has been conducted on more than 56 places accross the country.",
        "⚡ ATSE 2023 will be conducted in different shift starting from the end of November 2022.",
        "⚡ Stage-2 and interview will be held only in Patna, Bihar.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "Eligibility to participate in ATSE 2023",
      label: "ELIGIBILITY",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "Eligibility to participate in ATSE 2023",
      duration: "",
      type: false,
      boxShadow: "5px 5px 5px #161c22",
      bodyColor: "#161c22",
      titleColor: "#fff",
      descriptions: [
        "⚡ Any student who wants to became an engineer from institute of national importnce (IITs, NITs etc) and currently studying in class 10th can apply for ATSE-2023.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "Pattern of the ATSE-2023 Exam",
      label: "PATTERN",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "Pattern of the ATSE-2023 Exam",
      duration: "",
      type: "stage",
      boxShadow: "5px 5px 5px #c7922b",
      bodyColor: "#c7922b",
      titleColor: "#fff",
      descriptions: [],
      stageDetails: [
      {
      	stage: 1,
      	type: "MCQs (Single Correct)",
      	noOfQues: "80",
      	duration: "120 Minutes",
      	Pattern: "50 Question from Mathematics, 10Mat, 20 Science",
      },
      {
      	stage: 2,
      	type: "MCQs (Single Correct)",
      	noOfQues: "100",
      	duration: "120 Minutes",
      	Pattern: "60 Question from Mathematics, 20Mat, 20 Science",
      }
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
      past_year_paper_link: "ATSE-2022",
    },
    {
      title: "Application Procedure for ATSE 2023",
      label: "Apply",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "Application Procedure for ATSE 2023",
      duration: "",
      type: false,
      boxShadow: "5px 5px 5px #a93217",
      bodyColor: "#a93217",
      titleColor: "#fff",
      descriptions: [
        "⚡ Online Mode: Aspirants can click below right corner button 'Apply for ATSE - 2023' for online application.",
        "⚡ Offline Mode: One can visit nearest SIS Office for offline application for the exam.",
        "⚡ Contact: You can make a call at 7763071141, 7903218495 for more details and assistance.",
        "⚡ Head office: AWASAR Building, Near Zakir Hussain Sansthan, Officer's Flat, hartali More, Bailey Road Patna-800001.",
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "Exam Dates of ATSE - 2023",
      label: "Exams",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "Application Procedure for ATSE 2023",
      duration: "",
      type: "exam",
      boxShadow: "rgb(215 136 19) 5px 5px 5px",
      bodyColor: "rgb(215 136 19)",
      titleColor: "#fff",
      descriptions: [],
      stageDetails: [
      {
      	stage: "Date of Prelims (Satge-1)",
      	date1:" 20th November 2022",
      	date2:" 27th November 2022",
      	date3:" 04th December 2022",
      	date4:" 11th December 2022",
      	date5:" 18th December 2022",
      	date6:" 25th December 2022",
      },
      {
      	stage: "Date of Prelmis (Satge-2)",
      	date1:" To Be Decided After Stage-1",
      }
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    {
      title: "FAQs about your doubts",
      label: "FAQs",
      subtitle: "",
      logo_path: "iiitk_logo.png",
      alt_name: "FAQs about your doubts",
      duration: "",
      type: "faq",
      boxShadow: "rgb(86 23 169) 5px 5px 5px",
      bodyColor: "rgb(86 23 169)",
      titleColor: "#fff",
      descriptions: [],
      stageDetails:[
      {
      	interViewStage: " Aspirants qualified for interview round will be called for a personality test which will be held in Patna, Bihar.",
      	FinalSelection:" Aspirants will be selected for AWASAR-50 Batch on the basis of their performance in stage-2 and interview only.",
      	notSelected:" All the students who will not be selected in our AWASAR-50 batch will be offered our other batches where they will be provided scholarship on their tution fee on the basis of their performance in the different stages of ATSE - 2023",
      }
      ],
      website_link: "#/form",
      admit_card_link: "#/admit-card",
    },
    
  ],
};

const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "About Us",
  subtitle: "",
  description:
    "AWASAR was founded in 2021 with a mission to provide the best coaching for students to crack IIT exams. We provide expert guidance and personalized attention to help our students achieve their dreams. Awasar has a team of experienced professionals who are passionate about teaching and mentoring students. We are committed to helping our students reach their full potential and we believe that every student has the potential to crack the IIT exam.",
  header_image_path: "experience.svg",
  sections: [
    
      ],
};

// Projects Page
const projectsHeader = {
  title: "ADMIT CARD",
  description:
    "Prepare for the future with the help of Awasar50. The exam date is approaching you, select your exam center to get your Admit Card.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Better yet, see us in person!",
    profile_image_path: "animated_ashutosh.png",
    description:
      "We love our visitors, so feel free to visit during normal business hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "76, East Boring Canal Road, Near Hartali More, Patna, Bihar 800001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/aGAWp33vXxSwGK788",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7903218495",
    whatsAppNo: "917903218495",
    whatsAppLink: "https://wa.me/",
  },
};

// Form Page
const formPageData = {
  formSection: {
    title: "Find The Right Scholarship For You",
    profile_image_path: "animated_ashutosh.png",
    description:
      "We love our visitors, so feel free to visit during normal business hours.",
  },
};

export {
  settings,
  seo,
	baseUrl,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  formPageData,
  directorMsg,
};
