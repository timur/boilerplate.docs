---
title: CSS Colors
---

# Colors

Ich benutze plain CSS kein Framework wie tailwindcss oder ähnliches. Ich benutze [css-zero](https://github.com/lazaronixon/css-zero) von Lazar Nixon. Das ist eine Sammlung von utility Klassen aber in erster Linie eine Sammlung von custom Properties.

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.color-card {
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-square {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 0.75rem;
}

.color-info {
  padding: 0.5rem;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.color-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
}

.color-value {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: monospace;
  margin-top: 0.25rem;
}

:root {
  --amber-50: oklch(0.987 0.022 95.277);
  --amber-100: oklch(0.962 0.059 95.617);
  --amber-200: oklch(0.924 0.12 95.746);
  --amber-300: oklch(0.879 0.169 91.605);
  --amber-400: oklch(0.828 0.189 84.429);
  --amber-500: oklch(0.769 0.188 70.08);
  --amber-600: oklch(0.666 0.179 58.318);
  --amber-700: oklch(0.555 0.163 48.998);
  --amber-800: oklch(0.473 0.137 46.201);
  --amber-900: oklch(0.414 0.112 45.904);
  --amber-950: oklch(0.279 0.077 45.635);
}
</style>

## Amber

<div class="color-grid">
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-50); color: black;">50</div>
  <div class="color-info">
    <div class="color-name">amber-50</div>
    <div class="color-value">--amber-50</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-100); color: black;">100</div>
  <div class="color-info">
    <div class="color-name">amber-100</div>
    <div class="color-value">--amber-100</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-200); color: black;">200</div>
  <div class="color-info">
    <div class="color-name">amber-200</div>
    <div class="color-value">--amber-200</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-300); color: black;">300</div>
  <div class="color-info">
    <div class="color-name">amber-300</div>
    <div class="color-value">--amber-300</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-400);">400</div>
  <div class="color-info">
    <div class="color-name">amber-400</div>
    <div class="color-value">--amber-400</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-500);">500</div>
  <div class="color-info">
    <div class="color-name">amber-500</div>
    <div class="color-value">--amber-500</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-600);">600</div>
  <div class="color-info">
    <div class="color-name">amber-600</div>
    <div class="color-value">--amber-600</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-700);">700</div>
  <div class="color-info">
    <div class="color-name">amber-700</div>
    <div class="color-value">--amber-700</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-800);">800</div>
  <div class="color-info">
    <div class="color-name">amber-800</div>
    <div class="color-value">--amber-800</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-900);">900</div>
  <div class="color-info">
    <div class="color-name">amber-900</div>
    <div class="color-value">--amber-900</div>
  </div>
</div>
<div class="color-card">
  <div class="color-square" style="background-color: var(--amber-950);">950</div>
  <div class="color-info">
    <div class="color-name">amber-950</div>
    <div class="color-value">--amber-950</div>
  </div>
</div>
</div>

## Verwendung

Die Amber-Farben können direkt über CSS custom properties verwendet werden:

```css
/* Beispiele für die Verwendung */
.warning-button {
  background-color: var(--amber-500);
  color: var(--amber-50);
}

.amber-text {
  color: var(--amber-600);
}

.highlight-box {
  background-color: var(--amber-100);
  color: var(--amber-800);
  border-color: var(--amber-300);
}
```
