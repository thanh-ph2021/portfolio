import { FaGithub, FaCameraRetro, FaMobileAlt, FaReact, FaDatabase, FaCloud, FaSave, FaChartBar } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si"
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import '../css/ProjectsStyles.css';

export type ProjectModel = {
  id: number,
  bannerUrl: string,
  title: string,
  description: string,
  tech: { icon: ReactNode, name: string }[],
  screenshotUrl: string,
  numberScreenshot: number,
  githubUrl: string,
  googlePlayUrl?: string,
  apkDownloadUrl?: string,
}

export const projects: ProjectModel[] = [
  {
    id: 1,
    bannerUrl: 'https://raw.githubusercontent.com/thanh-ph2021/Social-App-RN-Firebase/refs/heads/main/screenshots/Cover_1.png',
    title: 'Social.',
    description: 'Social. app is a dynamic app offering features like posting text, images, videos, GIFs, creating stories, messaging, push notifications, and quick post search. Connect and share effortlessly!',
    tech: [
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaDatabase />, name: "Redux" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    screenshotUrl: `https://raw.githubusercontent.com/thanh-ph2021/Social-App-RN-Firebase/refs/heads/main/screenshots/`,
    numberScreenshot: 37,
    githubUrl: 'https://github.com/thanh-ph2021/Social-App-RN-Firebase',
    apkDownloadUrl: 'https://github.com/thanh-ph2021/Social-App-RN-Firebase/raw/main/demo/app-release.apk',
  },
  {
    id: 2,
    bannerUrl: 'https://raw.githubusercontent.com/thanh-ph2021/dailytask/main/screenshots/cover-1.png',
    title: 'DailyTask',
    description: 'Dailytask is an application that helps you manage your daily tasks efficiently, supports data synchronization with Google Drive, and tracks work progress.',
    tech: [
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaDatabase />, name: "Redux" },
      { icon: <FaCloud />, name: "Google Drive API" },
      { icon: <FaSave />, name: "AsyncStorage" },
      { icon: <FaChartBar />, name: "Victory Native" },
    ],
    screenshotUrl: `https://raw.githubusercontent.com/thanh-ph2021/dailytask/main/screenshots/`,
    numberScreenshot: 22,
    githubUrl: 'https://github.com/thanh-ph2021/dailytask',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.dtaskapp',
  },
]


export const Projects = () => {


  return (
    <section className="projects" id="projects">
      <div className="container">
        {projects.length == 0 ? (
          <h1>New projects coming soon..🤠</h1>
        ) : (
          <>
            <div className='projects-title'>
              <p >PORTFOLIO</p>
              <h3>Each project is a unique piece of development</h3>
            </div>
            {projects.map((project, index) => {
              return (
                <div className={`project-item ${index % 2 === 0 ? '' : 'even'}`} key={project.id}>
                  <img src={project.bannerUrl} />
                  <div className='project-title'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='project-tech'>
                      {project.tech.map((tech, index) => (
                        <div className="tech-item" key={index}>
                          {tech.icon} {tech.name}
                        </div>
                      ))}
                    </div>
                    <div className='project-footer'>
                      <a href={project.githubUrl} target="_blank" aria-label="Github Social Project">
                        <h4>Github<FaGithub size={25} /></h4>
                      </a>
                      <Link to={`/portfolio/project/${project.id}`}><h4>Screenshots<FaCameraRetro size={25} /></h4></Link>
                      {project.googlePlayUrl ? (
                        <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                          <img
                            className="google-play-badge"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                          />
                        </a>
                      ) : (
                        <a
                          href={project.apkDownloadUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Download the APK file"
                        >
                          <h4>Download<FaMobileAlt size={25} /></h4>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
    </section>
  )
}