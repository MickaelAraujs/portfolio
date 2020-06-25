import React from 'react'

import projectThumb from '../../assets/projects/projectThumb.svg'

export default function Card() {
  return (
    <div className="card">
      <img src={projectThumb} alt='Very Useful Tools To Remember'/>

      <div className="info">
        <div>
          <h2>Very Useful Tools To Remember</h2>

          <a
            href='https://github.com/MickaelAraujs/vuttr'
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/MickaelAraujs/vuttr
          </a>

          <p>
            repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.
          </p>
        </div>

        <span>
          Tecnologias: <span>CSS, Javascript, ReactJS</span>
        </span>
      </div>
    </div>
  )
}