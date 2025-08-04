import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../App';

function DocumentUpload() {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();
  const [files, setFiles] = useState(state.documents.files || []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');

    const combinedFiles = [...files, ...pdfFiles];
    if (combinedFiles.length > 5) {
      alert('Maximum 5 files allowed');
      return;
    }
    setFiles(combinedFiles);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_STEP', step: 'documents', data: { files } });
    navigate('/review');
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center' }}>Document Upload</h2>

      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            style={{ display: 'block', marginBottom: '8px' }}
          />
          <small>Upload PDF files (Aadhaar, PAN, Resume). Max 5 files.</small>
        </div>

        {files.length > 0 && (
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            {files.map((file, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>
                {file.name}
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  style={{
                    marginLeft: '10px',
                    padding: '2px 6px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default DocumentUpload;
