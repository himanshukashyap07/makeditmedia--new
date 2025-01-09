'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';



export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzgbvaw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="card flex flex-col justify-content-center">
        <FloatLabel>
            <InputText id='username' type='text' name='Name'/>
            <label htmlFor="username">Username</label>
        </FloatLabel>
      </div>
      <ValidationError 
        prefix="Name" 
        field="Name"
        errors={state.errors}
      />
      <div className="card flex flex-col justify-content-center">
        <FloatLabel>
            <InputText id='email' type='text' name='Email'/>
            <label htmlFor="email">Email</label>
        </FloatLabel>
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="card flex flex-col justify-content-center">
        <FloatLabel>
            <InputText id='message' title='msgArea' type='text' name='message'/>
            <label htmlFor="email">Message</label>
        </FloatLabel>
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}


