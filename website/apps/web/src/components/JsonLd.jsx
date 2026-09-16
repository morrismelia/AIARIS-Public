import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Organization + WebSite JSON-LD for launch-ready SEO.
 * Canonical/host remains dynamic so production domain cutover does not require
 * rewriting structured data hosts by hand — uses the live origin.
 */
export default function JsonLd({
    name = 'AIARIS',
    description =
        'AIARIS unifies devices, firmware, edge control, on-premise operations, cloud services and AI into a resilient operating architecture for intelligent infrastructure.',
    email = 'hello@aiaris.com',
}) {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${origin}/#organization`,
                name,
                url: origin || undefined,
                email,
                description,
                slogan: 'Advanced Infrastructure Operating System',
            },
            {
                '@type': 'WebSite',
                '@id': `${origin}/#website`,
                url: origin || undefined,
                name,
                description,
                publisher: { '@id': `${origin}/#organization` },
                inLanguage: 'en',
            },
            {
                '@type': 'WebPage',
                '@id': `${origin}/#webpage`,
                url: origin ? `${origin}/` : undefined,
                name: 'AIARIS | Advanced Infrastructure Operating System',
                isPartOf: { '@id': `${origin}/#website` },
                about: { '@id': `${origin}/#organization` },
                description,
                inLanguage: 'en',
            },
        ],
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
}
