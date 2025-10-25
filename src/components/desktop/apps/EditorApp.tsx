const EditorApp = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#1E1E1E] text-foreground">
      <div className="text-center space-y-4">
        <div className="text-6xl">📝</div>
        <h3 className="text-xl font-semibold">Code Editor</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Monaco editor integration coming in next phase.<br />
          Full VS Code experience in your browser.
        </p>
      </div>
    </div>
  );
};

export default EditorApp;
