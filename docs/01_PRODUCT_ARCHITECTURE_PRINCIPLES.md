# Product architecture principles

## 1. Separate decision locality from management locality

Credential **decisions** that must happen in milliseconds should be executable near the door. Fleet **management**, reporting, and long-horizon policy authoring can live further upstream. Conflating the two creates either unsafe cloud dependence or unmanageable islands.

## 2. Make failure modes explicit

Every interface should answer: what happens when power blips, when the uplink stalls, when a reader wires open, when storage fills? Architecture that only documents the happy path is incomplete.

## 3. Prefer contracts over accidental coupling

Edge nodes, gateways, and operator software should communicate through versioned, inspectable contracts. Avoid hidden knowledge embedded only in one team’s tribal memory.

## 4. Design for replacement, not heroics

Modules, cable plants, and configuration should allow field replacement without rewriting the site. Architecture that requires a specialist laptop ritual for every swap does not scale.

## 5. Keep secrets scarce and rotatable

Provisioning material, signing keys, and service credentials must be minimized, stored appropriately, and rotatable. Public documentation discusses this only at principle level.

## Conceptual topology

```mermaid
flowchart LR
  subgraph site [Site]
    R[Readers / inputs]
    E[Edge access nodes]
    G[Gateway / hub]
  end
  R --> E
  E <--> G
  G --> U[Upstream services]
```

This diagram is intentionally generic. It does not describe a private product pinout or protocol framing.

## Related reading

- [03_GATEWAY_AND_EDGE_NODES.md](03_GATEWAY_AND_EDGE_NODES.md)
- [07_PRODUCT_SECURITY_PRINCIPLES.md](07_PRODUCT_SECURITY_PRINCIPLES.md)
