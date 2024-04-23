import computerIcon from "../assets/comput.svg";
import LibIcon from "../assets/Library.svg";
import traningIcon from "../assets/TraningWhite.svg";
import LeaningIcon from "../assets/icons8-learning-50.png";
import StudyIcon from "../assets/study-notes-svgrepo-com.svg";
import GriVancePdf from "../assets/PDF/Grievance-Redressal NCCT OM.pdf";
import RTIPdf from "../assets/PDF/RTI NCCT Order.pdf";

import staff1 from "../assets/staff1.png";
import staff2 from "../assets/staff2.png";
import staff3 from "../assets/staff3.png";
import staff4 from "../assets/staff4.png";
import staff5 from "../assets/staff5.png";
import staff6 from "../assets/staff6.jpg";
import staff7 from "../assets/staff7.png";
import staff8 from "../assets/staff8.png";
import staff9 from "../assets/staff9.png";
import staff12 from "../assets/staff12.png";

let language_MAIN = "english";

//hindi
try {
  const value = localStorage.getItem("hind_english");
  if (value !== null) {
    language_MAIN = value;
  }
} catch (error) {
  //error
}

//header
let HeaderPage = {
  HeadingText: "INSTITUTE OF CO-OPERATIVE MANAGEMENT, BHOPAL (M.P.)",
  HeadingText2:
    "(An Institution of National Council for Cooperative Training, New Delhi)",
  HeadingText3:
    "An Autonomous society promoted by Ministry of Cooperation, Govt. of India, New Delhi",
  PhoneNum: "(O) 0755-2725477",
  PhoneNum2: "(0755) 4034733",
  WelcomeTitle: "Welcome to ICM Bhopal , Madhya Pradesh",
  aboutUsText: "ABOUT US",
  aboutUsText2: "PROGRAMME ADVISORY COMMITTEE",

  SyllabusText: "ACADEMIC PROGRAMS AND SYLLABUS",
  CoprativeText: "CO-OPERATIVE ACT AND REGULATIONS SECTION",
  StaffText: "STAFF DIRECTORY",
  FacilitieText: "FACILITIES",
  ImportantLinkText: "IMPORTANT LINKS",
  ContactUsText: "CONTACT US",
};
//programmer page
let Programcomt = {
  programHeader: "Programme Advisory Committe Bhopal",
  programHeade2:
    "Commissioner & Registrar of Cooperative Societies Vindhyachal C Wing Bhopal- 462003",
  tableheading1: "Position",
  tableheading2: "Organization",
  tableheading3: "Role",
};

let data = [
  {
    position: "Managing Director",
    organization:
      "M.P. State Cooperative Bank, New Market, T. T. Nagar, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization:
      "Madhya Pradesh Rajya Sahakari Krishi Avam Gramin Vikash Bank, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization:
      "Madhya Pradesh Rajya Sahakari Vipnan Sangh, Jahangirabad, Maheshwari Bhavan, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization:
      "Madhya Pradesh Rajya Sahakari Sangh Mydt, E- 8/77 Trilanga Road, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "Madhya Pradesh Rajya Sahakari Upbhogta Sangh, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "Madhya Pradesh Rajya Sahakari Awas Sangh, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "Madhya Pradesh Rajya Sahakari Awas Sangh, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization:
      "Madhya Pradesh Rajya Sahakari Laghu Vanopaj Vyapar Avam Vikash Sahakari Sangh, Bhopal",
    role: "Member",
  },
  {
    position: "Regional Director",
    organization: "Rastriya Cooperative Vikash Nigam (NCDC), Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization:
      "Madhya Pradesh Rajya Sahakari Anucuchit Jati Vitt Vikash Nigam, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "M.P. State Fishries Federation, Bhopal",
    role: "Member",
  },
  {
    position: "Director",
    organization: "Handloom Directorate, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "Madhya Pradesh Rajya Sahakari Dugdh Sangh, Bhopal",
    role: "Member",
  },
  {
    position: "Managing Director",
    organization: "Madhya Pradesh Khadi Gramodyog Board, Bhopal",
    role: "Member",
  },
  {
    position: "Director",
    organization: "Management Study Center, Bhopal",
    role: "Member",
  },
  {
    position: "Joint Commissioner",
    organization: "Cooperative Societies MP, Bhopal",
    role: "Member",
  },
  {
    position: "Director",
    organization: "ICDP Project Cooperative Societies, Bhopal",
    role: "Member",
  },
  {
    position: "Director",
    organization: "Institute of Cooperative Management, Bhopal",
    role: "Convenor",
  },
];

let GuestTabledata = [
  {
    Name: "Sh. Shrikumar Joshi",
    Qualification: "Retd. JRCs Cooperation",
  },
  {
    Name: "Dr. Narendra Kumar Kulshreshtha",
    Qualification: "Ph.D (Management), MBA (Marketing), B.Sc(Hons)",
  },
  {
    Name: "Mr. Rajendra Saxena",
    Qualification:
      "B.E.(Mechanical Engineering), National Trainers Soft Skills",
  },
  {
    Name: "Dr. Srishti Umekar",
    Qualification:
      "Ph.D(Economics), MBA(Marketing & Rural Management) , Master of Business Economics (Marketing & Rural Management)BA",
  },
  {
    Name: "Mrs Rashmi Golya",
    Qualification:
      "M Com, B Com, PG Diploma (PM), Diploma (Management) , MBA (Marketing Management)",
  },
  {
    Name: "Mr. Pradeep Mishra",
    Qualification: "MSc.(CS), PGDCA, BSc.",
  },
];
//About Us Page

