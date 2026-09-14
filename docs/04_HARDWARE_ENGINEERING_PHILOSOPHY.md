# Hardware engineering philosophy

## Co-design, not afterthought silicon

Access-control hardware is not a decorative carrier for software. Power integrity, protection, isolation, connector choice, and thermal behavior determine whether firmware promises survive the field.

## Principles we favor

1. **Protection before cleverness** — reverse polarity, surge, and brown-out behavior beat exotic features that die on first miswire.
2. **Margins for industrial reality** — 12 V / 24 V auxiliary worlds are noisy; design for the supply you will actually see.
3. **Debug visibility** — status LEDs, test points, and safe fail modes reduce truck rolls.
4. **Modularity where it pays** — separate concerns when field replacement or certification boundaries benefit; avoid modularity theater.
5. **DFM/DFT early** — assembly and test constraints belong in architecture reviews, not only in the week before tape-out.

## What we do not publish here

Exact schematics, net names, connector pinouts, and production MPNs remain private. Public discussion stays at family and principle level (for example: “wide-Vin buck to a 3.3 V logic rail” without disclosing a shipping bill of materials).

## Related reading

- [08_SERVICEABILITY_AND_MANUFACTURABILITY.md](08_SERVICEABILITY_AND_MANUFACTURABILITY.md)
- [05_FIRMWARE_AND_RESILIENCE.md](05_FIRMWARE_AND_RESILIENCE.md)
