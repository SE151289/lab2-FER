import React from 'react'
import '../css/films.css'
import { useState } from 'react'
export default function Film({ films }) {
    const [film, setFilm] = useState([])
    return (
        <div className='container' id='theme'>
            {films.map(film => (
                <div className='card' key={film.id}>
                    <img src={film.image} alt=''></img>
                    <h2 className='title'>{film.title}</h2>
                    <p className='year'>{film.year}</p>
                    <h3 className='nation'>{film.nation}</h3>
                    <p><button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
                </div>
            ))}
            <div id='popup1' className='overlay'>
          <div className='popup'>
          <img src={film.image}/>
          <h2>{film.name}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {film.info}
          </div>
          </div>
        </div>
        </div>
    )
}
