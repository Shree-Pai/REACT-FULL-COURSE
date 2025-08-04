import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../App';

const departments = ['Engineering', 'HR', 'Sales', 'Marketing', 'Finance'];
const locations = ['Mangalore', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'];

function JobDetails() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: state.job,
  });

  const validateJoinDate = (value) => {
    if (!value) return "Joining date is required";
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today || "Joining date cannot be in the past";
  };

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE_STEP', step: 'job', data });
    navigate('/bank');
  };

  return (
    <div style={{
      maxWidth: 500,
      margin: 'auto',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fafafa',
      borderRadius: 6,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Job Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Employee ID:</label>
          <input
            type="text"
            {...register('employeeId', {
              required: 'Employee ID is required',
              pattern: { value: /^[a-zA-Z0-9]+$/, message: 'Alphanumeric only' },
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.employeeId ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.employeeId && <p style={{ color: 'red', marginTop: 4 }}>{errors.employeeId.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Department:</label>
          <select
            {...register('department', { required: 'Department is required' })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.department ? '1px solid red' : '1px solid #ccc',
              backgroundColor: 'white',
            }}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <p style={{ color: 'red', marginTop: 4 }}>{errors.department.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Role/Designation:</label>
          <input
            type="text"
            {...register('role', {
              required: 'Role is required',
            })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.role ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.role && <p style={{ color: 'red', marginTop: 4 }}>{errors.role.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Joining Date:</label>
          <input
            type="date"
            {...register('joiningDate', { validate: validateJoinDate })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.joiningDate ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {errors.joiningDate && <p style={{ color: 'red', marginTop: 4 }}>{errors.joiningDate.message}</p>}
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Work Location:</label>
          <select
            {...register('workLocation', { required: 'Work location is required' })}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: errors.workLocation ? '1px solid red' : '1px solid #ccc',
              backgroundColor: 'white',
            }}
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          {errors.workLocation && <p style={{ color: 'red', marginTop: 4 }}>{errors.workLocation.message}</p>}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: 4,
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
            fontSize: 16,
            width: '100%'
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default JobDetails;