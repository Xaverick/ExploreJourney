"use client"

import { useState } from 'react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Textarea } from "@/Components/ui/textarea"
import { Phone, Mail, MessageCircle } from "lucide-react"
import emailjs from '@emailjs/browser';
import './contact.scss'

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  query: string;
}
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    query: '',
  });

  const [loading, setLoading] = useState(false);

  const { name, email, phone, subject, query } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email || !query || !subject) {
      alert('Please fill all the fields');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (query.length < 20) {
      alert('Message should be at least 20 characters long');
      return;
    }

    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    setLoading(true);

    const templateParams = {
      to_name: 'Harsh Aggarwal',
      email: formData.email,
      name: formData.name,
      message: formData.query,
      number: formData.phone,
      subject: formData.subject,
    };

    emailjs
      .send('service_bv6ob4b', 'template_pq0l5f8', templateParams, 'uGK_mbrR6uqwyhQ6D')
      .then(
        (response) => {
          setLoading(false);
          setFormData({ name: '', email: '', phone: '', query: '', subject: '' });
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false);
        }
      );
  };

  return (
    <>
<div className="relative bg-gradient-to-r from-[#DF6951] to-[#C85940] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            We'd love to hear from you! Get in touch with our travel experts and start planning your dream vacation.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2">
          <svg
            className="w-48 h-48 md:w-64 md:h-64 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50Z" />
            <path d="M80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50ZM30 50C30 61.0457 38.9543 70 50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50Z" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
      </div>
    </div>
        <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#DF6951] focus:ring-[#DF6951]"
                    />
                </div>
                <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#DF6951] focus:ring-[#DF6951]"
                    />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    type="email"
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#DF6951] focus:ring-[#DF6951]"
                    />
                </div>
                <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#DF6951] focus:ring-[#DF6951]"
                    />
                </div>
                <div>
                    <Label htmlFor="query">Your Query</Label>
                    <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#DF6951] focus:ring-[#DF6951]"
                    />
                </div>
                <Button type="submit" className="w-full bg-[#DF6951] hover:bg-[#C85940] text-white">
                    {loading ? 'Sending...' : 'Send Message'}
                </Button>
                </form>
            </div>

            <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Our Contact Information</h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#DF6951] mr-3" />
                    <span>+91 8368912200</span>
                    </div>
                    <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#DF6951] mr-3" />
                    <span>explorejourney13@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-[#DF6951] mr-3" />
                    <span>WhatsApp: +91 8368912200</span>
                    </div>
                </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">About Our Travel Services</h2>
                <p className="text-gray-600 mb-4">
                    At Your Travel Company, we specialize in creating unforgettable travel experiences. 
                    With over 10 years of expertise, we offer personalized itineraries, exclusive deals, 
                    and 24/7 support to ensure your journey is nothing short of extraordinary.
                </p>
                <p className="text-gray-600">
                    Whether you're planning a relaxing beach getaway, an adventurous trek, or a cultural 
                    exploration, our team of travel experts is here to make your dream vacation a reality. 
                    Get in touch with us today and let's start planning your next adventure!
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}