import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const TerminalApp = () => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "welcome",
      output: "Welcome to DEV-OS Terminal v1.0\nType 'help' for available commands",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = "";

    switch (trimmedCmd) {
      case "help":
        output = `Available commands:
  help     - Show this help message
  clear    - Clear terminal
  echo     - Echo text back
  date     - Show current date/time
  pwd      - Print working directory
  ls       - List files (simulated)
  whoami   - Display current user
  about    - About DEV-OS`;
        break;
      case "clear":
        setHistory([]);
        return;
      case "date":
        output = new Date().toString();
        break;
      case "pwd":
        output = "/home/developer/workspace";
        break;
      case "ls":
        output = "projects/  documents/  downloads/  .config/";
        break;
      case "whoami":
        output = "developer@dev-os";
        break;
      case "about":
        output = "DEV-OS - Your Browser-Based Development Environment\nBuilt with React, TypeScript, and Tailwind CSS";
        break;
      default:
        if (trimmedCmd.startsWith("echo ")) {
          output = trimmedCmd.slice(5);
        } else if (trimmedCmd === "") {
          return;
        } else {
          output = `Command not found: ${trimmedCmd}\nType 'help' for available commands`;
        }
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div 
      className="h-full bg-[#0A0A0F] text-green-400 font-mono text-sm p-4 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-2">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-primary">developer@dev-os</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{item.command}</span>
            </div>
            {item.output && (
              <pre className="text-muted-foreground whitespace-pre-wrap pl-4">
                {item.output}
              </pre>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <span className="text-primary">developer@dev-os</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-accent">~</span>
        <span className="text-muted-foreground">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-foreground"
          autoFocus
        />
        <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
      </form>

      <div ref={bottomRef} />
    </div>
  );
};

export default TerminalApp;
