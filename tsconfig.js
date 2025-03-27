/** @type {import('typescript').CompilerOptions} */
const config = {
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "app/page.js", "app/layout.js", "components/theme-provider.js", "components/ui/accordion.js", "components/ui/alert-dialog.js", "components/ui/alert.js", "components/ui/aspect-ratio.js", "components/ui/avatar.js", "components/ui/badge.js", "components/ui/breadcrumb.js", "components/ui/button.js", "components/ui/calendar.js", "components/ui/card.js", "components/ui/carousel.js", "components/ui/chart.js", "components/ui/checkbox.js", "components/ui/collapsible.js", "components/ui/command.js", "components/ui/context-menu.sx", "components/ui/context-menu.js", "components/ui/dialog.js", "components/ui/drawer.js", "tailwind.config.js"],
  "exclude": ["node_modules"]
};

module.exports = config;