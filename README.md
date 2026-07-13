# Elkay Official Website

This is the source code for the official Elkay website, an industrial baking ecosystem.

## Where to find what

*   **`src/components/`**: Contains all the reusable UI blocks (Header, Footer, Hero, Features, Testimonials, etc.).
*   **`src/pages/`**: Contains full-page layouts for specific product lines (Bread Improver, Pan Grease, Bakers Fat) and the unified Products listing.
*   **`src/App.tsx`**: The main application routing configuration.
*   **`public/`**: Contains static assets like the Elkay logo (`elkaylogo.png`) that are served directly at the root path.
*   **`src/assets/`**: Additional graphical assets and placeholder images.
*   **`static-version/`**: Contains a pure HTML/CSS reference version of the landing page, available if you only need the markup and styles without React or a build process.

## Local Development

1.  Run `npm install` to install dependencies.
2.  Run `npm run dev` to start the development server.
3.  Run `npm run build` to generate the production build in the `dist/` folder.
