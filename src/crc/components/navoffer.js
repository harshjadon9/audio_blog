import React from "react";

const Topnav = ({classes}) => {
    return (
        <div className={'grid place-items-center h-10 w-full bg-gradient-to-br from-purple to-purple-l '+classes}>
            <a className='font-bold text-white text-sm hover:cursor-pointer hover:opacity-75 transition duration-100 ease-in-out align-middle'>Visit our main website ✨</a>
        </div>
    )
}

export default Topnav