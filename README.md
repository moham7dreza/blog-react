# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Course important notes

- components must be pure -> states and props could not be changed directly in child components
- pure components -> when component is received props, act something with them and return them without changing them
  directly
- change one of states in class components not affect in other states but in function components we must rewrite all
  states when changing one of states
- learn about css modules
- learn more about classnames package