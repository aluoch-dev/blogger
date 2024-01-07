export const SearchInput = () => {
     
    return (
        <form className="relative py-2 block lg:inline-block lg:mt-0">
            <input
                className="bg-transparent appearance-none border border-black rounded py-2 px-3 pr-10 text-gray-400 w-full"
                id="search"
                type="text"
                placeholder="Text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 m-2">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        </form>
    );
}