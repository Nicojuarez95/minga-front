import React from "react";
import "./formregister.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as Anchor, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormRegister(props) {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let photo = useRef();
  let formregister = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  let { pathname } = location;


  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

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
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      formregister.current.reset();
      navigate("/signin");
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message[0]);
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