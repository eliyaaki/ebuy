import React, { useState } from "react";
import { Formik } from "formik";
import "./index.scss";
import Modal from "../../../UiKit/Modal";

const Shipment = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shipmentOption, setShipmentOption] = useState("Email");
  const [shipmentData, setShipmentData] = useState(null);
  return (
    <>
      <>
        <div className="shipment-detailes">
          <div className="row">
            Shipment option
            <select
              name="shipmentOption"
              onChange={(e) => setShipmentOption(e.target.value)}
            >
              <option>Email </option>
              <option>Phisical </option>
            </select>
          </div>
          <button onClick={() => setModalOpen((prevState) => !prevState)}>
            Shipment address Details
          </button>
        </div>
      </>
      <Modal
        show={modalOpen}
        onCancle={() => setModalOpen((prevState) => !prevState)}
        title="Shipment Detailes"
        scroll={false}
      >
        {shipmentOption === "Email" ? (
          <Formik
            initialValues={{}}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Submit");
              setShipmentData(values);
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
              <>
                <form className="form shipment-form" onSubmit={handleSubmit}>
                  <div className="shipment-detailes">
                    <div className="row">
                      <input
                        placeholder="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      ></input>
                      <div className="input-error">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              country: "",
              state: "",
              street: "",
              houseNumber: "",
              zipCode: "",
              pob: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.country) {
                errors.country = "Country is Required";
              }
              if (!values.state) {
                errors.state = "State is Required";
              }
              if (!values.street) {
                errors.street = "Street is Required";
              }
              if (!values.houseNumber) {
                errors.houseNumber = "House Number is Required";
              } else if (values.houseNumber <= 0) {
                errors.houseNumber = "House Number can't be less or equle to 0";
              }
              if (!values.zipCode) {
                errors.zipCode = "Zip Code is Required";
              } else if (values.zipCode <= 0) {
                errors.zipCode = "Zip Code can't be less or equle to 0";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setShipmentData(values);
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
            }) => (
              <>
                <form className="form shipment-form" onSubmit={handleSubmit}>
                  <div className="shipment-detailes">
                    <div className="row">
                      Country
                      <select
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      >
                        <option>country </option>
                        <option>country</option>
                        <option>country </option>
                      </select>
                      <div className="input-error">
                        {errors.country && touched.country && errors.country}
                      </div>
                    </div>
                    <div className="row">
                      State
                      <select
                        name="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                      >
                        <option>state </option>
                        <option>state</option>
                        <option>state </option>
                      </select>
                      <div className="input-error">
                        {errors.state && touched.state && errors.state}
                      </div>
                    </div>
                    <div className="row">
                      <input
                        placeholder="Street"
                        type="street"
                        name="street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                        maxLength="50"
                      ></input>
                      <div className="input-error">
                        {errors.street && touched.street && errors.street}
                      </div>
                    </div>
                    <div className="row">
                      <input
                        placeholder="House Number"
                        type="number"
                        name="houseNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.houseNumber}
                      ></input>
                      <div className="input-error">
                        {errors.houseNumber &&
                          touched.houseNumber &&
                          errors.houseNumber}
                      </div>
                    </div>
                    <div className="row">
                      <input
                        placeholder="Zip Code"
                        type="number"
                        name="zipCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipCode}
                        maxLength="10"
                      ></input>
                      <div className="input-error">
                        {errors.zipCode && touched.zipCode && errors.zipCode}
                      </div>
                    </div>
                    <div className="row">
                      <input
                        placeholder="P.O.B"
                        type="text"
                        name="pob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pob}
                      ></input>
                      <div className="input-error">
                        {errors.pob && touched.pob && errors.pob}
                      </div>
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </Formik>
        )}
      </Modal>
    </>
  );
};

export default Shipment;
