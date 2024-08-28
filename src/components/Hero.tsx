import { FaGithub, FaLinkedin } from "react-icons/fa"
import "../css/HeroStyles.css"

export const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>React native Developer 👋</h1>
                            <p>Hi, I"m Hoai Thanh. A passionate React Native Developer based in Ho Chi Minh city, Vietnam 🎈</p>
                            <span>
                                <a href='https://www.linkedin.com/in/ph%E1%BA%A1m-thanh-a00936215/' aria-label="LinkedIn Profile" target="_blank">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href='https://github.com/thanh-ph2021' aria-label="LinkedIn Profile" target="_blank">
                                    <FaGithub size={20} />
                                </a>
                            </span>
                        </div>
                        <div className="hero-img"></div>

                    </div>
                    <div className="skills">
                        <p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" /></li>
                                <li><img src="https://skillicons.dev/icons?i=react,redux" alt="skill-icon" /></li>
                                <li><img src="https://skillicons.dev/icons?i=figma,firebase" alt="skill-icon" /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}