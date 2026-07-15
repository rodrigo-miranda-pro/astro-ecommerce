## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 7 (static SSG) |
| UI | Preact (`.jsx`, hooks from `preact/hooks`) |
| State | Zustand 5 (`persist` middleware) |
| Styles | Tailwind CSS 4 via `@tailwindcss/vite` |
| Language | Plain JS only — no TypeScript (`.js` / `.jsx`) |

### Critical: dependency setup

- **Do NOT install `@astrojs/tailwind`** — it is incompatible with Astro 7. Tailwind is configured as a Vite plugin in `astro.config.mjs` using `@tailwindcss/vite`.
- Zustand needs `react` aliased to `@preact/compat`. The `package.json` declares `"react": "npm:@preact/compat@^18.3.2"`.

## Conventions

- **All content in Spanish.** Prices use `B/.` (Balboas, Panamá).
- **Starbucks theme colors:** primary `#00754a`, dark `#1e3932`, gold accent `#cba258`, background `#f2f0eb`.
- **Reusable CSS classes** (from `src/styles/global.css`): `btn-primary`, `btn-secondary`, `btn-accent`, `container-page`, `section-title`, `section-subtitle`.
- **Preact components:** `export default function Component({ prop })` — import hooks from `preact/hooks`.
- **Astro pages:** import data in frontmatter, pass to Preact components as props with `client:load`.
- **No comments** unless explicitly requested.

## Architecture

### Data flow
```
src/data/products.js → Astro page frontmatter → Preact component (client:load)
```

Products are **static mock data** (16 products, 5 categories) in `src/data/products.js`.
Future backend: Spring Boot + PostgreSQL.

### Cart store (`src/store/cartStore.js`)
Zustand with `persist` middleware, stored in `localStorage` under key `'starbucks-panama-cart'`.

```js
import useCartStore from '../../store/cartStore.js';
const items = useCartStore((s) => s.items);
```

Free delivery for orders ≥ B/.20.00. Otherwise B/.3.50.

### Routes

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/productos` | `src/pages/productos/index.astro` |
| `/productos/[slug]` | `src/pages/productos/[...slug].astro` (SSG, `getStaticPaths`) |
| `/carrito` | `src/pages/carrito.astro` |
| `/contacto` | `src/pages/contacto.astro` |
| `/nosotros` | `src/pages/nosotros.astro` |

### Components

- `src/components/layout/` — Astro (Layout, Header, Footer)
- `src/components/product/` — Preact (ProductCard, ProductGrid, CatalogClient, ProductDetailClient, CategoryFilter, SearchBar)
- `src/components/cart/` — Preact (CartIcon, CartDrawer, CartItem, CartPage)
- `src/components/ui/` — Preact (QuantitySelector)
