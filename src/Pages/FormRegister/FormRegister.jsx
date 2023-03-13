import React from "react";
import "./formregister.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as Anchor, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import alertActions from "../../store/Alert/actions.js";
const {open} = alertActions

export default function FormRegister(props) {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let photo = useRef();
  let formregister = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  let { pathname } = location;
  const store = useSelector(store=>store)
  let dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
      [photo.current.name]: photo.current.value,
    };
    

    let url = "http://localhost:8000/auth/signup";

    try {
      await axios.post(url, data);
      let dataAlert = {
        icon: 'success',
        title: "Signed in successfully"
      }
      dispatch(open(dataAlert))
      
      formregister.current.reset();
      navigate("/signin");
    } catch (error) {
      if (typeof error.response.data.message === "string") {
        let dataAlert = {
          icon: 'error',
          title: error.response.data.message
        }
        dispatch(open(dataAlert))
      } else {
        let dataAlert = {
          icon: 'error',
          title: "",
        }
        error.response.data.message.forEach((err) => {
          dataAlert.title += err + '\n'
        });
        dispatch(open(dataAlert));
      }
    }
  }

  return (
    <form ref={formregister} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Name</legend>
        <input ref={name} type="text" id="name" name="name" required />
        <img src="./Profile.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Email</legend>
        <input ref={email} type="email" id="email" name="mail" required />
        <img src="./@.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Photo</legend>
        <input ref={photo} type="text" id="photo" name="photo" required />
        <img src="./camera.png" alt="" />
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        <input
          ref={password}
          type="password"
          id="password"
          name="password"
          required
        />
        <img src="./lock1.png" alt="" />
      </fieldset>

      <div className="div-check">
        <input id="check" type="checkbox" required />
        <label>Send notification to my email</label>
      </div>

      <input id="sign-up" type="submit" value="Sign up" />

      <div className="div-google">
        <img src="./Google.png" alt="" />
        <input type="submit" value="Sign up with Google" />
      </div>

      <div className="parrafos-form">
        <p>Already have an account?<span onClick={() => {
            if (pathname === "/signup") {
              navigate("/signin");
            } else {
              props.handleRender();
            }
          }}>Log in</span></p>
        <p>Go back to<Anchor to={`/`}><span>home page</span></Anchor></p>
      </div>
    </form>
  );
}