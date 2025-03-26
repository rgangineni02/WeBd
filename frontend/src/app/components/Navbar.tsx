export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">AI Frameworks Explorer</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#beginner" className="hover:underline">
              Beginner
            </a>
          </li>
          <li>
            <a href="#intermediate" className="hover:underline">
              Intermediate
            </a>
          </li>
          <li>
            <a href="#expert" className="hover:underline">
              Expert
            </a>
          </li>
          <li>
            <a href="#community" className="hover:underline">
              Community
            </a>
          </li>
        </ul>
      </nav>
    );
  }