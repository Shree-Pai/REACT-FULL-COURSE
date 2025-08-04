import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PersonalDetails from './Components/personaldetails';
import JobDetails from './Components/JobDetails';
import BankDetails from './Components/BankDetails';
import EmergencyContacts from './Components/EmergencyContact';
import DocumentUpload from './Components/DocumentUpload';
import ReviewSubmit from './Components/ReviewSubmit';
import ProgressBar from './Components/ProgressBar';



const initialState = {
  personal: {},
  job: {},
  bank: {},
  emergency: { contacts: [] },
  documents: { files: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_STEP':
      return { ...state, [action.step]: action.data };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const FormContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <Router>
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Navigate to="/personal" replace />} />
          <Route path="/personal" element={<PersonalDetails />} />
          <Route path="/job" element={<JobDetails />} />
          <Route path="/bank" element={<BankDetails />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="/documents" element={<DocumentUpload />} />
          <Route path="/review" element={<ReviewSubmit />} />
          <Route path="*" element={<Navigate to="/personal" replace />} />
        </Routes>
      </Router>
    </FormContext.Provider>

  );
}
