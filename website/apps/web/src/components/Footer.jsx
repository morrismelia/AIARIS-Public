import React from 'react';
import Logo from '@/components/Logo';

const FOOTER_LINKS = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Devices', href: '#devices' },
    { label: 'Platform', href: '#platform' },
    { label: 'AI', href: '#ai' },
    { label: 'Domains', href: '#domains' },
    { label: 'Vision', href: '#vision' },
    { label: 'Company', href: '#company' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#04070f]">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm">
                        <Logo />
                        <p className="mt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-slate-500">
                            Advanced Infrastructure
                            <br />
                            Operating System
                        </p>
                    </div>

                    <nav className="grid grid-cols-2 gap-x-12 gap-y-3" aria-label="Footer">
                        {FOOTER_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="font-mono text-[11px] uppercase leading-loose tracking-[0.18em] text-slate-500">
                        <p>HQ — Tbilisi, Georgia</p>
                        <p>Operating globally</p>
                        <a
                            href="mailto:hello@aiaris.com"
                            className="text-cyan-300/90 transition-colors hover:text-cyan-200"
                        >
                            hello@aiaris.com
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                        © {new Date().getFullYear()} AIARIS. All rights reserved.
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                        Local first · Cloud ready · Customer owned
                    </p>
                </div>
            </div>
        </footer>
    );
}
