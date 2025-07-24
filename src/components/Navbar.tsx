import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
      <nav className="bg-black shadow-md px-6 flex justify-between items-center">
        <div>
          <a>
            <Image src={"/Logo/mainLogo-B.png"} alt='Logo' width={100} height={100}></Image>
          </a>
        </div>
          <ul className="flex gap-6 ">
            <li><Link href = "#" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href = "#">About me</Link></li>
            <li><Link href = "#">Contact</Link></li>
          </ul>
      </nav>
  )
}