import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Task } from "../types/task"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    Low: "bg-green-500 hover:bg-green-600",
    Medium: "bg-yellow-500 hover:bg-yellow-600",
    High: "bg-red-500 hover:bg-red-600"
  }

  return (
    <Card className="mb-4 cursor-move">
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-medium">{task.title}</h3>
          <p className="text-sm text-muted-foreground">{task.assignee}</p>
          <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
          <Badge className={priorityColors[task.priority]}>{task.priority}</Badge>
        </div>
      </CardContent>
    </Card>
}

