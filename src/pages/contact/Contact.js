import React from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactVector from "../../assets/contact_anime.png";
import Web from "../../assets/web.png";
import Insta from "../../assets/in.png";
import Github from "../../assets/gh.png";
import Linkedin from "../../assets/li.png";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { css } from "glamor";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Contact = () => {
  //   const notify = ()=>{
  //     // Set to 10sec
  //     toast.warning('Danger', {autoClose:10000})
  //     // Set to 3sec
  //     toast.success('successful', {autoClose:3000})
  //     // User have to close it
  //     toast.info('GeeksForGeeks', {autoClose:false})
  //     toast.error('Runtime error', {
  //      // Set to 15sec
  //      position: toast.POSITION.BOTTOM_LEFT, autoClose:15000})
  //     toast('Hello Geeks')// Default

  //  }

  const formRef = React.useRef();

  const [success, setSuccess] = React.useState(false);

  const initialValues = {
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  };

  const ContactFormSchema = Yup.object().shape({
    user_name: Yup.string().required("Please enter your name"),
    user_subject: Yup.string().required("Please enter subject"),
    user_email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Enter your message"),
  });

  const handleSubmit = (values, resetForm, error) => {
    console.log(values);

    emailjs
      .sendForm(
        "service_ktqec1c",
        "template_pxw2ek8",
        formRef.current,
        "user_woGmo6quYxjZui2ifbs6F"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setSuccess(true);
            resetForm({});
            toast.success("Your Massage has been received successfully", {
              className: css({
                background: "#00FF00 !important",
                color: "white !important",
                fontWeight: "bold",
              }),
              autoClose: 3000,
            });
          }
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("There is an error.", { autoClose: 3000 });
          setSuccess(false);
        }
      );
  };
  return (
    <div className="main-container">
      <Header
        heading={"Contact Me"}
        details={"Hey!, What to get in touch me? Send me an email."}
      />

      <div className="contact-form">
        <Formik
          initialValues={initialValues}
          validationSchema={ContactFormSchema}
          onSubmit={(values, { resetForm, error }) => {
            handleSubmit(values, resetForm, error);
          }}
        >
          {(formik) => {
            const {
              values,
              errors,
              isValid,
              dirty,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
            } = formik;

            return (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div
                  className={`mb-3 ${
                    errors.user_name && touched.user_name ? "invalid" : null
                  }`}
                >
                  <label htmlFor="user_name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    aria-describedby="user_name"
                    name="user_name"
                    value={values.user_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.user_name || touched.user_name ? "error" : null
                    }   `}
                  />
                  {errors.user_name && touched.user_name && (
                    <span className="error">{errors.user_name}</span>
                  )}
                </div>
                <div
                  className={`mb-3 ${
                    errors.user_subject && touched.user_subject
                      ? "invalid"
                      : null
                  }`}
                >
                  <label htmlFor="user_subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="user_subject"
                    aria-describedby="user_subject"
                    name="user_subject"
                    value={values.user_subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.user_subject || touched.user_subject
                        ? "error"
                        : null
                    }   `}
                  />
                  {errors.user_subject && touched.user_subject && (
                    <span className="error">{errors.user_subject}</span>
                  )}
                </div>
                <div
                  className={`mb-3 ${
                    errors.user_email && touched.user_email ? "invalid" : null
                  }`}
                >
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="user_email"
                    value={values.user_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.user_email || touched.user_email ? "error" : null
                    }   `}
                  />
                  {errors.user_email && touched.user_email && (
                    <span className="error">{errors.user_email}</span>
                  )}
                </div>
                <div
                  className={`mb-3 ${
                    errors.message && touched.message ? "invalid" : null
                  }`}
                >
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.message || touched.message ? "error" : null
                    }   `}
                  ></textarea>
                  {errors.message && touched.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className={`btn ${
                      dirty && isValid ? "btn-primary" : "btn-secondary"
                    }`}
                    disabled={!(dirty && isValid)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>

      <div className="social-media-wrapper">
        <a
          href="https://stark-everglades-36861.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src={Web} alt="web-icons" />
        </a>

        <a
          href="https://www.linkedin.com/in/amos-moyo-342976193/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src={Linkedin} alt="web-icons" />
        </a>

        <a
          href="https://github.com/amosmoyo"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src={Github} alt="web-icons" />
        </a>
        <a
          href="https://www.instagram.com/moyoamozi/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src={Insta} alt="web-icons" />
        </a>
      </div>

      <Footer phrase="Learn more " link="about me " toAddress="about" />
      <div className="vector-frame">
        <img src={ContactVector} alt="vector" className="vector-img" />
      </div>
    </div>
  );
};

export default Contact;
