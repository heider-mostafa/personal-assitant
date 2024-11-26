export type EventRecurrence = 'None' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly'

export interface CalendarEvent {
  id: string
  title: string
  startTime: string
  endTime: string
  description?: string
  reminder: number // minutes before
  recurrence: EventRecurrence
}

