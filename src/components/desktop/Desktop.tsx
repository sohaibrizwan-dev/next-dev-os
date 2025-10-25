import { useState } from "react";
import Dock, { AppId } from "./Dock";

const Desktop = () => {
  const [activeApps, setActiveApps] = useState<AppId[]>([]);

  const handleAppOpen = (appId: AppId) => {
    if (!activeApps.includes(appId)) {
      setActiveApps([...activeApps, appId]);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated cyberpunk background */}
      <div className="absolute inset-0 overflow-hidden">
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
      <main className="pt-16 relative z-10">
        <div className="h-[calc(100vh-4rem)] p-4">
          {/* Workspace content */}
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-6 max-w-2xl">
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
                    className="glass-strong p-4 rounded-xl card-glow-hover group cursor-pointer"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Desktop;
