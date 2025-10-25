export interface WindowState {
  id: string;
  appId: string;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface WindowConfig {
  appId: string;
  title: string;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  minSize?: { width: number; height: number };
  icon?: React.ComponentType<{ className?: string }>;
}
