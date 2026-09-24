# Interface language

Part of [`plim-design`](SKILL.md). Words are design material. Labels, actions, headings, messages, empty states, errors, and confirmations carry clarity, confidence, coherence, character, and craft as much as type and colour do (§8.2, §8.5, §8.13, §8.15, §8.16). This file is reasoning about words, not a style guide.

## Voice comes from the product

- **Voice** is the product's consistent personality in words. It is part of brand and emotional character, so it is a human decision (Law 8). Preserve an existing voice. Where there is none, derive it from the evidence (audience, purpose, brand) or propose directions, as with any greenfield foundation.
- **There is no Plim voice.** Plain and neutral is a voice too, right for some products and wrong for others.
- **Under-expression applies to words.** A playful brand with bureaucratic copy, or a warm service that talks like a form, has an identity gap, judged with the same evidence standard as a visual one ("Preserve identity" in `SKILL.md`).

## Tone follows state and consequence

The voice stays; the tone adapts to the state the person is in (see "Design is a system of states"):

- **Routine success:** brief, or nothing at all, if the result is visible.
- **Errors:** what happened, why if known, and what to do next. Don't blame the person. Keep the voice, but the more the person is stuck or has lost something, the less room there is for playfulness.
- **Destructive or irreversible actions:** name the specific consequence and its scope ("Delete 248 files for everyone in this workspace"), and label the action with what it does, not "OK" (see "Automation and agency").
- **Empty states:** what this place is for and how to begin. They can carry character.
- **Waiting and long-running work:** what is happening, roughly how long it takes, and whether the person can leave.
- **Celebration and arrival:** where character can lead, if the product has it.

## Terminology

- **One name per concept.** Use the same word for the same thing everywhere, and different words only for different things. This is semantic honesty in words, and consistency without uniformity (Law 4).
- **Use the users' and the domain's words.** Preserve established domain and product terms (Law 7). Renaming a term people have learned has a learning cost, like any other departure from convention ("Familiarity and identity").
- **Don't rename standard actions for character** when appearance, or voice elsewhere, could carry it.

## Labels and actions

- An action's label says what will happen. Where a generic verb is ambiguous, name the object or the result ("Send invoice", "Continue to payment").
- Links name where they go; buttons name what they do.
- Labels stay visible for inputs; a placeholder is not a label (see [`plim-accessibility`](../plim-accessibility/SKILL.md)).

## Language and access

- Match the reading level and vocabulary to the audience: plain language for broad or occasional audiences, precise domain terms for experts who use them.
- A control's accessible name matches its visible label; instructions don't depend on shape, colour, or position (both are requirements; see `plim-accessibility`).
- Leave room for translation: text expands, word order changes, and sentences built from concatenated fragments often break. Don't put essential text in images.
- Write numbers, dates, currencies, and units in the formats the audience uses.

## When the fix is words

When a finding is a misunderstanding, a hesitation, or a wrong action, check the words before the visuals: an unclear label, a buried consequence, jargon, two names for one thing. A copy change is usually the smallest, most reversible, and least identity-damaging intervention (rung 1 in [`plim-beautify`](../plim-beautify/SKILL.md), "Choosing the intervention").

## Failure modes

- Flattening a distinctive voice into generic, neutral copy, and calling it clarity.
- Playfulness in errors, losses, and anxious moments.
- Generic confirmations ("Are you sure?") that don't say what will happen.
- Two names for one thing, or one name for two things.
- Renaming domain terms for style.
- Copy that only fits the English, ideal-length screenshot.
