import './ProjectCard.css'

const ProjectCard = ({title, img, desc}) => {
  return (
    <div className="ProjectCard">
      <h3 className="ProjectCard-title">{title}</h3>
      <img className="ProjectCard-img" src={img} alt={title} />
      <p className="ProjectCard-desc">{desc}</p>
    </div>
  )
}

export default ProjectCard
