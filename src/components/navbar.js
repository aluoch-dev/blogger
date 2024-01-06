import Image from "next/image";

export const Navbar = ({logo}) => {
    return (
        <nav class="bg-gray-300 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center">
                <Image src={logo} alt="Logo" class="h-8" />
                </div>

                <div class="links flex">
                <button href="#" class="text-black">Search Bar</button>
                <button class="bg-gray-400 hover:bg-gray-500 text-base text-white font-semibold py-2 px-4 rounded">
                    Create Blog Post
                </button>
                </div>
            </div>
        </nav>      
    );
}