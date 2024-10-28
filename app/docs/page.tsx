import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocsHome() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to Eframix Documentation</h1>
            <p className="text-xl text-muted-foreground">
                Eframix is a minimalistic Node.js framework inspired by Express.js, offering core routing, middleware, and JSON body parsing features with zero dependencies.
            </p>
            <div className="flex space-x-4">
                <Button asChild>
                    <Link href="/docs/installation">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="https://github.com/Eframix/Eframix" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
                </Button>
            </div>
        </div>
    )
}