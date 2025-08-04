import React, { useContext } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../App';

const relations = ['Parent', 'Sibling', 'Spouse', 'Friend', 'Other'];

function EmergencyContacts() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      contacts: state.emergency.contacts.length > 0
        ? state.emergency.contacts
        : [{ name: '', relation: '', phone: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  });

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE_STEP', step: 'emergency', data });
    navigate('/documents');
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
      <h2 style={{ textAlign: 'center' }}>Emergency Contacts</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} style={{
            marginBottom: '20px',
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '6px',
            background: '#f9f9f9'
          }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>Name:</label>
              <input
                style={{ width: '100%', padding: '6px' }}
                {...register(`contacts.${index}.name`, {
                  required: 'Name required',
                  minLength: { value: 3, message: 'Minimum 3 letters' },
                })}
              />
              {errors.contacts?.[index]?.name && (
                <p style={{ color: 'red', marginTop: '4px' }}>{errors.contacts[index].name.message}</p>
              )}
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>Relation:</label>
              <select
                style={{ width: '100%', padding: '6px' }}
                {...register(`contacts.${index}.relation`, {
                  required: 'Relation required',
                })}
              >
                <option value="">Select Relation</option>
                {relations.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
              {errors.contacts?.[index]?.relation && (
                <p style={{ color: 'red', marginTop: '4px' }}>{errors.contacts[index].relation.message}</p>
              )}
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>Phone Number:</label>
              <input
                style={{ width: '100%', padding: '6px' }}
                {...register(`contacts.${index}.phone`, {
                  required: 'Phone required',
                  pattern: { value: /^[0-9]{10}$/, message: '10 digits only' },
                })}
              />
              {errors.contacts?.[index]?.phone && (
                <p style={{ color: 'red', marginTop: '4px' }}>{errors.contacts[index].phone.message}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
              style={{
                padding: '5px 10px',
                fontSize: '14px',
                background: '#eee',
                border: '1px solid #ccc',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <div style={{ marginTop: '10px' }}>
          <button
            type="button"
            onClick={() => append({ name: '', relation: '', phone: '' })}
            style={{
              padding: '8px 12px',
              marginRight: '10px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Add Contact
          </button>

          <button
            type="submit"
            style={{
              padding: '8px 20px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmergencyContacts;
