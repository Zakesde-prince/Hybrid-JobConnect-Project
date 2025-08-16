export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <h1 className="text-2xl font-bold tracking-wide">My Website</h1>
        <nav>
         <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center md:text-left">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

