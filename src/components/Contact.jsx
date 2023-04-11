import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Contact() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    axios
      .get('https://dev.darrinduncan.com/wp-json/wp/v2/pages/1008')
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
    <section id="Contact" className="contact align-items-center brdr-bottom">
      <div className="container">
        <div className="text-center">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>If you have a question or just want to say hello, my inbox is always open. I'll try my best to get back to you as soon as possible!</p>
          <a href="mailto:darrin@darrinduncan.com" className="btn btn-org btn-lg">Say Hello!</a></div>

      </div>

    </section>
  )
}

export default Contact