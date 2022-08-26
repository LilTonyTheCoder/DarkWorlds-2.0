# Nuxt 3 game pet project

# Basic Info

## Tech stack

- Nuxt 3 [documentation](https://v3.nuxtjs.org).
- Tailwind css [documentation](https://tailwindcss.com/docs/flex).
- TypeScript [documentation](https://www.typescriptlang.org/).
- Pinia Store [documentation](https://pinia.vuejs.org/).
- I18n Guild [guide](https://vue-i18n.intlify.dev/guide/integrations/nuxt3)
- Project plans [todo](https://github.com/LilTonyTheCoder/DarkWorlds-2.0/blob/master/todo.todo).

## Setup / installation

Make sure to install the dependencies.

Worked on:
- node v16.14.0
- npm 8.3.1

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

# Development guide

## Possible commits names
- [refactor] message
- [feature] message
- [fix] message
- [text edits] message

## Components creation rules

### Code components examples:
- [Code: template component with right sections order](https://github.com/LilTonyTheCoder/DarkWorlds-2.0/blob/master/components/demo/DefaultComponentTemplate.vue)
- [Code: multi language component](https://github.com/LilTonyTheCoder/DarkWorlds-2.0/blob/master/components/demo/MultiLanguageExample/index.vue)

### One .vue -> One .vue + several .ts
If .vue component is larget than one screen you should split it to several files.
And better to put all of them into a one folder.
All possible files:
- MyComponent.vue
- MyComponent.ts
- MyComponent.types.ts
- MyComponent.constants.ts
- MyComponent.en.i18n.json

### Project folders/files structure
text wip
- components/block - wip
- components/demo - unused demo examples
- components/mixins - mixins
- components/pages - wip
- components/section - wip
- components/UI - our UI library
