# Edge-first access control

## The core idea

When a credential is presented, the system should be able to **allow or deny using local state** whenever policy says that is acceptable—without requiring a round trip to a remote service for every presentation.

## Why edge-first

- Latency: physical access is intolerant of multi-second stalls
- Availability: buildings do not pause when WAN links degrade
- Safety: emergency and supervised inputs need deterministic local handling
- Privacy and blast radius: not every badge event needs to leave the site in real time

## What still belongs upstream

Edge-first does not mean edge-isolated forever. Upstream systems remain valuable for:

- enrollment and credential lifecycle
- multi-site policy authoring
- audit aggregation and investigations
- firmware distribution and configuration campaigns

The architectural win is **eventual synchronization**, not permanent disconnection as a lifestyle.

## Buffered events and catch-up

When uplink is unavailable, edge nodes should retain a bounded history of decisions and alarms, then reconcile when connectivity returns. Bounds, retention, and overflow behavior must be designed deliberately so storage exhaustion does not silently discard security-relevant history.

## Related reading

- [05_FIRMWARE_AND_RESILIENCE.md](05_FIRMWARE_AND_RESILIENCE.md)
- [03_GATEWAY_AND_EDGE_NODES.md](03_GATEWAY_AND_EDGE_NODES.md)
