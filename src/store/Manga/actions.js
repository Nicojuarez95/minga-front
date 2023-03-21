import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureManga = createAsyncThunk(
    'captureManga',
    async({ manga_id }) =>{
        try{
            let response = await axios.get('https://minga-vrxh.onrender.com/mangas-form/' + manga_id)
            return {
                manga:response.data.manga
            }
        } catch (error){
            console.log(error)
            return {
                manga: []
            }
        }
    }
)
const captureChapter = createAsyncThunk(
    'captureChapter',
    async ({ manga_id, page }) => {
        try{
            let response = await axios.get('https://minga-vrxh.onrender.com/chapters?manga_id=' + manga_id + "&page=" + page)
            // console.log(response)
            return { chapter: response.data.chapter }
        } catch (error) {
            return { chapter: [] }
        }
    }
)

const delete_chapter = createAsyncThunk(
    'delete_chapter',
    async () => {
        return null
    }
)

const actions = { captureChapter, captureManga, delete_chapter}

export default actions