let AboutPage = {
  aboutText: HeaderPage.aboutUsText,

  ContactUsText: HeaderPage.ContactUsText,
  content: `Institute of Cooperative management Bhopal was established in the year 1956 for contributing towards human resource development of cooperative sector in Madhya Pradesh & Chhattisgarh state. main activities are Cooperative education, training, Research & consultancy and publication. This institute was initially located at Indore which was later shifted to Bhopal during the year 1996. This is 100% grant-in–aid institute under department of Ministry of Cooperation, Govt. Of India, under the administrative control of National Council for Cooperative Training, New Delhi. The Council undertakes its activities through the wide network of its 20 institutions spread in different parts of the country, comprising of Vaikunth Mehta National Institute of Cooperative Management (VAMNICOM), Pune, and Regional Institutes of Cooperative Management (5) and Institutes of Cooperative Management (14) located in different parts of the country.`,
  content2: `Institute conducts training programme in the area of Accountancy, Audit, Marketing, Cooperation, law, Rural development, Human resource development and Information technology. ICM conducts Management Development programme (MDP’s) and Management Diploma Courses for the employees of State Govt. and Cooperative Organisations. At present Institute offers Higher Diploma in Cooperative Management (HDCM), DAESI Programme, DGR Diploma's and Certificate Programmes, NABARD SOFTCOB Programme i.e. CSC Programmes, WDRA Awareness Programme. Training Programme under honey bee mission, Programme on NPA,s Departmental Enquiry for officials and employees of all Apex Institutions and other prog. as per demand of concerned organizations. ICM has well equipped Library with an excellent collection of more than 14 thousand books, 20 No. of periodicals and journals including Newspaper Magazines and good number of audio and video equipment i.e. LCD, C.D., DVD & Slide Projector, Dongle, Laptop, Mobile. The institute has a well equipped Computer lab with internet and E-mail connectivity. Institute has a well equipped 5 classroom with projector and Internet facilities. Institute has separate Biometric Attendance Machine for DGR personnels.`,
  content3: `ICM is catering to the training needs of Cooperative Department officials of both Madhya Pradesh & Chhattisgarh state. Institute conducts training programme in the area of Accountancy, Audit, Marketing, Cooperation, law, Rural development, Human resource development and Information technology. ICM conducts Management Development programme (MDP’s) and Management Diploma Courses for the employees of State Govt. and Cooperative Organisations. At present Institute offers Higher Diploma in Cooperative Management (HDCM), DAESI Programme, DGR Diploma's and Certificate Programmes, NABARD SOFTCOB Programme i.e. CSC Programmes, WDRA Awareness Programme. Training Programme under honey bee mission, Programme on NPA,s Departmental Enquiry for officials and employees of all Apex Institutions and other prog. as per demand of concerned organizations.ICM has well equipped Library with an excellent collection of more than 14 thousand books, 20 No. of periodicals and journals including Newspaper Magazines and good number of audio and video equipment i.e. LCD, C.D., DVD & Slide Projector, Dongle, Laptop, Mobile. The institute has a well equipped Computer lab with internet and E-mail connectivity. Institute has a well equipped 5 classroom with projector and Internet facilities. Institute has separate Biometric Attendance Machine for DGR personnels.Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.The institute is having a team of professionally, well exposed Faculty Members in their respected areas. Institute is also active on Social Media platform i.e. Facebook, Instagram, Twitter, Koo, LinkedIn, and YouTube.`,
};
let IndexHomePage = {
  OurVissionText: "Our Vision",
  OurmissionText: "Our Mission",
  LetestNews: "Latest News",
  contentOurVision:
    "Conducting need based, research based, pragmatic, output/outcome based result driven sectoral specific training programmes to Cooperative personnel. Transform rural Cooperative institutions as viable, Self reliant organisation by extending knowledge and Technology support and also by encouraging talented rural youth/women to be a part of Cooperative Institution. To supplement conventional training system with dynamic, e-learning and mobile -app based training for effective learning using SMART concept In addition to our core mission, we endeavor to forge strong partnerships with local government bodies, academic institutions, and industry stakeholders to enhance the reach and impact of our programs By collaborating with diverse stakeholders, we aim to develop comprehensive solutions that address the unique challenges and opportunities faced by cooperative enterprises in the region.",
  ourMission:
    "Furthermore, our aim is to establish ourselves as an exemplary Training and Research Center in the field of Cooperation, serving as a beacon of knowledge and expertise for Madhya Pradesh and Chhattisgarh states. Through our commitment to excellence, innovation, and continuous improvement, we aspire to be at the forefront of advancing cooperative practices, fostering sustainable development, and empowering communities across the region. Additionally, we recognize the importance of leveraging technology to drive efficiency and effectiveness in cooperative operations. Through the adoption of cutting-edge digital tools and platforms, we seek to streamline processes, improve decision-making, and enhance the overall competitiveness of cooperative enterprises in the region.",
  ComputerLabTxt: "Computer lab",
  ComputerContent:
    "ICM Bhopal's well-furnished computer lab, featuring i5 and i7 computers, LAN, Internet connectivity, multimedia projector, and latest software, offers practical training to Cooperative personnel. The lab, in a separate cabin with seating, accommodates 28 computers, ensuring optimal learning environments. Moreover, its advanced software facilitates comprehensive skill development.",
  LibraryText: "Library",
  LibraryContent:
    "The Institute's library houses 14,000+ books covering Management, Law, Fiction, with a focus on Cooperative Management and Accounts. It maintains subscriptions to 20+ periodicals, including journals and newspapers, ensuring easy access. Managed by a qualified librarian, future plans include developing digital content for sector-specific training.",
  TraningText: "Administration and training facility ",
  TraningContent:
    "Institute has an independent administrative block spread over 152 Sq Metrs. The institute has 134 sq Metres.(AC) conference hall with seating capacity of 80 persons, 5 AC class rooms, with video conference facility for administrative and training purpose  dedicated space for faculty meetings and workshops to facilitate effective communication & collaboration.",
  newz1: "PM Modi kicks off NDA's Lok Sabha poll campaign in Bihar.",
  newz2: "Earthquake of magnitude 6 strikes Japan day after Taiwan disaster.",
  newz3: "NEET MDS 2024 results announced.",
  newz4:
    "SC sets aside Bombay HC's order against Navneet Rana in caste certificate case.",
};
//Syllabus Page
let SyllabusPage = {
  SyllabusTxt: "Download Syllabus",
  SalesManageMentTxt: "Sales Management",
  RetailManageMentTxt: "Retail Management",
  TeamLeaderTxt: "Team Leader  Department Management",
  HdcmTxt: "Co-operative HDCM",
  SmallBussinessTxt: "Smalll Business Rular Entrepreneurship",
  TraningprgTXt: " Training Programme Calender",
  TraningprgTXt2: "Higher Diploma in Co-operative Management",
  TraningprgTXt3: "DGR Sponsored Courses",
  TraningprgTXt4: "NABARD Sponsored Courses",
};
//Staff Page

let StaffPage = {
  title: "Director’s Desk",
  diractorContent:
    "I am very happy to lead the Institute after serving in NCCT for a period of 14 years as a Director. I was really inspired by the support given by the Ministry of Cooperation to improve the socio economic condition of the small and marginal farmers of my country who work very hard under the sun to give bread to the entire nation. I had a specific plan to bring professionalism in my Institute by adopting transparency, mutual support, clarity in thinking and action. Institute will work with specific plan to develop human resource of cooperative sector by giving appropriate input in the area of knowledge, skill and attitude dimensions.",
  diractorContent2:
    "I appeal to my entire faculty and all Cooperative personnel to learn the art of simplify things to bring clarity in thinking and action using SMART approach. So the effort, time and money which we spent on training should achieve the desired results and in turn prosperity though cooperation happens by default. I suggest to all faculties and staff to spent good amount of time to plan need based training programmes by considering all factors in to account and deliver the content through simplification process adopting proper training methods and technique. Finally we need to work by aligning our mind, body and soul  in a specified direction to achieve the dream of Ministry of Cooperation. I support and work with my team to excel in every activity undertaken by the Institute.",
  diractorContent3:
    " The innovation and entrepreneurship mindset is the need of the hour to bring total transformation in rural India. So we need to encourage and groom rural talent to work with Cooperative sector to build rural India to be a part of national economy. Institute planned to bring total transformation in our training system by designing need based, outcome/output based, research oriented and pragmatic approach training programme as per the expectation of Ministry of Cooperation. I would like to adopt kaizon concept to ignite the mindset of Cooperative personnel to bring drastic change: the way people think, understand and execute things to deliver the expected result.",
  facultiDeatailText: "Faculties Details",
  FacultiNametxt: "Dr. Kishore Kumare",
  Facultirole: "Director",
  Facultiqualifications: "PhD, M.Com., CTFC",
  FacultiText2: "Dr. Ajay Sharma",
  Facultirole2: "Faculty Member",
  Facultiqualifications2: "PhD, M.A., B.Ed, LLB, CTFCr",
  FacultiText3: "Sh. P.K. Parihar",
  Facultirole3: "Contractual Faculty",
  Facultiqualifications3: "B.Com, M.Com, CTFC, CPCB Level-1, DICB",
  AdminStaffTxt: "Administrative Staff",
  tableName: "Guest Faculties",
  tableHead: "Name of Faculty",
  tableHead2: "Qualification",
};
let staffData = [
  [
    { name: "Smt. Megha Satarkar", position: "UDC", imageSrc: staff2 },
    {
      name: "Smt. Meeta Jain",
      position: "Librarian & Information Assistant/ OS I/c",
      imageSrc: staff1,
    },
    {
      name: "Sh. Ajay Singh Gautam",
      position: "Lower Division Clerk",
      imageSrc: staff3,
    },
    {
      name: "Sh. Anjani kumar ",
      position: "Lower Division Clerk",
      imageSrc: staff12,
    },
  ],
  [
    {
      name: "Sh. Pramod Sharma",
      position: "Lower Division Clerk",
      imageSrc: staff4,
    },
    {
      name: "Sh Pradeep Mathur",
      position: "MTS/ Nodal Officer(Social Media)",
      imageSrc: staff9,
    },
    {
      name: "Sh. Sunil kumar Dhoke",
      position: "Multi Tasking Staff",
      imageSrc: staff5,
    },
  ],
  [
    {
      name: "Sh. Deepak Lohat",
      position: "Multi Tasking Staff",
      imageSrc: staff7,
    },
    {
      name: "Sh. Prabaht Patel",
      position: "Multi Tasking Staff",
      imageSrc: staff8,
    },
    {
      name: "Sh. Shiv Das Kachotiya",
      position: "Multi Tasking Staff",
      imageSrc: staff6,
    },
  ],
];

