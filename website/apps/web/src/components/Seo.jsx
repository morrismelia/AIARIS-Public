import React from 'react';
import { Helmet } from 'react-helmet';
import { getAuthorizedSiteOrigin } from '@/lib/siteOrigin';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
//
// Absolute public identity (canonical / og:url / absolute og:image) is gated:
// only when VITE_PUBLIC_INDEXING=true and VITE_SITE_ORIGIN is a valid https origin.
// Never fall back to window.location.origin (blocks temporary review hosts).
const Seo = ({ title, description, image, url, siteName, type = 'website' }) => {
    const origin = getAuthorizedSiteOrigin();
    const canonical = origin
        ? url || `${origin}${typeof window !== 'undefined' ? window.location.pathname || '/' : '/'}`
        : null;

    let ogImage;
    if (image && image.startsWith('http')) {
        ogImage = image;
    } else if (image && origin) {
        ogImage = `${origin}${image.startsWith('/') ? image : `/${image}`}`;
    } else {
        ogImage = undefined;
    }

    return (
        <Helmet>
            {canonical && <link rel="canonical" href={canonical} />}
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:type" content={type} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default Seo;

export { Seo };
