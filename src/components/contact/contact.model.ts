import * as Yup from "yup";

export const contactFormValidation = Yup.object({
    name: Yup.string()
        .max(100, "Must be 100 characters or less")
        .min(2, "Must be 2 characters or more")
        .required('The name field is required'),
    email: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required('The email field is required')
        .email("Must be a valid email "),
    message: Yup.string()
        .max(255, "Must be 255 characters or less")
        .min(10, "Must be 10 characters or more")
        .required('The message field is required'),

})