"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from 'prism-react-renderer'
import React from 'react'

interface SyntaxHighlighterProps {
  code: string
  language: string
}

export default function SyntaxHighlighter({ code, language }: SyntaxHighlighterProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <TooltipProvider>
      <div className="relative">
        <Highlight theme={themes.vsDark} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} p-4 rounded-md overflow-auto`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-2"
              onClick={copyToClipboard}
            >
              {isCopied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isCopied ? "Copied!" : "Copy code"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}