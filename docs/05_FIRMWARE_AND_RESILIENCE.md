# Firmware and resilience

## Firmware is a safety-adjacent product surface

In access control, firmware mistakes become physical outcomes. Resilience is therefore not only “doesn’t crash”—it is “fails into a defined state operators can understand.”

## Practices at principle level

- **Watchdogs and supervised loops** — detect stuck tasks before doors become mysteriously mute
- **Power-loss honesty** — commit critical state carefully; define what survives a hard cut
- **Bounded buffers** — offline queues must have explicit full/overflow policy
- **Update discipline** — staged delivery, authenticity checks, and rollback paths
- **Diagnostic modes** — field technicians need signals that do not require a debugger on every visit

## Local decision engines

Where policy allows, credential evaluation should run against local indexes or caches with predictable timing. The point is not to reinvent cryptography in public notes; it is to keep **authorization locality** aligned with availability requirements.

## Related reading

- [02_EDGE_FIRST_ACCESS_CONTROL.md](02_EDGE_FIRST_ACCESS_CONTROL.md)
- [07_PRODUCT_SECURITY_PRINCIPLES.md](07_PRODUCT_SECURITY_PRINCIPLES.md)
