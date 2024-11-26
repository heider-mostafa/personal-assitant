import { Progress } from "@/components/ui/progress"
import { TaskProgress as TaskProgressType } from "../types/task"

interface TaskProgressProps {
  progress: TaskProgressType
}

export function TaskProgress({ progress }: TaskProgressProps) {
  const total = progress.todo + progress.inProgress + progress.done
  const todoPercentage = (progress.todo / total) * 100
  const inProgressPercentage = (progress.inProgress / total) * 100
  const donePercentage = (progress.done / total) * 100

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Task Progress</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>To Do ({progress.todo})</span>
          <span>{todoPercentage.toFixed(0)}%</span>
        </div>
        <Progress value={todoPercentage} className="bg-gray-200" indicatorClassName="bg-red-500" />
        
        <div className="flex justify-between">
          <span>In Progress ({progress.inProgress})</span>
          <span>{inProgressPercentage.toFixed(0)}%</span>
        </div>
        <Progress value={inProgressPercentage} className="bg-gray-200" indicatorClassName="bg-blue-500" />
        
        <div className="flex justify-between">
          <span>Done ({progress.done})</span>
          <span>{donePercentage.toFixed(0)}%</span>
        </div>
        <Progress value={donePercentage} className="bg-gray-200" indicatorClassName="bg-green-500" />
      </div>
    </div>
  )
}