//Important Page
let importantPage = {
  importantLinktext: "Important Pages",
  impotentlinkHtt: "Ministry of Cooperation Govt. of India",
  impotentlinkHtt1:
    "National Council for Cooperative Training , New Delhi (Head Office)",
  impotentlinkHtt2: "National Bank For Agriculture And Rural Development.",
  impotentlinkHtt3: "Ministry of Cooperation Govt. of India",
  impotentlinkHtt4: "Cooperative Department Madhya Pradesh Government",
  impotentlinkHtt5: "Apex Bank",
  impotentlinkHtt6:
    " Madhya Pradesh Rajya Shakari Vipnan Sangh Maryadit Krishak Bharati Cooperative Ltd.",
  impotentlinkHtt7: "Apex Union Online Courses, Bhopal",
  impotentlinkHtt8: "Mp State Minor Forest Produce",
  impotentlinkHtt9: "Madhya Pradesh Mark Fedmis",
  impotentlinkHtt10:
    "Madhya Pradesh State Cooperative Dairy Federation Limited",
  impotentlinkHtt11:
    "M.P. State Cooperative Housing Association Limited,Bhopal",
  impotentlinkHtt12: "Indian Farm Forestry Development Cooperative",
  impotentlinkHtt13: "Amul Milk",
  impotentlinkHtt14: " Krishak Bharati Cooperative Limited",
};

//coprative Act Page
let coprativePage = {
  copHeading: "Co-operative Society Acts",
  coptitle1: "PRELIMINARY",
  coptitle2: "MEMBER OF COOP. SOCITIES & THEIR RIGHTS & LIABILITIES",
  coptitle3: "MANAGEMENT OF COOPERATIVE SOCITIES",
  coptitle4: "ELECTION",
  coptitle5: "PRIVILEGES OF COOP. SOCIETIES",
  coptitle6: "STATE AID OF COOP. SOCIETIES",
  coptitle7: "PRIVILEGES OF COOP. SOCIETIES",
  coptitle8: "PROPERTIES & FUND OF COOP. SOCIETIES",
  coptitle9: "AUDIT, INQUIRY & SURCHARGE",
  coptitle10: "SETTLEMENT OF DISPUTES",
  coptitle11: "WINDING UP & DISSOLUTION OF COOP. SOCIETIES",
  coptitle12: "LAND DEVELOPMENT BANKS",
  coptitle13: "EXECUTION FO AWARDS DECREES ORDERS& DECISIONS",
  coptitle14: "APPEALS REVISIONS & REVIEW",
  coptitle15: "OFFENCES & PENALTIES",
  coptitle16: "MISCELLANEOUS",
};

//Contact Us Page

let ContactUspage = {
  ContactUsText: "Contact Us",
  AddresCont: "E-8/77, Trilanga Road, Shahpura, Bhopal, Pin- 462039 (M.P.)",
  EmailCont: "icmbpl@gmail.com",
  PhoneCont: "Phone : (O) 0755-2725477",
  contWithUStxt: "Connect with us",
  userNamee: "User Name",
  UserEmail: "User Email",
  UserMsg: "Message",
  UserPhn: "Phone",
};

//facilite Page
let FacilitiePage = {
  facilitediscrib:
    "The institute subscribes more than 20 no. of periodicals including journals, news papers daily/weekly and magazines as on date. The library is managed by qualified librarian and all books are arranged as per the standard specification of library for easy access to books.",
  ComputerLabTxt: "Facilities",
  ComputerContent: IndexHomePage.ComputerContent,
  LibraryText: IndexHomePage.LibraryText,
};

let services_text = [
  {
    icon: "computerIcon",
    imgSrc: computerIcon,
    title: "Computer lab",
    description:
      "ICM Bhopal boasts a modern computer lab equipped with i5 and i7 computers, LAN, internet, multimedia projector, and latest software, facilitating practical training for Cooperative personnel. The lab, located in a separate cabin, accommodates 28 computers with comfortable seating.",
  },
  {
    icon: "LibIconIcon",
    imgSrc: LibIcon,
    title: "Library",
    description:
      "The Institute has well structured library having more than 14 thousand books on different areas of Management, Law, Fiction, Literature, Commerce and Information technology. The Institute has A  exclusive collection of books on cooperative Management, Law, Accounts and Audit.",
  },
  {
    icon: "traningIcon",
    imgSrc: traningIcon,
    title: "Classrooms",
    description:
      "Institute has an independent administrative block spread over 152 Sq Metrs. The institute has 134 sq Metres.(AC) conference hall with seating capacity of 80 persons, 5 AC class rooms, with  Enhanced video conference facility for administrative and training purpose.",
  },
  {
    icon: "computerIcon",
    imgSrc: LeaningIcon,
    title: "Leaning Centre",
    description:
      "The Learning Center at ICM Bhopal has a modern computer lab with i5 and i7 computers, LAN and internet access, multimedia projectors, and advanced software for hands-on training. The lab, with 28 computers, is specially designed for Cooperative personnel.",
  },
  {
    icon: "LibIconIcon",
    imgSrc: LibIcon,
    title: "Webinars",
    description:
      "The focal point of our webinar Rest highlight the Learning Center at ICM Bhopal, which houses an advanced computer lab equipped with i5 and i7 computers, LAN connectivity, Internet accessibility, Multimedia projectors, and state-of-the-art software.This setup helps us in facilitating interactive training sessions.",
  },
  {
    icon: "traningIcon",
    imgSrc: traningIcon,
    title: "Seminar",
    description:
      "We regularly host seminars to showcase the Learning Hub at ICM Bhopal, a cutting-edge computer facility tailored for interactive training of Cooperative personnel. With 28 workstations, it provides ample resources for effective learning experiences.",
  },
  {
    icon: "traningIcon",
    imgSrc: traningIcon,
    title: "Conferences",
    description:
      "The forthcoming conference offers a proficient platform for industry leaders to converge and exchange insights. Attendees can anticipate engaging discussions, informative sessions, and valuable networking opportunities. Join us as we collectively strive towards advancing our fields In fostering meaningful collaborations.",
  },
  {
    icon: "traningIcon",
    imgSrc: StudyIcon,
    title: "Study Materia",
    description:
      "Study materials provide an effective way for gather and discuss vital insights. Attendees can anticipate thought-provoking conversations and chances to make valuable relationships. increase your knowledge. Reserve your spot right away to participate in group discovery and enhance your educational experience.",
  },
];

//Footer page
let footerPage = {
  QuiKlinktxt: "Quick Links",
  socialIcns: "Facebook",
  socialIcns2: "Linkedin",
  socialIcns3: "Instagram",
  socialIcns4: "Youtube",
};

let companyMenu = {
  title: "Company",
  items: [
    {
      label: "Contact",
      link: "/contact_Us",
    },
  ],
};
//footer manu
let footerMenu = {
  title: "Contact Us",
  items: [
    {
      label: "E-8/77, Trilanga Road, Shahpura, Bhopal, Pin- 462039 (M.P.)",
      link: "#",
    },
    {
      label: "Phone : (O) 0755-2725477,",
      link: "#",
    },
    {
      label: "Fax: (0755) 4034733",
      link: "#",
    },
    {
      label: "E-mail: icmbpl@gmail.com",
      link: "icmbpl@gmail.com",
    },
  ],
};

