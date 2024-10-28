"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CopyCommandProps {
  command: string
}

export default function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <TooltipProvider>
      <div className="flex items-center justify-between p-2 bg-muted rounded-md">
        <code className="font-mono text-sm">{command}</code>
        <Tooltip>
          <TooltipTrigger asChild>
            <CopyToClipboard text={command} onCopy={handleCopy}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {copied ? "Copied" : "Copy command"}
                </span>
              </Button>
            </CopyToClipboard>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy command"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

