import React from "react";
import Btn1 from "./buttons";

const Tick = () => {
    return (
        <svg viewBox="0 0 330 330" width="15px" className="fill-green-500">
            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z" />
            <path d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001 c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213C242.227,100.807,232.73,100.806,226.872,106.664z" />
        </svg>
    )
}
const Features = ({ name }) => {
    return (
        <li className="place-items-center flex gap-2 ml-16">
            <Tick />
            <h4 className="font-medium text-xs opacity-50">{name}</h4>
        </li>
    )
}



const Price = () => {
    return (
        <section className=" bg-slate-50 h-full text-gray-700 py-10 text-center">
            <h1 className="font-bold text-3xl lg:text-4xl my-10">Simple <span className="mx-1 font-extrabold underline decoration-8 decoration-[#6a21a7]">Pricing</span> Plans</h1>
            <div className="lg:flex place-items-center justify-center mt-10">
                <div className=" mx-auto w-80 bg-white shadow-lg rounded-lg px-10 py-10 my-10 lg:mx-5">
                    <img className="mx-auto w-28 mb-10" src="https://mangools.com/assets/subscription-basic-2149dcc5352d9e02f7c8a95cafa85be79bc0850ba5f5ef3df2b6cc6d52063e59.svg" />
                    <h2 className="font-extrabold text-5xl pb-5">Starter</h2>
                    <h3 className="font-extrabold text-2xl pb-3">Free</h3>
                    <p className="opacity-40 text-[10px]">This plan is ideal for new writer and small companies or organizations</p>
                    <ul className="w-full py-10 grid gap-3">
                        <Features name={"1 Domain"} />
                        <Features name={"1 Admin"} />
                        <Features name={"100 Articles"} />
                        <Features name={"10 Voices"} />
                        <Features name={"1100 words/pg"} />
                    </ul>
                    <Btn1 name="Get Started" classes={" bg-[#0b121f] !text-white !w-full hover:!bg-[#0d1a2d]"} />
                </div>
                <div className="mx-auto scale-105 text-white w-80 shadow-lg rounded-lg px-10 py-10 my-10 lg:mx-5 bg-gradient-to-tr from-purple-800 via-violet-900 to-purple-800">
                    <img className="mx-auto w-28 mb-10" src="https://mangools.com/assets/subscription-premium-8dc0c20749b74979528bc769d049b5cdc9080e99b84b7b2beef7e2cb5b6cf489.svg" />
                    <h2 className="font-extrabold text-5xl pb-5">Premium</h2>
                    <h3 className="font-extrabold text-2xl pb-3">$55<span className="text-[11px] align-middle mx-1">/ mo</span></h3>
                    <p className="opacity-60 text-[10px]">This plan is ideal for new writer and small companies or organizations</p>
                    <ul className="w-full py-10 grid gap-3">
                        <Features name={"5 Domain"} />
                        <Features name={"5 Admin"} />
                        <Features name={"500 Articles"} />
                        <Features name={"50 Voices"} />
                        <Features name={"500 words/pg"} />
                    </ul>
                    <Btn1 name="Get Started" classes={" bg-white !text-[#0b121f] !w-full hover:!bg-gray-200"} />
                </div>
                <div className="mx-auto w-80 bg-white shadow-lg rounded-lg px-10 py-10 my-10 lg:mx-5">
                    <img className="mx-auto w-28 mb-10" src="https://mangools.com/assets/subscription-agency-ef644e95735cb3b9f049c7d87d8959a575478808dd6d7dc4c9b9780b017ede72.svg" />
                    <h2 className="font-extrabold text-5xl pb-5">Agency</h2>
                    <h3 className="font-extrabold text-2xl pb-3">$77<span className="text-[11px] align-middle mx-1">/ mo</span></h3>
                    <p className="opacity-40 text-[10px]">This plan is ideal for new writer and small companies or organizations</p>
                    <ul className="w-full py-10 grid gap-3">
                        <Features name={"unlimited Domains"} />
                        <Features name={"unlimited Admins"} />
                        <Features name={"unlimited Articles"} />
                        <Features name={"100 Voices"} />
                        <Features name={"10,000 words/pg"} />
                    </ul>
                    <Btn1 name="Get Started" classes={" bg-[#0b121f] !text-white !w-full hover:!bg-[#0d1a2d]"} />
                </div>
            </div>
            
        </section>
    )
}

export default Price