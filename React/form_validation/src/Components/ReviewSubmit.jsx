import React, { useContext, useState } from 'react';
import { FormContext } from '../App';
import { useNavigate } from 'react-router-dom';

function renderObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return <span>{String(obj)}</span>;
  }

  if (Array.isArray(obj)) {
    return (
      <ul style={{ marginLeft: 20 }}>
        {obj.map((item, i) => (
          <li key={i}>{renderObject(item)}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul style={{ marginLeft: 20 }}>
      {Object.entries(obj).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {renderObject(value)}
        </li>
      ))}
    </ul>
  );
}

function ReviewSubmit() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [expandedSections, setExpandedSections] = useState({
    personal: false,
    job: false,
    bank: false,
    emergency: false,
    documents: false,
  });

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleEdit = (path) => {
    navigate(path);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    dispatch({ type: 'RESET' });
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'center', padding: 20 }}>
        <h2>Registration Successful!</h2>
        <p>Thank you for submitting your details.</p>
      </div>
    );
  }

  const sections = [
    { label: 'Personal Details', key: 'personal', path: '/personal' },
    { label: 'Job Details', key: 'job', path: '/job' },
    { label: 'Bank Details', key: 'bank', path: '/bank' },
    { label: 'Emergency Contacts', key: 'emergency', path: '/emergency' },
  ];

  return (
    <div style={{ maxWidth: 500,
      margin: 'auto',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'}}>
      <h2 style={{ textAlign: 'center' }}>Review & Submit</h2>

      {sections.map(({ label, key, path }) => (
        <section key={key} style={{ marginBottom: 20, border: '1px solid #ddd', borderRadius: 4 }}>
          <div
            onClick={() => toggleSection(key)}
            style={{
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              padding: '10px 15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              userSelect: 'none',
            }}
          >
            <h3 style={{ margin: 0 }}>{label}</h3>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(path);
                }}
                style={{
                  padding: '4px 10px',
                  fontSize: 14,
                  cursor: 'pointer',
                  marginRight: 10,
                }}
              >
                Edit
              </button>
              <button
                aria-label={expandedSections[key] ? 'Collapse' : 'Expand'}
                style={{
                  fontSize: 18,
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                  userSelect: 'none',
                }}
              >
                {expandedSections[key] ? '−' : '+'}
              </button>
            </div>
          </div>

          {expandedSections[key] && (
            <div style={{ padding: 15, backgroundColor: 'white', maxHeight: 400, overflowY: 'auto' }}>
              {key === 'emergency' ? (
                state.emergency.contacts?.length > 0 ? (
                  <ul style={{ marginLeft: 20 }}>
                    {state.emergency.contacts.map((contact, i) => (
                      <li key={i}>
                        <ul style={{ marginLeft: 20 }}>
                          <li><strong>Name:</strong> {contact.name}</li>
                          <li><strong>Relation:</strong> {contact.relation}</li>
                          <li><strong>Phone:</strong> {contact.phone}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No emergency contacts provided.</p>
                )
              ) : (
                renderObject(state[key])
              )}
            </div>
          )}
        </section>
      ))}

      {/* Documents Section */}
      <section style={{ marginBottom: 20, border: '1px solid #ddd', borderRadius: 4 }}>
        <div
          onClick={() => toggleSection('documents')}
          style={{
            cursor: 'pointer',
            backgroundColor: '#f0f0f0',
            padding: '10px 15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            userSelect: 'none',
          }}
        >
          <h3 style={{ margin: 0 }}>Documents</h3>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit('/documents');
              }}
              style={{
                padding: '4px 10px',
                fontSize: 14,
                cursor: 'pointer',
                marginRight: 10,
              }}
            >
              Edit
            </button>
            <button
              aria-label={expandedSections.documents ? 'Collapse' : 'Expand'}
              style={{
                fontSize: 18,
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                userSelect: 'none',
              }}
            >
              {expandedSections.documents ? '−' : '+'}
            </button>
          </div>
        </div>

        {expandedSections.documents && (
          <div style={{ padding: 15, backgroundColor: 'white' }}>
            {state.documents.files?.length > 0 ? (
              <ul style={{ paddingLeft: 20 }}>
                {state.documents.files.map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <p>No documents uploaded.</p>
            )}
          </div>
        )}
      </section>

      <button
        onClick={handleSubmit}
        style={{
          display: 'block',
          margin: '30px auto 0',
          padding: '10px 30px',
          fontSize: 16,
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ReviewSubmit;    