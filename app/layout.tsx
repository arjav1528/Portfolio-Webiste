import type { Metadata } from "next";
import "@fontsource-variable/syne";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { MotionPreferences } from "@/components/effects/motion-preferences";
export const metadata: Metadata = {
  title: "Arjav Patel — Ideas. Code. Impact.",
  description:
    "Software engineer, mobile developer, and open-source contributor. Explore Arjav Patel’s work across Showpad, Flutter, Next.js, Apache, and BITS Goa.",
  openGraph: {
    title: "Arjav Patel — Ideas. Code. Impact.",
    description: "Big ideas. Thoughtful code. Things people actually use.",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
