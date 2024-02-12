import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isroImg from './isro.avif';
import nightgauge from './night sky gauge.webp';
import team from './team.jpg';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [department, setDepartment] = useState('');
  
  const [phone, phoneNumber] = useState('');



  const [email, setemail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/thank-you');
  };

  return (
    <div className='total'>
    <div className='content'>
      <div className='content1'>
      <img src={isroImg} alt="react" />
      <h4>Collaboration with isro in making of rocketsand satellite</h4>
      </div>
      <div className='content1'>
      <img src={nightgauge} alt="react" />
      <h4>We organize many event as one of it is Night gauge event a fun event</h4>
      </div>
      <div className='content1'>
      <img src={team} alt="react" />
      <h4>This is the picture of our team who are behind the success of Astro club</h4>
      </div>
      <div className='content1'>
      <img src={team} alt="react" />
      <h4>This is the picture of our team who are behind the success of Astro club</h4>
      </div>
    </div>
    <div className='register'>
        
      <h2 className='font-effect-fire head'>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>

          <div className="font-effect-outline label">User Name:</div>
          <div className='logo'>
          <i class="fa-solid fa-user"></i>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='user'
            required
          />
            </div>
        </label>
        <br />
        <label>
        <div className="font-effect-outline label"> Roll Number:</div>
           <div  className='logo'>
          <i class="fa-solid fa-r"></i>

          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className='roll'
            required
          />
             </div>
        </label>
        <br />
        <label>

        <div className="font-effect-outline label"> Registration Number:</div>
          <div className='logo'>
          <i class="fa-solid fa-r"></i>

          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className='regno'
            required
          />
            </div>
        </label>
        <br />
        <label>
        <div className="font-effect-outline label"> Department name :</div>
           <div className='logo'>
          <i class="fa-solid fa-building"></i>

          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className='department'
            required
          />
             </div>
        </label>
        <br />
        
        <label>
        <div className="font-effect-outline label"> Phone Number:</div>
         <div  className='logo'>
          <i class="fa-solid fa-phone"></i>

          <input
            type="number"
            value={phone}
            onChange={(e) => phoneNumber(e.target.value)}
            className='phone'
            required
          />
            </div>
        </label>
        <br />

        
        <label>
        <div className="font-effect-outline label"> Email Adress:</div>
        <div className='logo'>
        <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='email'
            required
          />
          </div>
        </label>
        <br />
        
        <button type="submit" className='submitbutton'>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
