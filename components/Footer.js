import React from "react";
import styles from "../styles/Footer.module.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="flex justify-center items-center">
        <a href="https://github.com/FlorezAdam-FS">
          <FiGithub className="text-white text-2xl mr-10 hover:text-orange" />
        </a>
        <a href="https://www.instagram.com/adamflorezdesigns/">
          <FiInstagram className="text-white text-2xl mr-10 hover:text-orange" />
        </a>
        <a href="https://www.linkedin.com/in/adamflorez/">
          <FiLinkedin className="text-white text-2xl hover:text-orange" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
