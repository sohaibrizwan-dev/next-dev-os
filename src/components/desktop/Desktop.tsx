import { Terminal, Code2, FolderTree, CheckSquare, Settings } from "lucide-react";
import Dock, { AppId } from "./Dock";
import Window from "./Window";
import { useWindowManager } from "@/hooks/useWindowManager";
import TerminalApp from "./apps/TerminalApp";
import EditorApp from "./apps/EditorApp";
import FilesApp from "./apps/FilesApp";
import TasksApp from "./apps/TasksApp";
import SettingsApp from "./apps/SettingsApp";

const Desktop = () => {
  const windowManager = useWindowManager();

  const appConfigs = {
    terminal: {
      title: "Terminal",
      component: TerminalApp,
      icon: Terminal,
      defaultSize: { width: 800, height: 500 },
    },
    editor: {
      title: "Code Editor",
      component: EditorApp,
      icon: Code2,
      defaultSize: { width: 1000, height: 700 },
    },
    files: {
      title: "Files",
      component: FilesApp,
      icon: FolderTree,
      defaultSize: { width: 700, height: 600 },
    },
    tasks: {
      title: "Tasks",
      component: TasksApp,
      icon: CheckSquare,
      defaultSize: { width: 900, height: 650 },
    },
    settings: {
      title: "Settings",
      component: SettingsApp,
      icon: Settings,
      defaultSize: { width: 600, height: 500 },
    },
  };

  const handleAppOpen = (appId: AppId) => {
    const config = appConfigs[appId];
    if (config) {
      windowManager.openWindow({
        appId,
        title: config.title,
        defaultSize: config.defaultSize,
      });
    }
  };

  const activeApps = windowManager.windows.map(w => w.appId as AppId);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated cyberpunk background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(190 100% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(190 100% 50% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        />
      </div>

      {/* Dock */}
      <Dock onAppOpen={handleAppOpen} activeApps={activeApps} />

      {/* Main workspace */}
      <main className="pt-16 relative z-10 h-screen">
        <div className="h-[calc(100vh-4rem)] relative">
          {/* Welcome screen - only show when no windows open */}
          {windowManager.windows.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center space-y-6 max-w-2xl px-4">
                <h1 className="text-6xl font-bold text-gradient-cyber glow-cyan">
                  Developer OS
                </h1>
                <p className="text-xl text-muted-foreground">
                  Your complete development environment in the browser
                </p>
                <div className="flex items-center justify-center gap-4 pt-8">
                  <div className="glass px-6 py-3 rounded-xl">
                    <span className="text-sm text-muted-foreground">Click apps in the dock to begin</span>
                  </div>
                </div>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
                  {[
                    { label: "Code Editor", desc: "Monaco powered" },
                    { label: "Terminal", desc: "Full shell access" },
                    { label: "AI Assistant", desc: "Grok integration" },
                  ].map((feature, i) => (
                    <div 
                      key={i}
                      className="glass-strong p-4 rounded-xl card-glow-hover"
                    >
                      <h3 className="font-semibold text-foreground">
                        {feature.label}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Windows */}
          {windowManager.windows.map((window) => {
            const config = appConfigs[window.appId as AppId];
            const AppComponent = config?.component;

            return (
              <Window
                key={window.id}
                window={window}
                onClose={() => windowManager.closeWindow(window.id)}
                onMinimize={() => windowManager.minimizeWindow(window.id)}
                onMaximize={() => windowManager.maximizeWindow(window.id)}
                onFocus={() => windowManager.focusWindow(window.id)}
                onPositionChange={(pos) => windowManager.updateWindowPosition(window.id, pos)}
                onSizeChange={(size) => windowManager.updateWindowSize(window.id, size)}
              >
                {AppComponent && <AppComponent />}
              </Window>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Desktop;
