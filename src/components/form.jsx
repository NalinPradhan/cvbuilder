import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const msmall = "m-3";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully!');
      }
    } catch (err) {
      alert('Failed to submit form');
    }
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="m-10 ">
        <h1 className="text-2xl font-bold">Applicant Form</h1>
        {/* General Information */}
        <div className="border mt-3 p-3">
          <h2 className="font-semibold underline">General Information</h2>
          <div className="mt-3">
            <label htmlFor="name">Name</label>
            <Field name="name" className={"border " + msmall} type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={"border " + msmall} />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <Field name="phone" type="tel" className={"border " + msmall} />
            <ErrorMessage name="phone" />
          </div>
          <button className="border bg-gray-200 p-1 pl-2 pr-2 mt-3 text-xs" type="button">Edit</button>
        </div>

        {/* Educational experinece Information */}

        <div className="border mt-3 p-3">
          <h2 className="font-semibold underline">
            Educational experinece Information
          </h2>
          <div className="mt-3">
            <label htmlFor="schoolName">School Name</label>
            <Field
              name="schoolName"
              className={"border " + msmall}
              type="text"
            />
            <ErrorMessage name="schoolName" />
          </div>
          <div>
            <label htmlFor="course">Course</label>
            <Field name="course" type="text" className={"border " + msmall} />
            <ErrorMessage name="course" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <Field name="date" type="date" className={"border " + msmall} />
            <ErrorMessage name="date" />
          </div>
        </div>
        {/* prctical experience */}

        <div className="border mt-3 p-3">
          <h2 className="font-semibold underline">
            Practical experinece 
          </h2>
          <div className="mt-3">
            <label htmlFor="companyName">Company Name</label>
            <Field
              name="companyName"
              className={"border " + msmall}
              type="text"
            />
            <ErrorMessage name="companyName" />
          </div>
          <div>
            <label htmlFor="title">Position Title</label>
            <Field name="title" type="text" className={"border " + msmall} />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="rsb">Main Responsibilities</label>
            <Field name="rsb" type="text" className={"border " + msmall} />
            <ErrorMessage name="rsb" />
          </div>
          <div>
            <label htmlFor="from">From</label>
            <Field name="from" type="date" className={"border " + msmall} />
            <ErrorMessage name="from" />
          </div>
          <div>
            <label htmlFor="to">To</label>
            <Field name="to" type="date" className={"border " + msmall} />
            <ErrorMessage name="to" />
          </div>
        </div>
        <button onClick={handleSubmit} className="border bg-green-300 p-1 pl-2 pr-2 mt-3" type="submit">
          Submit
        </button>
       
      </Form>
    </Formik>
  );
};

export default FormComponent;
