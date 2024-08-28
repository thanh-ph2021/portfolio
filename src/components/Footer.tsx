import '../css/FooterStyles.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <h3>Copyright © 2024. All rights reserved.</h3>
      <div className="social-media">
        <a href='https://www.linkedin.com/in/ph%E1%BA%A1m-thanh-a00936215/' target="_blank" aria-label="LinkedIn Profile">
          <FaLinkedin size={25} />
        </a>
        <a href='https://github.com/thanh-ph2021' target="_blank" aria-label="Github Profile">
          <FaGithub size={25} />
        </a>
      </div>
    </footer>
  )
}