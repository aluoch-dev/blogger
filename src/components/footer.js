import Image from "next/image";
import Link from "next/link";

function getYear () {
    return new Date().getFullYear();
}

export const Footer = ({logo}) => {
    return (
        <nav className="bg-gray-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="flex items-center" href="/">
                    <Image src={logo} alt="Logo" className="h-8" />
                </Link>

                <div className="copyright flex">
                <p>Copyright@{getYear()}.BlogPost</p>
                </div>
            </div>
        </nav>      
    );
}