import React from 'react';
import { CircuitBoard, Cpu, Radio, Shield } from 'lucide-react';
import Reveal from '@/components/Reveal';

const POINTS = [
    {
        icon: Cpu,
        title: 'Controllers & field hardware',
        detail:
            'AIARIS architects controllers, gateways and device interfaces — not dashboards alone.',
    },
    {
        icon: CircuitBoard,
        title: 'Firmware as a first-class layer',
        detail:
            'Device state, local rules, offline behavior, communications and secure update paths.',
    },
    {
        icon: Radio,
        title: 'Local autonomy',
        detail:
            'Deterministic physical control remains available without cloud dependence.',
    },
    {
        icon: Shield,
        title: 'Secure communications',
        detail:
            'Hardware abstraction and maintenance paths designed for long-lifecycle field deployment.',
    },
];

const CONTROLLER_GALLERY = [
    {
        src: '/media/controller-smartaccess-4d.webp',
        alt: 'SmartAccess 4D access controller — locks, readers, AUX I/O, RS-485 and LAN PoE terminals',
        caption: 'Fig. 01 — SmartAccess 4D controller',
        meta: '4 doors · field hardware',
        width: 1200,
        height: 800,
        wide: true,
        maxClass: 'max-w-[720px]',
    },
    {
        src: '/media/pcb-front.webp',
        alt: 'AIARIS embedded PCB render showing microcontroller, connectors and test points',
        caption: 'Fig. 02 — Embedded board',
        meta: 'Firmware layer',
        width: 1000,
        height: 1826,
    },
    {
        src: '/media/pcb-detail.webp',
        alt: 'AIARIS PCB detail render for device I/O and communications hardware',
        caption: 'Fig. 03 — Hardware detail',
        meta: 'Device fabric',
        width: 1000,
        height: 760,
    },
];

/** Text-heavy product sheets — keep display near native pixel size so type stays readable. */
const TERMINALS = [
    {
        src: '/media/terminal-a-concept.webp',
        alt: 'Access identity and safety terminal Product A concept sheet',
        caption: 'Fig. 04 — Terminal A (ship-first concept)',
        meta: '175 × 100 × 44 mm',
        width: 593,
        height: 1327,
        maxClass: 'max-w-[480px]',
    },
    {
        src: '/media/terminal-b-concept.webp',
        alt: 'Access identity and safety terminal Product B concept sheet',
        caption: 'Fig. 05 — Terminal B (target concept)',
        meta: '290 × 100 × 44 mm',
        width: 593,
        height: 1327,
        maxClass: 'max-w-[480px]',
    },
    {
        src: '/media/terminal-a-views.webp',
        alt: 'Access terminal Product A multi-view engineering sheet',
        caption: 'Fig. 06 — Terminal A engineering views',
        meta: 'Prototype geometry',
        width: 1223,
        height: 1286,
        maxClass: 'max-w-[640px]',
    },
    {
        src: '/media/terminal-a-prototype.webp',
        alt: 'Access terminal Product A prototype multi-angle sheet',
        caption: 'Fig. 07 — Terminal A prototype sheet',
        meta: '220 × 100 × 44 mm class',
        width: 973,
        height: 1024,
        maxClass: 'max-w-[560px]',
    },
    {
        src: '/media/terminal-a-dock.webp',
        alt: 'Access terminal installation dock wiring and mounting sheet',
        caption: 'Fig. 08 — Installation dock',
        meta: 'Install / wire / mount',
        width: 1222,
        height: 1287,
        maxClass: 'max-w-[640px]',
    },
];

function MediaFigure({ item, delay = 0, className = '' }) {
    return (
        <Reveal delay={delay} className={className}>
            <figure className={item.maxClass ? `mx-auto w-full ${item.maxClass}` : undefined}>
                <div className={`border border-white/15 bg-black ${item.wide ? 'frame-offset' : ''}`}>
                    <img
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="w-full object-contain object-center"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <span>{item.caption}</span>
                    <span className="text-cyan-300/70">{item.meta}</span>
                </figcaption>
            </figure>
        </Reveal>
    );
}

function SpecSheet({ item, delay = 0 }) {
    return (
        <Reveal delay={delay}>
            <figure className={`mx-auto w-full ${item.maxClass}`}>
                <div className="border border-white/15 bg-[#030712]">
                    <img
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <span>{item.caption}</span>
                    <span className="text-cyan-300/70">{item.meta}</span>
                </figcaption>
            </figure>
        </Reveal>
    );
}

export default function Devices() {
    return (
        <section id="devices" className="relative scroll-mt-24 py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                                03 / Devices & Firmware
                            </p>
                            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                                Built Down to the Device
                            </h2>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                                AIARIS develops and architects controllers, gateways, credential
                                interfaces, sensors, I/O and firmware. Physical control executes
                                close to the field — with offline autonomy as a design requirement,
                                not a fallback slogan.
                            </p>
                        </Reveal>

                        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                            {POINTS.map((point, i) => (
                                <Reveal key={point.title} delay={0.06 * i} className="bg-[#060b18] p-6">
                                    <point.icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} />
                                    <h3 className="mt-5 font-display text-base font-semibold text-white">
                                        {point.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                        {point.detail}
                                    </p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <MediaFigure item={CONTROLLER_GALLERY[0]} delay={0.1} className="sm:col-span-2" />
                            {CONTROLLER_GALLERY.slice(1).map((item, i) => (
                                <MediaFigure key={item.src} item={item} delay={0.14 + i * 0.06} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 border-t border-white/10 pt-16">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                            Access terminals
                        </p>
                        <h3 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Credential hardware at the edge of the building
                        </h3>
                        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                            Spec sheets are shown at controlled web sizes for readability and load
                            speed. Hardware direction and prototypes — not a commercial SKU catalog.
                        </p>
                    </Reveal>

                    <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-start">
                        <SpecSheet item={TERMINALS[0]} delay={0.08} />
                        <SpecSheet item={TERMINALS[1]} delay={0.1} />
                    </div>
                    <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
                        <SpecSheet item={TERMINALS[2]} delay={0.12} />
                        <SpecSheet item={TERMINALS[3]} delay={0.14} />
                    </div>
                    <div className="mt-14">
                        <SpecSheet item={TERMINALS[4]} delay={0.16} />
                    </div>
                </div>
            </div>
        </section>
    );
}
