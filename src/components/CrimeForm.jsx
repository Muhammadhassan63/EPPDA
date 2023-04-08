import React, { useState } from 'react';
import "./CrimeForm.css"
import axios from 'axios';

const CrimeForm = () => {
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API request to create a new crime report
      const response = await axios.post('/api/crime-reports', { name, contactNo, location, description });
      console.log(response.data);
      // Reset the form after a successful submission
      setName('');
      setContactNo('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
    <form className="crime-form" onSubmit={handleSubmit}>
    <h1 className='form-heading'>Crime Form</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          
        />
      </div>
      <div>
        <label htmlFor="contactNo">Contact No:</label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          value={contactNo}
          onChange={(event) => setContactNo(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          cols="65" // set the number of columns to display
          rows="12" // set the number of rows to display
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default CrimeForm;
