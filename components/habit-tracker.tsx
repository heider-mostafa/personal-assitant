"use client"

import { useState } from "react"
import { CreateHabit } from "./create-habit"
import { HabitCard } from "./habit-card"
import { Habit } from "@/types/habit"

const initialHabits: Habit[] = [
  {
    id: "1",
    name: "Morning Meditation",
    frequency: "Daily",
    reminderTime: "08:00",
    currentStreak: 5,
    reminderType: "Morning"
  },
  {
    id: "2",
    name: "Read 30 Minutes",
    frequency: "Daily",
    reminderTime: "20:00",
    currentStreak: 3,
    reminderType: "Evening"
  }
]

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits)

  return (
    <div>
      <CreateHabit />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  )
}

