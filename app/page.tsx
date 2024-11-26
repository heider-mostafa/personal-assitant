import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, Receipt, Sparkles, Calendar as CalendarIcon } from 'lucide-react'
import TaskManager from './components/TaskManager'
import ExpenseTracker from './components/ExpenseTracker'
import { HabitTracker } from "@/components/habit-tracker"
import Calendar from './components/Calendar'

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <LayoutGrid className="h-4 w-4" />
            Projects
          </TabsTrigger>
          <TabsTrigger value="expenses" className="flex items-center gap-2">
            <Receipt className="h-4 w-4" />
            Expenses
          </TabsTrigger>
          <TabsTrigger value="habits" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Habits
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            Calendar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tasks">
          <TaskManager />
        </TabsContent>
        <TabsContent value="expenses">
          <ExpenseTracker />
        </TabsContent>
        <TabsContent value="habits">
          <HabitTracker />
        </TabsContent>
        <TabsContent value="calendar">
          <Calendar />
        </TabsContent>
      </Tabs>
    </div>
  )
}

