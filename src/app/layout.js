import "./globals.css";

export const metadata = {
  title: "Advantage Growth | Performance Marketing Agency",
  description:
    "Advantage Growth is a performance marketing agency helping startups and brands scale with Meta Ads, Google Ads, funnels, and ROI-driven growth strategies.",
  keywords: [
    "performance marketing agency",
    "digital marketing agency india",
    "meta ads agency",
    "google ads agency",
    "lead generation agency",
    "advantage growth"
  ],
  openGraph: {
    title: "Advantage Growth | Performance Marketing Agency",
    description:
      "We help brands scale profitably with paid ads, funnels, and data-backed growth strategies.",
    url: "https://advantagegrowth.in",
    siteName: "Advantage Growth",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}