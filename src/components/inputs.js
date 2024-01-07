
export const SearchInput = () => {
    return (
        <div className="relative px-2 py-2">
            <input
                className="bg-transparent appearance-none border border-black rounded py-2 px-3 pr-10 text-gray-700 leading-tight"
                id="search"
                type="text"
                placeholder="Text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                <span>&sear;</span>
            </div>
        </div>
    );
}