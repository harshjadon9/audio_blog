import React from "react";

const Email = ({ name, classes }) => {
    return (
        <input
            className={'px-3 overflow-auto md:px-4 py-2 focus-visible:ring rounded-md font-bold text-l focus:outline-none border-x-indigo-700 shadow-sm outline-none '+classes}
            placeholder={name}
            type='email'
        />
    )
}
const Checkbox = ({classes }) => {
    return (
        <input
            className={' focus-visible:ring rounded-md focus:outline-none border-x-indigo-700 shadow-sm outline-none '+classes}
            type='checkbox'
        />
    )
}

export default { Email, Checkbox };