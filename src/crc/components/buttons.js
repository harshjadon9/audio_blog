import react from 'react'

const light = ({ name, classes, callback }) => {
    return (
        <button
            onClick={callback}
                    className={'w-max text-sm font-semibold py-3 px-4 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-sm transition duration-150 ease-in-out hover:shadow-sm bg-white text-purple hover:bg-gray-200 '+classes}>
            {name}

        </button>
    )
}
const dark = ({ name, classes, callback }) => {
    return (
        <button
            onClick={callback}
                    className={'w-max text-sm font-semibold py-3 px-4 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-sm transition duration-150 ease-in-out hover:shadow-sm bg-purple text-white hover:bg-dark'+classes}>
            {name}

        </button>
    )
}




export default {light, dark}