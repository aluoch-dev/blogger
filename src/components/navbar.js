import Image from "next/image";
import { Button } from "./buttons";
import Link from "next/link";
import { SearchInput } from "./inputs";

export const Navbar = ({logo}) => {
    return (
        <nav class="bg-gray-300 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center">
                <Image src={logo} alt="Logo" class="h-8" />
                </div>

                <div class="links flex">
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