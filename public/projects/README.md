# Project Media Directory

Place your project screenshots and demo videos here following this folder structure:

```
public/
└── projects/
    ├── restaurant-scolaire/
    │   ├── screenshots/
    │   └── demo.mp4
    │
    ├── project-02/
    │   ├── screenshots/
    │   └── demo.mp4
    │
    └── project-03/
```

When you add images (e.g. `public/projects/restaurant-scolaire/screenshots/dashboard.png`), reference them in `src/data/projects.ts` as `screenshots: ['/projects/restaurant-scolaire/screenshots/dashboard.png']`.
