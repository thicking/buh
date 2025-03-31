export interface Income {
  id: number
  name: string
  amount: number
}

export interface Expense {
  id: number
  name: string
  amount: number
  color: string
  isPeriodic: boolean
}

export interface MonthlyBudgetSection {
  income: Income[]
  expenses: Expense[]
}

export interface MonthlyBudget {
  salary: MonthlyBudgetSection
  advance: MonthlyBudgetSection
}

export interface YearlyBudget {
  [month: string]: MonthlyBudget
}

export interface Budget {
  [year: string]: YearlyBudget
}

export interface User {
  id: string
  username: string
  password: string
  isAdmin: boolean
}

export interface LoginLog {
  id: string
  timestamp: number
  username: string
  success: boolean
}

export interface Log {
  id: string
  timestamp: number
  username: string
  success: boolean
}

