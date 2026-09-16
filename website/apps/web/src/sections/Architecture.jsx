import React from 'react';
import Reveal from '@/components/Reveal';

const LAYERS = [
    {
        label: 'Field Devices',
        detail:
            'Controllers, readers, sensors, inputs, outputs and actuators executing physical control close to the field.',
    },
    {
        label: 'Embedded Firmware',
        detail:
            'Device state, local rules, offline behavior, communications and secure maintenance — first-class, not invisible.',
    },
    {
        label: 'Edge / Gateway / Protocol',
        detail:
            'Gateways and protocol fabric bridging heterogeneous equipment while preserving vendor-neutral choice.',
    },
    {
        label: 'AIARIS Core — On-Premise',
        detail:
            'The operational heart: objects, states, events, identities, rules, incidents, commands, audit and automation.',
        core: true,
    },
    {
        label: 'Optional Cloud',
        detail:
            'Multisite operations, fleet analytics, remote services and long-term intelligence — never the single point of control.',
    },
    {
        label: 'AI / Intelligence',
        detail:
            'Native interaction and reasoning over trusted operational facts — answers with context and evidence.',
        future: true,
    },
    {
        label: 'Operator / Command Surface',
        detail:
            'Situation, context, evidence and action in one operating space. Directional UI — not claimed as current production.',
        future: true,
    },
];

export default function Architecture() {
    return (
        <section
            id="architecture"
            className="relative scroll-mt-24 border-t border-white/5 bg-[#050912] py-28 lg:py-36"
        >
            <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        02 / Architecture
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        One Architecture. From Device to Intelligence.
                    </h2>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Critical control stays on site. Cloud and WAN loss must not mean loss of
                        building control. Local first. Cloud ready.
                    </p>
                </Reveal>

                <div className="mt-14 space-y-2">
                    {LAYERS.map((layer, i) => (
                        <Reveal key={layer.label} delay={0.04 * i}>
                            <div
                                className={`grid gap-4 border p-5 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-8 sm:p-6 ${
                                    layer.core
                                        ? 'border-cyan-400/40 bg-cyan-400/[0.07]'
                                        : layer.future
                                          ? 'border-dashed border-white/15 bg-[#060b18]/70'
                                          : 'border-white/10 bg-[#060b18]'
                                }`}
                            >
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                                        L{String(i + 1).padStart(2, '0')}
                                    </p>
                                    <h3 className="mt-2 font-display text-base font-semibold tracking-wide text-white sm:text-lg">
                                        {layer.label}
                                    </h3>
                                    {layer.core && (
                                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                                            Operational heart
                                        </p>
                                    )}
                                    {layer.future && (
                                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                                            Direction
                                        </p>
                                    )}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-400 sm:pt-6">
                                    {layer.detail}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <p className="mt-10 inline-flex border border-cyan-400/30 bg-cyan-400/[0.06] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                        Local First · Cloud Ready · One Core · One Truth
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
