import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-800 text-white py-3 shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link href="/" className="hover:text-yellow-600 font-bold text-2xl">
                    MusiQ.sk
                </Link>

                {/* Linky  */}
                <div className="ml-auto flex items-center space-x-6">
                    <Link href="/" className="hover:text-yellow-600 font-bold">
                        Domov
                    </Link>
                    <Link href="/products" className="hover:text-yellow-600 font-bold">
                        Produkty
                    </Link>
                    <Link href="/checkout" className="hover:text-yellow-600 font-bold">
                        Checkout
                    </Link>
                    
                    {/* Ikony */}
                    <Link href="/login" className="hover:text-yellow-600 text-xl">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link href="/checkout" className="hover:text-yellow-600 text-xl">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
