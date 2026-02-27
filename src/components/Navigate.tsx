'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { triggerLoader } from './TopLoader';
import { ReactNode, MouseEvent, AnchorHTMLAttributes } from 'react';

interface NavigateProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

export default function Navigate({ href, children, ...props }: NavigateProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Ignore external links
    if (!href.startsWith('/') || href.startsWith('//')) return;

    // Ignore new tab / ctrl click / middle click
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    // ✅ Prevent loader + navigation if same route
    if (pathname === href) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    // Start loader
    triggerLoader();

    // Navigate
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}