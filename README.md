# UMEED · Unified Emergency Management, Evacuation & Displacement

An interactive frontend landing page for **UMEED**, a coordination layer for
India's disaster response, connecting rescue agencies, NGOs and citizens so
help reaches the right place before the water rises.

> Frontend only. No backend or database. All figures and feeds are illustrative
> mock data living in [`src/data/site.js`](src/data/site.js).

## Stack

- **React 18** + **Vite 5**
- Plain CSS with design tokens (no UI framework)
- Brand palette and type sampled from the official UMEED logo (blue + orange)
- Fonts: Montserrat (wordmark / headings) + Source Sans 3 (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the build
```

## What's on the page

| Section | Notes |
| --- | --- |
| Alert ticker | Looping live-alert marquee, pauses on hover |
| Hero | Blue UMEED wordmark + three-photo rescue collage grid with caption chips |
| Real-Time Impact | Five stat cards with count-up animation on scroll |
| How it works | 4-step response lifecycle |
| Capabilities | Six core capability cards |
| Live Operations | Dark ops panel with animated progress bars |
| Partners | Auto-scrolling agency marquee |
| Get Involved | Volunteer / Agency / Support cards |
| Helpline + Footer | National helpline band and full footer |

Interactions: sticky navbar, scroll-progress bar, scroll-reveal, count-up
counters, mobile drawer, back-to-top. All motion respects
`prefers-reduced-motion`.

## Project structure

```
src/
  components/   # Navbar, Hero, Impact, Capabilities, ... , Footer
  hooks/        # useInView, useCountUp
  data/         # site.js holds all copy & mock figures
  styles/       # index.css (tokens/base) + components.css (sections)
```
