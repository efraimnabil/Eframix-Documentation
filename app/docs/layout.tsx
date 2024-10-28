"use client";

import { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="flex text-foreground w-full"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 overflow-y-auto" style={{ height: "100%" }}>
        <div className="container mx-auto py-8 px-4 md:px-8 max-w-4xl">
          {/* Mobile toggle button */}
          <Button onClick={() => setIsOpen(true)} className="md:hidden mb-4">
            <Menu className="h-5 w-5" />
          </Button>
          {children}
        </div>
      </main>
    </div>
  );
}
