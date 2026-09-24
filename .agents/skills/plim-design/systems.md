# Systems and libraries

Part of [`plim-design`](SKILL.md). Use this when designing or changing a design system or component library that several products, teams, or themes share. For the structure of a single product, "How much structure" and "Convention or context" in `SKILL.md` apply; this file extends them to systems that serve many products.

A shared system multiplies every decision. Its defaults become many products' first impression, its variants become their vocabulary, and a change to one role reaches every consumer at once.

## A library's look is its own

- **A library's default look is an identity:** the library's own, not the products' that use it. It is not a Plim look; Plim has none (§15). "Neutral" is a character too.
- **Decide what the default is for, and say so.** It might be a showcase of the library's own character, or a starting point that products are expected to re-theme. Both are legitimate. Which one it is, and what character it has, are human decisions (Law 8), recorded in the system's decision record ([`decision-records.md`](decision-records.md)).
- **Defaults must be replaceable.** A product should be able to carry its own identity through the theming surface without fighting the library, or overriding its internals.
- **Derive the default from evidence** like any greenfield foundation ("When there is no system to preserve"): the kinds of products and tasks the library serves, and the character its owners choose.

## The theming surface

- **Theme at the layer of meaning.** Separate raw values from roles (action, status, surface, text hierarchy, focus, and so on) and from component-level settings. Products theme the roles; components consume them.
- **Make identity themeable:** colour roles, typefaces and type scale, shape, elevation language, motion character, and density, wherever consumers legitimately differ.
- **Keep behaviour and access stable across themes.** Keyboard behaviour, semantics, and focus visibility belong to the component, not the theme. A theme cannot waive an accessibility requirement; contrast and focus must hold in every theme the library ships, and consumers need a way to check their own.
- **Name roles by meaning, not by value,** so a theme can change the value without the name lying.

## Variants and options are vocabulary

- **Each variant expresses a distinct meaning:** importance, consequence, state, or kind. A variant that differs only in taste is noise that every consumer has to learn.
- **Semantic honesty applies to the API.** A "danger" variant must read as danger in every theme; a "raised" surface must follow the elevation language whatever values a theme gives it.
- **Add options for real differences between consumers**, such as density modes for different tasks or sizes for different inputs. Where one default can't serve them all, prefer a documented option to a single hard-coded answer.
- **Keep the public surface small.** Every option multiplies the states to design, document, and test.

## What every component carries

- **Its states**, from the state model in `SKILL.md`, including the combinations it will meet in consuming products.
- **Accessible behaviour, built in** rather than left to each consumer.
- **Resilience to real content:** long labels, localisation, missing content.
- **Usage guidance:** what it is for, what it is not for, and which variant expresses which meaning. Documentation is what makes a pattern a system convention for the products that use it; an undocumented pattern will be judged as ad hoc (see "A documented system is the product's vocabulary").

## Evidence comes from the consumers

- Watch how components are actually used. Repeated overrides are evidence: of a missing role, a wrong default, or a component used for a job it wasn't designed for.
- A local need in one product is not, by itself, a reason to change the shared system. Scope it (a product-level role or a variant), or propose it to the system's owners.

## Evolving a system

- **Name the blast radius first:** which consumers, themes, and states a change reaches. A one-line change to a shared role can restyle every product.
- **System-level changes are human decisions,** made by the system's owners and recorded in the system's decision record.
- **Prefer additive change:** add the new, deprecate the old with a migration path and a stated timeline, then remove. Breaking changes need a reason and notice.
- **Stage visual changes** and check representative consumers, every theme, and the states that use what changed before release.
- **A rebrand or redesign of the system** starts from new foundations, rebuilds components on them with their states and accessibility, and carries forward what users depend on (see [case 16](../../examples/case-studies/16-explicit-redesign-request.md)).

## Failure modes

- Presenting a library's default look as the right look for every product, or as the philosophy.
- A theming surface so shallow that products can't carry their own identity, or so deep that any theme can break accessibility.
- Variants added for taste; options added "just in case".
- Components shipped with a default state only, leaving states and accessibility to each consumer.
- Changing a shared role for one product's need without checking what else it restyles.
