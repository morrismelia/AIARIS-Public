import React from 'react';
import { CloudOff, Database, Server, Workflow } from 'lucide-react';
import Reveal from '@/components/Reveal';

const CORE_POINTS = [
    {
        icon: Server,
        title: 'Customer-owned Core',
        detail:
            'On-premise capable across customer infrastructure — not locked to one proprietary appliance OS.',
    },
    {
        icon: Database,
        title: 'Shared operational model',
        detail:
            'Objects, device states, events, identities, rules, incidents, commands, audit, notifications and device management.',
    },
    {
        icon: Workflow,
        title: 'One truth for operators',
        detail:
            'Classic operational/configuration workspaces and future Command Surface use the same underlying truth.',
    },
    {
        icon: CloudOff,
        title: 'No cloud dependency for control',
        detail:
            'The site keeps operating when cloud or WAN is unavailable. Critical authority stays local.',
    },
];

export default function CorePlatform() {
    return (
        <section id="platform" className="relative scroll-mt-24 border-t border-white/5 bg-[#050912] py-28 lg:py-36">
            <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        04 / On-Premise Core
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        The Site Keeps Operating
                    </h2>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        AIARIS Core is the operational heart of the platform — customer-owned,
                        on-premise capable, and designed so building control does not evaporate when
                        the network does.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                    {CORE_POINTS.map((item, i) => (
                        <Reveal key={item.title} delay={0.06 * i} className="bg-[#050912] p-8">
                            <item.icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} />
                            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <div className="mt-12 border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.07] to-blue-500/[0.04] p-8 sm:p-10">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                            Cloud without cloud dependency
                        </p>
                        <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            Optional cloud strengthens the platform. It is not the single point of control.
                        </h3>
                        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                            Multisite operations, fleet analytics, remote services, long-term
                            intelligence and future enterprise orchestration live in the cloud layer —
                            while local authority and critical control remain on site.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.12}>
                    <figure className="mx-auto mt-14 w-full max-w-[900px]">
                        <div className="frame-offset border border-white/15 bg-[#04070f]">
                            <img
                                src="/media/command-center.webp"
                                alt="Operator command surface concept — map, incidents, evidence and controller context on shared Core truth"
                                width={1400}
                                height={934}
                                className="h-auto w-full object-contain object-top"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <figcaption className="mt-6 flex flex-wrap items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                            <span>Fig. 04 — Operator surface concept</span>
                            <span className="text-cyan-300/70">
                                Designed direction · not claimed as shipping UI
                            </span>
                        </figcaption>
                    </figure>
                </Reveal>
            </div>
        </section>
    );
}
