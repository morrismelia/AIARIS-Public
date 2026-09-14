# Product security principles

## Security is a product requirement, not a press release

Physical security products are attractive targets. Public notes here describe principles only—not exploit recipes.

## Principles

1. **Least privilege** — every interface and service account should hold the minimum authority required.
2. **Authenticated updates** — field update paths must verify authenticity before trust; rollback should be possible when verification or health checks fail.
3. **Secret hygiene** — manufacturing and provisioning secrets must be scarce, protected, and rotatable.
4. **Tamper awareness** — products should detect and report suspicious physical or logical interference where the category requires it.
5. **Defense in depth** — network posture, local enforcement, and audit trails reinforce each other; none is sufficient alone.
6. **Safe defaults** — shipping configuration should not depend on customers discovering insecure factory settings.

## Coordinated disclosure

See [SECURITY.md](../SECURITY.md). Do not post vulnerability details in public issues.

## Related reading

- [05_FIRMWARE_AND_RESILIENCE.md](05_FIRMWARE_AND_RESILIENCE.md)
- [PUBLIC_DISCLOSURE_POLICY.md](../PUBLIC_DISCLOSURE_POLICY.md)
