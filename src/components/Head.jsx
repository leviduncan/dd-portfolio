import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FaHamburger } from 'react-icons/fa'

const Head = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios
      .get('https://dev.darrinduncan.com/wp-json/wp/v2/pages')
      .then((res) => {
        setPages(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Woops! something went wrong!")
      })
  }, [])
  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/"><div className="logo">D</div></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaHamburger />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center justify-content-between">
            {
              pages.sort((a, b) => a.menu_order - b.menu_order)
                .map((page) => (
                  <li key={page.id} className="nav-item">
                    <a className="nav-link" href={`#${page.title.rendered}`}>{page.title.rendered}</a>
                  </li>
                ))
            }


            {/* <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li> */}
          </ul>
        </div>
      </div>
    </nav>

  )
};

export default Head;
