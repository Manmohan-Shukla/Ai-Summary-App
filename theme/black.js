@import "tailwindcss";
@import "tw-animate-css";
/* @plugin 'tailwindcss-animate'; */
@custom-variant dark (&:is(.dark *));

@theme {
  --font-sans: var(--font-sans), ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --font-sans: hsl(var(--font-geist-sans));
  --font-mono: hsl(var(--font-geist-mono));
  --color-sidebar-ring: hsl(var(--sidebar-ring));
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: hsl(var(--chart-5));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-1: hsl(var(--chart-1));
  --color-ring: hsl(var(--ring));
  --color-input: hsl(var(--input));
  --color-border: hsl(var(--border));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-accent: hsl(var(--accent));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-muted: hsl(var(--muted));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-primary: hsl(var(--primary));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover: hsl(var(--popover));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card: hsl(var(--card));
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentcolor);
  }
}

@layer utilities {
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
}

@layer base {
  :root {
    --radius: 0.5rem;
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;
    --primary: 0 0% 20%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 95%;
    --secondary-foreground: 0 0% 20%;
    --muted: 0 0% 95%;
    --muted-foreground: 0 0% 35%;
    --accent: 0 0% 15%;
    --accent-foreground: 0 0% 90%;
    --destructive: 0 0% 30%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 85%;
    --input: 0 0% 85%;
    --ring: 0 0% 20%;
    --chart-1: 0 0% 40%;
    --chart-2: 0 0% 30%;
    --chart-3: 0 0% 50%;
    --chart-4: 0 0% 60%;
    --chart-5: 0 0% 70%;
    --sidebar: oklch(0.1 0 0);
    --sidebar-foreground: oklch(0.95 0 0);
    --sidebar-primary: oklch(0.2 0 0);
    --sidebar-primary-foreground: oklch(0.95 0 0);
    --sidebar-accent: oklch(0.15 0 0);
    --sidebar-accent-foreground: oklch(0.95 0 0);
    --sidebar-border: oklch(0.2 0 0);
    --sidebar-ring: oklch(0.3 0 0);
  }

  .dark {
    --background: 0 0% 10%;
    --foreground: 0 0% 100%;
    --card: 0 0% 10%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 10%;
    --popover-foreground: 0 0% 100%;
    --primary: 0 0% 20%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 20%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 70%;
    --accent: 0 0% 25%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 0% 30%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 0 0% 20%;
    --chart-1: 0 0% 40%;
    --chart-2: 0 0% 30%;
    --chart-3: 0 0% 50%;
    --chart-4: 0 0% 60%;
    --chart-5: 0 0% 70%;
    --sidebar: oklch(0.15 0 0);
    --sidebar-foreground: oklch(0.95 0 0);
    --sidebar-primary: oklch(0.25 0 0);
    --sidebar-primary-foreground: oklch(0.95 0 0);
    --sidebar-accent: oklch(0.2 0 0);
    --sidebar-accent-foreground: oklch(0.95 0 0);
    --sidebar-border: oklch(0.2 0 0);
    --sidebar-ring: oklch(0.3 0 0);
  }
}
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  h1 {
    @apply text-4xl md:text-6xl xl:text-7xl font-bold;
  }
  h2 {
    @apply text-xl lg:text-3xl  font-medium;
  }
  h3 {
    @apply text-2xl lg:text-4xl  font-medium;
  }

  a {
    @apply hover:cursor-pointer;
  }

  button {
    @apply hover:cursor-pointer bg-neutral-800 hover:bg-neutral-900;
  }
}

@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
  @media (width>= --theme(--breakpoint-sm)) {
    max-width: none;
  }
  @media (width>=1400px) {
    max-width: 1400px;
  }
}
