const TasksApp = () => {
  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <div className="text-6xl">✅</div>
        <h3 className="text-xl font-semibold">Task Manager</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Kanban board with drag-and-drop coming next.<br />
          Manage your projects and track progress.
        </p>
      </div>
    </div>
  );
};

export default TasksApp;
