import { useState } from 'react';
import { Copy, Check, Github, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const email = 'educruzm2004@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo con estética "Hacker" (Monospace) */}
        <a href="/" className="font-mono font-bold text-lg md:text-xl tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-muted-foreground">&lt;</span>
          Eduardo Cruz
          <span className="text-muted-foreground">/&gt;</span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Acciones Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/EduardoCruzmunioz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-cruz-muñoz2202" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 bg-foreground border-2 border-foreground text-background px-4 py-2 font-mono text-sm uppercase hover:bg-transparent hover:text-foreground transition-colors active:scale-95"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '[ COPIADO ]' : '[ COPIAR_EMAIL ]'}</span>
          </button>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navegación Móvil (Desplegable) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 flex flex-col gap-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground transition-colors font-medium">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-4 pt-6 border-t border-border">
            <div className="flex gap-6 justify-center">
                <a href="https://github.com/EduardoCruzmunioz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-cruz-muñoz2202" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex justify-center items-center gap-2 bg-foreground border-2 border-foreground text-background px-4 py-3 font-mono text-sm uppercase hover:bg-transparent hover:text-foreground transition-colors active:scale-95"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? '[ COPIADO ]' : '[ COPIAR_EMAIL ]'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
