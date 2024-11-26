export type Priority = 'High' | 'Medium' | 'Low'
export type Status = 'Todo' | 'InProgress' | 'Done'

export interface Task {
  id: string
  title: string
  assignee: string
  dueDate: string
  priority: Priority
  status: Status
}

export interface TaskProgress {
  todo: number
  inProgress: number
  done: number
}

