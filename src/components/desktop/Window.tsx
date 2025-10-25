import { useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { X, Minimize2, Maximize2, Minus } from "lucide-react";
import { WindowState } from "@/types/window";
import { cn } from "@/lib/utils";

interface WindowProps {
  window: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  onSizeChange: (size: { width: number; height: number }) => void;
  children: React.ReactNode;
}

const Window = ({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  onSizeChange,
  children,
}: WindowProps) => {
  const rndRef = useRef<Rnd>(null);

  // Handle maximize state
  useEffect(() => {
    if (window.isMaximized && rndRef.current) {
      rndRef.current.updatePosition({ x: 0, y: 64 }); // Below dock
      rndRef.current.updateSize({
        width: globalThis.innerWidth || 1920,
        height: (globalThis.innerHeight || 1080) - 64,
      });
    }
  }, [window.isMaximized]);

  if (window.isMinimized) {
    return null;
  }

  const position = window.isMaximized
    ? { x: 0, y: 64 }
    : window.position;

  const size = window.isMaximized
    ? { width: "100vw", height: "calc(100vh - 64px)" }
    : window.size;

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: window.position.x,
        y: window.position.y,
        width: window.size.width,
        height: window.size.height,
      }}
      position={window.isMaximized ? position : undefined}
      size={window.isMaximized ? size : undefined}
      minWidth={400}
      minHeight={300}
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      disableDragging={window.isMaximized}
      enableResizing={!window.isMaximized}
      onDragStop={(e, d) => onPositionChange({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        onSizeChange({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        onPositionChange(position);
      }}
      style={{ zIndex: window.zIndex }}
      className={cn(
        "animate-scale-in",
        window.isMaximized && "!transition-none"
      )}
    >
      <div
        className="h-full flex flex-col glass-strong rounded-xl overflow-hidden card-glow-hover shadow-2xl"
        onClick={onFocus}
      >
        {/* Title Bar */}
        <div className="window-drag-handle flex items-center justify-between h-12 px-4 border-b border-border/50 bg-card/50 backdrop-blur-sm cursor-move">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors flex items-center justify-center group"
              >
                <X className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize();
                }}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center group"
              >
                <Minus className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMaximize();
                }}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center group"
              >
                <Maximize2 className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
            <span className="text-sm font-medium text-foreground">{window.title}</span>
          </div>

          {/* Optional: Additional controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              className="p-1 rounded hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden bg-background/95">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
