import { ThemeToggle } from "./ThemeToggle";

export const Header = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Kristan Dharel
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {/* <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
