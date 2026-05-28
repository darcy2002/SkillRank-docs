# skillrank docs

Mintlify documentation for skillrank. Live at: https://docs.skillrank.dev (or your Mintlify-assigned URL).

## Deploy to Mintlify (15 minutes)

### Step 1: Get a Mintlify account

1. Go to [mintlify.com](https://mintlify.com)
2. Sign in with GitHub
3. Choose the **free open-source plan**

### Step 2: Create a docs repo

Option A — Separate docs repo (recommended):

```bash
# Create a new repo on GitHub: SkillRank-docs
git clone git@github.com:darcy2002/SkillRank-docs.git
cd SkillRank-docs

# Copy these docs in
cp -r /path/to/skillrank-docs/docs/* .

git add -A
git commit -m "init: docs"
git push origin main
```

Option B — Docs in main repo:

```bash
# In your main SkillRank repo
mkdir docs
cp -r /path/to/skillrank-docs/docs/* docs/
git add docs/
git commit -m "docs: add Mintlify documentation"
git push origin main
```

### Step 3: Connect repo to Mintlify

1. In the Mintlify dashboard, click "Add documentation"
2. Select your GitHub repo
3. Choose the docs folder (root if separate repo, `/docs` if in main repo)
4. Mintlify will auto-deploy from your `docs.json` config

### Step 4: Custom domain (optional)

In Mintlify dashboard → Settings → Custom Domain:
- Add `docs.skillrank.dev` (or whatever domain you want)
- Update your DNS with the provided CNAME record
- Mintlify handles HTTPS automatically

### Step 5: Update images

Replace these placeholder paths with real images:

- `/images/hero-light.png` — Landing page hero (light mode)
- `/images/hero-dark.png` — Landing page hero (dark mode)  
- `/logo/light.svg` — Logo for light mode header
- `/logo/dark.svg` — Logo for dark mode header
- `/favicon.svg` — Browser favicon

For a quick start, you can use these placeholder commands to create empty placeholders:

```bash
mkdir -p logo images
# Then add your actual logo and hero images
```

## Local preview

```bash
npm install -g mintlify
cd docs/  # or wherever docs.json lives
mintlify dev
```

Opens at `http://localhost:3000` with hot reload.

## File structure

```
docs/
├── docs.json              # Mintlify config
├── introduction.mdx       # Landing page
├── installation.mdx       # Setup guide
├── quickstart.mdx         # 5-minute tour
├── commands/
│   ├── install.mdx
│   ├── bench.mdx
│   ├── sync.mdx
│   ├── create.mdx
│   ├── publish.mdx
│   ├── list.mdx
│   └── score.mdx
├── stacks/
│   ├── yaml-reference.mdx
│   ├── creating-a-stack.mdx
│   └── publishing.mdx
├── bench/
│   ├── how-it-works.mdx
│   ├── scorecard.mdx
│   └── costs.mdx
├── guides/
│   ├── from-npx-skills.mdx
│   └── ci-integration.mdx
└── images/
    └── (your hero images, logos, etc.)
```

## What to customize before launch

1. **Replace `darcy2002` with your actual GitHub username** — search all `.mdx` files
2. **Add real hero images** to `/images/`
3. **Add your logo SVGs** to `/logo/`
4. **Update Twitter/X handle** in `docs.json` footer
5. **Add favicon.svg** to root
6. **Test all internal links** with `mintlify dev`

## Pre-launch checklist

- [ ] All `darcy2002` references updated to your handle
- [ ] Logo files added
- [ ] Hero image added
- [ ] Favicon added
- [ ] Mintlify project connected to GitHub repo
- [ ] Custom domain configured (or using default subdomain)
- [ ] All 16 pages render correctly in `mintlify dev`
- [ ] Mobile responsive check passed
- [ ] Dark mode looks good
- [ ] Internal links all work
- [ ] Code snippets tested (the install commands actually work)

## Maintenance

When you add a new skillrank feature:

1. Update relevant `.mdx` file
2. Push to GitHub
3. Mintlify auto-deploys (usually within 30 seconds)

## Resources

- [Mintlify docs](https://mintlify.com/docs)
- [MDX syntax](https://mdxjs.com/)
- [docs.json schema](https://mintlify.com/docs/settings/global)
