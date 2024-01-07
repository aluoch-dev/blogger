
export const Button = ({title, onClick}) => {
    return (
        <button 
            className="bg-gray-400 hover:bg-gray-500 text-base text-white font-semibold py-2 px-4 rounded w-full"
            onClick={onClick}
        >
            { title }
        </button>
    )
}

