import Image from "next/image";

export const Footer = ({logo}) => {
    return (
        <nav class="bg-gray-300 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center">
                <Image src={logo} alt="Logo" class="h-8" />
                </div>

                <div class="copyright flex">
                <p>Copyright@2023.BlogPost</p>
                </div>
            </div>
        </nav>      
    );
}