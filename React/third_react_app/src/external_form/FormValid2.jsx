import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormValid2 = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must atleast 3 character")
            .required("Name is required"),

        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        password: Yup.string()
            .min(6, "Password must be atleast 6 characters")
            .required("Password is required"),

        confirmpassword: Yup.string()
            .required('Please confirm your password')
            .oneOf([Yup.ref('password')], 'Passwords must match'),

        gender: Yup.string()
            .required("Gender is required"),

        city: Yup.string()
            .required("City is required"),


        agree: Yup.string()
            .required("Agreement must be accepted to Submit")


    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            gender: '',
            city: '',
            agree: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values, null, 2));
        }
    });

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
            <h2>Register : </h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>name : </label>
                    <input type='text'
                        name='name'
                        value={formik.values.name}
                        placeholder='Enter Name'
                        onChange={formik.handleChange} />

                    {formik.touched.name && formik.errors.name && (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    )}
                </div>

                {/* // Email input */}

                <div style={{ marginBottom: '10px' }}>
                    <label>Email : </label>
                    <input type='email'
                        name='email'
                        value={formik.values.email}
                        placeholder='Enter Email'
                        onChange={formik.handleChange} />

                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: 'red' }}>{formik.errors.email}</div>
                    )}
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <label>Password : </label>
                    <input type='password'
                        name='password'
                        value={formik.values.password}
                        placeholder='Enter Password'
                        onChange={formik.handleChange} />

                    {formik.touched.password && formik.errors.password && (
                        <div style={{ color: 'red' }}>{formik.errors.password}</div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Confirm Password : </label>
                    <input type='password'
                        name='confirmpassword'
                        value={formik.values.confirmpassword}
                        placeholder='Confirm Password'
                        onChange={formik.handleChange} />

                    {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                        <div style={{ color: 'red' }}>{formik.errors.confirmpassword}</div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Gender: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formik.values.gender === "Male"}
                        onChange={formik.handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formik.values.gender === "Female"}
                        onChange={formik.handleChange}
                    /> Female
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="city">City: </label>
                    <select name='city' value={formik.values.city} onChange={formik.handleChange}>
                        <option value="">Select City</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Bangalore">Bangalore</option>
                    </select>

                    {formik.touched.city && formik.errors.city && (
                        <div style={{ color: 'red' }}>{formik.errors.city}</div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>

                    <input type='checkbox'
                        name='agree'
                        value={formik.values.agree}
                        onChange={formik.handleChange} />
                    <label>I agree to the terms and conditions</label>
                    {formik.touched.agree && formik.errors.agree && (
                        <div style={{ color: 'red' }}>{formik.errors.agree}</div>
                    )}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValid2;