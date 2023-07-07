
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './MemberForm.css';

export default function MemberForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    member_id: '',
    username: '',
    phone: '',
    address: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/members', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Member created successfully');

        // Arahkan pengguna ke halaman "payment"
        navigate('/payment');
      } else {
        console.log('Error creating member. Status:', response.status);
      }
    } catch (error) {
      console.log('Error sending request:', error);
    }
  };

  return (
    <div className='akun'>
      <div className='akun-user'>
        <h1 className='signup'>Form Members</h1>
        <br />
        <form className='isi' onSubmit={handleSubmit}>
          <br />
          <div className='form-group'>
            <label htmlFor='idMember'>Id Member</label>
            <input
              type='text'
              className='form-control'
              id='idMember'
              placeholder='Enter member ID'
              name='member_id'
              value={formData.member_id}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              placeholder='Enter username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              className='form-control'
              id='phone'
              placeholder='Enter phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              className='form-control'
              id='address'
              placeholder='Enter address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <br />
          <button
            type='submit'
            className='btn btn-primary sbmt'
            style={{ width: '50%', marginLeft: '25%', marginTop: '5%' }}
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}





