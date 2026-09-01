import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rubén Parrales — Full Stack Developer" },
      {
        name: "description",
        content:
          "Rubén Parrales — Full Stack Developer with 22+ years of experience in .NET, Azure, web and mobile applications.",
      },
      { name: "author", content: "Rubén Parrales" },
      { property: "og:title", content: "Rubén Parrales — Full Stack Developer" },
      {
        property: "og:description",
        content: "22+ years building web, mobile and enterprise software with .NET, Azure and modern web stacks.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3f2d2e90-680d-43c3-b1b6-8149af4b22b8/id-preview-31f552a2--4011d8f7-7504-4ed6-8bc6-a8ac01b9d572.lovable.app-1776396085347.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rubén Parrales — Full Stack Developer" },
      {
        name: "twitter:description",
        content: "22+ years building web, mobile and enterprise software with .NET, Azure and modern web stacks.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3f2d2e90-680d-43c3-b1b6-8149af4b22b8/id-preview-31f552a2--4011d8f7-7504-4ed6-8bc6-a8ac01b9d572.lovable.app-1776396085347.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'GA_MEASUREMENT_ID');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
