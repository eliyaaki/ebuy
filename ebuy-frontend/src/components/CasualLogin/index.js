import React, { useState, useRef, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import AnimatedLetters from "../AnimatedLetters";
import { useAuth } from "../../context/AuthContext";
import "./index.scss";
import Modal from "../../UiKit/Modal";

const CasualLoginClub = () => {
  const formRef = useRef();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [modalState, setModalState] = useState(false);
  const { signIn } = useAuth();

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
          if (!values.password) {
            errors.password = "Password is Required";
          } //else if (values.password < 6 || values.password > 10) {
          //   errors.password = "Password must be between 6 to 10 characters";
          // }
          if (!values.userName) {
            errors.userName = "User Name is Required";
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("adasdas");
          signIn();
          setTimeout(() => {
            // console.log(values);
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
          <form className="login-club-form" onSubmit={handleSubmit}>
            <h1 className="login-headers">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Casual Login".split("")}
                idx={5}
              />
            </h1>
            <h2 className="login-headers">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Club Member".split("")}
                idx={17}
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
              <button
                className="login-club-button"
                type="submit"
                disabled={isSubmitting}
              >
                <p>Login</p>
                <FontAwesomeIcon icon={faArrowRight} />
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

export default CasualLoginClub;
