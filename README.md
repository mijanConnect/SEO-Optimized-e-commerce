
## 🚀 E-commerce Product Showcase with Checkout (SEO-Optimized)
This is a minimal but fully functional E-commerce Product Showcase with Checkout. The app is optimized for SEO with dynamic meta tags, clean semantic HTML, optimized images, and auto-generated `robots.txt` and `sitemap.xml`.

## 🚀 Live: https://seo-optimized-e-commerce-delta.vercel.app/

## 🚀 Features
- ✅ Product Listing and Product Detail Pages
- ✅ Add to Cart and Checkout with Redux Toolkit
- ✅ Orders Page with Persistent History
- ✅ SEO Best Practices:
  - Dynamic `<title>` and `<meta description>`
  - Optimized `<Image>` usage
  - Semantic HTML structure
  - `robots.txt` and `sitemap.xml` auto-generated
- ✅ Static Site Generation (SSG) for product pages
- ✅ Mobile responsive design using Tailwind CSS

Tech Stack:
=> Next.js (App Router)
=> Redux Toolkit
=> TailwindCSS
=> TypeScript
=> Lucide React (Icons)

## 🚀 Setup
1. Clone the Repository
```bash
git clone https://github.com/yourusername/nextjs-ecommerce.git
cd nextjs-ecommerce
```
2. npm install
3. npm run dev

## 🚀 Folder Structure
app/
├── layout.tsx            # Root layout (shared UI and Redux provider)
├── page.tsx              # Homepage - product listing
├── checkout/             # Checkout page
├── orders/               # Orders page
├── product/[id]/         # Product details page (SSG + SEO metadata)
│   └── page.tsx
├── components/
│   ├── ProductCard.tsx   # Reusable product card
│   ├── AddCartButton.tsx # Add to cart logic
│   ├── StarRating.tsx    # Star rating display
├── redux/
│   ├── store.ts          # Redux store setup
│   ├── cartSlice.ts      # Cart state logic
│   └── ordersSlice.ts    # Orders state logic
public/
├── robots.txt            # Auto-generated after build
├── sitemap.xml           # Auto-generated after build
