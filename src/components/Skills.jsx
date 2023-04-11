import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import { BsGithub } from 'react-icons/bs'
// import { BiLinkExternal } from 'react-icons/bi'

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get('https://dev.darrinduncan.com/wp-json/wp/v2/skills')
      .then((res) => {
        setSkills(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Woops! something went wrong!")
      })
  }, [])


  return (
    <section id="Skills" className="skills">
      <div className="container">
        <div className="col-12">
          <h2>Skills</h2>
          <p className="para">As a problem solver I build fullstack web applications using technology like HTML, CSS, JavaScript, React JS and MongoDB. I have highlighted some of the key technical skills that I will bring to your project.</p>
        </div>
        <div className="col-lg-12 grid">
          { 
            skills.sort((a, b) => a.id - b.id)
            .map((skill, index) => (
              <div key={index}>
                <div className="text-center skill-card">
                      <h4>{skill.title.rendered}</h4>
                      <p className="card-text">{skill.acf.skill_excerpt}</p>
                    </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skills

