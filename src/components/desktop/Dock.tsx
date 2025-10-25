import { 
  Terminal, 
  Code2, 
  FolderTree, 
  CheckSquare, 
  Settings, 
  Search,
  Moon,
  Sun,
  Cpu
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export type AppId = "terminal" | "editor" | "files" | "tasks" | "settings";

interface DockProps {
  onAppOpen: (appId: AppId) => void;
  activeApps: AppId[];
}

const Dock = ({ onAppOpen, activeApps }: DockProps) => {
  const { theme, toggleTheme } = useTheme();

  const apps = [
    { id: "terminal" as AppId, icon: Terminal, label: "Terminal", color: "from-green-500 to-emerald-500" },
    { id: "editor" as AppId, icon: Code2, label: "Code Editor", color: "from-blue-500 to-cyan-500" },
    { id: "files" as AppId, icon: FolderTree, label: "Files", color: "from-yellow-500 to-orange-500" },
    { id: "tasks" as AppId, icon: CheckSquare, label: "Tasks", color: "from-purple-500 to-pink-500" },
    { id: "settings" as AppId, icon: Settings, label: "Settings", color: "from-slate-500 to-gray-500" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Glass background */}
      <div className="absolute inset-0 glass-strong border-b border-primary/20">
        {/* Animated scan line effect */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
        </div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left: System Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Cpu className="w-8 h-8 text-primary animate-neon-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold text-gradient-cyber">DEV-OS</span>
          </div>
        </div>

        {/* Center: App Dock */}
        <div className="flex items-center gap-2 p-2 rounded-2xl glass">
          {apps.map((app) => {
            const Icon = app.icon;
            const isActive = activeApps.includes(app.id);
            
            return (
              <button
                key={app.id}
                onClick={() => onAppOpen(app.id)}
                className={`
                  group relative p-3 rounded-xl transition-all duration-300
                  hover:scale-110 hover:-translate-y-1
                  ${isActive 
                    ? 'bg-gradient-to-br ' + app.color + ' shadow-lg shadow-primary/30' 
                    : 'hover:bg-muted/50'
                  }
                `}
                title={app.label}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-white' : 'text-muted-foreground group-hover:text-primary'
                  }`} 
                />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-pulse" />
                )}
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-card/90 backdrop-blur-sm border border-border text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {app.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: System Tray */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors group">
            <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted/50 transition-all group"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            )}
          </button>

          {/* System indicators */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
