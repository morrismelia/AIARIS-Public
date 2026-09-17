import React from 'react';
import { Helmet } from 'react-helmet';
import Seo from '@/components/Seo';
import JsonLd from '@/components/JsonLd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import WhatIs from '@/sections/WhatIs';
import Architecture from '@/sections/Architecture';
import Devices from '@/sections/Devices';
import CorePlatform from '@/sections/CorePlatform';
import Intelligence from '@/sections/Intelligence';
import Domains from '@/sections/Domains';
import Vision from '@/sections/Vision';
import Story from '@/sections/Story';
import Leadership from '@/sections/Leadership';
import Contact from '@/sections/Contact';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#060b18] text-white">
            <Helmet>
                <title>AIARIS | Advanced Infrastructure Operating System</title>
                <meta
                    name="description"
                    content="AIARIS unifies devices, firmware, edge control, on-premise operations, cloud services and AI into a resilient operating architecture for intelligent infrastructure."
                />
                <meta
                    name="keywords"
                    content="infrastructure operating system, intelligent infrastructure, physical security platform, access control, embedded systems, firmware, edge computing, on-premise platform, BMS integration, CCTV integration, building intelligence, infrastructure AI"
                />
                <meta name="robots" content="index,follow,max-image-preview:large" />
                <meta name="google-site-verification" content="mSePlbktNhPmgYxCW0frhIiGGJlcbIkRJTGVOlkN998" />
                <meta name="theme-color" content="#060b18" />
            </Helmet>
            <Seo
                title="AIARIS | Advanced Infrastructure Operating System"
                description="AIARIS unifies devices, firmware, edge control, on-premise operations, cloud services and AI into a resilient operating architecture for intelligent infrastructure."
                siteName="AIARIS"
                type="website"
                image="/media/controller-smartaccess-4d.webp"
            />
            <JsonLd />
            <Header />
            <main>
                <Hero />
                <WhatIs />
                <Architecture />
                <Devices />
                <CorePlatform />
                <Intelligence />
                <Domains />
                <Vision />
                <Story />
                <Leadership />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
