import React from "react";
import { useNavigate } from "react-router-dom";
import Btn1 from "./buttons";

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <nav className="transition-colors duration-500 lg:z-50 sticky border-slate-300 border-1 top-0 z-50 flex backdrop-blur-md text-left text-white px-4 lg:px-10 py-4 font-medium text-sm place-items-center">
            <h1 className="text-base lg:text-lg font-bold text-left">Company name</h1>
            <span className="grow"></span>
            <ul className=" text-slate-100 flex place-items-center space-x-8">
                <li><a className="hidden md:lg:block">Docs</a></li>
                <li><a className="hidden md:lg:block">Examples</a></li>
                <li><a className="hidden md:lg:block">Pricing</a></li>
                <div className="hidden md:lg:block !mx-7 border-white border-r-[1px] opacity-20 h-[20px] w-1"></div>
                <li className="!m-0">
                    <Btn1 name={"Get Started"}
                        classes={" h-10 py-0"}
                        callback={() => {
                            navigate("/login")
                        }} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar