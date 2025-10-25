const FilesApp = () => {
  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <div className="text-6xl">📁</div>
        <h3 className="text-xl font-semibold">File Explorer</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Tree-based file system browser coming soon.<br />
          Create, edit, and manage your project files.
        </p>
      </div>
    </div>
  );
};

export default FilesApp;
