# Gateways and edge nodes

## Two roles, two tempos

| Role | Typical tempo | Examples of duty |
|---|---|---|
| Edge node | Milliseconds to seconds | Reader I/O, local decisions, output drive, local buffers |
| Gateway / hub | Seconds to minutes (plus bursts) | Aggregation, distribution, uplink, fleet visibility |

## Why separation helps

- Hardware near doors can stay electrically and thermally specialized
- Gateways can evolve networking and operator features without respinning every portal board
- Fault isolation: a gateway restart should not require every door MCU to reboot

## Coordination patterns (principle level)

- **Policy distribution** — push compiled or structured policy toward nodes that must enforce it
- **Heartbeat / health** — distinguish “quiet” from “dead”
- **Command and confirm** — operator actions should be acknowledgeable
- **Backfill** — historical events move upstream without blocking live decisions

## Anti-patterns

- Making the gateway a hard dependency for every unlock
- Treating edge nodes as dumb GPIO expanders with no local authority
- One shared secret for an entire building with no rotation story

## Related reading

- [06_INDUSTRIAL_COMMUNICATIONS.md](06_INDUSTRIAL_COMMUNICATIONS.md)
- [01_PRODUCT_ARCHITECTURE_PRINCIPLES.md](01_PRODUCT_ARCHITECTURE_PRINCIPLES.md)
