'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, BookOpen, Home, Mic, Sparkles } from 'lucide-react';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/lessons', label: 'Lessons', icon: BookOpen },
  { href: '/vocabulary', label: 'Vocabulary', icon: Sparkles },
  { href: '/practice', label: 'Practice', icon: Mic },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8"
          >
            <rect width="100" height="100" rx="20" fill="hsl(var(--background))" />
            <path
              d="M40 30V70"
              stroke="hsl(var(--primary))"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 70H65"
              stroke="hsl(var(--primary))"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="60" cy="45" r="10" fill="hsl(var(--accent))" />
          </svg>
          <span className="text-xl font-bold font-headline">LexicaLearn</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                  as="a"
                >
                  <item.icon
                    className={cn(
                      'h-5 w-5',
                      pathname === item.href
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground'
                    )}
                  />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
