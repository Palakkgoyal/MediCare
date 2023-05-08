import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between ">
        <span className="flex_center">
        <Image
            src="/assets/logo.png"
            width={40}
            height={40}
            className="object-contain"
        />
        MediCare
        </span>
        <div className="flex_center gap-4">
            <Image
                src="/assets/logo.png"
                width={58}
                height={58}
                className="rounded-full cursor-pointer"
            />
            <Link
                href="/"
                className="outline_btn"
            >
                Sign Out
            </Link>
        </div>

    </nav>
  )
}

export default Nav
