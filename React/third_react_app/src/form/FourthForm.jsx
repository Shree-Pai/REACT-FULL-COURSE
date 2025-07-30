import { useState } from "react";

function FourthForm(){
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        confirmPassword:''
    });

    const [errors,setErrors]=useState({});

    const handleChange=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    };
    const validate=()=>{
        let errorList={};

        
        if(!formData.email.trim()){
            errorList.email="Email is required.."
        } else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)){
            errorList.email="Email is Invalid"
        }
        if(!formData.password.trim()){
            errorList.password="Password is required.."
        }else if(formData.password.length<=3){
            errorList.password="Password length must be more than 3"
        }
        if (!formData.confirmPassword.trim()) {
            errorList.confirmPassword = "Confirm the Password";
        } 
        else if (formData.password !== formData.confirmPassword) {
            errorList.confirmPassword = "Passwords do not match";
    }

        return errorList;
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);

        if(Object.keys(validateErrors).length===0)
        {
            alert(`Email : ${formData.email}, Password : ${formData.password}`);
        }
    }

    
    return(
        <div>   
            <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                        name="email" 
                        placeholder="Enter Email" 
                        value={formData.email} 
                        onChange={handleChange}/>
                        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange} />
                         {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
            <div>
                <input type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange} />
                         {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}
            </div>
            <button type="submit">Submit</button>
             </form>
        </div>
       
    )
}

export default FourthForm;