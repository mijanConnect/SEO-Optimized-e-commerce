import Link from "next/link";
import ClientProviders from "./components/ClientProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950! text-black">
        <ClientProviders>
          <header className="bg-slate-900 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link
                href="/"
                className="text-xl font-bold hover:text-gray-300 transition"
              >
                SEO-Optimized
              </Link>
              <nav className="space-x-4">
                <Link
                  href="/checkout"
                  className="hover:text-gray-300 transition"
                >
                  Checkout
                </Link>
                <Link href="/orders" className="hover:text-gray-300 transition">
                  Orders
                </Link>
              </nav>
            </div>
          </header>
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
