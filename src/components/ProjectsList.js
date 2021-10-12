import ProjectCard from './ProjectCard'

import './ProjectsList.css'

const ProjectsList = () => {
  return (
    <div className="ProjectsList">
      <h2>My awsome projects</h2>
      <div className="ProjectsList-list">
        <ProjectCard title="First Project" img="https://via.placeholder.com/150.png" desc="A small description of my first project that I'm proud of"/>
        <ProjectCard title="Second Project" img="https://via.placeholder.com/150.png" desc="A small description of my Second project that I'm proud of"/>
        <ProjectCard title="Third Project" img="https://via.placeholder.com/150.png" desc="A small description of my Third project that I'm proud of"/>
        <ProjectCard title="Fourth Project" img="https://via.placeholder.com/150.png" desc="A small description of my Fourth project that I'm proud of"/>
        <ProjectCard title="Fifth Project" img="https://via.placeholder.com/150.png" desc="A small description of my Fifth project that I'm proud of"/>
        <ProjectCard title="sixth Project" img="https://via.placeholder.com/150.png" desc="A small description of my sixth project that I'm proud of"/>
        <ProjectCard title="seventh Project" img="https://via.placeholder.com/150.png" desc="A small description of my seventh project that I'm proud of"/>
      </div>
    </div>
  )
}

export default ProjectsList
