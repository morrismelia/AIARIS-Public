import React from 'react';
import Reveal from '@/components/Reveal';

const ACRONYM = [
    { letter: 'A', word: 'Advanced' },
    { letter: 'I', word: 'Infrastructure' },
    { letter: 'A', word: 'Architecture' },
    { letter: 'R', word: 'for Resilient' },
    { letter: 'I', word: 'Integrated' },
    { letter: 'S', word: 'Systems' },
];

export default function Story() {
    return (
        <section id="company" className="relative scroll-mt-24 border-t border-white/5 bg-[#050912] py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <Reveal>
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                                08 / Company
                            </p>
                            <h2 className="mt-6 max-w-lg font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                                A Name With Deep Roots.
                                <br />
                                <span className="text-slate-400">
                                    An operating system for what infrastructure becomes next.
                                </span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-8 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                                AIARIS takes its name from Aia — the ancient name of Colchis, a land
                                of craft, crossing points, and exchange between worlds.
                            </p>
                            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                                We carry that idea into engineering: one architecture connecting
                                devices, firmware, on-premise operations, cloud and intelligence —
                                built to endure.
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                <span>Independent</span>
                                <span className="text-cyan-400/60">/</span>
                                <span>Engineering-led</span>
                                <span className="text-cyan-400/60">/</span>
                                <span>Customer owned</span>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-6">
                        <Reveal delay={0.15}>
                            <div className="frame-offset border border-white/15 bg-[#060b18] p-8 sm:p-12">
                                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                                    The name, expanded
                                </p>
                                <div className="mt-8 space-y-4">
                                    {ACRONYM.map((item, i) => (
                                        <div key={`${item.letter}-${item.word}-${i}`} className="flex items-baseline gap-5">
                                            <span className="text-gradient w-10 shrink-0 font-display text-3xl font-bold sm:text-4xl">
                                                {item.letter}
                                            </span>
                                            <span className="font-display text-xl font-medium tracking-wide text-white/90 sm:text-2xl">
                                                {item.word}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 border-t border-white/10 pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-slate-600">
                                    Advanced Infrastructure Operating System — resilient integrated systems
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
