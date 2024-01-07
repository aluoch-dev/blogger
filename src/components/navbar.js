import Image from "next/image";
import { Button } from "./buttons";
import Link from "next/link";
import { SearchInput } from "./inputs";

export const Navbar = ({logo}) => {
    return (
        <nav className="bg-gray-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="flex items-center" href="/">
                <Image src={logo} alt="Logo" className="h-8" />
                </Link>

                <div className="links flex">
                    <Link 
                    className="px-2 py-2"
                    href="/blog">Blogs</Link>
                    <SearchInput />
                    <Button 
                    className="px-2 py-2"
                    title="Create Blog Post"
                    onClick=""
                    />
                </div>
            </div>
        </nav>      
    );
}