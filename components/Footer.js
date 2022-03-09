import React from "react";
import styles from "../styles/Footer.module.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="flex justify-center items-center">
        <a href="https://github.com/FlorezAdam-FS" target="_blank" noreferrer>
          <FiGithub className="text-white text-2xl mr-10 hover:text-orange" />
        </a>
        <a
          href="https://www.instagram.com/adamflorezdesigns/"
          target="_blank"
          noreferrer
        >
          <FiInstagram className="text-white text-2xl mr-10 hover:text-orange" />
        </a>
        <a
          href="https://www.linkedin.com/in/adamflorez/"
          target="_blank"
          noreferrer
        >
          <FiLinkedin className="text-white text-2xl hover:text-orange" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
