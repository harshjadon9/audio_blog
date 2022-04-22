import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./buttons";

const Navbar = ({classes}) => {
    let navigate = useNavigate();
    return (
        <nav className={" lg:visible md:visible invisible absolute w-full mt-4 transition-colors duration-500 lg:z-50 border-slate-300 border-1 top-0 z-50 flex text-left text-dark px-4 lg:px-10 py-4 font-medium text-sm place-items-center "+classes}>
            <a href="/" onClick={()=>{navigate('/')}}><h1 className="text-base lg:text-lg font-bold text-left">Company name</h1></a>
            <span className="grow"></span>
            <ul className="  flex place-items-center space-x-8">
                <li><a className="hidden md:lg:block">Docs</a></li>
                <li><a className="hidden md:lg:block">Examples</a></li>
                <li><a className="hidden md:lg:block" onClick={()=>{navigate('/pricing')}}>Pricing</a></li>
                <div className="hidden md:lg:block !mx-7 border-grey border-r-[1px] opacity-20 h-[20px] w-1"></div>
                <li className="!m-0">
                    <Buttons.dark name={"Get Started"}
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