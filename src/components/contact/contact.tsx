'use client';
import { useState } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "autoprefixer";
import { contactFormValidation } from "./contact.model";

export default function Contact() {
    // TODO: Link contact form to firebase, add articles section that fetches from dev.to 
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: contactFormValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    
    return (
        <div id="contact" className="container lg:max-w-6xl overflow-hidden mx-auto py-8 text-dark-light dark:text-white">
            <div className="sm:px-16">

                <div className="flex flex-col sm:flex-row p-4">
                    <div className="flex sm:basis-1/2 flex-col">
                        <h2 className=" text-4xl font-bold mb-4">Lets connect<span className="text-primary">_</span></h2>
                        <a className="hover:text-primary" href="mailto:">johndoe@exampe.com</a>
                        <a className="hover:text-primary" href="tel:2454232323">+2454232323</a>
                    </div>
                    <div className="flex flex-col sm:basis-1/2 mt-12 sm:mt-0">
                        <h2 className=" text-4xl font-bold mb-4">Send a message<span className="text-primary">_</span></h2>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-none ">
                            <div className="card-body p-0">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-primary">Name</span>
                                        </label>
                                        <input  type="text" {...formik.getFieldProps('name')} placeholder="john doe" className="input input-bordered bg-transparent  dark:border-slate-400" />
                                        { formik?.errors.name && <p className="text-sm text-error">{formik?.errors.name}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-primary">Email</span>
                                        </label>
                                        <input type="text" {...formik.getFieldProps('email')} placeholder="johndoe@example.com" className="input input-bordered bg-transparent  dark:border-slate-400" />
                                        { formik?.errors.email && <p className="text-sm text-error">{formik?.errors.email}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-primary">Message</span>
                                        </label>
                                        <input {...formik.getFieldProps('message')} type="text" placeholder="Message goes here" className="input input-bordered bg-transparent  dark:border-slate-400" />
                                        { formik?.errors.message && <p className="text-sm text-error">{formik?.errors.message}</p>}

                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary btn-outline">
                                            Send
                                            { (formik?.isSubmitting || formik?.isValidating) && <span className="loading loading-spinner"></span> }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}