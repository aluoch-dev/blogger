import Image from "next/image";
import { Button } from "./buttons";
import Link from "next/link";
import { SearchInput } from "./inputs";

export const Navbar = ({logo}) => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link className="flex items-center" href="/">
                        <Image src={logo} alt="Logo" className="h-8" />
                    </Link>
                </div>
                <div className="block lg:hidden md:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto md:flex md:items-center md:w-auto">
                    <div className="text-sm lg:flex-grow md:flex-grow"></div>
                    <div>
                    <div className="lg:flex md:flex items-center">
                    <div className="lg:p-4 md:p-2">
                        <Link 
                            className="hover:text-white block lg:inline-block lg:mt-0 md:inline-block md:mt-0"
                            href="/">Blogs</Link>
                        </div>
                        <div className="lg:px-4 md:px-2">
                            <SearchInput 
                                className="hover:text-white block lg:inline-block lg:mt-0 md:inline-block md:mt-0"
                            /> 
                        </div> 
                        <div className="lg:px-4 md:px-2">
                            <Button 
                                className="hover:text-white block lg:inline-block lg:mt-0 md:inline-block md:mt-0"
                                title="Create Blog Post"
                                onClick=""
                            />
                        </div>          
                    </div>
                </div>
                </div>
            </nav>
        </>
    );
}