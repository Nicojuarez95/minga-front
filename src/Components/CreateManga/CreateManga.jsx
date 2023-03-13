import React, { useState } from 'react';
import { useRef } from 'react';
import './CreateManga.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import alertActions from "../../store/Alert/actions";
const {open} = alertActions

export default function CreateManga() {
    const [categories, setCategories] = useState([]);
    const [categoria, setCategoria] = useState(null);
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let cover_photo = useRef();
    const form = useRef();
    const store = useSelector(store=>store)
    let dispatch = useDispatch()


    async function handleSubmit(e) {
        e.preventDefault();
        const filteredCategory = categories.find((category) => (category.name == categoria))
        let manga = {
            title: title.current.value,
            description: description.current.value,
            cover_photo: cover_photo.current.value,
            category_id: filteredCategory._id,
            author_id: "640b33c55b1f46e6dfc8b91c"
        };
        

        const url = 'http://localhost:8000/createmanga';
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        
        try {
            await axios.post(url, manga, headers, {
            });
            let dataAlert = {
                icon: 'success',
                title: "Manga created successfully"
              }
              dispatch(open(dataAlert))
            form.current.reset()
        } catch (error) {
            let dataAlert = {
                icon: 'error',
                title: error.response.data.message
              }
              dispatch(open(dataAlert))
        }
    }

    async function renderCategory() {
        try {
          const response = await axios.get("http://localhost:8000/createmanga");
          setCategories(response.data.categories);
        } catch (error) {
          console.log(error);
        }
      }



    return (
        <div className='content-form'>
            <h1>New Manga</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert title' ref={title} />
                </fieldset>
                <fieldset className='fieldsetMove'>
                    <select className='inputMove' id='selectMove' ref={category} onClick ={renderCategory} onChange={(e)=> setCategoria(e.target.value)}>
                        <option value=''>Select a category</option>
                        {categories.map(categoria => <option key={categoria.name} value={categoria.name}>{categoria.name}</option>)}

                    </select>

                </fieldset>

                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert description' ref={description} />
                </fieldset>
                <fieldset className='fieldsetMove'>
                    <input className='inputMove' type='text' placeholder='Insert cover photo' ref={cover_photo} />
                </fieldset>
                <button className='btn-manga' type='submit'>
                    Send
                </button>
            </form>
        </div >
    );
}
