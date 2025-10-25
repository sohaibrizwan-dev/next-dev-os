import { useState, useCallback } from "react";
import { WindowState, WindowConfig } from "@/types/window";

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(100);

  const openWindow = useCallback((config: WindowConfig) => {
    const existingWindow = windows.find(w => w.appId === config.appId);
    
    if (existingWindow) {
      // Bring to front if already open
      focusWindow(existingWindow.id);
      return;
    }

    const newWindow: WindowState = {
      id: `window-${Date.now()}`,
      appId: config.appId,
      title: config.title,
      isMinimized: false,
      isMaximized: false,
      position: config.defaultPosition || {
        x: 100 + windows.length * 30,
        y: 100 + windows.length * 30,
      },
      size: config.defaultSize || { width: 800, height: 600 },
      zIndex: highestZIndex + 1,
    };

    setWindows(prev => [...prev, newWindow]);
    setHighestZIndex(prev => prev + 1);
  }, [windows, highestZIndex]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w))
    );
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows(prev => {
      const window = prev.find(w => w.id === id);
      if (!window) return prev;

      const newZIndex = highestZIndex + 1;
      setHighestZIndex(newZIndex);

      return prev.map(w =>
        w.id === id ? { ...w, zIndex: newZIndex, isMinimized: false } : w
      );
    });
  }, [highestZIndex]);

  const updateWindowPosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, position } : w))
    );
  }, []);

  const updateWindowSize = useCallback((id: string, size: { width: number; height: number }) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, size } : w))
    );
  }, []);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  };
};
