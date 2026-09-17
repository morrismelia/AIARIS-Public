import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LogoVertical } from '@/components/Logo';

const HERO_IMAGE = 'https://images.hostinger.com/f80f7b88-c129-49f7-af6a-9ba6b4a7d95a.png';

const TECH_STRIP = ['Devices', 'Firmware', 'Edge', 'On-Premise', 'Cloud', 'AI'];

export default function Hero() {
    return (
        <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden">
            <div className="absolute inset-0" aria-hidden="true">
                <img
                    src={HERO_IMAGE}
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/80 via-[#060b18]/70 to-[#060b18]" />
                <div className="absolute inset-0 bg-blueprint opacity-70" />
                <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
            </div>

            <div
                className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
                aria-hidden="true"
            >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 [writing-mode:vertical-rl]">
                    SYS.01 — ADVANCED INFRASTRUCTURE OS / LOCAL FIRST · CLOUD READY / EST. TBILISI
                </p>
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-10">
                <Reveal>
                    <div className="flex flex-col items-start gap-4">
                        <LogoVertical />
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-[11px]">
                            Advanced Infrastructure Operating System
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.12}>
                    <h1 className="mt-14 max-w-5xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        THE OPERATING SYSTEM
                        <br />
                        <span className="text-gradient">FOR INTELLIGENT INFRASTRUCTURE.</span>
                    </h1>
                </Reveal>

                <Reveal delay={0.22}>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        AIARIS unifies field devices, embedded firmware, edge control, on-premise
                        operations, optional cloud services and AI into one resilient architecture
                        for buildings and infrastructure.
                    </p>
                </Reveal>

                <Reveal delay={0.32}>
                    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#architecture"
                            className="group inline-flex min-h-[48px] items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#04121a] transition-all duration-200 hover:from-cyan-300 hover:to-blue-400 active:scale-[0.98]"
                        >
                            Explore the Architecture
                            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex min-h-[48px] items-center justify-center gap-3 border border-white/20 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-white transition-all duration-200 hover:border-cyan-300/60 hover:text-cyan-300 active:scale-[0.98]"
                        >
                            Contact AIARIS
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.42}>
                    <div className="mt-20 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {TECH_STRIP.map((item, i) => (
                            <React.Fragment key={item}>
                                {i > 0 && <span className="text-cyan-400/60">/</span>}
                                <span>{item}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
