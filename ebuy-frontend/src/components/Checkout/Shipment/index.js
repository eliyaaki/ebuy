import React, { useState } from "react";
import { Formik } from "formik";
import "./index.scss";
import Modal from "../../../UiKit/Modal";

const Shipment = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shipmentOption, setShipmentOption] = useState("Email");
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
              values.modal = !values.modal;
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
                  <button>Submit</button>
                </form>
              </>
            )}
          </Formik>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default Shipment;
