# Audición [![Quality assurance](https://github.com/Audicion/web-app/actions/workflows/qa.yaml/badge.svg)](https://github.com/Audicion/web-app/actions/workflows/qa.yaml)

## Development

### Requirements

- [`pnpm`](https://pnpm.io/) 6.7.2 or newer
- [`node`](https://nodejs.org/) 20 or newer

Before you can start developing, you need to install dependencies.

```bash
pnpm install --frozen-lockfile
```

### Git hooks

It is highly recommended to install git hooks in the project repository. They make it easier to follow code style. To install them, run the command:

```sh
pnpm hook
```

### Serve

To start web app in development mode, run the command:

```sh
pnpm dev
```

### Code style

To format all files, run the command:

```sh
pnpm format
```

### Preview

To preview production build, run the command:

```sh
pnpm preview
```

## Deploy [![Deploy](https://github.com/Audicion/web-app/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Audicion/web-app/actions/workflows/deploy.yaml)

The application is automatically deployed to [audicion.myrt.co](https://audicion.myrt.co) when pushing to the `main` branch. For publishing, GitHub Pages is used.

## Design

The interface layouts are made in [Figma](https://www.figma.com/file/jFzi3jVgHwV8X3utiobkK5/Audici%C3%B3n?type=design&node-id=0%3A1&mode=design&t=BpbhAbFGtjzko2uG-1).
