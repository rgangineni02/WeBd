export default function Footer() {
    return (
      <footer className="flex gap-4 flex-wrap items-center justify-center py-4 bg-gray-900 text-white">
        <a href="/glossary" className="hover:underline">
          Glossary
        </a>
        <a href="/about" className="hover:underline">
          About Us
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </footer>
    );
  }