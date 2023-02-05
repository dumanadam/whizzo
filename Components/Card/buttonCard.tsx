'use client';
import React, { useEffect } from "react";
import { Navbar, Button, Dropdown, Card } from "flowbite-react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import { useState } from 'react';
import PocketBase from 'pocketbase';



export default function ButtonCard(props) {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  

  const create = async() => {
    console.log("sess", session);  
    const pb = new PocketBase('http://127.0.0.1:8090');
   /*  const data = {
      "usernamef": "test_username",
      "email": "test@example.com",
      
      "name": "test"
  };
  
  const record = await pb.collection('users').create(data); */
  
  // (optional) send an email verification request
  //await pb.collection('users').requestVerification('test@example.com');
    
    /* // or fetch only the first record that matches the specified filter
    const records = await pb.collection('users').getFirstListItem('someField="test"', {
      expand: 'relField1,relField2.subRelField',
    });

    records.forEach((rec)=>{
      console.log("rec", rec);
    })

    await fetch('http://127.0.0.1:8090/api/collections/sessions/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent('');
    setTitle(''); */
  }

  useEffect(() => {
    console.log("title", title);
  }, [title]); // Only re-run the effect if count changes

  return (
    <div>
    <Card>
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline={true} label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={session.user.image}
          alt="User image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {session.user.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </Card>
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
    </div>
  );
}
