import React from 'react';
import Reveal from '@/components/Reveal';

const FLOW = [
    { n: '01', title: 'Observe', detail: 'Capture device state, events and operator actions across domains.' },
    { n: '02', title: 'Normalize', detail: 'Bring heterogeneous systems into one shared object and event model.' },
    { n: '03', title: 'Understand', detail: 'Turn signals into context, incidents and verifiable operational facts.' },
    { n: '04', title: 'Act', detail: 'Command through rights, rules and local controllers — not dashboard theatre.' },
    { n: '05', title: 'Improve', detail: 'Use evidence and history to refine operations without losing site autonomy.' },
];

export default function WhatIs() {
    return (
        <section id="about" className="relative scroll-mt-24 py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        01 / What AIARIS Is
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        From Physical Control to Infrastructure Intelligence
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Modern infrastructure is fragmented across access, CCTV, fire, BMS/HVAC,
                        energy and environmental systems — each with its own interface, truth and
                        failure mode. AIARIS creates a shared operational model instead of adding
                        another isolated product surface.
                    </p>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        One facility. One platform. One source of truth — from field devices and
                        firmware through on-premise Core to optional cloud and AI.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
                    {FLOW.map((step, i) => (
                        <Reveal key={step.title} delay={0.05 * i} className="bg-[#060b18] p-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                                {step.n}
                            </p>
                            <h3 className="mt-4 font-display text-lg font-semibold tracking-wide text-white">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.detail}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
