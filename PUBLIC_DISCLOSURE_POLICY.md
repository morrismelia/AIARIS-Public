# Public disclosure policy

This policy classifies what AIOS SYSTEMS may publish in public channels (including this repository). It exists to protect customers, operators, and unpublished engineering while still allowing genuine technical communication.

## GREEN — generally safe to publish

- Generic engineering principles and trade-off discussions
- Already-public marketing statements and category-level product descriptions
- Sanitized conceptual diagrams that contain no private topology, addresses, credentials, or exact electrical values
- Public profiles of leadership roles (no private personal data)
- High-level glossaries and research topic lists

GREEN material may be authored and published under normal editorial review.

## AMBER — Morris review required before publication

- Architecture diagrams that resemble shipping products more closely than generic teaching diagrams
- Protocol descriptions that go beyond textbook industrial practice
- Product photographs or industrial design renders
- Performance numbers, capacity claims, or timing budgets
- Component **families** (e.g. “a 60 V industrial buck regulator”) without exact production MPNs
- Public roadmaps, timelines, or partnership announcements

AMBER items require explicit review and approval by **Morris Melia** (or a designated delegate) before publication.

## RED — forbidden in public channels

- Schematics, PCB source, Gerbers, netlists, pin maps, exact wiring, EDA project files
- Unreleased BOMs, exact MPN selections, supplier pricing/stock, fixtures, and manufacturing recipes
- Unreleased model codes/codenames, board identifiers, internal issue/run IDs, private branch names
- Firmware/source/bootloader implementations; crypto implementation details; signing/provisioning secrets
- Credentials, API tokens, callback URLs, internal hostnames/IPs, automation topology or agent credentials
- Exploit-enabling physical or logical security details
- Customer names, sites, contracts, quantities, pricing, tenders, or project specifics
- Unpublished commercial strategy, partner/supplier terms, margins, confidential roadmaps or deadlines
- Personal/private data about Morris, staff, contractors, partners, or customers

RED material must not appear in this repository. If discovered, remove it immediately and treat the incident as a disclosure failure.

## Practical rule for contributors

If you are unsure whether a sentence is GREEN or AMBER, treat it as AMBER. If it would help an adversary attack a deployed site or clone an unreleased design, treat it as RED.
