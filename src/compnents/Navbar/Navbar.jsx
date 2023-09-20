import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from "../Link/Link";
import { useState } from 'react';
export default function Navbar() {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
    const [open, setOpen] = useState(false)
  return (
    <nav className='bg-green-500 p-3 text-white '>
        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            {
                open==false? <HiMenuAlt1/>: <AiOutlineClose/>
            }
        </div>
        <ul className={`
            text-xl font-semibold flex flex-col md:flex-row md:gap-7 gap-2 px-6 left-9 rounded-md justify-center py-4 duration-1000 bg-green-500 text-white absolute md:static
            ${open==true? 'top-14': '-top-60'}
        `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

    </nav>
  )
}
