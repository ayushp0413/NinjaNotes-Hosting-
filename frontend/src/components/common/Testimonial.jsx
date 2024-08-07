import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { createTestimonial } from '../../services/operations/testimonialsAPI';

const Testimonial = () => {

    const addTestimonials = async(data) => {
        console.log("data that you collect from form: ")
        // Im creating a dummy data , name yahi rakhna useState form me tere
        const Dummyata = {
            name:"Ayush Patidar",
            rating:5,
            review:"Good",
        }
        console.log("DUMMY : ", Dummyata);
        try
        {
            const res = await createTestimonial(Dummyata);
            if(!res){
                toast.error("Unable to add Review");
            }

        }catch(err)
        {
            console.log("ERROR in TESTIMONIAL");
            toast.error(err);
        }
    }

    const formSubmit = (data) => {
        addTestimonials(data);
    }


  return (
    <div>
        TESTIMONIALS 
        <p>Create a form and on submit --- send data to your form submit handler, and then pass your formData to my addTestimonials function</p>
    </div>
  )
}

export default Testimonial
