import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../App';

function BankDetails() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: state.bank,
  });

  const validateIFSC = (value) =>
    /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value) || 'Invalid IFSC code format';

  const validatePAN = (value) =>
    /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) || 'Invalid PAN format';

  const validateUPI = (value) =>
    !value || value.includes('@') || 'UPI ID must include "@"';

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE_STEP', step: 'bank', data });
    navigate('/emergency');
  };

  return (
    <div style={{ maxWidth: 500,
      margin: 'auto',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'}}>
      <h2 style={{ textAlign: 'center' }}>Bank Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Account Number */}
        <div style={{ marginBottom: '15px' }}>
          <label>Bank Account Number:</label><br />
          <input
            type="text"
            {...register('accountNumber', {
              required: 'Account number required',
              pattern: { value: /^[0-9]{9,18}$/, message: '9-18 digits only' },
            })}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.accountNumber && <p style={{ color: 'red' }}>{errors.accountNumber.message}</p>}
        </div>

        {/* IFSC */}
        <div style={{ marginBottom: '15px' }}>
          <label>IFSC Code:</label><br />
          <input
            type="text"
            {...register('ifsc', {
              required: 'IFSC code required',
              validate: validateIFSC,
            })}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.ifsc && <p style={{ color: 'red' }}>{errors.ifsc.message}</p>}
        </div>

        {/* PAN */}
        <div style={{ marginBottom: '15px' }}>
          <label>PAN Number:</label><br />
          <input
            type="text"
            {...register('pan', {
              required: 'PAN number required',
              validate: validatePAN,
            })}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.pan && <p style={{ color: 'red' }}>{errors.pan.message}</p>}
        </div>

        {/* UPI */}
        <div style={{ marginBottom: '15px' }}>
          <label>UPI ID (optional):</label><br />
          <input
            type="text"
            {...register('upi', {
              validate: validateUPI,
            })}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.upi && <p style={{ color: 'red' }}>{errors.upi.message}</p>}
        </div>

        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'block',
            marginLeft: 'auto',
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default BankDetails;
