import react from 'react'

const Btn1 = ({ name, classes }) => {
    return (
        <button
                    className={'text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-sm transition duration-150 ease-in-out '+classes}>
            {name}
        </button>
    )
}



export default Btn1