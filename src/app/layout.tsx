import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Created by Oscar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 min-h-screen flex flex-col justify-between`}
      >
        <header className="flex items-center space-x-8 bg-secondary-light p-4">
          <Link href="/">
            <Image
              alt="pokemon logo"
              src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
              width={40}
              height={40}
            />
          </Link>
          <p className="text-3xl">Pokemons</p>
        </header>
        <main className="flex-1 m-[24px]">{children}</main>
        <footer className="bg-slate-200 border border-slate-300 px-4 py-2">
          <p>Project by Oscar Jorge</p>
          <Link
            href="https://pokeapi.co/"
            target="_blank"
            className="text-primary underline"
          >
            Based on PokeApi
          </Link>
        </footer>
      </body>
    </html>
  );
}
