import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-[#f5f5f7] text-[#1d1d1f] py-12 border-t border-gray-200">
            <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                {/* 1. sekcia: Logo, Kontakt a Socialne siete */}
                <div className="col">
                    {/* Logo */}
                    <div className="font-light text-2xl mb-6 text-[#1d1d1f]">
                        MusiQ.sk
                    </div>
                    
                    {/* Kontakt */}
                    <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-[#6e6e73]">Kontakt</h4>
                    <p className="text-sm font-light text-[#1d1d1f] mb-1">Komenského 44</p>
                    <p className="text-sm font-light text-[#1d1d1f] mb-1">040 01 Košice</p>
                    <p className="text-sm font-light text-[#1d1d1f] mb-1">+421 919 958 665</p>
                    <p className="text-sm font-light text-[#6e6e73]">9:00 - 17:00, Pon - Ned</p>
                    
                     {/* Socialne siete */}
                    <div className="mt-6">
                        <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-[#6e6e73]">Sledujte nás</h4>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/x1.jpg" alt="Twitter" className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/instagram.webp" alt="Instagram" className="w-6 h-6" />
                            </Link>
                            <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/y.png" alt="YouTube" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. sekcia: Odkazy */}
                <div className="col">
                    <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-[#6e6e73]">Informácie</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-sm font-light text-[#1d1d1f] hover:text-[#0066cc] transition-colors">
                                Info o doručení
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm font-light text-[#1d1d1f] hover:text-[#0066cc] transition-colors">
                                Reklamácie a vrátenie
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm font-light text-[#1d1d1f] hover:text-[#0066cc] transition-colors">
                                Ochrana údajov
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm font-light text-[#1d1d1f] hover:text-[#0066cc] transition-colors">
                                Obchodné podmienky
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. sekcia: Mobilna aplikacia */}
                <div className="col">
                    <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-[#6e6e73]">Mobilná aplikácia</h4>
                    <p className="text-sm font-light text-[#6e6e73] mb-4">Už čoskoro na App Store a Google Play</p>
                    <div className="flex space-x-4">
                        <Link href="https://www.apple.com/app-store/" target="_blank" aria-label="App Store" className="opacity-70 hover:opacity-100 transition-opacity">
                            <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/app_store.png" alt="App Store" className="h-10 w-auto" />
                        </Link>

                        <Link href="https://play.google.com/store/games?device=windows" target="_blank" aria-label="Google Play" className="opacity-70 hover:opacity-100 transition-opacity">
                            <img src="https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/icons/google_play.png" alt="Google Play" className="h-10 w-auto" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-12 pt-6 border-t border-gray-200">
                <p className="text-xs font-light text-[#6e6e73]">
                    © {new Date().getFullYear()} MusiQ.sk · Všetky práva vyhradené
                </p>
            </div>
        </footer>
    );
}