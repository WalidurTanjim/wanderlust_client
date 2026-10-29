"use client"

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false)
     // const navItems = ['Home', 'Destinations'];
     const navItems = [
          { path: "Home", href: "/" },
          { path: "Destinations", href: "destinations" }
     ]

     return (
          <>
               <nav className="bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-5 flex items-center justify-between relative">
                    <Link href="/" className="text-xl font-semibold text-slate-700">Wanderlust</Link>

                    <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                         {navItems.map((item, idx) => (
                              <Link key={idx} href={item?.href} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${item?.path === 'Home' ? 'bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600' : 'text-zinc-500 hover:text-zinc-400'}`}>{item?.path}</Link>
                         ))}
                    </div>

                    <Link href={`/signin`}>
                         <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
                              Signin
                              <span className="size-5 rounded-full bg-white flex items-center justify-center">
                                   <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </span>
                         </button>
                    </Link>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                         <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                         <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                         <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {menuOpen && (
                         <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                              {navItems.map((item, idx) => (
                                   <Link key={idx} href={item?.href} className={`px-4 py-2.5 rounded-lg text-sm ${item?.path === 'Home' ? 'bg-zinc-50 font-medium text-zinc-800' : 'text-zinc-500 hover:bg-zinc-50'}`} >{item?.path}</Link>
                              ))}
                              <Link href={`/signin`}>
                                   <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
                                        Signin
                                        <span className="size-5 rounded-full bg-white flex items-center justify-center">
                                             <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </span>
                                   </button>
                              </Link>
                         </div>
                    )}
               </nav>
          </>
     )
}

export default Navbar
