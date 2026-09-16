/**
 * Production SEO identity gate.
 *
 * PRE-LAUNCH default: do not emit absolute public identity from the runtime host.
 * Final-domain cutover requires BOTH:
 *   VITE_PUBLIC_INDEXING=true
 *   VITE_SITE_ORIGIN=https://<final-domain>   (https only, no trailing slash)
 */
export function getAuthorizedSiteOrigin() {
    const indexing = String(import.meta.env.VITE_PUBLIC_INDEXING || '').toLowerCase() === 'true';
    const raw = String(import.meta.env.VITE_SITE_ORIGIN || '').trim().replace(/\/$/, '');
    if (!indexing || !raw) return null;
    try {
        const u = new URL(raw);
        if (u.protocol !== 'https:') return null;
        if (!u.hostname || u.hostname === 'localhost') return null;
        // Refuse temporary review hosts even if misconfigured at cutover.
        if (/\.sslip\.io$/i.test(u.hostname) || /\.nip\.io$/i.test(u.hostname)) return null;
        return `${u.protocol}//${u.host}`;
    } catch {
        return null;
    }
}

export function isProductionSeoIdentityEnabled() {
    return getAuthorizedSiteOrigin() !== null;
}
