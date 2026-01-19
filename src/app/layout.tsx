import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import FluidCursor from "@/components/ui/FluidCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shasbin.in"),
  title: "Adhil Unnikrishnan P - Full Stack Developer | Backend Expert",
  description:
    "Portfolio of Adhil Unnikrishnan P, a Backend Developer from Irinjalakuda, Thrissur, India. Expert in Node.js, Express, React, Next.js, and scaling secure backend systems.",
  keywords: [
    "Adhil Unnikrishnan P",
    "Full Stack Developer",
    "Backend Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Thrissur",
    "Kerala",
    "Software Engineer",
  ],
  authors: [{ name: "Adhil Unnikrishnan P", url: "https://github.com/adhilunnikrishnan" }],
  creator: "Adhil Unnikrishnan P",
  publisher: "Adhil Unnikrishnan P",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Recommendation: update this to your actual domain
    title: "Adhil Unnikrishnan P - Full Stack Developer Portfolio",
    description:
      "Explore the projects and skills of Adhil Unnikrishnan P. Specializing in scalable backend systems and modern frontend interfaces.",
    siteName: "Adhil Unnikrishnan P Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Adhil Unnikrishnan P Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhil Unnikrishnan P - Full Stack Developer",
    description:
      "Explore the projects and skills of Adhil Unnikrishnan P. Specializing in scalable backend systems and modern frontend interfaces.",
    creator: "@adhilunnikrishnan",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Note: You might want to update this too
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://skillicons.dev" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adhil Unnikrishnan P",
              url: "https://your-domain.com",
              jobTitle: "Backend Developer",
              description:
                "Backend Developer specializing in Node.js, Express, and scalable backend architectures.",
              image: "https://your-domain.com/profile-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Irinjalakuda, Thrissur",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: [
                "Backend Development",
                "Node.js",
                "Express.js",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Docker",
              ],
              sameAs: [
                "https://github.com/adhilunnikrishnan",
                "https://www.linkedin.com/in/adhilunnikrishnan/",
                "https://leetcode.com/u/adhilunnikrishnan/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <FluidCursor />
        <Analytics />
      </body>
    </html>
  );
}
