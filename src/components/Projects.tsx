import '../css/ProjectsStyles.css';

export const Projects = () => {

  const projects = []

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-content">
          {projects.length == 0 ? (
            <h1>New projects coming soon..🤠</h1>
          ) : (
            <div className='projects-title'>
              <p >Projects</p>
              <h3>Each project is a unique piece of development 📗</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}