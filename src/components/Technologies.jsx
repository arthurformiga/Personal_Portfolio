import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass
} from 'react-icons/di'

import '../styles/components/technologies.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];

const Technologies = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div key={tech.id} id={tech.id} className="technology-card">
                   {tech.icon} 
                   <div className="technology-info">
                    <h3>{tech.name}</h3>
                   </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Technologies