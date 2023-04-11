import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get('https://dev.darrinduncan.com/wp-json/wp/v2/projects')
      .then((res) => {
        setProjects(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Woops! something went wrong!")
      })
  }, [])


  return (
    <section id="Projects" className="projects d-flex align-items-center brdr-bottom brdr-bottom">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="row row-cols-1 row-cols-lg-3">
          {
            projects.map((project, index) => (
              <div key={index}>
                <div className="col mb-4">
                  <div className="card">
                    <img className="p-0 card-img" src={project.acf.project_image} alt={project.title.rendered} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title.rendered}</h5>
                      <p className="card-text">{project.acf.project_excerpt}</p>
                      <div className="card-button-group text-center">
                        <a href={project.acf.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><BiLinkExternal /> Demo</a>
                        <a href={project.acf.git} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><BsGithub /> Code</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Projects

