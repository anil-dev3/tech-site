# 📊 Site Architecture Visualization

## User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOMEPAGE (index.html)                    │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Tips       │  │    Apps      │  │   Tools      │          │
│  │  Section     │  │  Section     │  │  Section     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└──────────────────────────┬───────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ tips.html    │   │ apps.html    │   │ tools.html   │
│              │   │              │   │              │
│ [Card List]  │   │ [Card List]  │   │ [Card List]  │
│              │   │              │   │              │
│ ┌──────────┐ │   │ ┌──────────┐ │   │ ┌──────────┐ │
│ │ Learn    │ │   │ │ Learn    │ │   │ │ Learn    │ │
│ │ More ────┼─┼───┼─│ More ────┼─┼───┼─│ More ────┼─┤
│ └──────────┘ │   │ └──────────┘ │   │ └──────────┘ │
└──────────────┘   └──────────────┘   └──────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ DETAIL PAGE  │   │ DETAIL PAGE  │   │ DETAIL PAGE  │
│              │   │              │   │              │
│ dist/tips/   │   │ dist/apps/   │   │ dist/tools/  │
│ {slug}/      │   │ {slug}/      │   │ {slug}/      │
│ index.html   │   │ index.html   │   │ index.html   │
│              │   │              │   │              │
│ ┌──────────┐ │   │ ┌──────────┐ │   │ ┌──────────┐ │
│ │  Back    │ │   │ │  Back    │ │   │ │  Back    │ │
│ │  Button  │ │   │ │  Button  │ │   │ │  Button  │ │
│ └──────────┘ │   │ └──────────┘ │   │ └──────────┘ │
└──────────────┘   └──────────────┘   └──────────────┘
```

## Folder Structure Tree

```
tech-site/
│
├── 📄 index.html                    # Homepage
├── 📄 apps.html                     # Apps listing
├── 📄 tools.html                    # Tools listing
├── 📄 tips.html                     # Tips listing
│
├── 📁 assets/
│   ├── 📄 style.css                 # Global styles
│   └── 📄 script.js                 # Global JavaScript
│
├── 📁 data/                         # JSON data files
│   ├── 📄 apps.json                 # Apps data
│   ├── 📄 tools.json                # Tools data
│   └── 📄 tips.json                 # Tips data
│
└── 📁 dist/                         # Detail pages
    │
    ├── 📁 apps/                     # Apps category
    │   ├── 📁 notion/               # Individual app
    │   │   └── 📄 index.html        # Detail page
    │   │
    │   └── 📁 sharex/               # Individual app
    │       └── 📄 index.html        # Detail page
    │
    ├── 📁 tools/                    # Tools category
    │   ├── 📁 password-generator/   # Individual tool
    │   │   └── 📄 index.html        # Detail page
    │   │
    │   └── 📁 json-formatter/       # Individual tool
    │       └── 📄 index.html        # Detail page
    │
    └── 📁 tips/                     # Tips category
        ├── 📁 take-screenshots-quickly/  # Individual tip
        │   └── 📄 index.html        # Detail page
        │
        └── 📁 incognito-mode-shortcut/   # Individual tip
            └── 📄 index.html        # Detail page
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      1. Page Loads                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              2. script.js Fetches JSON Files                │
│                                                              │
│   • data/apps.json                                          │
│   • data/tools.json                                         │
│   • data/tips.json                                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              3. Create Cards with Data                      │
│                                                              │
│   Each card contains:                                       │
│   • Name/Title                                              │
│   • Description                                             │
│   • "Learn More" button → links to detailPage              │
│   • "Visit" button → links to external URL                 │
│   • Category tag                                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│         4. User Clicks "Learn More"                         │
│                                                              │
│   Navigates to: dist/{category}/{slug}/index.html          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│         5. Detail Page Shows Full Information               │
│                                                              │
│   • Header with gradient                                    │
│   • Long description                                        │
│   • Features/Steps list                                     │
│   • Platforms (for apps/tools)                             │
│   • Pricing                                                 │
│   • CTA buttons                                             │
│   • Back button                                             │
└─────────────────────────────────────────────────────────────┘
```

## JSON Structure Example

```json
┌─────────────────────────────────────────────────────────────┐
│                      data/apps.json                         │
├─────────────────────────────────────────────────────────────┤
│ [                                                           │
│   {                                                         │
│     "name": "Notion",              ← Card title            │
│     "slug": "notion",              ← URL part              │
│     "description": "...",          ← Card description      │
│     "url": "https://...",          ← External link         │
│     "category": "Productivity",    ← Category tag          │
│     "detailPage": "dist/apps/notion/index.html", ← Link    │
│     "longDescription": "...",      ← Detail page content   │
│     "features": [...],             ← Detail page list      │
│     "platforms": [...],            ← Detail page list      │
│     "pricing": "..."               ← Detail page info      │
│   }                                                         │
│ ]                                                           │
└─────────────────────────────────────────────────────────────┘
```

## Page Relationship Map

```
                    ┌───────────────┐
                    │  Navigation   │
                    │   (Sidebar)   │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
    ┌─────────┐       ┌─────────┐      ┌─────────┐
    │  Tips   │       │  Apps   │      │ Tools   │
    └────┬────┘       └────┬────┘      └────┬────┘
         │                 │                 │
    ┌────┴────┐       ┌────┴────┐      ┌────┴────┐
    │         │       │         │      │         │
    ▼         ▼       ▼         ▼      ▼         ▼
  Tip 1    Tip 2   App 1    App 2   Tool 1   Tool 2
    │         │       │         │      │         │
    └─────────┴───────┴─────────┴──────┴─────────┘
                      │
              ┌───────┴───────┐
              │               │
              ▼               ▼
        External Site   Detail Page
