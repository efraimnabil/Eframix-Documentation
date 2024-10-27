"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyCommandProps {
  command: string;
}

const CopyCommand: React.FC<CopyCommandProps> = ({ command }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <CopyToClipboard text={command} onCopy={handleCopy}>
        <div className="flex items-center space-x-2 ml-4 cursor-pointer  relative">
          <span className="font-mono text-sm text-gray-400 ">
            {command}
          </span>

          <span className="transition-opacity">
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Clipboard className="w-4 h-4 text-gray-400" />
            )}
          </span>
        </div>
      </CopyToClipboard>
    </TooltipProvider>
  );
};

export default CopyCommand;
