import { FaGithub, FaCameraRetro, FaMobileAlt  } from 'react-icons/fa';
import '../css/ProjectsStyles.css';
import { Link } from 'react-router-dom';

export type ProjectModel = {
  id: number,
  bannerUrl: string,
  title: string,
  description: string,
  tech: string[],
  screenshotUrl: string,
  numberScreenshot: number
}

export const projects: ProjectModel[] = [
  {
    id: 1,
    bannerUrl: 'https://raw.githubusercontent.com/thanh-ph2021/Social-App-RN-Firebase/refs/heads/main/screenshots/Cover_1.png',
    title: 'Social.',
    description: 'Social. app is a dynamic app offering features like posting text, images, videos, GIFs, creating stories, messaging, push notifications, and quick post search. Connect and share effortlessly!',
    tech: ['React Native', 'Redux', 'Firebase'],
    screenshotUrl: `https://raw.githubusercontent.com/thanh-ph2021/Social-App-RN-Firebase/refs/heads/main/screenshots/`,
    numberScreenshot: 37
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
            {projects.map(project => {
              return (
                <div className='project-item'>
                  <img src={project.bannerUrl} />
                  <div className='project-title'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='project-tech'>
                      {project.tech.map((item) => (
                        <h4>{item}</h4>
                      ))}
                    </div>
                    <div className='project-footer'>
                      <a href='https://github.com/thanh-ph2021/Social-App-RN-Firebase' target="_blank" aria-label="Github Social Project">
                        <h4>Github<FaGithub size={25} /></h4>
                      </a>
                      <Link to={`/portfolio/project/${project.id}`}><h4>Screenshots<FaCameraRetro size={25} /></h4></Link>
                      <a
                        href='https://github.com/thanh-ph2021/Social-App-RN-Firebase/raw/main/demo/app-release.apk'
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download the APK file"
                      >
                        <h4>Download<FaMobileAlt  size={25} /></h4>
                      </a>
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