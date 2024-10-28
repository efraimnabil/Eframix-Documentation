'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarLinks = [
    {
        title: "Get Started",
        items: [
            { name: "Installation", href: "/docs/installation" },
            { name: "Hello World", href: "/docs/hello-world" },
        ],
    },
    {
        title: "Guide",
        items: [
            { name: "Routing", href: "/docs/routing" },
            { name: "Writing Middleware", href: "/docs/write-middleware" },
            { name: "Using Middleware", href: "/docs/use-middleware" },
        ],
    },
]

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const pathname = usePathname()
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const toggleSection = (title: string) => {
        setActiveSection(activeSection === title ? null : title)
    }

    return (
        <aside className={`md:w-64 border-r border-border ${isOpen ? 'block' : 'hidden md:block'}`}>
            <ScrollArea className="h-[calc(100vh-4rem)]">
                <div className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground mb-2">Documentation</h2>
                    <nav className="space-y-2">
                        {sidebarLinks.map((section) => (
                            <div key={section.title}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-between md:hidden"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    {section.title}
                                    <ChevronDown className={`h-4 w-4 ${activeSection === section.title ? 'transform rotate-180' : ''}`} />
                                </Button>
                                {activeSection === section.title && (
                                    <ul className="mt-2 space-y-1">
                                        {section.items.map((link) => {
                                            const isActive = pathname === link.href
                                            return (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        className={`block px-4 py-2 rounded-md text-sm transition-colors ${isActive
                                                            ? "bg-primary text-primary-foreground font-medium"
                                                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                                <Collapsible className="md:block hidden" defaultOpen>
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" className="w-full justify-between">
                                            {section.title}
                                            <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <ul className="mt-2 space-y-1">
                                            {section.items.map((link) => {
                                                const isActive = pathname === link.href
                                                return (
                                                    <li key={link.name}>
                                                        <Link
                                                            href={link.href}
                                                            className={`block px-4 py-2 rounded-md text-sm transition-colors ${isActive
                                                                ? "bg-primary text-primary-foreground font-medium"
                                                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                                                }`}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        ))}
                    </nav>
                </div>
            </ScrollArea>
        </aside>
    )
}
