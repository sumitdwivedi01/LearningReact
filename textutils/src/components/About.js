import React from 'react'

export default function About({mode}) {
    
  return (
    <div className='container rounded-3 border border-info border-2 pb-3' style={{backgroundColor: `${mode}` , color:`${mode===`dark`?`light`:`dark`}`}} >
        <h1 className={`text-${mode===`dark`|| mode===`warning`?`light`:`dark`} my-3`}>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> What is TextUtils? </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                TextUtils is a lightweight and fast text manipulation tool built for developers, students, and content creators.
                It helps you analyze and modify your text easily with powerful features like word count, character count, extra space removal, case conversion, and much more — all in a simple, intuitive interface.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Why Use TextUtils?</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Whether you're writing code, an email, or a blog — TextUtils saves time by offering instant tools to format your content.
                💡 Features like:

                Real-time word & character count

                CamelCase, UPPERCASE, lowercase, and Title Case conversion

                Removing extra spaces or line breaks

                Estimating reading time for your text
                make it ideal for anyone working with text regularly.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong> Tech Behind TextUtils </strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils is built with ReactJS for fast performance and seamless UI.
                It uses state management and props to pass data dynamically across components.
                The clean layout is designed with Bootstrap for responsive behavior, ensuring the app looks great on all screen sizes.
                This app is also open source, so you can learn from the code or contribute to it!
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
