export type HabitFrequency = 'Daily' | 'Weekly' | 'Monthly'

export interface Habit {
  id: string
  name: string
  frequency: HabitFrequency
  reminderTime: string
  currentStreak: number
  reminderType: 'Morning' | 'Evening'
}

