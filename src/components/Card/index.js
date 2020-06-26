import React from 'react'

import projectThumb from '../../assets/projects/projectThumb.svg'

export default function Card(props) {
  return (
    <div className="card">
      <img
      src={props.img ? props.img : projectThumb}
      alt={props.name}
      />

      <div className="info">
        <div>
          <h2>{props.name}</h2>

          <a
            href={props.repo}
            target='_blank'
            rel='noreferrer'
          >
            {props.repo}
          </a>

          <p>
            {props.description}
          </p>
        </div>

        <span>
          Tecnologias: <span>{props.techs}</span>
        </span>
      </div>
    </div>
  )
}