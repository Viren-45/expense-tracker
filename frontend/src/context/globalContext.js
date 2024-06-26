import React, { useState, useContext } from "react";
import axios from 'axios';

const BASE_URL = "https://expense-tracker-frontend-flame.vercel.app/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    //incomes
    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes();
    }

    const getIncomes = async() => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async(id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes();
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.map((income) => {
            totalIncome += income.amount
        })

        return totalIncome;
    }

    //expenses
    const addExpense = async(expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getExpenses();
    }

    const getExpenses = async() => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async(id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses();
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.map((expense) => {
            totalExpense += expense.amount
        })

        return totalExpense;
    }

    //Total Balance
    const totalBalance = () => {
        return totalIncome() - totalExpense();
    }

    //Recent History
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
