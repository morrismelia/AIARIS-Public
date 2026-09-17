import React from 'react';
import { Helmet } from 'react-helmet';
import { getAuthorizedSiteOrigin } from '@/lib/siteOrigin';

/**
 * Organization + WebSite + Person (founder) JSON-LD.
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

    const person = {
        '@type': 'Person',
        name: 'Morris Melia',
        jobTitle: 'Founder & Technical Director',
        email: 'morris@aiaris.io',
        telephone: '+995557410263',
        worksFor: origin
            ? { '@id': `${origin}/#organization` }
            : { '@type': 'Organization', name: 'AIARIS' },
        description:
            'Founder of AIARIS; leads technical and product direction across infrastructure systems, hardware, firmware, edge computing and on-premise software. Also Founder & CTO of INNOTECH, a partner systems integrator.',
    };

    if (origin) {
        organization['@id'] = `${origin}/#organization`;
        organization.url = origin;
        organization.founder = { '@id': `${origin}/#founder` };
        organization.foundingLocation = {
            '@type': 'Place',
            name: 'Tbilisi, Georgia',
        };
        person['@id'] = `${origin}/#founder`;
        person.url = `${origin}/#leadership`;
        person.image = `${origin}/media/morris-melia-founder.webp`;
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
        '@graph': [organization, website, webpage, person],
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
}
