"use client"
import { useState } from "react";

export default function Contact() {

    const [inputs, setInputs] = useState({})
    const [message, setMessage] = useState("")

    const handleInput = (e) => {
        setInputs((state)=> { return {...state, [e.target.name]:e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(process.env.NEXT_PUBLIC_API_URL+'/enquiry', {
            method:"POST",
            body: JSON.stringify(inputs)
        })
        .then((res) => res.json())
        .then((res) => {
            setMessage(res.message)
            setInputs({})
        })
    }

  return (
    <main className="container mx-auto px-4 py-6">
    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-1/4">Name:</label>
            <input type="text" name="name" onChange={handleInput}  value={inputs.name??""} id="name" className="border rounded px-2 py-1 w-3/4"/>
        </div>
        <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-1/4">Email:</label>
            <input type="email" name="email" onChange={handleInput} value={inputs.email??""} id="email" className="border rounded px-2 py-1 w-3/4"/>
        </div>
        <div className="flex items-center mb-4">
            <label htmlFor="message" className="w-1/4">Message:</label>
            <textarea id="message" name="message" onChange={handleInput} value={inputs.message??""} className="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
    {message && <p>{message}</p>}
</main>
  );
}
