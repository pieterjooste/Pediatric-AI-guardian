# Project Learnings: Pediatric AI Guardian Redesign

This journal summarizes the technical journey, challenges, and solutions encountered while building ChildHealthForAll.

## 🏗 Development Journey
We transformed an older, likely Wix-based or conceptual site into a premium, custom React application. The transition focused on moving away from template-heavy designs to a bespoke "Medical Premium" aesthetic.

## 💡 Technical Lessons

### 1. SPA Routing on Vercel
*   **Challenge**: Refreshing a page like `/blog` or `/apps` on Vercel resulted in a 404 error because the server looked for a physical file instead of letting React handle the route.
*   **Solution**: Implemented `vercel.json` with a global rewrite to `index.html`. This ensures the Single Page Application (SPA) handles all routing internally.

### 2. Deployment Synchronization Issues
*   **Challenge**: Pushing code to GitHub did not always update the Vercel site, leading to "blank pages" caused by missing imports in production.
*   **Solution**: Discovered that Vercel can sometimes "hang" on cached builds or disconnected Git links. The ultimate fix was a "Nuclear Rename" of files (e.g., `WebApp.jsx` -> `SymptomChecker.jsx`) and a fresh project import in Vercel to force-clear all caches.

### 3. Case Sensitivity (macOS vs Linux)
*   **Challenge**: The local macOS environment is case-insensitive (e.g., `WebApp.jsx` matches `./pages/webapp`), but Vercel (Linux) is case-sensitive.
*   **Lesson**: Always follow strict `PascalCase` or `kebab-case` consistently in both filenames and import statements to prevent silent build failures in production.

### 4. Component-Driven Medical Data
*   **Learning**: Storing clinical guidelines in a structured JSON format (`babyHealth.json`) rather than hard-coding them as JSX allows for much easier maintenance. Any agent can now update a medical guideline by simply editing the JSON data without touching the React code.

## 🔍 SEO Strategy
*   We implemented `react-helmet-async` to provide unique titles and descriptions for every page.
*   Canonical URLs, `robots.txt`, and a dynamic `sitemap.xml` were added to ensure the site ranks well for pediatric-related searches.

## 🎨 UI/UX Philosophy
*   **The "Dr. Jooste" Touch**: Since the site is founded by a pediatrician, the UI must balance "Expert Authority" with "Parental Comfort." 
*   **Lesson**: Dark mode or clinical white can sometimes feel "too technical." We used a "Soft Glass" effect with warm gradients to bridge this gap.
