"use client"

import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex items-center">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={50}
          height={50}
          alt="Medicare Logo"
          className="object-contain"
        />
      </Link>
        <h3 className="mr-auto hidden sm:block">MediCare</h3>

      <Image
        src="/assets/userIcon.png"
        width={58}
        height={58}
        alt="Profile Picture"
        className="rounded-full cursor-pointer ml-auto"
      />
      <Link href="/meditation">
        <button
          className="outline_btn ml-4"
        >
          Meditate
        </button>
      </Link>
    </nav>
  )
}

export default Nav
