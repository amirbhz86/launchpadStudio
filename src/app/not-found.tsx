import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "2rem" }}>
        <h1>Page not found</h1>
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </body>
    </html>
  );
}
