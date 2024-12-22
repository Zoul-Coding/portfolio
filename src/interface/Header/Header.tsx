import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  // Fonction pour surveiller le scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si l'utilisateur a scrollé plus de 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajoute un event listener pour le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Skills', path: '#' },
    { name: 'Projects', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-background/30 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-screen-lg mx-auto flex justify-between items-center xl:px-0 px-5 py-4">
        <Link to='/' className="flex items-center gap-4">
          <p className='text-2xl font-bold text-gray-300'>zoul</p>
        </Link>
        <div className="hidden md:block">
          <nav className='flex md:block space-x-6'>
            {navLinks.map((link, index) => (
              <a key={index} href={link.path} className="hover:text-gray-300 text-gray-300">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="md:hidden">
          <Dialog open={isOpen} onOpenChange={closeDialog}>
            <div className=''>
              <AlignJustify size={22} onClick={openDialog} className='text-gray-300 cursor-pointer' />
            </div>
            <DialogContent className={`fixed left-0 right-0 py-10 top-[115px] border border-t-0 border-r-0 
            border-l-0 border-b-border w-full bg-background
             transform transition-transform duration-500 ease-in-out 
            ${isOpen ? '-translate-x-0 opacity-100' : 'translate-x-0 opacity-0'}`}>
              <nav className='flex flex-col space-y-6'>
                {navLinks.map((link, index) => (
                  <a key={index} href={link.path} className="hover:text-gray-300 text-gray-300 text-sm">
                    {link.name}
                  </a>
                ))}
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}

export default Header;