```

## Component Breakdown

### Listing Page Card
```
┌────────────────────────────────────┐
│  Notion                            │ ← name
├────────────────────────────────────┤
│  All-in-one workspace for notes,   │ ← description
│  tasks, and databases.             │
├────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐       │
│  │ Learn    │  │  Visit   │       │ ← buttons
│  │ More     │  │          │       │
│  └──────────┘  └──────────┘       │
├────────────────────────────────────┤
│  Category: Productivity            │ ← category
└────────────────────────────────────┘
```

### Detail Page Sections
```
┌────────────────────────────────────┐
│  ← Back Button                     │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│        GRADIENT HEADER             │
│        App Name                    │
│        Description                 │
│        [Category]                  │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  About                             │
│  Long description here...          │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Key Features                      │
│  ✓ Feature 1                       │
│  ✓ Feature 2                       │
│  ✓ Feature 3                       │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Platforms                         │
│  [Web] [Windows] [macOS]           │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Pricing                           │
│  Free / $X per month               │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  [Visit Site] [More Apps]          │
└────────────────────────────────────┘
```

## Routing Logic

```
URL Pattern: dist/{category}/{slug}/index.html

Examples:
• dist/apps/notion/index.html
• dist/tools/password-generator/index.html
• dist/tips/take-screenshots-quickly/index.html

Path Resolution:
From detail page → assets:
  ../../../assets/style.css
  (Go up 3 levels to reach root)

From detail page → listing:
  ../../../apps.html
  ../../../tools.html
  ../../../tips.html
```

## Category Color Coding

```
┌──────────┬──────────────────────────┬─────────┐
│ Category │      Gradient            │ Primary │
├──────────┼──────────────────────────┼─────────┤
│ Apps     │ Purple (#667eea → ...)   │ #667eea │
│ Tools    │ Blue (#4facfe → ...)     │ #4facfe │
│ Tips     │ Pink (#fa709a → ...)     │ #fa709a │
└──────────┴──────────────────────────┴─────────┘
```

---

This structure provides:
✅ Organized content hierarchy
✅ SEO-friendly URLs
✅ Easy navigation
✅ Scalable architecture
✅ Clear separation of concerns
