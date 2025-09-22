"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNavigation() {
  const pathname = usePathname();
  const isOverview = pathname === '/';
  const isContact = pathname.startsWith('/contact');
  return (
    <header className="fixed top-0 left-0 h-screen w-[240px] bg-background p-10 font-sans text-sm tracking-wider text-foreground">
      <div className="flex flex-col">
        <div className="mb-8">
          <Link href="/" className="lowercase">
            jonathan liu
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className={isOverview ? 'font-bold' : undefined}>
                overview
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isContact ? 'font-bold' : undefined}>
                contact // about
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}