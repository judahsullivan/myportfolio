import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Judah Sullivan. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://github.com/judahsullivan",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://dev.to/judahsullivan",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/judah-sullivan-899a2511a/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.youtube.com/channel/UCQDPEaS3UUstGotV8JAEc9A",
        label: "Youtube Channel",
        type: "red",
        icon: <FaYoutube />
      },
      {
        url: "mailto:sullivan.judah95@gmail.com",
        label: "Judah Sullivan",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
