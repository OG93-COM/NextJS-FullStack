import * as yup from 'yup'

export const validationSchema= yup.object().shape({
    lastName: yup.string().trim().required("Last Name Is Required"),
    firstName: yup.string().trim().required("First Name Is Required"),
    email: yup.string().trim().email("Email not Valid").required("Email Is Required"),
    adress: yup.string().trim().required("Adress Is Required"),
    phone: yup.number().typeError("Phone Number incorrect").required("Phone Is Required"),
    cp: yup.number().typeError("Postal Code Inccorect").required("Postal Is Required"),
    city: yup.string().trim().required("City Is Required"),
    country: yup.string().trim().required("Country Is Required"),
    image: yup.string(),
})