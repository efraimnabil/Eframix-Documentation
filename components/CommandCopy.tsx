"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { Check, Clipboard } from "lucide-react";
interface CopyCommandProps {
  command: string;
}

const CopyCommand: React.FC<CopyCommandProps> = ({ command }) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center space-x-2 ml-4">
      <span className="font-mono text-sm text-gray-400">{command}</span>

      <CopyToClipboard text={command} onCopy={() => setCopied(true)}>
        <button className="ml-2">
          <TooltipProvider>
            <Tooltip>
              <span className="opacity-0 hover:opacity-100 group-hover:block text-xs text-gray-200">
                {copied ? (
                  <Check className="w-4 h-4 text-gray-400" />
                ) : (
                  <Clipboard className="w-4 h-4 text-gray-400" />
                )}
              </span>
            </Tooltip>
          </TooltipProvider>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyCommand;
