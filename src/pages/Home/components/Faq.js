import React, { useState } from 'react'

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        }
    ];
    const [activeFaq, setActiveFaq] = useState(null);
    const toggleFaq = (id) => {
      setActiveFaq(activeFaq === id ? null : id);
    }
  return ( 
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <h2 id="accordion-flush-heading-1">
                      <button type="button"
                        onClick={()=>toggleFaq(faq.id)} 
                        className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">

                        <span className="text-xl text-slate-900 dark:text-white">{faq.question}</span>
                        <svg data-accordion-icon 
                          className={`w-6 h-6 shrink-0 transform ${
                          activeFaq === faq.id ? "rotate-180" : ""}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        {/* <svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
                      </button>
                  </h2> 

                  {activeFaq === faq.id && (
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-lg mb-2 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}                   
            </div>
              ))}
                           
            </div>
      </section>
  )
}
