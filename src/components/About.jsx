import React, { useEffect, useState } from 'react';
import axios from 'axios'
    
export default function About() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
      axios
          .get('https://dev.darrinduncan.com/wp-json/wp/v2/pages/989')
          .then((res) => {
              setTitle(res.data.title.rendered)
              setContent(res.data.content.rendered)
              console.log(res.data)
          })
          .catch((err) => {
              console.log("Woops! something went wrong!")
              console.log(err.message)
          })
  }, [])


  return (
    <>
      <section id="About" className="about">
        <div className="container">
          <div className="about-body">
            <div className="about-img"></div>
            
            <div className="content">
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="mt-4">
                <a href="#Contact" className="btn btn-primary btn-lg">Let's Connect</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
 );
}