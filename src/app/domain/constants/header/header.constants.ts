import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaTag,
  FaEnvelope,
} from "react-icons/fa";

export const NAV_ITEMS = [
  {
    to: "/bienvenidos",
    icon: FaHome,
    text: "bienvenidos",
    auth: null,
  },
  {
    to: "/",
    icon: FaHome,
    text: "Home",
    auth: null,
  },
  {
    to: "/agenda-activities",
    icon: FaCalendarAlt,
    text: "Agenda de actividades",
    auth: true,
  },
  {
    to: "/discover-Ecuador-travel",
    icon: FaInfoCircle,
    text: "Conoce Ecuador Travel",
    auth: true,
  },
  {
    to: "/catalog",
    icon: FaBook,
    text: "Catálogo",
    auth: true,
  },
  {
    to: "/commercial-proposal",
    icon: FaHandshake,
    text: "Propuesta Comercial",
    auth: true,
  },
  {
    to: "/packages",
    icon: FaTag,
    text: "Paquetes",
    auth: true,
  },
  {
    to: "/contact",
    icon: FaEnvelope,
    text: "Contáctanos",
    auth: true,
  },
];
