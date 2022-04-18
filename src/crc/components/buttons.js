import react from 'react'

const Btn1 = ({ name, classes, callback }) => {
    return (
        <button
            onClick={callback}
                    className={'w-max text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-sm transition duration-150 ease-in-out hover:shadow-sm '+classes}>
            {name}

        </button>
    )
}



export default Btn1