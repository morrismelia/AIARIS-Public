import React from 'react';
import Reveal from '@/components/Reveal';

const EXAMPLES = [
    {
        title: 'Access → evidence → action',
        detail:
            'Access denied → forced door → camera motion → one incident with evidence and a clear operator path.',
    },
    {
        title: 'Presence → energy',
        detail:
            'Empty zone → HVAC/FCU energy saving → restore comfort before occupancy returns.',
    },
    {
        title: 'Environment → local response',
        detail:
            'Environmental alarm → local response → status, context and confirmation in one operational story.',
    },
    {
        title: 'Fire authority stays local',
        detail:
            'Life-safety authority remains on site while related systems provide operator context — not cloud veto.',
    },
];

const PRINCIPLES = [
    { title: 'Local First', detail: 'Critical control remains available without cloud or WAN.' },
    { title: 'Vendor Neutral', detail: 'Architecture preserves best-fit equipment choice — not a slogan.' },
    { title: 'Customer Owned', detail: 'Data, configurations, access, documentation and operating architecture stay under customer control.' },
    { title: 'One Core / One Truth', detail: 'Shared object and event model across domains and surfaces.' },
    { title: 'Modular & Expandable', detail: 'Domains grow on the same Core without rewriting the facility model.' },
    { title: 'AI-Ready', detail: 'Intelligence reasons over verifiable facts and evidence.' },
];

const MATURITY = [
    {
        key: 'working',
        title: 'Working / Proven',
        tone: 'text-emerald-300',
        items: [
            'Core / platform foundation and runtime mechanisms',
            'Protocol and device communications foundation',
            'Physical controller / device work and embedded-firmware direction',
            'SmartAccess / access-control product work and operational UI foundations',
            'Event / state / audit / device-management foundations',
        ],
    },
    {
        key: 'designed',
        title: 'Designed / Direction',
        tone: 'text-amber-300',
        items: [
            'Command Surface',
            'AI-native interaction model',
            'Rich context model / incident-story logic',
            'Wider cross-domain operating experience',
        ],
    },
    {
        key: 'next',
        title: 'Next / Future',
        tone: 'text-sky-300',
        items: [
            'AI reasoning layer',
            'Deep investigation / semantic search over building facts',
            'Cross-domain reasoning',
            'Broader CCTV / BMS / Fire / Energy / Environment integration',
            'Progressive evolution toward a full infrastructure OS',
        ],
    },
];

export default function Vision() {
    return (
        <section id="vision" className="relative scroll-mt-24 py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        07 / Cross-Domain & Vision
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        Intelligence Lives Between Systems
                    </h2>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Cross-domain value appears between systems — not only inside one product
                        silo. Events become context; context becomes incidents and actions.
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                    {EXAMPLES.map((ex, i) => (
                        <Reveal key={ex.title} delay={0.05 * i} className="bg-[#060b18] p-8">
                            <h3 className="font-display text-lg font-semibold text-white">{ex.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{ex.detail}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.08}>
                    <h3 className="mt-20 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Principles
                    </h3>
                </Reveal>
                <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {PRINCIPLES.map((p, i) => (
                        <Reveal key={p.title} delay={0.04 * i} className="bg-[#060b18] p-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                                {p.title}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.detail}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.08}>
                    <h3 className="mt-20 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Today / Future — Honest Maturity
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
                        Credibility requires separating present reality from designed and future
                        direction.
                    </p>
                </Reveal>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {MATURITY.map((col, i) => (
                        <Reveal key={col.key} delay={0.06 * i}>
                            <div className="h-full border border-white/10 bg-[#060b18] p-7">
                                <h4 className={`font-mono text-[11px] uppercase tracking-[0.22em] ${col.tone}`}>
                                    {col.title}
                                </h4>
                                <ul className="mt-6 space-y-3">
                                    {col.items.map((item) => (
                                        <li
                                            key={item}
                                            className="border-l border-white/10 pl-3 text-sm leading-relaxed text-slate-400"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
