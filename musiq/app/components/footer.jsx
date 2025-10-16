import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                {/* 1. sekcia: Logo, Kontakt a Socialne siete */}
                <div className="col">
                    {/* Logo */}
                    <div className="font-bold text-3xl mb-6">
                        MusiQ.sk
                    </div>
                    
                    {/* Kontakt */}
                    <h4 className="font-semibold text-lg mb-3">Kontakt:</h4>
                    <p><strong>Adresa:</strong> Komenského 44, 040 01 Košice</p>
                    <p><strong>Telefon:</strong> +421 919 958 665</p>
                    <p><strong>Otvaracie hodiny:</strong> 9.00 - 17.00, Pon - Ned</p>
                    
                     {/* Socialne siete */}
                    <div className="mt-6">
                        <h4 className="font-semibold text-lg mb-3">Sledujte nás</h4>
                        <div className="flex space-x-4 text-xl">
                            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                                <img src="https://musiq-supa.supabase.co/storage/v1/object/public/products/facebook.png" alt="Facebook" className="w-6 h-6 hover:text-blue-600" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                                <img src="https://musiq-supa.supabase.co/storage/v1/object/public/products/x1.jpg" alt="Twitter" className="w-6 h-6 hover:text-blue-400" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                                <img src="https://musiq-supa.supabase.co/storage/v1/object/public/products/instagram.webp" alt="Instagram" className="w-6 h-6 hover:text-pink-500" />
                            </Link>
                            <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                                <img src="https://musiq-supa.supabase.co/storage/v1/object/public/products/y.png" alt="YouTube" className="w-6 h-6 hover:text-red-600" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. sekcia: Odkazy */}
                <div className="col">
                    <h4 className="font-semibold text-lg mb-3">Ďalšie informácie</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="hover:text-blue-400">
                                Info o doručení
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-blue-400">
                                Reklamácie a vrátenie tovaru
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-blue-400">
                                Ochrana osobných údajov
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-blue-400">
                                Všeobecné obchodné podmienky
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. sekcia: Mobilna aplikacia */}
                <div className="col app">
                    <h4 className="font-semibold text-lg mb-3">Mobilná aplikácia v príprave</h4>
                    <p>Na App Store a Google Play</p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="https://www.apple.com/app-store/" target="_blank" aria-label="App Store">
                                <img src="https://your-project.supabase.co/storage/v1/object/public/products/app_store.png" alt="App Store" className="w-15 h-15 hover:text-blue-600"  />
                        </Link>

                        <Link href="https://play.google.com/store/games?device=windows" target="_blank" aria-label="google_play">
                                <img src="https://your-project.supabase.co/storage/v1/object/public/products/google_play.png" alt="Google Play" className="w-15 h-15 hover:text-blue-600" />
                        </Link>
                         
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm">
                <p>&copy; {new Date().getFullYear()} MusiQ.sk - Všetky práva vyhradené.</p>
            </div>
        </footer>
    );
}
