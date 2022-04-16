import React from "react";

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
        <section className=" bg-slate-50 h-full text-black py-10">
            <h1 className="font-bold">Simple <span className="mx-1 font-extrabold underline decoration-8 decoration-[#c9c9c9]">Pricing</span> Plans</h1>
            <div className="flex">
                <div className="w-80 bg-white shadow-md rounded-md px-10 py-10 my-10 mx-5">
                    <h2 className="font-extrabold text-4xl pb-5">Starter</h2>
                    <h3 className="font-extrabold text-2xl pb-3">$15<span className="text-[11px] align-middle mx-1">/ mo</span></h3>
                    <p className="opacity-40 text-[10px]">This plan is ideal for new writer and small companies or organizations</p>
                    <ul className="w-full pt-10 grid gap-3">
                        <Features name={"1 Domain"}/>
                        <Features name={"1 Admin"}/>
                        <Features name={"100 Articles"}/>
                        <Features name={"10 Voices"}/>
                        <Features name={"1500 words"}/>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Price