<a name="top"></a>
[![Tenet Hack Banner](public/github_banner.png)](https://Catalyst-ioit.org)

This is the official website for Catalyst, built using Deno, Vite, and React.
The project is bootstrapped with TanStack Router for advanced routing capabilities.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Deno](https://deno.land/manual/getting_started/installation)
- [Node.js](https://nodejs.org)

### Installation

Clone the repository:

```bash
git clone https://github.com/catalyst-ioit/Catalyst-web.git
cd Catalyst-web
```

Install dependencies:

```bash
deno install --allow-scripts=npm:@swc/core,npm:@tailwindcss/oxide
```

### Development Server

To start the local development server:

```bash
deno task dev
```

This will start Vite and serve the React app locally, usually at `http://localhost:5173`.

### Build for Production

```bash
deno task build
```

Build files will be generated in the `dist/` directory.

---

## Contributing

We welcome contributions! Please follow the guidelines below depending on your contributor type.

### For Organization Members

- **Do not push directly to `main`.**
- If you have been explicitly granted permission, you may push to `main` after review.
- For all other members:
  - Create a new **feature branch** (from the latest `main`).
  - Push your changes to the feature branch.
  - Create a **Pull Request** (PR) targeting the `main` branch.
  - Ensure your PR has a clear description of the changes and reasoning.

### For External Contributors

- **Fork the repository** to your own GitHub account.
- Create a new branch in your fork for your changes.
- Commit and push your work to your fork.
- Open a **Pull Request** from your forked repo into our `main` branch.
- Your PR will be reviewed by maintainers before merging.

---

## Code Style

- Follow standard React + TypeScript conventions.
- Use Prettier/ESLint (if configured) to keep code consistent.
- Write meaningful commit messages.

---

## Issues and Discussions

- Found a bug? Open an **Issue** with details and steps to reproduce.
- Have an idea or feature request? Start a **Discussion** or propose it before working on a PR.

---

## License

This project is under the [MIT License](LICENSE).

---
