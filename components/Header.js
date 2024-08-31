export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl">Blog</h1>
        <nav className="space-x-4">
          <a href="#" className="text-blue-500">
            Home
          </a>
          <a href="#" className="text-blue-500">
            About
          </a>
          <a href="#" className="text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
