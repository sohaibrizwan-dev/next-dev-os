import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Palette, Bell, Shield } from "lucide-react";

const SettingsApp = () => {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: "Appearance",
      icon: Palette,
      items: [
        {
          label: "Theme",
          value: theme === "dark" ? "Dark Mode" : "Light Mode",
          action: toggleTheme,
          icon: theme === "dark" ? Moon : Sun,
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { label: "Enable Notifications", value: "On" },
        { label: "Sound", value: "Enabled" },
      ],
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { label: "Auto-save", value: "Enabled" },
        { label: "Analytics", value: "Disabled" },
      ],
    },
  ];

  return (
    <div className="h-full bg-background overflow-y-auto">
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Customize your DEV-OS experience
          </p>
        </div>

        {settingsSections.map((section, index) => {
          const SectionIcon = section.icon;
          return (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-2 text-foreground">
                <SectionIcon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>

              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-4 rounded-lg glass hover:glass-strong transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className="w-4 h-4 text-muted-foreground" />}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm text-primary group-hover:text-primary-glow transition-colors">
                      {item.value}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsApp;
