# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  The layout places the logo and company tagline on the left side. Four columns of links sit on the right: pages (Products, Studio, Clients, etc.), social platforms (Facebook, Instagram, Twitter, LinkedIn), legal (Privacy, Terms, Cookies), and account actions (Sign Up, Login).

  A horizontal grid line separates the main content from the copyright section. On mobile, the columns stack vertically with the logo at the top. Link groups are defined as arrays, making it straightforward to add or remove items.

  The footer uses a max-width of 7xl with responsive padding. A subtle top border separates it from the page content above. Links have hover states that transition to darker text colors.

  Good for company websites, SaaS products, portfolio sites, or any application that needs organized navigation in the footer.
      tseslint.configs.recommendedTypeChecked,
