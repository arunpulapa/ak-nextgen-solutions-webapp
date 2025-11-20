import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Services",
    "Technologies",
    "Portfolio",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg from-primary to-secondary flex items-center justify-center glow-cyan">
            <span className="text-primary-foreground font-bold text-lg"> <img src={logo} alt="Logo" className="rounded-xl"/> </span>
          </div>
          <span className="text-xl font-bold text-foreground">
            AK NextGen Solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#home"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Home size={20} />
          </a>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button variant="outline" size="sm" className="neon-border">
            Get Dedicated Team
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card mt-4 mx-4 p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"
            >
              <Home size={20} />
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <Button className="w-full mt-4 glow-cyan">
              Get Dedicated Team
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
