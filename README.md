# skillrank docs

Documentation for [**skillrank**](https://github.com/darcy2002/SkillStack) — the quality layer for AI agent skills. Test, bundle, and sync skills across every coding agent.

Built with [Mintlify](https://mintlify.com). All content lives in [`docs/`](docs/) as MDX, with navigation and theme configured in `docs/docs.json`.

**Live site:** https://skillrank.mintlify.app

## Local preview

Requires Node.js 20+.

```bash
# install the Mintlify CLI
npm i -g mint

# from the docs folder, start the dev server with hot reload
cd docs
mint dev
```

The preview opens at `http://localhost:3000`. If the CLI is out of date, run `mint update`.

## Structure

```
docs/
├── docs.json            # navigation, theme, colors, logo/favicon
├── introduction.mdx     # docs home / landing
├── installation.mdx
├── quickstart.mdx
├── commands/            # one page per CLI command
│   ├── install.mdx
│   ├── bench.mdx
│   ├── sync.mdx
│   ├── create.mdx
│   ├── publish.mdx
│   ├── list.mdx
│   └── score.mdx
├── stacks/              # the skillrank.yaml stack format
│   ├── yaml-reference.mdx
│   ├── creating-a-stack.mdx
│   └── publishing.mdx
├── bench/               # how scoring works
│   ├── how-it-works.mdx
│   ├── scorecard.mdx
│   └── costs.mdx
├── guides/
│   ├── from-npx-skills.mdx
│   └── ci-integration.mdx
├── logo/
│   ├── light.svg
│   └── dark.svg
└── favicon.svg
```

## Editing

Pages are MDX: Markdown plus Mintlify components (`<Card>`, `<CardGroup>`, `<Steps>`, `<Accordion>`, `<CodeGroup>`, callouts). To add or reorder pages, edit the `navigation` block in `docs.json`; a page won't appear in the sidebar until it's listed there.

When documenting a new skillrank feature: add or update the relevant `.mdx` file, push to `main`, and the live site redeploys automatically.

## Deployment

The repo is connected to Mintlify through its GitHub app. Every push to the `main` branch triggers an automatic build and deploy — usually within a minute. There's no manual publish step.

To change the connected repository or branch, use **Git Settings** in the [Mintlify dashboard](https://dashboard.mintlify.com).

### Custom domain (optional)

The site currently serves from the Mintlify subdomain above. To move it to a custom domain (for example `docs.skillrank.dev`), add the domain under **Settings → Domain** in the Mintlify dashboard and point the matching DNS record at the target Mintlify provides. A custom domain indexes and ranks noticeably better in search than the default subdomain. This step requires owning the domain.

## Links

- **CLI / source:** https://github.com/darcy2002/SkillStack
- **npm package:** https://www.npmjs.com/package/skillrank
- **Issues:** https://github.com/darcy2002/SkillStack/issues

## License

MIT © darcy2002
