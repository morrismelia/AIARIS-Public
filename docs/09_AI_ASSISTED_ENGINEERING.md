# AI-assisted engineering

## Human-authorized automation

AIARIS explores AI assistance for engineering productivity under a simple rule: **humans authorize consequential actions**. Assistance should accelerate inspection and drafting; it must not silently mutate product truth.

## A practical loop: inspect → act → verify

1. **Inspect** — gather evidence from repositories, datasheets, builds, and tests
2. **Act** — propose or apply a bounded change with an explicit scope
3. **Verify** — run checks, read diffs, and confirm the change did what was claimed

This loop is category-level guidance. It is not a description of any private automation topology, agent roster, or internal credential system.

## What AI should not do unsupervised

- publish RED disclosure material
- merge irreversible product changes without review
- invent certifications, customers, or test results
- bypass security review for firmware signing or provisioning

## Related reading

- [PUBLIC_DISCLOSURE_POLICY.md](../PUBLIC_DISCLOSURE_POLICY.md)
- [07_PRODUCT_SECURITY_PRINCIPLES.md](07_PRODUCT_SECURITY_PRINCIPLES.md)
