import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { contact } from '@/utilities/data';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  // Helps format the information
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:databytemike@gmail.com?subject=${formData.name}: ${formData.subject}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='relative section-title before:content-contact before:absolute before:opacity-40 before:-top-7 before:-left-[65%] before:hidden before:lg:block'>
            Contact Me
          </h2>
          <p className="subtitle">
            Feel Free To Reach Out To Me
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((detail, index) => {
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 lg:mb-0 text-2xl">
                    {detail.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{detail.title}</h4>
                    <p className="text-accent font-normal">{detail.subtitle}</p>
                    <p >{detail.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Form */}
          <form className="space-y-8 w-full max-w-[780px]" onSubmit={handleSubmit(onSubmit)} encType="text/plain" >
            <div className="flex gap-8">
              <input {...register('name')} className="input" type="text" placeholder="Your name"/>
              <input {...register('email', { required: true })} className="input" type="email" placeholder="Your email" />
            </div>
            <input {...register('subject', { required: true })} type="text" className="input" placeholder="Subject"/>
            <textarea
              {...register('message', { required: true })}
              className="bg-secondary resize-none w-full outline-none p-6 rounded-sm h-[200px] focus:outline focus:outline-1 focus:outline-accent"
              placeholder="Your message"
            />
            <button className="btn btn-lg group" type="submit" >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent-hover absolute bottom-0 left-0 -translate-x-full ease-out duration-500 
              transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;