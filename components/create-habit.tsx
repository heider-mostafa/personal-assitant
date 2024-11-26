"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sparkles } from 'lucide-react'
import { HabitFrequency } from "@/types/habit"

export function CreateHabit() {
  const [frequency, setFrequency] = useState<HabitFrequency>('Daily')

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="h-6 w-6" />
          Create New Habit
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="habitName" className="text-lg">
              Habit Name
            </label>
            <Input
              id="habitName"
              placeholder="Enter habit name"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="frequency" className="text-lg">
              Frequency
            </label>
            <Select value={frequency} onValueChange={(value) => setFrequency(value as HabitFrequency)}>
              <SelectTrigger id="frequency" className="h-12">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Daily">Daily</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full mt-6 h-12 text-lg bg-gray-800 hover:bg-gray-700">
          Add Habit
        </Button>
      </CardContent>
    </Card>
  )
}

