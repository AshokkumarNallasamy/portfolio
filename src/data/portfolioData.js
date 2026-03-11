import { FaApple, FaLaptopCode, FaDownload, FaMobile, FaGithub, FaLinkedin, FaWhatsapp, FaSwift } from 'react-icons/fa';
import { SiXcode, SiFirebase, SiSwift, SiAppstore } from 'react-icons/si';

export const skillsData = [
  {
    category: "iOS Development",
    icon: FaApple,
    skills: [
      "Swift, SwiftUI, UIKit, Combine",
      "CoreData, offline caching, persistence",
      "SwiftUI + UIKit hybrids with MVVM",
      "Smooth animations & transitions",
      "Async/await networking & background tasks"
    ]
  },
  {
    category: "Tools & Delivery",
    icon: SiXcode,
    skills: [
      "Xcode, Instruments, Fastlane",
      "Git, GitHub, CI/CD hygiene",
      "CocoaPods, Swift Package Manager",
      "App Store Connect, TestFlight, certificates",
      "Crash monitoring & analytics"
    ]
  },
  {
    category: "Architecture & Quality",
    icon: FaSwift,
    skills: [
      "MVVM, Clean Architecture, SOLID",
      "Protocol-oriented design, modularization",
      "REST & GraphQL API integration",
      "XCTests, XCUITests, performance profiling",
      "Accessibility & user-centric UI polish"
    ]
  },
  {
    category: "APIs & Collaboration",
    icon: SiFirebase,
    skills: [
      "REST/GraphQL with Alamofire & URLSession",
      "Firebase, notifications, crash reporting",
      "Async/await data flows & Combine",
      "Agile delivery, cross-functional teamwork",
      "AI tools: GitHub Copilot, ChatGPT/Claude"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "JusRide – Social Cycling & Bicycle Service",
    description: "Built a social platform for cyclists to connect, interact, and book services using a hybrid SwiftUI + UIKit approach with MVVM.",
    icon: FaApple,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    shadowColor: "rgba(0,122,255,0.4)",
    points: [
      "Integrated Alamofire + Combine for reactive API handling",
      "Added OLA Maps SDK for navigation and nearby service discovery",
      "Implemented CoreData offline caching for uninterrupted UX",
      "Shipped smooth animations and interactive UI using SwiftUI"
    ],
    tags: ["SwiftUI", "UIKit", "Combine", "CoreData"],
    link: "https://apps.apple.com/in/app/jus-ride/id6532623976"
  },
  {
    id: 2,
    title: "Employee Management App (Internal)",
    description: "Delivered an internal enterprise iOS app built entirely with SwiftUI and MVVM, focused on reliability and productivity.",
    icon: SiFirebase,
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    shadowColor: "rgba(88,86,214,0.4)",
    points: [
      "Implemented leave requests, approvals, attendance, and timesheets",
      "Added internal chat/collaboration features with async/await APIs",
      "Integrated backend services with secure REST endpoints",
      "Optimized UI polish, performance, and crash-free reliability"
    ],
    tags: ["SwiftUI", "MVVM", "Async/Await", "REST"]
  }
];

export const experienceData = [
  {
    title: "iOS Developer",
    company: "Milespeak Technologies Pvt Ltd, Chennai",
    period: "Feb 2024 – Present",
    points: [
      "Built and maintained scalable enterprise iOS apps with Swift, SwiftUI, UIKit, and Combine",
      "Developed feature-rich social, booking, and enterprise apps following MVVM architecture",
      "Integrated REST APIs using Alamofire + Combine and async/await, improving reliability",
      "Implemented reusable UI components, smooth animations, and CoreData offline persistence",
      "Refactored legacy code for maintainability, readability, and performance",
      "Led app deployments via App Store Connect, TestFlight, certificates, and provisioning",
      "Authored XCTests/XCUITests, monitored crashes, and optimized stability pre-release",
      "Partnered with designers, backend engineers, and QA for polished, on-time releases"
    ]
  }
];

export const certificationsData = [
  {
    title: "Java FullStack Development",
    org: "QSpiders",
    year: "2023"
  },
  {
    title: "iOS App Development with Swift",
    org: "Udemy",
    year: "2024"
  }
];

export const educationData = [
  {
    degree: "B.Sc. Mathematics",
    school: "Gandhigram Rural Institute, Dindigul",
    result: "CGPA: 7.1 / 10",
    period: "Aug 2020 – May 2023"
  },
  {
    degree: "HSC",
    school: "Akshaya Academy Hr. Sec School, Dindigul",
    result: "Percentage: 85%",
    period: "Jun 2019 – Mar 2020"
  }
];

export const EMAIL = "ashokkumarnallasamy@gmail.com";

export const navigationLinks = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Resume', id: 'resume' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' }
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/AshokkumarNallasamy" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashokkumar01" },
  { icon: FaWhatsapp, href: "https://wa.me/9360436613?text=Hey%20Ashokkumar!" }
];
