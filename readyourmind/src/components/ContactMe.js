import React, { useState } from 'react';

const ContactMe = () => {
  // State variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form data (you can add more validation here)
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Save the information (you can send it to an API or store it in your preferred way)
    const formData = { name, email, message };
    console.log('Form Data:', formData);

    // Reset the form and mark it as submitted
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  const handleReturn=()=>{
    setSubmitted(false);
  };

  return (
    <div className="row mt-4">
      <div className="col-sm-6 offset-3">
      <h1>Contact Me</h1>
      {submitted ? (
        <div>
        <p>Thank you for your submission!</p>
        <button onClick={handleReturn}>Return</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label For="Name">Name</label><br />
          <input type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/><br />
        </div>
        <div className="mb-3">
          <label For="Email">Email</label><br />
          <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/><br />
        </div>
        <div className="mb-3">
          <label For="Message">Message</label><br />
          <textarea name="Message" id="Message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control"></textarea>
        </div>
          <br />
          <input type="submit" value="Submit" /><br /><br /><br /><br />
        </form>
        
      )}
      </div>
    </div>
  );
};



export default ContactMe;