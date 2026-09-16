import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#050912] py-28 lg:py-36"
        >
            <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                            09 / Contact
                        </p>
                        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
                            Build the Next Operating Layer
                            <br />
                            <span className="text-gradient">of Infrastructure.</span>
                        </h2>
                        <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            Technology partnerships, integration, pilots and enterprise conversations —
                            architecture first, not sales decks.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="mailto:hello@aiaris.com"
                                className="group inline-flex min-h-[48px] items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#04121a] transition-all duration-200 hover:from-cyan-300 hover:to-blue-400 active:scale-[0.98]"
                            >
                                <Mail className="h-4 w-4" />
                                hello@aiaris.com
                            </a>
                            <a
                                href="mailto:partners@aiaris.com"
                                className="group inline-flex min-h-[48px] items-center justify-center gap-3 border border-white/20 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-white transition-all duration-200 hover:border-cyan-300/60 hover:text-cyan-300 active:scale-[0.98]"
                            >
                                Partnerships
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.25}>
                        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                            <span className="inline-flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5 text-cyan-300/70" />
                                HQ — Tbilisi, Georgia
                            </span>
                            <span className="text-cyan-400/60">/</span>
                            <span>Operating globally</span>
                            <span className="text-cyan-400/60">/</span>
                            <span>Response within 48 hours</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
