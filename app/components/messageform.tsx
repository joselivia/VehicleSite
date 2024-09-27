'use client'
import { useState,useEffect } from 'react';
import {push,ref, set} from 'firebase/database';
import { db } from '@/firebaseConfig'; 

export default function MessageForm  () {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =()=>{
    try{
      const usersRef=ref(db,'Messages');
      const newDataref=push(usersRef);
      set(newDataref,{
        name:name,
        message:message,
      });
      setName("");
      setMessage("");
      setSuccess('Thanks,Message submitted successfully!');      
    }catch(error){
      setError('An error occurred. Please try again later.');
    }

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className="mb-6 text-2xl font-bold text-white-800">Leave a Satisfactory Message</h2>
      <div className="w-full max-w-md rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4 p-2 w-full border border-gray-300 rounded dark:text-black"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mb-4 p-2 w-full border border-gray-300 rounded h-32 dark:text-black"
        />
        <button onClick={handleSubmit} type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
      {success && <p className="mt-4 text-green-500">{success}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

