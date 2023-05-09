import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
<nav className="flex items-center">
        <Image
            src="/assets/logo.png"
            width={40}
            height={40}
            className="object-contain"
        />
        <h3 className="mr-auto">MediCare</h3>
        
            <Image
                src="/assets/logo.png"
                width={58}
                height={58}
                className="rounded-full cursor-pointer ml-auto"
            />
            <Link
                href="/"
                className="outline_btn ml-4"
            >
                Sign Out
            </Link>
    </nav>
  )
}

export default Nav
