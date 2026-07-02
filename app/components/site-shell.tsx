"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const engg1101NotionUrl =
  "https://engineering-challenges.notion.site/ENGG1101-Engineering-Challenges-247d72aefb858052a816d5232746d4db?source=copy_link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "ENGG1101", href: engg1101NotionUrl },
  { label: "ENGG2202", href: "/engg2202" },
  { label: "Timetable", href: "/#timetable" },
  { label: "Consultation", href: "/#consultation" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#fbfbfb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 sm:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo/hkuengglogo.png"
                alt="HKU ENGG"
                width={160}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="mx-auto flex flex-1 justify-center">
            <ul className="hidden items-center gap-8 text-sm text-slate-800 font-semibold md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-slate-950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-slate-950">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="mailto:enggal@hku.hk" aria-label="Email" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <polyline points="3 7 12 13 21 7"></polyline>
              </svg>
            </a>
            <a href="https://github.com/hkuenggal/activelearning-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.983 1.03-2.681-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.642.698 1.029 1.59 1.029 2.681 0 3.842-2.338 4.688-4.566 4.935.359.309.679.92.679 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
