import React from 'react';
import { MessageSquareText, Search, Bell, Link2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

const EXAMPLES = [
    'Who entered the server room after 22:00?',
    'Why did this zone consume energy while empty?',
    'Show the incident, evidence and related video.',
];

const CAPABILITIES = [
    {
        icon: MessageSquareText,
        title: 'Ask → it answers',
        detail: 'Natural-language investigation over operational facts — with context and evidence, not hallucinated conclusions.',
    },
    {
        icon: Search,
        title: 'Deep Search',
        detail: 'Cross-domain investigation across access, video, presence, BMS and related building signals.',
    },
    {
        icon: Bell,
        title: 'Important → it notifies',
        detail: 'Proactive attention when a situation matters — grounded in verifiable state and events.',
    },
    {
        icon: Link2,
        title: 'Context correlation',
        detail: 'Connect people, zones, devices and evidence into incidents operators can act on.',
    },
];

export default function Intelligence() {
    return (
        <section id="ai" className="relative scroll-mt-24 py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        05 / AI & Intelligence
                    </p>
                    <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                        Make Infrastructure Searchable
                    </h2>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        AI is not marketing decoration. It is the intelligence direction for
                        interaction and reasoning over trusted operational facts — explainable by
                        evidence underneath.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-12 space-y-3">
                        {EXAMPLES.map((q) => (
                            <div
                                key={q}
                                className="border-l-2 border-cyan-400 bg-white/[0.03] px-5 py-4 font-mono text-sm text-slate-200 sm:text-base"
                            >
                                “{q}”
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                    {CAPABILITIES.map((item, i) => (
                        <Reveal key={item.title} delay={0.06 * i} className="bg-[#060b18] p-8">
                            <item.icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} />
                            <h3 className="mt-6 font-display text-lg font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <p className="mt-10 max-w-3xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-slate-600">
                        Honestly labeled: AI-native interaction, Deep Search and Command Surface are
                        product direction — not claimed as fully shipping production features today.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
