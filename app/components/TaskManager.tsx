"use client"

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CreateProject } from "./CreateProject"

type Task = {
  id: string
  title: string
  assignee: string
  dueDate: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'Todo' | 'InProgress' | 'Done'
}

const initialTasks: Task[] = [
  { id: '1', title: 'Design UI mockups', assignee: 'John Doe', dueDate: '2024-02-15', priority: 'High', status: 'Todo' },
  { id: '2', title: 'Implement API integration', assignee: 'Jane Smith', dueDate: '2024-02-20', priority: 'Medium', status: 'Todo' },
  { id: '3', title: 'Write documentation', assignee: 'Mike Johnson', dueDate: '2024-02-18', priority: 'Low', status: 'InProgress' },
  { id: '4', title: 'Setup project structure', assignee: 'Sarah Wilson', dueDate: '2024-02-10', priority: 'High', status: 'Done' },
]

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newTasks = Array.from(tasks)
    const [reorderedItem] = newTasks.splice(result.source.index, 1)
    reorderedItem.status = result.destination.droppableId as Task['status']
    newTasks.splice(result.destination.index, 0, reorderedItem)

    setTasks(newTasks)
  }

  const getTasksForStatus = (status: Task['status']) => tasks.filter(task => task.status === status)

  const getProgressForStatus = (status: Task['status']) => {
    const tasksInStatus = getTasksForStatus(status).length
    return (tasksInStatus / tasks.length) * 100
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {(['Todo', 'InProgress', 'Done'] as const).map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <Card {...provided.droppableProps} ref={provided.innerRef}>
                  <CardHeader>
                    <CardTitle>{status}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {getTasksForStatus(status).map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Card 
                            className="mb-2" 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <CardContent className="p-4">
                              <h3 className="font-semibold">{task.title}</h3>
                              <p className="text-sm text-gray-600">{task.assignee}</p>
                              <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
                              <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}>
                                {task.priority}
                              </Badge>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </CardContent>
                </Card>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Task Progress</CardTitle>
        </CardHeader>
        <CardContent>
          {(['Todo', 'InProgress', 'Done'] as const).map((status) => (
            <div key={status} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{status} ({getTasksForStatus(status).length})</span>
                <span>{getProgressForStatus(status).toFixed(0)}%</span>
              </div>
              <Progress value={getProgressForStatus(status)} className="w-full" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <CreateProject />
    </div>
  )
}

