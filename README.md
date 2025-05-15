# Caroline Souza Design

This is the repository for Caroline Souza's portfolio, developed by Konbini Code (Fernando Hiroshi). The website was created to showcase Caroline's design work through an elegant and intuitive interface, using best development practices and modern technologies.

![Portfolio Preview](https://imgix.cosmicjs.com/97b5d5e0-ae39-11ef-8a63-eb57d6c77a36-profilesite.png)

> **Notice**: This project is licensed under the MIT License. Any use or copying of this code without proper authorization is prohibited.

## Getting Started

To start the project, clone the repository and run:

```bash
git clone https://github.com/konbinicode/caroline-souza-design.git
npm install
npm run dev
```

## Table of Contents

1. [Technologies](#technologies)
2. [Content Management](#content-management)
3. [Code Formatting and Quality](#code-formatting-and-quality)
4. [Project Structure](#project-structure)
5. [Responsiveness](#responsiveness)
6. [Live Demo](#live-demo)

## Technologies

### Core

- **[Next.js](https://nextjs.org)**: React framework for server-side rendering, performance optimization, and scalability.
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework for efficient styling.
- **[TypeScript](https://www.typescriptlang.org)**: JavaScript superset with static typing for better code quality and maintainability.
- **[Cosmic JS](https://cosmicjs.com)**: Headless CMS that provides an API for dynamic content management.

### UI and Animations

- **[Framer Motion](https://www.framer.com/motion/)**: Library for animations and smooth transitions in React.
- **[Embla Carousel](https://www.embla-carousel.com)**: Creation of interactive carousels with autoplay support.
- **[Radix UI](https://www.radix-ui.com)**: Accessible and reusable components for complex UI elements.

### Icon Libraries

- **[Lucide React](https://lucide.dev)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[@tabler/icons-react](https://github.com/tabler/tabler-icons)**
- **[@radix-ui/react-icons](https://github.com/radix-ui/primitives/tree/main/packages/react-icons)**

### Utilities

- **[clsx](https://github.com/lukeed/clsx)**: Efficient conditional concatenation of CSS classes.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Combines Tailwind CSS classes avoiding conflicts.
- **[TailwindCSS Animate](https://github.com/aarongtaylor/tailwindcss-animate)**: Tailwind plugin for adding configurable CSS animations.
- **[class-variance-authority](https://github.com/nextui-org/class-variance-authority)**: Facilitates the use of conditional classes in Tailwind.
- **[react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link)**: Navigation with hash anchor links.

## Content Management

Cosmic JS CMS is used as a backend for content management, allowing the client to edit photos, texts, and other information directly through the admin panel without the need to modify the code.

## Code Formatting and Quality

To ensure well-organized and standardized code, we use:

- **Prettier**: Code formatting
- **ESLint**: Linting and code quality improvements
- **Tailwind Sorter**: Organization of CSS classes in the code

## Project Structure

```bash
src
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── favicon.ico
│   ├── not-found.tsx
│   ├── branding
│   ├── fotografia
│   ├── posters
│   ├── social
│   └── uxui (under development)
├── components
│   ├── grid
│   ├── images
│   ├── pages
│   ├── ui
│   └── view
│       ├── header
│       ├── hero
│       └── footer
├── lib
├── utils
│   └── actions
│       └── get-datas.ts
└── types
```

## Responsiveness

The project is fully responsive and works perfectly on:

- **Desktop**
- **Tablet**
- **Mobile**

![Mobile Preview](https://imgix.cosmicjs.com/978ffe60-ae39-11ef-8a63-eb57d6c77a36-mobilemodel.png)

## Live Demo

The project is deployed and can be accessed at:

[carolinesouza.art](https://carolinesouza.art/)
