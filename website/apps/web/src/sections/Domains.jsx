import React from 'react';
import {
    DoorClosed,
    Flame,
    Video,
    Thermometer,
    Leaf,
    Zap,
    ShieldAlert,
    BarChart3,
    Workflow,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const DOMAINS = [
    {
        name: 'AIARIS Access',
        icon: DoorClosed,
        description: 'Credentials, personnel, visitors, doors, policies, attendance, reports and analytics.',
        status: 'working',
        statusLabel: 'Working foundation',
    },
    {
        name: 'AIARIS CCTV',
        icon: Video,
        description: 'Video monitoring, recording/integration, event-linked evidence and investigation.',
        status: 'designed',
        statusLabel: 'Designed / next',
    },
    {
        name: 'AIARIS Fire',
        icon: Flame,
        description: 'Fire detection/alarm operational integration and monitoring — life-safety authority stays local.',
        status: 'designed',
        statusLabel: 'Designed / next',
    },
    {
        name: 'AIARIS BMS / HVAC',
        icon: Thermometer,
        description: 'Building systems monitoring/control, local sequences, efficiency and comfort.',
        status: 'next',
        statusLabel: 'Next',
    },
    {
        name: 'AIARIS Environment',
        icon: Leaf,
        description: 'Environmental sensors, air quality and sustainability context.',
        status: 'next',
        statusLabel: 'Next',
    },
    {
        name: 'AIARIS Energy',
        icon: Zap,
        description: 'Metering, consumption context and energy intelligence.',
        status: 'next',
        statusLabel: 'Next',
    },
    {
        name: 'AIARIS SmartIntrusion',
        icon: ShieldAlert,
        description: 'Contextual intrusion and anomaly concepts across people, objects and zones.',
        status: 'designed',
        statusLabel: 'Designed',
    },
    {
        name: 'AIARIS Analytics',
        icon: BarChart3,
        description: 'Data analytics, dashboards, trends and operational insight across domains.',
        status: 'working',
        statusLabel: 'Working foundation',
    },
    {
        name: 'AIARIS Automation',
        icon: Workflow,
        description: 'Rules, workflows and cross-domain orchestration on shared Core truth.',
        status: 'designed',
        statusLabel: 'Designed',
    },
];

const STATUS_CLASS = {
    working: 'text-emerald-300/90 border-emerald-400/30',
    designed: 'text-amber-300/90 border-amber-400/30',
    next: 'text-sky-300/90 border-sky-400/30',
};

export default function Domains() {
    return (
        <section id="domains" className="relative scroll-mt-24 border-t border-white/5 bg-[#050912] py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        06 / Domains
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        One Core. Multiple Domains.
                    </h2>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Modular domains share AIARIS Core. Status wording is intentional — not every
                        domain is commercially complete today.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {DOMAINS.map((domain, i) => {
                        const Icon = domain.icon;
                        return (
                            <Reveal
                                key={domain.name}
                                delay={0.04 * i}
                                className="group flex flex-col bg-[#050912] p-8 transition-colors duration-300 hover:bg-cyan-400/[0.04]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex h-12 w-12 items-center justify-center border border-cyan-400/30 text-cyan-300">
                                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                                    </span>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-white">
                                    {domain.name}
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                                    {domain.description}
                                </p>
                                <p
                                    className={`mt-6 inline-flex w-fit border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${STATUS_CLASS[domain.status]}`}
                                >
                                    {domain.statusLabel}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