function openPDF(pdfLink) {
  window.open(pdfLink, "_blank");
}

let quickLinksMenu = [
  { label: "About Us", link: "/about_us" },
  { label: "Important Links", link: "/important" },
  { label: "Facilities", link: "/facilites" },
  { label: "Contact ", link: "/contact_Us" },
  { label: "RTI", onClick: () => openPDF(RTIPdf, "RTI.pdf"), button: true },
  {
    label: " Grievance Redressal",
    onClick: () => openPDF(GriVancePdf, "Grievance_Redressal.pdf"),
    button: true,
  },
  { label: "Login Master", link: "/admin_login" },
];

//copy Right text
let footerCopyright = {
  text: "©2024. | Designed By : Triosoft Technologies Pvt. Ltd. | All rights reserved.",
  link: "#",
};

if (language_MAIN === "hindi") {
  HeaderPage = {
    HeadingText: "सहकारिता प्रबंधन संस्थान, भोपाल (म.प्र.)",
    HeadingText2:
      "(राष्ट्रीय को-ऑपरेटिव प्रशिक्षण परिषद के एक संस्थान, नई दिल्ली)",
    HeadingText3:
      "एक स्वायत्त समाज जिसे को-ऑपरेटिव सहयोग मंत्रालय, भारत सरकार, नई दिल्ली द्वारा प्रोत्साहित किया गया है",
    PhoneNum: "(ओ) 0755-2725477",
    PhoneNum2: "(0755) 4034733",
    WelcomeTitle: "ICM भोपाल, मध्य प्रदेश में आपका स्वागत है",
    aboutUsText: "हमारे बारे में",
    aboutUsText2: "प्रोग्राम सलाहकार समिति",
    SyllabusText: "शैक्षणिक कार्यक्रम और सिलेबस",
    CoprativeText: "को-ऑपरेटिव अधिनियम और विनियमन धारा",
    StaffText: "कर्मचारी निर्देशिका",
    FacilitieText: "सुविधाएं",
    ImportantLinkText: "महत्वपूर्ण लिंक्स",
    ContactUsText: "संपर्क करें",
  };
  AboutPage = {
    aboutText: HeaderPage.aboutUsText,
    ContactUsText: HeaderPage.ContactUsText,
    content:
      "मध्य प्रदेश और छत्तीसगढ़ राज्य में सहकारी क्षेत्र के मानव संसाधन विकास में योगदान के लिए सहकारी प्रबंधन संस्थान भोपाल की स्थापना वर्ष 1956 में की गई थी। संस्थान की मुख्य गतिविधियाँ सहकारी शिक्षा, प्रशिक्षण, अनुसंधान एवं परामर्श और प्रकाशन हैं। यह संस्थान प्रारंभ में इंदौर में स्थित था जिसे बाद में वर्ष 1996 के दौरान भोपाल में स्थानांतरित कर दिया गया। यह सहकारिता मंत्रालय, सरकार के विभाग के तहत 100% अनुदान-सहायता प्राप्त संस्थान है। भारत का, राष्ट्रीय सहकारी प्रशिक्षण परिषद, नई दिल्ली के प्रशासनिक नियंत्रण में। परिषद देश के विभिन्न हिस्सों में फैले अपने 20 संस्थानों के व्यापक नेटवर्क के माध्यम से अपनी गतिविधियाँ चलाती है, जिसमें वैकुंठ मेहता राष्ट्रीय सहकारी प्रबंधन संस्थान (VAMNICOM), पुणे और क्षेत्रीय सहकारी प्रबंधन संस्थान (5) और सहकारी प्रबंधन संस्थान शामिल हैं। (14) देश के विभिन्न हिस्सों में स्थित आईसीएम मध्य प्रदेश और छत्तीसगढ़ दोनों राज्यों के सहकारी विभाग के अधिकारियों की प्रशिक्षण आवश्यकताओं को पूरा कर रहा है।",
    content2:
      "संस्थान अकाउंटेंसी, ऑडिट, मार्केटिंग, सहयोग, कानून, ग्रामीण विकास, मानव संसाधन विकास और सूचना प्रौद्योगिकी के क्षेत्र में प्रशिक्षण कार्यक्रम आयोजित करता है। आईसीएम राज्य सरकार के कर्मचारियों के लिए प्रबंधन विकास कार्यक्रम (एमडीपी) और प्रबंधन डिप्लोमा पाठ्यक्रम आयोजित करता है। और सहकारी संगठन. वर्तमान में संस्थान सहकारी प्रबंधन में उच्च डिप्लोमा (एचडीसीएम), डीएईएसआई कार्यक्रम, डीजीआर डिप्लोमा और प्रमाणपत्र कार्यक्रम, नाबार्ड सॉफ्टकॉब कार्यक्रम यानी सीएससी कार्यक्रम, डब्ल्यूडीआरए जागरूकता कार्यक्रम प्रदान करता है। मधुमक्खी मिशन के तहत प्रशिक्षण कार्यक्रम, एनपीए पर कार्यक्रम, सभी शीर्ष संस्थानों और अन्य कार्यक्रमों के अधिकारियों और कर्मचारियों के लिए विभागीय जांच। संबंधित संगठनों की मांग के अनुसार. आईसीएम के पास 14 हजार से अधिक पुस्तकों, 20 पत्र-पत्रिकाओं और समाचार पत्रों सहित पत्रिकाओं के उत्कृष्ट संग्रह के साथ अच्छी तरह से सुसज्जित पुस्तकालय है और अच्छी संख्या में ऑडियो और वीडियो उपकरण यानी एलसीडी, सीडी, डीवीडी और स्लाइड प्रोजेक्टर, डोंगल, लैपटॉप, मोबाइल हैं। संस्थान में इंटरनेट और ई-मेल कनेक्टिविटी के साथ एक सुसज्जित कंप्यूटर लैब है। संस्थान में प्रोजेक्टर और इंटरनेट सुविधाओं से सुसज्जित 5 कक्षाएँ हैं। संस्थान के पास डीजीआर कर्मियों के लिए अलग बायोमेट्रिक उपस्थिति मशीन है।",
    content3: `आईसीएम मध्य प्रदेश और छत्तीसगढ़ दोनों राज्यों के सहकारी विभाग के अधिकारियों की प्रशिक्षण आवश्यकताओं को पूरा कर रहा है। संस्थान अकाउंटेंसी, ऑडिट, मार्केटिंग, सहयोग, कानून, ग्रामीण विकास, मानव संसाधन विकास और सूचना प्रौद्योगिकी के क्षेत्र में प्रशिक्षण कार्यक्रम आयोजित करता है। आईसीएम राज्य सरकार के कर्मचारियों के लिए प्रबंधन विकास कार्यक्रम (एमडीपी) और प्रबंधन डिप्लोमा पाठ्यक्रम आयोजित करता है। और सहकारी संगठन. वर्तमान में संस्थान सहकारी प्रबंधन में उच्च डिप्लोमा (एचडीसीएम), डीएईएसआई कार्यक्रम, डीजीआर डिप्लोमा और प्रमाणपत्र कार्यक्रम, नाबार्ड सॉफ्टकॉब कार्यक्रम यानी सीएससी कार्यक्रम, डब्ल्यूडीआरए जागरूकता कार्यक्रम प्रदान करता है। मधुमक्खी मिशन के तहत प्रशिक्षण कार्यक्रम, एनपीए पर कार्यक्रम, सभी शीर्ष संस्थानों और अन्य कार्यक्रमों के अधिकारियों और कर्मचारियों के लिए विभागीय जांच। संबंधित संगठनों की मांग के अनुसार, आईसीएम के पास 14 हजार से अधिक पुस्तकों, समाचार पत्र पत्रिकाओं सहित 20 पत्रिकाओं और पत्रिकाओं के उत्कृष्ट संग्रह और अच्छी संख्या में ऑडियो और वीडियो उपकरण यानी एलसीडी, सीडी, डीवीडी और स्लाइड प्रोजेक्टर के साथ अच्छी तरह से सुसज्जित पुस्तकालय है। , डोंगल, लैपटॉप, मोबाइल। संस्थान में इंटरनेट और ई-मेल कनेक्टिविटी के साथ एक सुसज्जित कंप्यूटर लैब है। संस्थान में प्रोजेक्टर और इंटरनेट सुविधाओं से सुसज्जित 5 कक्षाएँ हैं। संस्थान के पास डीजीआर कर्मियों के लिए अलग बायोमेट्रिक उपस्थिति मशीन है। यहां आप अपने द्वारा बनाई गई सामग्री को साझा भी कर सकते हैं, अगर हमारी तकनीकी टीम को यह पसंद आएगा, तो हम इसे अपने ब्लॉग पर भी साझा करेंगे। संस्थान के पास पेशेवर, अच्छी तरह से परिचित संकाय सदस्यों की एक टीम है। उनके सम्मानित क्षेत्रों में. संस्थान सोशल मीडिया प्लेटफॉर्म यानी फेसबुक, इंस्टाग्राम, ट्विटर, कू, लिंक्डइन और यूट्यूब पर भी सक्रिय है।`,
  };
  IndexHomePage = {
    LetestNews: "ताजा खबर",
    OurVissionText: "हमारा दृष्टिकोण",
    OurmissionText: "हमारा मिशन",
    LatestNews: "नवीनतम समाचार",
    contentOurVision:
      "सहकारी कर्मियों के लिए आवश्यकता आधारित, अनुसंधान आधारित, व्यावहारिक, आउटपुट/परिणाम आधारित परिणाम आधारित क्षेत्रीय विशिष्ट प्रशिक्षण कार्यक्रम आयोजित करना। ज्ञान और प्रौद्योगिकी सहायता प्रदान करके और साथ ही प्रतिभाशाली ग्रामीण युवाओं/महिलाओं को प्रोत्साहित करके ग्रामीण सहकारी संस्थानों को व्यवहार्य, आत्मनिर्भर संगठन के रूप में बदलना। स्मार्ट अवधारणा का उपयोग करके प्रभावी शिक्षण के लिए गतिशील, ई-लर्निंग और मोबाइल-ऐप आधारित प्रशिक्षण के साथ पारंपरिक प्रशिक्षण प्रणाली को पूरक करने के लिए सहकारी संस्थान का हिस्सा बनें। हमारे मुख्य मिशन के अलावा, हम स्थानीय सरकारी निकायों, शैक्षणिक संस्थानों के साथ मजबूत साझेदारी बनाने का प्रयास करते हैं। , और उद्योग हितधारकों को हमारे कार्यक्रमों की पहुंच और प्रभाव को बढ़ाने के लिए विभिन्न हितधारकों के साथ सहयोग करके, हमारा लक्ष्य व्यापक समाधान विकसित करना है जो क्षेत्र में सहकारी उद्यमों के सामने आने वाली अद्वितीय चुनौतियों और अवसरों का समाधान करता है।",
    ourMission:
      "मध्य प्रदेश और छत्तीसगढ़ राज्य के क्षेत्र में सहयोग के क्षेत्र में एक उत्कृष्ट प्रशिक्षण और अनुसंधान केंद्र बनना। इसके अलावा, हमारा उद्देश्य खुद को सहयोग के क्षेत्र में एक अनुकरणीय प्रशिक्षण और अनुसंधान केंद्र के रूप में स्थापित करना है, जो मध्य प्रदेश और छत्तीसगढ़ राज्यों के लिए ज्ञान और विशेषज्ञता के प्रतीक के रूप में कार्य करेगा। उत्कृष्टता, नवाचार और निरंतर सुधार के लिए हमारी प्रतिबद्धता के माध्यम से, हम सहकारी प्रथाओं को आगे बढ़ाने, सतत विकास को बढ़ावा देने और पूरे क्षेत्र में समुदायों को सशक्त बनाने में सबसे आगे रहने की आकांक्षा रखते हैं। इसके अतिरिक्त, हम अत्याधुनिक डिजिटल उपकरणों और प्लेटफार्मों को अपनाने के माध्यम से सहकारी संचालन में दक्षता और प्रभावशीलता बढ़ाने के लिए प्रौद्योगिकी का लाभ उठाने के महत्व को पहचानते हैं , हम प्रक्रियाओं को सुव्यवस्थित करना, निर्णय लेने में सुधार करना और क्षेत्र में सहकारी उद्यमों की समग्र प्रतिस्पर्धात्मकता को बढ़ाना चाहते हैं।",
    ComputerLabTxt: "कंप्यूटर प्रयोगशाला",
    ComputerContent:
      "ICM भोपाल की अच्छी तरह से सुसज्जित कंप्यूटर लैब, जिसमें i5 और i7 कंप्यूटर, LAN, इंटरनेट कनेक्टिविटी, मल्टीमीडिया प्रोजेक्टर और नवीनतम सॉफ़्टवेयर शामिल हैं, सहकारी कर्मियों को व्यावहारिक प्रशिक्षण प्रदान करती है। बैठने की व्यवस्था के साथ एक अलग केबिन में, लैब में 28 कंप्यूटर हैं, जो इष्टतम सुनिश्चित करते हैं इसके अलावा, सीखने का माहौल, इसका उन्नत सॉफ़्टवेयर व्यापक कौशल विकास की सुविधा प्रदान करता है।",

    LibraryText: "पुस्तकालय",
    LibraryContent:
      "संस्थान की लाइब्रेरी में सहकारी प्रबंधन और लेखा पर ध्यान देने के साथ प्रबंधन, कानून, कथा साहित्य को कवर करने वाली 14,000+ किताबें हैं। यह पत्रिकाओं और समाचार पत्रों सहित 20+ पत्रिकाओं की सदस्यता बनाए रखता है, जिससे आसान पहुंच सुनिश्चित होती है। एक योग्य लाइब्रेरियन द्वारा प्रबंधित, भविष्य की योजनाओं में शामिल हैं क्षेत्र-विशिष्ट प्रशिक्षण के लिए डिजिटल सामग्री विकसित करना।",
    TraningText: "प्रशिक्षण और प्रशासन सुविधा ",
    TraningContent:
      "संस्थान के पास 152 वर्ग मीटर में फैला एक स्वतंत्र प्रशासनिक ब्लॉक है। संस्थान में 134 वर्ग मीटर का (एसी) कॉन्फ्रेंस हॉल है जिसमें 80 व्यक्तियों के बैठने की क्षमता है, 5 एसी क्लास रूम हैं, प्रशासनिक और प्रशिक्षण उद्देश्यों के लिए वीडियो कॉन्फ्रेंस की सुविधा है। प्रभावी संचार और सहयोग की सुविधा के लिए संकाय बैठकों और कार्यशालाओं के लिए समर्पित स्थान।",
    newz1: "पीएम मोदी ने बिहार में एनडीए की लोकसभा चुनाव अभियान की शुरुआत की।",
    newz2: "ताइवान दुर्भाग्य के दिन जापान में 6 तीव्रता का भूकंप हुआ।",
    newz3: "NEET MDS 2024 के परिणाम घोषित।",
    newz4:
      "एससी ने नावनीत राणा के जाति प्रमाण पत्र मामले में बॉम्बे एचसी के आदेश को रद्द किया।",
  };
  SyllabusPage = {
    SyllabusTxt: "पाठ्यक्रम",
    SalesManageMentTxt: "बिक्री",
    RetailManageMentTxt: "खुदरा प्रबंधन",
    TeamLeaderTxt: "टीम नेता विभाग प्रबंधन",
    HdcmTxt: "सहकारी एचडीसीएम",
    SmallBussinessTxt: "छोटे व्यापार ग्रामीण उद्यमिता",
    TraningprgTXt: "प्रशिक्षण कार्यक्रम कैलेंडर",
    TraningprgTXt2: "कोऑपरेटिव प्रबंधन में उच्चतम डिप्लोमा",
    TraningprgTXt3: "डीजीआर प्रायोजित पाठ्यक्रम",
    TraningprgTXt4: "नाबार्ड प्रायोजित पाठ्यक्रम",
  };
  StaffPage = {
    title: "निदेशक का डेस्क",
    diractorContent:
      "एनसीसीटी में निदेशक के रूप में 14 वर्षों की अवधि तक सेवा करने के बाद मैं संस्थान का नेतृत्व करते हुए बहुत खुश हूं। मैं वास्तव में अपने देश के छोटे और सीमांत किसानों की सामाजिक आर्थिक स्थिति में सुधार के लिए सहकारिता मंत्रालय द्वारा दिए गए समर्थन से प्रेरित हूं। जो पूरे देश को रोटी देने के लिए कड़ी मेहनत करते हैं। मेरे पास पारदर्शिता, आपसी सहयोग, सोच और कार्रवाई में स्पष्टता अपनाकर अपने संस्थान में व्यावसायिकता लाने की एक विशिष्ट योजना थी। संस्थान मानव संसाधन विकसित करने के लिए विशिष्ट योजना के साथ काम करेगा। ज्ञान, कौशल और दृष्टिकोण आयामों के क्षेत्र में उचित इनपुट देकर सहकारी क्षेत्र।",
    diractorContent2:
      "मैं अपने पूरे संकाय और सभी सहकारी कर्मियों से अपील करता हूं कि वे स्मार्ट दृष्टिकोण का उपयोग करके सोच और कार्रवाई में स्पष्टता लाने के लिए चीजों को सरल बनाने की कला सीखें। इसलिए हमने प्रशिक्षण पर जो प्रयास, समय और पैसा खर्च किया है, उससे वांछित परिणाम प्राप्त होने चाहिए और परिणामस्वरूप समृद्धि होगी। यद्यपि सहयोग डिफ़ॉल्ट रूप से होता है। मैं सभी संकायों और कर्मचारियों को सुझाव देता हूं कि वे सभी कारकों पर विचार करके आवश्यकता आधारित प्रशिक्षण कार्यक्रमों की योजना बनाने और उचित प्रशिक्षण विधियों और तकनीक को अपनाते हुए सरलीकरण प्रक्रिया के माध्यम से सामग्री वितरित करने के लिए पर्याप्त समय व्यतीत करें। अंत में हमें इसकी आवश्यकता है सहयोग मंत्रालय के सपने को प्राप्त करने के लिए अपनी आत्मा, मन और शरीर को एक निर्दिष्ट दिशा में संरेखित करके काम करें। मैं संस्थान द्वारा की जाने वाली प्रत्येक गतिविधि में उत्कृष्टता प्राप्त करने के लिए अपनी टीम का समर्थन करता हूं और उसके साथ काम करता हूं।",
    diractorContent3:
      "ग्रामीण भारत में संपूर्ण परिवर्तन लाने के लिए नवाचार और उद्यमिता मानसिकता समय की मांग है। इसलिए हमें ग्रामीण भारत को राष्ट्रीय अर्थव्यवस्था का हिस्सा बनाने के लिए सहकारी क्षेत्र के साथ काम करने के लिए ग्रामीण प्रतिभाओं को प्रोत्साहित करने और तैयार करने की आवश्यकता है। संस्थान ने लाने की योजना बनाई है सहकारिता मंत्रालय की अपेक्षा के अनुसार आवश्यकता आधारित, परिणाम/आउटपुट आधारित, अनुसंधान उन्मुख और व्यावहारिक दृष्टिकोण प्रशिक्षण कार्यक्रम डिजाइन करके हमारी प्रशिक्षण प्रणाली में समग्र परिवर्तन। मैं भारी बदलाव लाने के लिए सहकारी कर्मियों की मानसिकता को प्रज्वलित करने के लिए काइज़ोन अवधारणा को अपनाना चाहूंगा। : जिस तरह से लोग अपेक्षित परिणाम देने के लिए सोचते हैं, समझते हैं और चीजों पर अमल करते हैं।",
    facultiDeatailText: "संकाय की जानकारी",
    FacultiNametxt: "डॉ. किशोर कुमार",
    Facultirole: "निदेशक",
    Facultiqualifications: "डॉ., एम.कॉम।, सीटीएफसी",
    FacultiText2: "डॉ. अजय शर्मा",
    Facultirole2: "संकाय सदस्य",
    Facultiqualifications2: "डॉ., एम.ए., बी.एड, एलएलबी, सीटीएफसीआर",
    FacultiText3: "श्री पी.के. परिहार",
    Facultirole3: "संविदागों के संकाय सदस्य",
    Facultiqualifications3:
      "बी.कॉम, एम.कॉम, सीटीएफसी, सीपीसीबी स्तर-1, डीआईसीबी",
    AdminStaffTxt: "प्रशासनिक कर्मचारियों",
    tableName: "अतिथि संकाय",
    tableHead: "संकाय का नाम",
    tableHead2: "योग्यता",
    staffMemberName: "श्री श्रीकुमार जोशी",
    staffMemberQuali: "पूर्व. जेआरसी कॉपरेशन",
    staffMemberName2: "डॉ. नरेंद्र कुमार कुलश्रेष्ठ",
    staffMemberQuali2: "डॉ0 (प्रबंधन), एमबीए (विपणन), बी.एससी (हॉन्स)",
    staffMemberName3: "श्री राजेंद्र सक्सेना",
    staffMemberQuali3:
      "बी.ई. (मैकेनिकल इंजीनियरिंग), नेशनल ट्रेनर्स सॉफ्ट स्किल्स",
    staffMemberName4: "डॉ। श्रष्टि उमेकर",
    staffMemberQuali4:
      "डॉ0 (अर्थशास्त्र), एमबीए (विपणन और ग्रामीण प्रबंधन), बीए",
    staffMemberName5: "मिसेज रश्मी गोल्या",
    staffMemberQuali5:
      "एम कॉम, बी कॉम, पीजी डिप्लोमा (पीएम), डिप्लोमा (प्रबंधन), एमबीए (विपणन प्रबंधन)",
    staffMemberName6: "श्री प्रदीप मिश्रा",
    staffMemberQuali6: "एमएससी (सीएस), पीजीडीसीए, बीएससी।",
  };
  importantPage = {
    importantLinktext: "महत्वपूर्ण लिंक",
    impotentlinkHtt: "सहकारिता मंत्रालय, भारत सरकार",
    impotentlinkHtt1: "राष्ट्रीय सहकारी प्रशिक्षण परिषद, नई दिल्ली (मुख्यालय)",
    impotentlinkHtt2: "राष्ट्रीय कृषि और ग्रामीण विकास बैंक।",
    impotentlinkHtt3: "सहकारिता मंत्रालय, भारत सरकार",
    impotentlinkHtt4: "मध्य प्रदेश सरकार सहकारिता विभाग",
    impotentlinkHtt5: "एपेक्स बैंक",
    impotentlinkHtt6: "मध्य प्रदेश राज्य सहकारी विपणन संघ मर्यादित",
    impotentlinkHtt7: "एपेक्स यूनियन ऑनलाइन पाठ्यक्रम, भोपाल",
    impotentlinkHtt8: "एमपी राज्य लघु वन उत्पाद",
    impotentlinkHtt9: "मध्य प्रदेश मार्क फेडमिस",
    impotentlinkHtt10: "मध्य प्रदेश राज्य सहकारी डेयरी फेडरेशन लिमिटेड",
    impotentlinkHtt11: "एमपी राज्य सहकारी आवास संघ लिमिटेड, भोपाल",
    impotentlinkHtt12: "भारतीय खेती वानिकी विकास सहकारी",
    impotentlinkHtt13: "आमूल दूध",
    impotentlinkHtt14: "कृषक भारती सहकारी लिमिटेड",
  };
  coprativePage = {
    copHeading: "सहकारी समिति अधिनियम",
    coptitle1: "प्रारंभिक",
    coptitle2: "सहकारी समितियों के सदस्य और उनके अधिकार और दायित्व",
    coptitle3: "सहकारी समितियों का प्रबंधन",
    coptitle4: "चुनाव",
    coptitle5: "सहकारी समितियों के विशेषाधिकार",
    coptitle6: "सहकारी समितियों के राज्य सहायता",
    coptitle7: "सहकारी समितियों के विशेषाधिकार",
    coptitle8: "सहकारी समितियों की संपत्ति और निधियां",
    coptitle9: "लेखा, जांच और अतिरिक्त लागत",
    coptitle10: "विवादों का निपटारा",
    coptitle11: "सहकारी समितियों का समापन और विघटन",
    coptitle12: "भूमि विकास बैंक",
    coptitle13: "निर्णय, आदेश और निर्णय के प्रमाणन का कार्यान्वयन",
    coptitle14: "अपील, संशोधन और समीक्षा",
    coptitle15: "अपराध और दंड",
    coptitle16: "विविध",
  };
  ContactUspage = {
    ContactUsText: "संपर्क करें",
    AddresCont: "ई-8/77, त्रिलंगा रोड, शाहपुरा, भोपाल, पिन- 462039 (म.प्र.)",
    EmailCont: "icmbpl@gmail.com",
    PhoneCont: "फोन : (O) 0755-2725477",
    contWithUStxt: "हमसे संपर्क करें",
    userNamee: "उपयोगकर्ता नाम",
    UserEmail: "उपयोगकर्ता ईमेल",
    UserMsg: "संदेश",
    UserPhn: "फोन",
  };
  FacilitiePage = {
    facilitediscrib:
      "संस्थान वर्तमान तिथि को समाचार-पत्र दैनिक/साप्ताहिक और पत्रिकाएं सहित 20 से अधिक पत्र-पत्रिकाओं की सदस्यता लेता है। पुस्तकालय को योग्य पुस्तकालयकार द्वारा प्रबंधित किया जाता है और सभी पुस्तकों को पुस्तकालय के मानक विनिर्दिष्टीकरण के अनुसार व्यवस्थित किया जाता है ताकि पुस्तकों को आसानी से पहुंचा जा सके।",
    ComputerLabTxt: IndexHomePage.ComputerLabTxt,
    ComputerContent: IndexHomePage.ComputerContent,
    LibraryText: IndexHomePage.LibraryText,
  };
  services_text = [
    {
      icon: "computerIcon",
      imgSrc: computerIcon,
      title: "कंप्यूटर प्रयोगशाला",
      description:
        "आईसीएम भोपाल में एक आधुनिक कंप्यूटर प्रयोगशाला है, जिसमें आई5 और आई7 कंप्यूटर, इत्यादि सुविधा है, जो सहकारी कार्मिकों के लिए व्यावहारिक प्रशिक्षण को सुगम बनाता है। यह प्रयोगशाला, एक अलग केबिन में स्थित, 28 कंप्यूटरों को आरामदायक सीटिंग के साथ समेटती है।",
    },
    {
      icon: "LibIconIcon",
      imgSrc: LibIcon,
      title: "पुस्तकालय",
      description:
        "संस्थान में प्रबंधन, कानून, काव्य, साहित्य, वाणिज्य और सूचना प्रौद्योगिकी के विभिन्न क्षेत्रों पर 14 हजार से अधिक पुस्तकों वाला एक अच्छी संरचित पुस्तकालय है। संस्थान के पास सहकारी प्रबंधन, कानून, लेखा और लेखा-परीक्षा पर पुस्तकों का एक विशेष संग्रह है।",
    },
    {
      icon: "traningIcon",
      imgSrc: traningIcon,
      title: "कक्षाएँ",
      description:
        "संस्थान के पास एक स्वतंत्र प्रशासनिक ब्लॉक है जो 152 वर्ग मीटर क्षेत्र में फैला हुआ है। संस्थान के पास 134 वर्ग मीटर (एसी) सम्मेलन हॉल है जिसमें 80 व्यक्तियों की सीटिंग क्षमता है, 5 एसी कक्षाएँ, व्यवसायिक और प्रशिक्षण उद्देश्यों के लिए बढ़ी हुई वीडियो सम्मेलन सुविधा।",
    },
    {
      icon: "computerIcon",
      imgSrc: LeaningIcon,
      title: "सीखने केंद्र",
      description:
        "आईसीएम भोपाल के लर्निंग सेंटर में एक आधुनिक कंप्यूटर प्रयोगशाला है, जिसमें i5 और i7 कंप्यूटर,  इंटरनेट मल्टीमीडिया प्रोजेक्टर, और कटिंग-एज सॉफ़्टवेयर है, जो सहकारी कार्मिकों के लिए हैंड्स-ऑन प्रशिक्षण को संभव बनाते हैं। इसके अपने निर्धारित स्थान पर, प्रयोगशाला 28 कंप्यूटरों को प्रदान करती है।",
    },
    {
      icon: "LibIconIcon",
      imgSrc: LibIcon,
      title: "वेबिनार",
      description:
        "हमारे वेबिनार का केंद्र आईसीएम भोपाल में स्थित लर्निंग सेंटर को हाइलाइट करेगा, जिसमें आई5 और आई7 कंप्यूटर, एलएएन कनेक्टिविटी, इंटरनेट पहुंच, मल्टीमीडिया प्रोजेक्टर्स, और नवीनतम सॉफ़्टवेयर सुविधा है। यह सेटअप इंटरैक्टिव प्रशिक्षण सत्रों को संभव बनाता है, जो प्रशिक्षणार्थियों को बेहतर समझने में मदद करता है।",
    },
    {
      icon: "traningIcon",
      imgSrc: traningIcon,
      title: "सेमिनार",
      description:
        "हम एक सेमिनार आयोजित करेंगे, जिसमें आईसीएम भोपाल की लर्निंग हब को विशेष रूप से उत्कृष्ट कंप्यूटर सुविधा के साथ प्रस्तुत किया जाएगा, जो सहकारी कार्मिकों को इंटरैक्टिव प्रशिक्षण अनुभवों से सशक्त बनाने के लिए बनाया गया है। इसके विशेष क्षेत्र के अंदर, हब 28 कार्यस्थलों को आवंटित करता है।",
    },
    {
      icon: "traningIcon",
      imgSrc: traningIcon,
      title: "संगोष्ठी ",
      description:
        "आगामी संगोष्ठी उद्योग के नेताओं के लिए एक प्रवीण मंच प्रदान करता है, जहां उन्हें मिलकर दृष्टिकोण विनिमेय और मूल्यवान नेटवर्किंग के अवसरों को आशा है। आगंतुकों को योगदान करने का अवसर मिलेगा जब हम साझा करते हैं कि हम अपने क्षेत्रों को आगे बढ़ाने और मानवीय सहयोग को बढ़ाने की दिशा में साथ में प्रयास करते हैं।",
    },
    {
      icon: "traningIcon",
      imgSrc: StudyIcon,
      title: "अध्ययन सामग्री",
      description:
        "अध्ययन सामग्री जीवनशैली की महत्वपूर्ण जानकारियाँ इकट्ठा करने और चर्चा करने का एक प्रभावी तरीका प्रदान करती है। प्रतिभागियों को विचारशील वार्तालाप और मूल्यवान रिश्तों के अवसरों की संभावना है। अपने जानकारी को बढ़ाएं। समूह खोज और अपने शैक्षिक अनुभव को बढ़ावा देने के लिए अभी ही अपनी जगह आरक्षित करें।",
    },
  ];

  footerPage = {
    QuiKlinktxt: "त्वरित लिंक",
    socialIcns: "फेसबुक",
    socialIcns2: "लिंक्डइन",
    socialIcns3: "इंस्टाग्राम",
    socialIcns4: "यूट्यूब",
  };

  footerMenu = {
    title: "संपर्क करें",
    items: [
      {
        label: "ई-8/77, त्रिलंगा रोड, शाहपुरा, भोपाल, पिन- 462039 (म.प्र.)",
        link: "#",
      },
      {
        label: "फोन : (O) 0755-2725477,",
        link: "#",
      },
      {
        label: "फैक्स: (0755) 4034733",
        link: "#",
      },
      {
        label: "ईमेल: icmbpl@gmail.com",
        link: "icmbpl@gmail.com",
      },
    ],
  };
  quickLinksMenu = [
    { label: "होम", link: "/" },
    { label: "हमारे बारे में", link: "/about_us" },
    { label: "महत्वपूर्ण लिंक", link: "/important" },
    { label: "सुविधाएँ", link: "/facilites" },
    { label: "संपर्क", link: "/contact_Us" },
  ];

  staffData = [
    [
      { name: "सुश्री मेघा सतारकर", position: "यूडीसी", imageSrc: staff2 },
      {
        name: "सुश्री मीता जैन",
        position: "पुस्तकालय और सूचना सहायक/ ओएस आई/सी आई/सी",
        imageSrc: staff1,
      },
      {
        name: "श्री अंजनी कुमार",
        position: "लोअर डिवीजन क्लर्क",
        imageSrc: staff12,
      },

      {
        name: "श्री अजय सिंह गौतम",
        position: "लोअर डिवीजन क्लर्क",
        imageSrc: staff3,
      },
    ],
    [
      {
        name: "श्री प्रमोद शर्मा",
        position: "लोअर डिवीजन क्लर्क",
        imageSrc: staff4,
      },
      {
        name: "श्री प्रदीप माथुर",
        position: "एमटीएस/ नोडल ऑफिसर (सोशल मीडिया)",
        imageSrc: staff9,
      },
      {
        name: "श्री सुनील कुमार धोके",
        position: "मल्टी टास्किंग स्टाफ",
        imageSrc: staff5,
      },
    ],
    [
      {
        name: "श्री दीपक लोहाट",
        position: "मल्टी टास्किंग स्टाफ",
        imageSrc: staff7,
      },
      {
        name: "श्री प्रभात पटेल",
        position: "मल्टी टास्किंग स्टाफ",
        imageSrc: staff8,
      },
      {
        name: "श्री शिव दास कचोटिया",
        position: "मल्टी टास्किंग स्टाफ",
        imageSrc: staff6,
      },
    ],
  ];
  Programcomt = {
    programHeader: "कार्यक्रम सलाहकार समिति, भोपाल",
    programHeade2:
      "सहकारी समितियों के आयुक्त और पंजीकरण अधिकारी, विंध्याचल सी विंग, भोपाल - 462003",
    tableheading1: "पद",
    tableheading2: "संगठन",
    tableheading3: "भूमिका",
  };
  data = [
    {
      position: "प्रबंध निदेशक",
      organization: "म.प्र. राज्य सहकारी बैंक, न्यू मार्केट, टी.टी. नगर, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization:
        "मध्य प्रदेश राज्य सहकारी कृषि और ग्रामीण विकास बैंक, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization:
        "मध्य प्रदेश राज्य सहकारी विप्नन संघ, जहांगीराबाद, महेश्वरी भवन, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization:
        "मध्य प्रदेश राज्य सहकारी संघ माई.टी.डी.टी, ई- 8/77 त्रिलंगा रोड, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "मध्य प्रदेश राज्य सहकारी उपभोगता संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "मध्य प्रदेश राज्य सहकारी आवास संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "मध्य प्रदेश राज्य सहकारी आवास संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization:
        "मध्य प्रदेश राज्य सहकारी लघु वनोपज व्यापार और विकास सहकारी संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "क्षेत्रीय निदेशक",
      organization: "राष्ट्रीय सहकारी विकास निगम (एनसीडीसी), भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization:
        "मध्य प्रदेश राज्य सहकारी अनुच्छित जाति वित्त विकास निगम, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "म.प्र. राज्य मत्स्य संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "निदेशक",
      organization: "हस्तशिल्प निदेशालय, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "मध्य प्रदेश राज्य सहकारी दुग्ध संघ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "प्रबंध निदेशक",
      organization: "मध्य प्रदेश खादी ग्रामोद्योग बोर्ड, भोपाल",
      role: "सदस्य",
    },
    {
      position: "निदेशक",
      organization: "प्रबंधन अध्ययन केंद्र, भोपाल",
      role: "सदस्य",
    },
    {
      position: "संयुक्त आयुक्त",
      organization: "सहकारी समितियों म.प्र., भोपाल",
      role: "सदस्य",
    },
    {
      position: "निदेशक",
      organization: "आईसीडीपी परियोजना सहकारी समितियाँ, भोपाल",
      role: "सदस्य",
    },
    {
      position: "निदेशक",
      organization: "सहकारी प्रबंधन संस्थान, भोपाल",
      role: "आयोजक",
    },
  ];
  GuestTabledata = [
    {
      Name: "श्री श्रीकुमार जोशी",
      Qualification: "पूर्वावत्तित जेआरसीएस सहयोग",
    },
    {
      Name: "डॉ। नरेंद्र कुमार कुलश्रेष्ठ",
      Qualification: "डॉ (प्रबंधन), एमबीए (मार्केटिंग), बी.एससी (सम्मान)",
    },
    {
      Name: "श्री राजेंद्र सक्सेना",
      Qualification:
        "बी.ई. (यांत्रिक इंजीनियरिंग), राष्ट्रीय प्रशिक्षक सॉफ्ट स्किल्स",
    },
    {
      Name: "डॉ। श्रिष्टि उमेकर",
      Qualification:
        "डॉ (अर्थशास्त्र), एमबीए (मार्केटिंग और ग्रामीण प्रबंधन), मास्टर ऑफ बिजनेस इकोनॉमिक्स (मार्केटिंग और ग्रामीण प्रबंधन), बीए",
    },
    {
      Name: "श्रीमती रश्मि गोलया",
      Qualification:
        "एम कॉम, बी कॉम, पीजी डिप्लोमा (पीएम), डिप्लोमा (प्रबंधन), एमबीए (मार्केटिंग प्रबंधन)",
    },
    {
      Name: "श्री प्रदीप मिश्रा",
      Qualification: "एमएससी (कंप्यूटर विज्ञान), पीजीडीसीए, बीएससी",
    },
  ];
}

export {
  HeaderPage,
  AboutPage,
  IndexHomePage,
  SyllabusPage,
  StaffPage,
  importantPage,
  coprativePage,
  ContactUspage,
  FacilitiePage,
  services_text,
  footerPage,
  companyMenu,
  footerMenu,
  quickLinksMenu,
  footerCopyright,
  language_MAIN,
  staffData,
  Programcomt,
  data,
  GuestTabledata,
};
