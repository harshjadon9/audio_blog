import React from 'react';

const Q = ({question, answer})=>{
    return(
        <div className="mb-4 cursor-pointer flex justify-between bg-slate-100 rounded-md text-grey font-bold text-xl px-10 py-4 hover:scale-[101%] transition duration-150 ease-in-out">
            <h3 className="lg:text-lg text-base">{question}</h3>
            <img className='w-7' src="https://img.icons8.com/material-rounded/96/000000/expand-arrow--v1.png"/>
        </div>
    )
}

function Faq(props) {
    return (
        <div className='w-full lg:px-80 px-10 mb-80'>
            <div className='text-grey flex content-center justify-between mb-20'>
                <div className="self-center">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold py-10">FAQs</h1>
                    <p className="opacity-90 text-base lg:text-lg">Can't find the answer you need? <span className="font-semibold text-purple cursor-pointer hover:opacity-80 lg:ml-3 ">Contact Support</span></p>
                </div>
                <img className='w-auto lg:h-44 h-32 self-center' src='https://assets.website-files.com/61f1c74b06056055ed835a0c/620d1efcb367497bd902c178_happy-hiro-min.png' />
            </div>
            <Q question="How long can i use the free plan?" answer="yeahhh!"/>
            <Q question="What if i exceed monthly limits?" answer="yeahhh!"/>
            <Q question="What are monthly limits?" answer="yeahhh!"/>
            <Q question="How can talk to an expert?" answer="yeahhh!"/>
        </div>
    );
}

export default Faq;