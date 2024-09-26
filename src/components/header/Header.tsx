import { useState } from "react";
// import Link from "next/link";
import { User, Link } from "lucide-react";
import { Button } from "../ui/Button";
import { PROJECT } from "../../config/config";
import { isValidProject } from "../../utils/utils";

interface HeaderProps {
    onClick: (project: PROJECT) => void;
}
export function Header(props: HeaderProps) {
    const [isMenuOpen, _setIsMenuOpen] = useState(false);

    // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const links = [
        { href: "/salam", label: "Salam" },
        { href: "/star", label: "Star" },
        { href: '/customer_success', label: 'Customer_Success' }
    ];

    const handleClick = (link: { href: string, label: string }) => {
        console.log('Clicking')
        const value = link.label.toUpperCase()
        console.log(value)
        if (isValidProject(value))
            props.onClick(
                value
            )
        else
            props.onClick('STAR')
    }

    return (
        <header className="bg-background border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center">
                                <div className="w-8 h-8 bg-primary rounded-md mr-2"></div>
                                <span className="text-xl font-semibold text-primary">
                                    Detailed Team Work Summary
                                </span>
                            </a>
                        </div>
                        <nav className="hidden md:ml-8 md:flex md:space-x-4">
                            {links.map((link) => (
                                <button
                                    key={link.href}
                                    // href={link.href}
                                    onClick={() =>
                                        handleClick(link)
                                    }
                                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div> */}
                        {/* <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-muted-foreground" />
            </Button> */}
                    </div>
                    {/* <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div> */}
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-150"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-border">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <User className="h-8 w-8 rounded-full bg-muted p-1" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-primary">
                                    User Name
                                </div>
                                <div className="text-sm font-medium text-muted-foreground">
                                    user@example.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <Button
                                variant="ghost"
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-150 w-full text-left"
                            >
                                Profile
                            </Button>
                            <Button
                                variant="ghost"
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-150 w-full text-left"
                            >
                                Settings
                            </Button>
                            <Button
                                variant="ghost"
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-150 w-full text-left"
                            >
                                Sign out
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

