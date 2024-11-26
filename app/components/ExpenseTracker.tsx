"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pie, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

type Expense = {
  id: string
  description: string
  category: string
  amount: number
  date: string
}

type Budget = {
  category: string
  limit: number
  spent: number
}

const initialBudgets: Budget[] = [
  { category: 'Food', limit: 500, spent: 350 },
  { category: 'Rent', limit: 1200, spent: 1200 },
  { category: 'Utilities', limit: 200, spent: 150 },
  { category: 'Entertainment', limit: 300, spent: 280 },
]

const initialTransactions: Expense[] = [
  { id: '1', description: 'Grocery Shopping', category: 'Food', amount: 85.50, date: '2024-02-10' },
  { id: '2', description: 'Electricity Bill', category: 'Utilities', amount: 120.00, date: '2024-02-09' },
  { id: '3', description: 'Netflix Subscription', category: 'Entertainment', amount: 15.99, date: '2024-02-08' },
  { id: '4', description: 'Gas Bill', category: 'Utilities', amount: 45.00, date: '2024-02-07' },
  { id: '5', description: 'Restaurant Dinner', category: 'Food', amount: 65.30, date: '2024-02-06' },
]

const upcomingExpenses = [
  { id: '1', description: 'Rent Payment', category: 'Rent', amount: 1200, dueDate: '2024-02-28' },
  { id: '2', description: 'Car Insurance', category: 'Insurance', amount: 150, dueDate: '2024-02-25' },
  { id: '3', description: 'Internet Bill', category: 'Utilities', amount: 75, dueDate: '2024-02-20' },
]

export default function ExpenseTracker() {
  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets)
  const [transactions, setTransactions] = useState<Expense[]>(initialTransactions)

  const resetAllSpending = () => {
    setBudgets(budgets.map(budget => ({ ...budget, spent: 0 })))
  }

  const getProgressPercentage = (spent: number, limit: number) => {
    return Math.min((spent / limit) * 100, 100)
  }

  const pieChartData = budgets.map(budget => ({
    name: budget.category,
    value: budget.spent,
  }))

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Budget Tracker</h2>
        <Button onClick={resetAllSpending} variant="destructive">Reset All Spending</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {budgets.map((budget) => (
          <Card key={budget.category}>
            <CardHeader>
              <CardTitle>{budget.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Budget Limit</span>
                  <span>${budget.limit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Spent</span>
                  <span>${budget.spent}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Progress</span>
                  <span>{getProgressPercentage(budget.spent, budget.limit).toFixed(0)}%</span>
                </div>
                <Progress value={getProgressPercentage(budget.spent, budget.limit)} className="w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upcoming Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {upcomingExpenses.map((expense) => (
              <Card key={expense.id}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{expense.description}</h3>
                  <p className="text-sm text-gray-600">Due: {expense.dueDate}</p>
                  <p className="text-sm text-gray-600">Category: {expense.category}</p>
                  <p className="font-bold mt-2">${expense.amount.toFixed(2)}</p>
                  <Badge className="mt-2">Pending</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around">
          <ChartContainer config={{
            autoMinValue: true,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          }}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 60%)`} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </ChartContainer>
          <ChartContainer config={{
            autoMinValue: true,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          }}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 60%)`} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

