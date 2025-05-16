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
    --foreground: 265 30% 10%;
    --card: 0 0% 100%;
    --card-foreground: 265 30% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 265 30% 10%;
    --primary: 275 89% 60%;
    --primary-foreground: 210 40% 98%;
    --secondary: 275 33% 96%;
    --secondary-foreground: 275 89% 60%;
    --muted: 275 33% 96%;
    --muted-foreground: 265 25% 27%;
    --accent: 275 33% 18%;
    --accent-foreground: 275 89% 60%;
    --destructive: 275 89% 50%;
    --destructive-foreground: 210 40% 98%;
    --border: 275 33% 90%;
    --input: 275 33% 90%;
    --ring: 275 33% 60%;
    --chart-1: 260 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 310 65% 60%;
    --chart-5: 290 75% 55%;
    --sidebar: oklch(0.985 0.04 295);
    --sidebar-foreground: oklch(0.145 0.04 295);
    --sidebar-primary: oklch(0.205 0.08 295);
    --sidebar-primary-foreground: oklch(0.985 0.04 295);
    --sidebar-accent: oklch(0.97 0.06 295);
    --sidebar-accent-foreground: oklch(0.205 0.04 295);
    --sidebar-border: oklch(0.922 0.02 295);
    --sidebar-ring: oklch(0.708 0.04 295);
  }

  .dark {
    --background: 265 30% 10%;
    --foreground: 210 40% 98%;
    --card: 265 30% 10%;
    --card-foreground: 210 40% 98%;
    --popover: 265 30% 10%;
    --popover-foreground: 210 40% 98%;
    --primary: 275 89% 60%;
    --primary-foreground: 210 40% 98%;
    --secondary: 275 33% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 275 33% 17.5%;
    --muted-foreground: 265 20.2% 65.1%;
    --accent: 275 33% 25%;
    --accent-foreground: 210 40% 98%;
    --destructive: 275 89% 40%;
    --destructive-foreground: 210 40% 98%;
    --border: 275 33% 17.5%;
    --input: 275 33% 17.5%;
    --ring: 275 89% 60%;
    --chart-1: 260 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 310 65% 60%;
    --chart-5: 290 75% 55%;
    --sidebar: oklch(0.205 0.08 295);
    --sidebar-foreground: oklch(0.985 0.04 295);
    --sidebar-primary: oklch(0.488 0.243 295);
    --sidebar-primary-foreground: oklch(0.985 0.04 295);
    --sidebar-accent: oklch(0.269 0.08 295);
    --sidebar-accent-foreground: oklch(0.985 0.04 295);
    --sidebar-border: oklch(1 0.04 295 / 10%);
    --sidebar-ring: oklch(0.556 0.06 295);
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
    @apply hover:cursor-pointer bg-purple-600 hover:bg-purple-700;
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
