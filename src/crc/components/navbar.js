import React from "react";
import Btn1 from "./buttons";
const Navbar = () => {
    return (
        <nav className="transition-colors duration-500 lg:z-50 sticky border-slate-300 border-1 top-0 z-50 flex backdrop-blur-md text-left text-white px-10 py-4 font-medium text-sm place-items-center">
            <h1 className="text-lg font-bold text-left">Company name</h1>
            <span className="grow"></span>
            <ul className=" text-slate-100 flex place-items-center space-x-8">
                <li><a className="align-middle">Docs</a></li>
                <li><a className="">Examples</a></li>
                <li><a className="">Pricing</a></li>
                <div className="!mx-7 border-white border-r-[1px] opacity-20 h-[20px] w-1"></div>
                <li className="!m-0"><Btn1 name={"Get Started"} classes={" h-10 py-0"} /></li>
            </ul>
        </nav>
    )
}

export default Navbar