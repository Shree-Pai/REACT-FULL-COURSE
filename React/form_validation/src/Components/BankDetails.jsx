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
    <div className="form-container">
      <h2>Bank Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Bank Account Number:</label>
          <input
            type="text"
            {...register('accountNumber', {
              required: 'Account number required',
              pattern: { value: /^[0-9]{9,18}$/, message: '9-18 digits only' },
            })}
          />
          {errors.accountNumber && (
            <p className="error-text">{errors.accountNumber.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>IFSC Code:</label>
          <input
            type="text"
            {...register('ifsc', {
              required: 'IFSC code required',
              validate: validateIFSC,
            })}
          />
          {errors.ifsc && <p className="error-text">{errors.ifsc.message}</p>}
        </div>

        <div className="form-group">
          <label>PAN Number:</label>
          <input
            type="text"
            {...register('pan', {
              required: 'PAN number required',
              validate: validatePAN,
            })}
          />
          {errors.pan && <p className="error-text">{errors.pan.message}</p>}
        </div>

        <div className="form-group">
          <label>UPI ID (optional):</label>
          <input
            type="text"
            {...register('upi', {
              validate: validateUPI,
            })}
          />
          {errors.upi && <p className="error-text">{errors.upi.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
}

export default BankDetails;
