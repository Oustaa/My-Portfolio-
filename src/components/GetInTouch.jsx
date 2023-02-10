import React, { useState } from "react";
// import axios from "axios";
import { Oval } from "react-loader-spinner";
// import ReCaptcha from "react-recaptcha-v3";
import StyledBtn from "../Styles/Button";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Container from "../Styles/Container";
import Section from "../Styles/Section";
import styles from "styled-components";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

// Styles
const StyledContact = styles.div`
  display:flex;
  @media screen and (max-width:700px){
    flex-direction: column;
  }
`;

const StyledForm = styles.form`
  width:60%;
  @media screen and (max-width:700px){
    width:100%;
    margin-bottom: 2rem;
  }
`;

const FormControll = styles.div`
  margin-top:1rem;
    label{
      display: block;
      margin-bottom:.25rem;
    }
    input,textarea{
      width:100%;
      padding:.5rem;
      background-color: var(--background-light);
      border: none;
      border-radius:.25rem;
      resize: none;
      line-height: normal;
      &:focus{
        background-color: var(--secondary-gray);
        border:none;
        outline:none;
        color: #fff;
    }
  }
`;

const StyledExtraInfo = styles.div`
  width:40%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; 
  gap:1rem;
  background-color:var(--primary-purble);
  border-radius:.25rem;
  margin-left:3rem;
  color:#fff;

  h3{
    font-size:1.5rem;
  }

  @media screen and (max-width:700px){
    width:100%;
    margin-left:0;
    flex-direction: row;
    flex-wrap: wrap;
    padding-block:2rem;
  }
  @media screen and (max-width:350px){
    width:100%;
    margin-left:0;
    flex-direction: column;
    align-items:center;
    flex-wrap: wrap;
    padding-block:2rem;
  }
  
`;

const IconLabel = styles.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;
  a{
    font-size:2.5rem;
    svg{
      display:block;
    }
  }
`;

// Check if an entred Email Is valid
// function isValid(inputs) {
//   const options = {
//     method: "GET",
//     url: "https://validate-email5.p.rapidapi.com/v1/validate",
//     params: { email: "hello@apitier.com" },
//     headers: {
//       "X-RapidAPI-Key": "process.env.REACT_APP_SEND_GRID_X_KEY",
//       "X-RapidAPI-Host": "validate-email5.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function(response) {
//       if (response?.data?.result[0].isValid) {
//         console.log("Email is valid");
//       } else {
//         console.log("Email invalid");
//       }
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
// }

const GetInTouch = () => {
  const [inputsValues, setInputsValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const canSave = Object.values(inputsValues).every((elem) => elem !== "");

  const changeInputHandler = (e) => {
    setInputsValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    // if (!canSave || !isVerified) return;

    // const notify = () =>
    //   toast.info(
    //     "Thank you for reaching out, i will respond as soon as posible!!",
    //     {
    //       position: "bottom-left",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: 0,
    //       theme: "light",
    //     }
    //   );
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_SEND_GRID_X_KEY,
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "Otailaba98@gmail.com" }],
            subject: inputsValues.subject,
          },
        ],
        from: { email: inputsValues.email, name: inputsValues.name },
        content: [{ type: "text/plain", value: inputsValues.message }],
      }),
    };
    setIsSending(true);
    await fetch(
      "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // notify();
        setIsSending(false);
      })
      .catch((err) => {
        // notify();
        setIsSending(false);
        console.log(err.message);
      });
  };

  return (
    <>
      <Section id="Contact">
        <Container>
          <StyledContact>
            <StyledForm onSubmit={handelSubmit}>
              <h2> Get In Touch</h2>
              <FormControll>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={changeInputHandler}
                  value={inputsValues.name}
                />
              </FormControll>
              <FormControll>
                <label htmlFor="email">E-mail: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={changeInputHandler}
                  value={inputsValues.email}
                />
              </FormControll>
              <FormControll>
                <label htmlFor="subject">Subject: </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={changeInputHandler}
                  value={inputsValues.subject}
                />
              </FormControll>
              <FormControll>
                <label htmlFor="message">Message: </label>
                <textarea
                  rows="4"
                  type="message"
                  id="message"
                  name="message"
                  onChange={changeInputHandler}
                  value={inputsValues.message}
                ></textarea>
              </FormControll>
              {/* <ReCaptcha
                sitekey={"6Ldv8KkjAAAAAKO-ENebn3R9tFR_2rYGkgdNqiFg"}
                action='submit'
                verifyCallback={verifyCallback}
              /> */}
              <StyledBtn disabled={isSending} canSave={canSave}>
                {!isSending ? (
                  "Sent"
                ) : (
                  <Oval
                    height={"10"}
                    width={"10"}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#fff"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                )}
              </StyledBtn>
            </StyledForm>
            <StyledExtraInfo>
              <h3>Or Via:</h3>
              <IconLabel>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/oussama-tailba-10b4981a6/"
                >
                  <AiFillLinkedin />
                </a>
                <h4>Oussama Tailba</h4>
              </IconLabel>
              <IconLabel>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/oussama82297104"
                >
                  <AiFillTwitterSquare />
                </a>
                <h4>@oussama82297104</h4>
              </IconLabel>
              <IconLabel>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/oussama.tailaba/?hl=fr"
                >
                  <AiFillInstagram />
                </a>
                <h4>oussama.tailaba</h4>
              </IconLabel>
            </StyledExtraInfo>
          </StyledContact>
        </Container>
      </Section>
      {/* <ToastContainer /> */}
    </>
  );
};

export default GetInTouch;
