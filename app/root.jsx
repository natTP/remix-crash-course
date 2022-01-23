import { Link, Links, Meta, LiveReload, Outlet } from "remix";
import globalStylesURL from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesURL }];
export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "Remix, React, JavaScript";
  return {
    description,
    keywords,
  };
};

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}

export default function App() {
  return (
    <Document title="My Remix Blog">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
