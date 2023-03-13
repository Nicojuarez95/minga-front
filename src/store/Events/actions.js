import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_events = createAsyncThunk(
  "read_events", 
  async ({ inputText, captureChecks, pages }) => {
  try {
    let response = await axios.get(
      "http://localhost:8000/createmanga/view?title="+inputText.trim()+"&category="+captureChecks+"&page="+pages,
      
    );
    return {
      events: response.data.mangas
    };
  } catch (error) {
    console.log(error)
    return {
      events: [],
    };
  }
});

const actions = { read_events };
export default actions;