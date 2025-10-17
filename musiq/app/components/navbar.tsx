import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl text-white border-b border-white/10">
            <div className="max-w-[980px] mx-auto flex items-center justify-between px-6 h-11">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="text-2xl font-light tracking-tight hover:text-white transition-colors duration-300 text-gray-300"
                >
                    MusiQ.sk
                </Link>

                {/* Linky */}
                <div className="flex items-center space-x-8">
                    <Link 
                        href="/" 
                        className="text-sm font-light hover:text-white transition-colors duration-300 text-gray-300"
                    >
                        Domov
                    </Link>
                    <Link 
                        href="/products" 
                        className="text-sm font-light hover:text-white transition-colors duration-300 text-gray-300"
                    >
                        Produkty
                    </Link>
                    <Link 
                        href="/checkout" 
                        className="text-sm font-light hover:text-white transition-colors duration-300 text-gray-300"
                    >
                        Checkout
                    </Link>
                    
                    {/* Ikony */}
                    <Link 
                        href="/login" 
                        className="text-lg hover:text-white transition-colors duration-300 text-gray-300"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link 
                        href="/checkout" 
                        className="text-lg hover:text-white transition-colors duration-300 text-gray-300"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};