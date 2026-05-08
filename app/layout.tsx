import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Time Audit Analyzer – Audit Time Tracking for Billing Accuracy",
  description: "Analyze time entries for patterns, flag suspicious entries, and suggest billing optimizations based on project profitability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1891cd84-9445-403f-b10b-d9e1954a39a3"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
