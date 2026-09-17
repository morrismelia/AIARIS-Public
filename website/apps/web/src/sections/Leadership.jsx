import React from 'react';
import Reveal from '@/components/Reveal';

const PORTRAIT = '/media/morris-melia-founder.webp';

export default function Leadership() {
    return (
        <section
            id="leadership"
            className="relative scroll-mt-24 border-t border-white/5 bg-[#060b18] py-24 lg:py-32"
            aria-labelledby="leadership-heading"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                        09 / Leadership
                    </p>
                    <h2
                        id="leadership-heading"
                        className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl"
                    >
                        Founder &amp; Technical Direction
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                        A real engineering lead behind the architecture — the product remains larger than any one person.
                    </p>
                </Reveal>

                <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
                    <Reveal delay={0.08} className="lg:col-span-4">
                        <figure className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
                            <div className="frame-offset overflow-hidden border border-white/15 bg-[#050912]">
                                <img
                                    src={PORTRAIT}
                                    alt="Morris Melia, Founder and Technical Director of AIARIS"
                                    width={421}
                                    height={443}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
                                />
                            </div>
                            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                Founder portrait
                            </figcaption>
                        </figure>
                    </Reveal>

                    <div className="lg:col-span-8">
                        <Reveal delay={0.12}>
                            <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                Morris Melia
                            </h3>
                            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300/90">
                                Founder &amp; Technical Director, AIARIS
                            </p>
                            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                                Founder &amp; CTO, INNOTECH
                                <span className="mx-2 text-cyan-400/40">·</span>
                                Partner &amp; systems integrator
                            </p>
                        </Reveal>

                        <Reveal delay={0.18}>
                            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                                <p>
                                    Morris Melia is the founder of AIARIS and leads its technical and product
                                    direction. His work spans infrastructure systems, hardware, firmware, edge
                                    computing, on-premise software and integrated building technologies. AIARIS
                                    was created around a core principle: critical infrastructure should remain
                                    locally operational, customer-owned and resilient — without unnecessary
                                    dependence on cloud connectivity, recurring licenses or a single service
                                    provider.
                                </p>
                                <p>
                                    Morris is also Founder &amp; CTO of INNOTECH, a systems integration company
                                    working across security and intelligent infrastructure. AIARIS is an
                                    independent technology brand and organization; INNOTECH is a partner and
                                    systems integrator — not a parent brand.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.24}>
                            <blockquote className="mt-10 border-l border-cyan-400/35 bg-white/[0.02] py-5 pl-6 pr-4 sm:pl-8">
                                <p className="font-display text-lg leading-snug text-slate-200 sm:text-xl">
                                    “Critical infrastructure should not stop working because a server, cloud
                                    connection or vendor subscription becomes unavailable. AIARIS is being built
                                    around a different principle: local operational resilience, customer ownership
                                    and one coherent architecture from the physical device to the intelligence
                                    layer.”
                                </p>
                                <footer className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                    — Morris Melia, Founder &amp; Technical Director
                                </footer>
                            </blockquote>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                                <a
                                    href="mailto:morris@aiaris.io"
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    morris@aiaris.io
                                </a>
                                <a
                                    href="mailto:morris@innotech.ge"
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    morris@innotech.ge
                                </a>
                                <a
                                    href="tel:+995557410263"
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    +995 557 410 263
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
