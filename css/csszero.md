---
title: CSS Verwendung
---
# CSS

Ich benutze plain css kein Framework wie tailwindcss oder ähnliches. Ich benutze [css-zero](https://github.com/lazaronixon/css-zero) von Lazar Nixon. Das ist eine Sammlung von utility Klassen aber in erster Linie eine Sammlung von custom Properties.

## Base

Es gibt ein base.css File, wo die allgemeinen Einstellungen für das Projekt gemacht werden. Hier kann ich allgemeine
Sachen wie die link Farbe etc. einstellen und generelle Einstellungen für body etc.

```CSS
  :root {
    /* Abstractions */
    --color-bg: white;
    --color-text: black;
    --color-text-reversed: white;
    --color-text-subtle: var(--zinc-500);
    --color-link: var(--blue-700);
    --color-border-light: var(--zinc-100);
    --color-border: var(--zinc-200);
    --color-border-dark: var(--zinc-400);
    --color-selected: var(--blue-100);
    --color-selected-dark: var(--blue-300);
    --color-highlight: var(--yellow-200);

    /* Accent colors */
    --color-primary: var(--zinc-900);
    --color-secondary: var(--zinc-100);
    --color-negative: var(--red-600);
    --color-positive: var(--green-600);

    /* SVG color values */
    --color-filter-text: invert(0);
    --color-filter-text-reversed: invert(1);
    --color-filter-negative: var(--colorize-red-600);
    --color-filter-positive: var(--colorize-green-600);

    @media (prefers-color-scheme: dark) {
      /* Abstractions */
      --color-bg: var(--zinc-950);
      --color-text: white;
      --color-text-reversed: black;
      --color-text-subtle: var(--zinc-400);
      --color-link: var(--blue-400);
      --color-border-light: var(--zinc-900);
      --color-border: var(--zinc-800);
      --color-border-dark: var(--zinc-600);
      --color-selected: var(--blue-950);
      --color-selected-dark: var(--blue-800);
      --color-highlight: var(--yellow-900);

      /* Accent colors */
      --color-primary: var(--zinc-50);
      --color-secondary: var(--zinc-800);
      --color-negative: var(--red-800);
      --color-positive: var(--green-800);

      /* SVG color values */
      --color-filter-text: invert(1);
      --color-filter-text-reversed: invert(0);
      --color-filter-negative: var(--colorize-red-800);
      --color-filter-positive: var(--colorize-green-800);
    }
  }

  * {
    border-color: var(--color-border);
    scrollbar-color: #C1C1C1 transparent;
    scrollbar-width: thin;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-synthesis-weight: none;
    overscroll-behavior: none;
    text-rendering: optimizeLegibility;
  }

  .turbo-progress-bar {
    background-color: var(--color-primary);
  }

  ::selection {
    background-color: var(--color-selected);
  }
```

## Einbinden von CSS

Als erstes wird das [reset.css](https://github.com/lazaronixon/css-zero/blob/master/app/assets/stylesheets/css-zero/reset.css) eingebunden dann [variables.css](https://github.com/lazaronixon/css-zero/blob/master/app/assets/stylesheets/css-zero/variables.css) dann die application.css. Am Ende dann [utilites.css](https://github.com/lazaronixon/css-zero/blob/master/app/assets/stylesheets/css-zero/utilities.css)
Hier am Beispiel von meiner head.rb Komponente.
```Ruby
    def view_template
      head do
        stylesheet_link_tag "css-zero/reset", "data-turbo-track": "reload"
        stylesheet_link_tag "css-zero/variables", "data-turbo-track": "reload"
        stylesheet_link_tag "application", data_turbo_track: "reload"
        stylesheet_link_tag "css-zero/utilities", "data-turbo-track": "reload"
      end
    end
  end
```

`variables.css` macht dann imports auf andere Files. Diese Files enthalten nur custom properties für css. Keine CSS Klassen.
```CSS
  @import url("animations.css");
  @import url("borders.css");
  @import url("colorize.css");
  @import url("colors.css");
  @import url("effects.css");
  @import url("filters.css");
  @import url("sizes.css");
  @import url("transforms.css");
  @import url("transitions.css");
  @import url("typography.css");
```

Die einzigen Datei, die css Klassen enthält ist [utilites.css](https://github.com/lazaronixon/css-zero/blob/master/app/assets/stylesheets/css-zero/utilities.css), hier sind Helfer Klassen enthalten.
