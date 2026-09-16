import React from 'react';
import { Helmet } from 'react-helmet';
import { getAuthorizedSiteOrigin } from '@/lib/siteOrigin';

/**
 * Organization + WebSite JSON-LD.
 * Absolute url/@id fields emit only when production SEO identity is explicitly gated
 * via VITE_PUBLIC_INDEXING=true + VITE_SITE_ORIGIN. Never use window.location.origin.
 */
export default function JsonLd({
    name = 'AIARIS',
    description =
        'AIARIS unifies devices, firmware, edge control, on-premise operations, cloud services and AI into a resilient operating architecture for intelligent infrastructure.',
    email = 'hello@aiaris.com',
}) {
    const origin = getAuthorizedSiteOrigin();

    const organization = {
        '@type': 'Organization',
        name,
        email,
        description,
        slogan: 'Advanced Infrastructure Operating System',
    };
    const website = {
        '@type': 'WebSite',
        name,
        description,
        inLanguage: 'en',
    };
    const webpage = {
        '@type': 'WebPage',
        name: 'AIARIS | Advanced Infrastructure Operating System',
        description,
        inLanguage: 'en',
    };

    if (origin) {
        organization['@id'] = `${origin}/#organization`;
        organization.url = origin;
        website['@id'] = `${origin}/#website`;
        website.url = origin;
        website.publisher = { '@id': `${origin}/#organization` };
        webpage['@id'] = `${origin}/#webpage`;
        webpage.url = `${origin}/`;
        webpage.isPartOf = { '@id': `${origin}/#website` };
        webpage.about = { '@id': `${origin}/#organization` };
    }

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [organization, website, webpage],
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
}
