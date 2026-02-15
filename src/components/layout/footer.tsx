import Link from "next/link";
import { DATA } from "@/lib/data";
import { Instagram, Globe } from "lucide-react"; // Importing generic Globe for Behance as Lucide might not have branding icons in some versions, but usually does. Behance check? 
// Lucide doesn't have Behance. I'll use Globe or generic.

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-2xl font-bold font-outfit tracking-tighter">AQABAWI<span className="text-primary">.</span></span>
                    <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                        Capturing moments in stunning detail across Jordan.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href={DATA.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                        <Instagram className="w-5 h-5" />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href={DATA.social.behance} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                        <Globe className="w-5 h-5" />
                        <span className="sr-only">Behance</span>
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Abdallah Alfayoumi. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
