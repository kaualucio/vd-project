import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
// import { FixedNavbar } from "@/components/fixed-nav-bar";
// import Aurora from "@/animations/Backgrounds/Aurora/Aurora";
import { CustomConfettiContextProvider } from "@/context/custom-confetti-context";
// import { ConfettiButton } from "@/components/magicui/confetti";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🥳🥳 Feliz aniversário Jeniffer!",
  icons: {
    icon: [
      {
        url: '/favico.png',
        href: '/favico.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lexend.variable} antialiased bg-zinc-950`}
      > 
        {/* <Aurora
          blend={1}
          amplitude={1}
          speed={2}
          colorStops={['#00a7f5','#155cfd', '#7008e7']}
        /> */}
        <CustomConfettiContextProvider>
          <main className="relative overflow-x-hidden">
            {children}
          </main>
        </CustomConfettiContextProvider>
        {/* <ConfettiButton/> */}
        {/* <FixedNavbar /> */}
      </body>
    </html>
  );
}
