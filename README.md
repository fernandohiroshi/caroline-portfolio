# Caroline Souza Design

This is the repository for Caroline Souza's portfolio, developed by Konbini Code (Fernando Hiroshi). The website was created to showcase Caroline's design work, offering an elegant and intuitive interface. Using best development practices and modern technologies, the project aims to provide a high-quality user experience.

![Portfolio Preview](https://imgix.cosmicjs.com/97b5d5e0-ae39-11ef-8a63-eb57d6c77a36-profilesite.png)

> **Notice**: This project is licensed under the MIT License. Any use or copying of this code without proper authorization is prohibited.

To get started, clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/konbinicode/caroline-souza-design.git
    npm install
    npm run dev

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Additional Features](#additional-features)
3. [Code Formatting](#code-formatting)
4. [Project Structure](#project-structure)
5. [Responsiveness](#responsiveness)
6. [Deploy](#deploy)

## Technologies Used

Here are the main technologies and libraries used in the project:

### Front-end

- **[Next.js](https://nextjs.org)**: React framework for server-side rendering, performance optimization, and easy scalability.
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework for quick and efficient styling.
- **[TypeScript](https://www.typescriptlang.org)**: JavaScript superset that adds static typing, improving code quality and maintainability.
- **[Framer Motion](https://www.framer.com/motion/)**: Library for animations and smooth transitions in React.
- **[Lucide React](https://lucide.dev)** and **[React Icons](https://react-icons.github.io/react-icons/)**: Icon libraries for React, used to enhance the user interface with scalable icons.
- **[Embla Carousel](https://www.embla-carousel.com)**: Library for creating interactive carousels with autoplay support and customization.
- **[clsx](https://github.com/lukeed/clsx)**: Utility to efficiently conditionally concatenate CSS classes.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Library to merge Tailwind CSS classes and avoid conflicts.
- **[TailwindCSS Animate](https://github.com/aarongtaylor/tailwindcss-animate)**: Tailwind plugin for adding simple, configurable CSS animations.

### Back-end

- **[Cosmic JS](https://cosmicjs.com)**: Headless CMS that provides an API for managing dynamic content, allowing the client to edit text, images, and other information on the website.

### Additional Dependencies

- **[Radix UI](https://www.radix-ui.com)**: A set of accessible, reusable components. Used to create dropdown menus and other complex UI elements.
  - **[@radix-ui/react-dropdown-menu](https://github.com/radix-ui/primitives/tree/main/packages/react-dropdown-menu)**: Component for creating accessible and customizable dropdown menus.
  - **[@radix-ui/react-icons](https://github.com/radix-ui/primitives/tree/main/packages/react-icons)**: Icon library for Radix UI.
  - **[@radix-ui/react-slot](https://github.com/radix-ui/primitives/tree/main/packages/react-slot)**: Component for efficiently managing slots in components.
- **[@tabler/icons-react](https://github.com/tabler/tabler-icons)**: A set of icons for React, used in the project to visually represent actions and items in the UI.
- **[class-variance-authority](https://github.com/nextui-org/class-variance-authority)**: Library to facilitate the use of conditional classes in Tailwind, promoting a more flexible and scalable structure.
- **[react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link)**: Library for navigation with hash anchor links, making it easy to navigate between sections on the page.

## Additional Features

In addition to the core technologies, we also use:

- **Cosmic JS CMS** for backend content management, allowing the client to edit photos, text, and other information directly via the admin panel.

## Code Formatting

To ensure well-organized and standardized code, the following tools were used:

- **Prettier** for code formatting.
- **ESLint** for linting and code quality improvements.
- **Tailwind Sorter** for organizing CSS classes in the code.

## Project Structure

Below is the basic folder structure of the project:

```bash
src
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── favicon.ico
│   └── not-found.tsx
│   ├── branding
│   ├── fotografia
│   ├── posters
│   ├── social
│   └── uxui (in development)
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

## Deploy

The project is deployed and can be accessed live at the following link:

[Live Demo](https://carolinesouza.art/)
