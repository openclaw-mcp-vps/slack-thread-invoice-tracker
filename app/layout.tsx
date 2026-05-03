import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlackInvoice – Turn Slack Threads Into Billable Invoices',
  description: 'Monitors Slack threads with clients, extracts billable work discussions, and generates time-tracked invoices automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b864e9e9-1e83-4ab3-af00-e5e7f3fb881d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
