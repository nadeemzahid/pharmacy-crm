// components/Sidebar.tsx
import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Billing', href: '/billing' },
  { label: 'Reports', href: '/reports' },
  { label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold">PharmaCRM</h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-gray-700 hover:underline">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
