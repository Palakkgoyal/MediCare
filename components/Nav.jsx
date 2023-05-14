"use client"

import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  // check if the browser supports notifications
  function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }


  return (
    <nav className="flex items-center">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={40}
          height={40}
          alt="Medicare Logo"
          className="object-contain"
        />
      </Link>
        <h3 className="mr-auto">MediCare</h3>

      <Image
        src="/assets/logo.png"
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
