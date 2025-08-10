import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../App';
import '../App.css';

function PersonalDetails() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: state.personal,
  });

  const [imagePreview, setImagePreview] = useState(state.personal.profilePhoto || null);

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE_STEP', step: 'personal', data });
    navigate('/job');
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setValue('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setValue('profilePhoto', null);
    }
  };

  const validateAge = (value) => {
    if (!value) return 'Date of birth is required';
    const dob = new Date(value);
    const ageDiff = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age >= 18 || 'You must be at least 18 years old';
  };

  return (
    <div style={{
      maxWidth: 500,
      margin: 'auto',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Full Name:</label>
          <input
            type="text"
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 3, message: 'Minimum 3 characters' },
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.fullName ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.fullName && <p style={{ color: 'red', marginTop: 4 }}>{errors.fullName.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /.+@.+\..+/, message: 'Invalid email format' },
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.email ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.email && <p style={{ color: 'red', marginTop: 4 }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Phone Number:</label>
          <input
            type="text"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: { value: /^[0-9]{10}$/, message: 'Must be 10 digits' },
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.phone ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.phone && <p style={{ color: 'red', marginTop: 4 }}>{errors.phone.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Date of Birth:</label>
          <input
            type="date"
            {...register('dob', {
              required: 'Date of birth is required',
              validate: validateAge,
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.dob ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.dob && <p style={{ color: 'red', marginTop: 4 }}>{errors.dob.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Profile Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            style={{ display: 'block' }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              style={{
                marginTop: 10,
                width: 100,
                height: 100,
                objectFit: 'cover',
                borderRadius: '50%',
                border: '1px solid #ccc',
              }}
            />
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px 0',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 16,
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalDetails;