import {useFormik} from 'formik';
import * as Yup from 'yup';

const FormValid=()=>{
    const validationSchema=Yup.object({
        name: Yup.string()
        .required("Name is required"),

        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

        password: Yup.string()
        .min(6,"Password must be atleast 6 characters")
        .required("Password is required"),

    });

    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:validationSchema,
        onSubmit: (values)=>{
            alert("Registration Successful" + JSON.stringify(values,null,2));
        }
    });

    return(
        <div style={{maxWidth:'500px',margin:'auto',padding:'20px'}}>
            <h2>Register : </h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom:'10px'}}>
                    <label>name : </label>
                    <input type='text'
                    name='name'
                    value={formik.values.name}
                    placeholder='Enter Name'
                    onChange={formik.handleChange}/>

                    {formik.touched.name && formik.errors.name && (
                        <div style={{color:'red'}}>{formik.errors.name}</div>
                    )}
                </div>

                {/* // Email input */}

                <div style={{marginBottom:'10px'}}>
                    <label>Email : </label>
                    <input type='email'
                    name='email'
                    value={formik.values.email}
                    placeholder='Enter Email'
                    onChange={formik.handleChange}/>

                    {formik.touched.email && formik.errors.email &&(
                        <div style={{color:'red'}}>{formik.errors.email}</div>
                    )}
                </div>
                <div style={{marginBottom:'10px'}}>
                    <label>Password : </label>
                    <input type='password'
                    name='password'
                    value={formik.values.password}
                    placeholder='Enter Password'
                    onChange={formik.handleChange}/>

                    {formik.touched.password && formik.errors.password &&(
                        <div style={{color:'red'}}>{formik.errors.password}</div>
                    )}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValid;