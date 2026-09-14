# Industrial communications

## Determinism over fashion

Building systems often need multi-drop, electrically robust links between gateways and edge nodes. In that world, boring deterministic protocols beat fashionable ones that cannot survive long cable plants or noisy cabinets.

## RS-485 at concept level

RS-485 remains a common physical layer for industrial multi-drop buses because it tolerates differential noise and longer runs than typical single-ended logic. Public discussion here stays conceptual:

- half-duplex multi-drop topologies need clear turnaround and addressing rules
- biasing, termination, and surge protection are first-class hardware concerns
- application framing should be versioned and checksummed

This repository does **not** publish proprietary framing, timing tables, or wiring schedules for shipping products.

## Gateway ↔ edge expectations

Communications design should make silent failure hard: heartbeats, sequence numbers, and explicit retries belong in the contract. “It usually works” is not an acceptance test.

## Related reading

- [03_GATEWAY_AND_EDGE_NODES.md](03_GATEWAY_AND_EDGE_NODES.md)
- [04_HARDWARE_ENGINEERING_PHILOSOPHY.md](04_HARDWARE_ENGINEERING_PHILOSOPHY.md)
