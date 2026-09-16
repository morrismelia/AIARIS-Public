> **Repository:** `morrismelia/AIARIS-Public` (formerly `AIOS-SYSTEMS` / briefly `AIARIS`).
> Product software lives in `morrismelia/AIARIS`.
# AIARIS

Public engineering notes and product architecture principles from **AIARIS**.

AIARIS is an independent technology and product organization focused on **access control**, **physical security**, **embedded systems**, **industrial edge devices**, **gateways**, **firmware**, **industrial communications**, and **security automation**.

This repository is a **sanitized public presence**: it explains how we think about resilient, serviceable systems. It is **not** a mirror of any private product repository, and it does **not** contain schematics, firmware source, bill-of-materials selections, credentials, or customer data.

## What you will find here

| Area | Start here |
|---|---|
| Vision and positioning | [docs/00_VISION.md](docs/00_VISION.md) |
| Architecture principles | [docs/01_PRODUCT_ARCHITECTURE_PRINCIPLES.md](docs/01_PRODUCT_ARCHITECTURE_PRINCIPLES.md) |
| Edge-first access control | [docs/02_EDGE_FIRST_ACCESS_CONTROL.md](docs/02_EDGE_FIRST_ACCESS_CONTROL.md) |
| Gateways and edge nodes | [docs/03_GATEWAY_AND_EDGE_NODES.md](docs/03_GATEWAY_AND_EDGE_NODES.md) |
| Hardware philosophy | [docs/04_HARDWARE_ENGINEERING_PHILOSOPHY.md](docs/04_HARDWARE_ENGINEERING_PHILOSOPHY.md) |
| Firmware and resilience | [docs/05_FIRMWARE_AND_RESILIENCE.md](docs/05_FIRMWARE_AND_RESILIENCE.md) |
| Industrial communications | [docs/06_INDUSTRIAL_COMMUNICATIONS.md](docs/06_INDUSTRIAL_COMMUNICATIONS.md) |
| Product security principles | [docs/07_PRODUCT_SECURITY_PRINCIPLES.md](docs/07_PRODUCT_SECURITY_PRINCIPLES.md) |
| Serviceability and manufacturability | [docs/08_SERVICEABILITY_AND_MANUFACTURABILITY.md](docs/08_SERVICEABILITY_AND_MANUFACTURABILITY.md) |
| AI-assisted engineering | [docs/09_AI_ASSISTED_ENGINEERING.md](docs/09_AI_ASSISTED_ENGINEERING.md) |
| Public research topics | [docs/10_PUBLIC_RESEARCH_TOPICS.md](docs/10_PUBLIC_RESEARCH_TOPICS.md) |
| Glossary | [docs/11_GLOSSARY.md](docs/11_GLOSSARY.md) |
| Leadership profile | [people/MORRIS_MELIA.md](people/MORRIS_MELIA.md) |
| Product categories | [products/README.md](products/README.md) |
| Public disclosure policy | [PUBLIC_DISCLOSURE_POLICY.md](PUBLIC_DISCLOSURE_POLICY.md) |

## Positioning in one paragraph

Physical security systems fail when they depend on a perfect network path for every credential decision. AIARIS designs for **local resilience**: edge devices that can decide and act when connectivity is degraded, then synchronize later; gateways that aggregate and govern without becoming a single point of failure for every door; and engineering practices that keep field service, diagnostics, and long-term maintainability first-class.

## Leadership

**Morris Melia — Founder & Technical Director, AIARIS**

Morris is a programmer and product architect whose work spans physical-security systems, embedded and edge devices, industrial automation, IoT, gateways, firmware, and full-system product architecture. He leads AIARIS at the boundary between field engineering and product development, with direct involvement in product definition, system architecture, hardware and firmware decisions, integration strategy, resilience, serviceability, and technical validation.

Read the full public profile: [people/MORRIS_MELIA.md](people/MORRIS_MELIA.md).

## What this repository intentionally omits

Implementation detail remains private until formally released. That includes product schematics, PCB sources, exact part selections, firmware trees, internal tooling, and site-specific deployments. See [PUBLIC_DISCLOSURE_POLICY.md](PUBLIC_DISCLOSURE_POLICY.md) and [LICENSE.md](LICENSE.md).

## Security contact

If you believe you have found a security issue affecting AIARIS products or public materials, do **not** open a public issue with exploit details. See [SECURITY.md](SECURITY.md).

## License and trademarks

Documentation in this repository is published for public reading. Publication does **not** grant rights to AIARIS hardware, firmware, schematics, private source, or trademarks. See [LICENSE.md](LICENSE.md).
