import Link from 'next/link';

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4 border-b">
            <div className="flex gap-8">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-lg font-medium hover:text-gray-600 transition">
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
