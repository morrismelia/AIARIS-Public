import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Devices', href: '#devices' },
    { label: 'Platform', href: '#platform' },
    { label: 'AI', href: '#ai' },
    { label: 'Domains', href: '#domains' },
    { label: 'Vision', href: '#vision' },
    { label: 'Company', href: '#company' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
                scrolled || open
                    ? 'border-b border-white/10 bg-[#060b18]/90 backdrop-blur-md'
                    : 'border-b border-transparent bg-transparent'
            )}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <a href="#top" aria-label="AIARIS home" onClick={() => setOpen(false)}>
                    <Logo />
                </a>

                <nav className="hidden items-center gap-5 xl:gap-7 xl:flex" aria-label="Primary">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-200 hover:text-cyan-300 xl:text-[11px] xl:tracking-[0.2em]"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 border border-cyan-400/40 bg-cyan-400/5 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/15 active:scale-[0.98] xl:px-5 xl:text-[11px]"
                    >
                        Contact
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white xl:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <nav
                    className="border-t border-white/10 bg-[#060b18]/95 px-6 py-6 backdrop-blur-md xl:hidden"
                    aria-label="Mobile"
                >
                    <div className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex min-h-[44px] items-center border-b border-white/5 font-mono text-xs uppercase tracking-[0.22em] text-slate-300 transition-colors hover:text-cyan-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300"
                        >
                            Contact AIARIS
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
