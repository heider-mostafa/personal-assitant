import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { Habit } from "@/types/habit"

interface HabitCardProps {
  habit: Habit
}

export function HabitCard({ habit }: HabitCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">{habit.name}</h3>
            <p className="text-gray-600 mb-1">{habit.frequency} Habit</p>
            <p className="text-gray-600 mb-2">
              {habit.reminderType} Reminder: {habit.reminderTime}
            </p>
            <p className="font-semibold">
              Current Streak: <span className="text-xl">{habit.currentStreak} days</span>
            </p>
          </div>
          <CheckCircle className="h-8 w-8 text-gray-200" />
        </div>
        <div className="flex gap-2 mt-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`h-8 w-8 rounded-full ${
                i < habit.currentStreak ? 'bg-gray-300' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

