
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

// export const PaginationButton = ({text, onClick}) => {
//     return (
//         <button 
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
//             {text}
//         </button>
//     )
// }
