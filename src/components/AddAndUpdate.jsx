// import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import { updateDoc } from "firebase/firestore";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose(); // Close the modal after submission
      toast.success("Contact added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose(); // Close the modal after submission
      toast.success("Contact updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={validationSchema}
          initialValues={
            isUpdate
              ? {
                  name: contact.name, // Assuming contact is an object with name and email properties
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            // Here you would typically handle the form submission,
            // such as sending the data to a server or updating state.
            onClose(); // Close the modal after submission
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-xl font-medium">
              <label htmlFor="name"> Name </label>
              <Field name="name" className="border h-10" />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 text-xl font-medium">
              <label htmlFor="email"> Email </label>
              <Field name="email" className="border h-10" />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange px-3 py-2 border mt-4 text-xl font-medium self-end"
            >
              {isUpdate ? "Update Contact" : "Add Contact"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
