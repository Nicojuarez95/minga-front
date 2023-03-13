import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import './Page.css';


export default function Page() {
  const navigate = useNavigate();
  const { id, page } = useParams();
  const url = 'http://localhost:8000/chapters/';
  const [chapter, setChapter] = useState({});
  const [next, setNext] = useState('');
  let [index, setIndex] = useState(Number(page));


  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then(response => {
        setChapter(response.data.chapter);
        setNext(response.data.next);
        

      }
      )
      .catch((error) => console.error(error));
  }, []);

  const handlePrev = () => {
    setIndex(index - 1)
    navigate(`/chapters/${id}/${index - 1}`)
    if (index <= 0) {
        navigate(`/mangas/${chapter.manga_id}/`)
    }
}

const handleNext = () => {
    setIndex(index + 1)
    navigate(`/chapters/${id}/${index + 1}`)
    if (index >= chapter.pages.length -1) {
        navigate(`/chapters/${next}/${0}`)

}
}


return (
  <div className="mover">
    <div className="div-chapter2">
      <p className="parrafo-chapter2"> Cap N°  {chapter.order} - {chapter.title} </p>
    </div>
    <div className="contenedor-capitulos">
      <button className="boton-back" onClick={handlePrev}>
        <img className="flecha" src='/flecha-izquierda.png' alt="" />
      </button>

      <div className='posi'>
          <img className='imgChapter' src={chapter?.pages?.[index]} alt="" />
        </div>

      <button className="boton-next" onClick={handleNext}>
        <img className="flecha" src='/flecha-correcta.png' alt="" />
      </button>
    </div>
    <div className="div-chapter3">
      <div className="chapter3">
        <p className="parrafo-chapter3">
          <img className="comment" src='/icon_comment.png' alt="" /> numero del capítulo
        </p>
      </div>
    </div>
  </div>
);
}