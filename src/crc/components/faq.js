import React from 'react';

function Faq(props) {
    return (
        <div className='bg-white'>
            <div className='flex content-center px-5 gap-44 justify-center'>
                <div className="self-center">
                    <h1 className="text-6xl font-bold opacity-80 py-10">FAQs</h1>
                    <p className="opacity-90 text-base lg:text-lg">Can't find the answer you need? <span className="font-medium text-purple-600 cursor-pointer">Contact Support</span></p>
                </div>
                <img className='w-auto h-44 self-center' src='https://assets.website-files.com/61f1c74b06056055ed835a0c/620d1efcb367497bd902c178_happy-hiro-min.png' />
            </div>
        </div>
    );
}

export default Faq;