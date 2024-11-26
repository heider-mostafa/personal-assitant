"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'

export function CreateProject() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle project creation
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="projectName" className="text-xl">
              Project Name
            </label>
            <Input
              id="projectName"
              placeholder="Enter project name"
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-xl">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Please fill out this field"
              className="min-h-[150px] resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="startDate" className="text-xl">
                Start Date
              </label>
              <div className="relative">
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-12"
                  required
                />
                <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="text-xl">
                End Date
              </label>
              <div className="relative">
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-12"
                  required
                />
                <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg bg-gray-800 hover:bg-gray-700">
            Create Project
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

