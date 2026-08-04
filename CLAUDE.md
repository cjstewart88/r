# r

A pile of tiny web toys. Things made late at night to scratch an itch. The point is fun, not architecture.

## Structure

```
index.html          # the "o_0" desktop-OS shell — the index of everything
<name>/index.html   # one experiment
```

Each experiment is a **single self-contained `index.html`** — styles inline in the head, script inline at the end of the body. No build step, no dependencies, no external requests. Open it in a browser and it works.

Occasional local assets (`.jpg`, `.png`, `.mp4`, `.txt`) live next to their `index.html`. `game/` is an old node CLI thing with committed `node_modules` — ignore it.

## Making a new one

1. `mkdir <name>/` — one short lowercase word. Weird is good.
2. Write `<name>/index.html`.
3. Add a link at the **top** of the list in the root [index.html](index.html) (it's newest-first):
   ```html
   <a class="item" href="<name>/index.html"><name></a>
   ```
4. Stop there. Leave the change uncommitted so it can be looked at first.

**Never commit or push on your own.** Wait to be told. When told, commit straight to
`master` with the folder name as the message and push — one commit per experiment,
no branches, no PRs.

## Don't

- Add a README, package.json, linter, tests, or a shared `lib/`.
- Refactor other experiments — they're snapshots, leave them weird.
- Touch `game/node_modules/`.

Flashing/strobing visuals are common here; the root index already carries a photosensitivity warning.
