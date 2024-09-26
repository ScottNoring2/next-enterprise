import DeployButton from "components/deploy-button";
import Header from "components/deploy-button";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import '../../../public/global_output.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-slate-300">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <Header/>
                  <div className="flex gap-5 items-center font-semibold">
                    Business Networking Portal
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div>
                  </div>
                  
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
             
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
