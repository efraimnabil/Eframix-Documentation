import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

import CopyCommand from "@/components/CommandCopy"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-background to-secondary/10 w-full">
      <main className="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Eframix
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              A minimalistic Node.js framework inspired by Express.js, offering core
              routing, middleware, and JSON body parsing features with zero
              dependencies. Ideal for lightweight HTTP server applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/Eframix/Eframix" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>

          <Card className="max-w-sm mx-auto">
            <CardContent className="pt-6">
              <CopyCommand command="npm i eframix" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 text-center text-muted-foreground">
        <p>© 2024 Eframix. All rights reserved.</p>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Lightweight",
    description: "Zero dependencies for a minimal footprint and fast performance.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "Express-Inspired",
    description: "Familiar API for developers coming from Express.js background.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Middleware Support",
    description: "Easily extend functionality with custom middleware.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
]