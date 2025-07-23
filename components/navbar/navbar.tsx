import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:flex" />

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <div className="hidden sm:flex items-center gap-3">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg px-4 py-2 font-medium transition-all"
              >
                Se connecter
              </Button>
              
              <Button 
                className="h-10 px-6 font-medium"
                asChild
              >
                <a href="tel:+33756812255">
                  Réserver
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
