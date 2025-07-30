import { useState } from "react";

function ThirdForm(){
    const [formData,setFormData]=useState({
        name:'',
        email:''
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

        if(!formData.name.trim()){
            errorList.name="Name is required.."
        }
        if(!formData.email.trim()){
            errorList.email="Email is required.."
        // } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        }else if(!/(.+)@(.+){2,}\.(.+){2,}/.test(formData.email)){
            errorList.email="Email is Invalid"
        }

        return errorList;
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);

        if(Object.keys(validateErrors).length===0)
        {
            alert(`Name : ${formData.name}, Email : ${formData.email}`);
        }
    }

    
    return(
        <div>   
            <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                        name="name" 
                        placeholder="Enter Name" 
                        value={formData.name} 
                        onChange={handleChange}/>
                        {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div><br></br>
            <div>
                <input type="text" 
                        name="email" 
                        placeholder="Enter Email" 
                        value={formData.email} 
                        onChange={handleChange}/>
                        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
             </form>
        </div>
       
    )
}

export default ThirdForm;