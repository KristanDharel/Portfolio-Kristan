import {
  FaReact,
  FaServer,
  FaCloud,
  FaMobile,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const services = [
  {
    title: "Custom Web Development",
    description:
      "Building responsive, high-performance web applications using React, Angular, and modern JavaScript frameworks.",
    icon: FaReact,
  },
  {
    title: "Backend Services",
    description:
      "Developing robust backend systems with Node.js, Express, and .NET Core for scalable applications.",
    icon: FaServer,
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on AWS cloud services including EC2, S3, and RDS.",
    icon: FaCloud,
  },
  {
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs and WebSocket services for seamless integration.",
    icon: FaCode,
  },
  {
    title: "Database Management",
    description:
      "Working with both SQL and NoSQL databases to ensure optimal data storage and retrieval.",
    icon: FaDatabase,
  },
  {
    title: "Mobile Responsive Design",
    description:
      "Creating applications that provide excellent user experience across all device sizes.",
    icon: FaMobile,
  },
];

export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product management, cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Khalti"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },

  {
    title: "Real-time Chat App",
    description:
      "A chat application with real-time messaging and notification features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },

  {
    title: "Online Bidding Platform",
    description:
      "A real-time auction site with live bidding functionality and notifications.",
    tech: ["MERN Stack", "Socket.io", "Redux", "PayPal API"],
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/KristanDharel/AdvanceRTC.git",
    live: "https://example.com",
  },
  {
    title: "Video Call Platform",
    description:
      "A web-based video conferencing application with screen sharing and chat.",
    tech: ["MERN Stack", "WebRTC", "Socket.io", "Material UI"],
    image:
      "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Book E-commerce",
    description:
      "An online bookstore with advanced search, recommendations, and reviews.",
    tech: [".NET Core", "React", "SQL Server", "Azure Blob Storage"],
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/KristanDharel/Kathalaya.git",
    live: "https://example.com",
  },
  {
    title: "Expense Tracker",
    description:
      "A cross-platform application for tracking personal finances with analytics.",
    tech: ["C#", ".NET MAUI", "Blazor", "SQLite"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/KristanDharel",
    live: "https://example.com",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/KristanDharel", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kristan-dharel-298607252/",
    icon: FaLinkedin,
  },
];
