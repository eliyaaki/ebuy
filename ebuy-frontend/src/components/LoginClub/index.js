import React, { useState, useRef, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Modal from "../../UiKit/Modal";

const LoginClub = () => {
  const formRef = useRef();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [modalState, setModalState] = useState(false);

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const haddleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   login();
    } catch (e) {}
  };
  return (
    <div className="login-club">
      <div className="overlay" />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          repassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is Required";
          } else if (values.password < 6 || values.password > 10) {
            errors.password = "Password must be between 6 to 10 characters";
          }
          if (!values.userName) {
            errors.userName = "User Name is Required";
          }
          if (values.password !== values.repassword) {
            errors.repassword = "Passwords must match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="login-club-form">
            <h1 className="login-headers">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Login".split("")}
                idx={5}
              />
            </h1>
            <h2 className="login-headers">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Club Member".split("")}
                idx={11}
              />
            </h2>
            <div className="row first">
              <input
                placeholder="User Name"
                name="userName"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              ></input>
              <em>{errors.userName && touched.userName && errors.userName}</em>
            </div>
            <div className="row last">
              <input
                placeholder="Password"
                required
                type="password"
                name="password"
                autoComplete="new-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
              <em>{errors.password && touched.password && errors.password}</em>
            </div>
            <div>
              <button className="login-club-button" type="submit">
                <p>Login</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
                className="login-club-button"
                style={{
                  background:
                    "url(https://henryhneff.com/wp-content/themes/neff_1.0/images/button_blue.png) no-repeat center",
                }}
                onClick={() => setModalState(true)}
              >
                <p
                  style={{
                    whiteSpace: "nowrap",
                    left: "13%",
                  }}
                >
                  Casual Login
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ whiteSpace: "nowrap", left: "83%" }}
                />
              </button>
              {isSubmitting}
            </div>
          </form>
        )}
      </Formik>

      <Modal
        show={modalState}
        onCancle={() => setModalState(false)}
        title=" Login As Guest"
        scroll={false}
      >
        <div>asdasd</div>
      </Modal>
    </div>
  );
};

export default LoginClub;
