import { House } from 'lucide-react';


export default function NavbarComponent() {
  return (
      <nav className="flex p-4 bg-gray-800 h-40 text-white justify-center ">
        <ul className="flex space-x-4">
          {/* <li><a href="/" className="hover:underline">Home</a></li> */}
          <li><a href="#about" className="hover:underline"><House /></a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
  )
}