import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addIncome, expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <div className='heading-content'>
                    <h1>Expenses</h1>
                    <h2 className='total-income'>Total Expense: <span>${totalExpense()}</span></h2>
                </div>
                {/* <h1>Incomes</h1>
                <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2> */}
                <div className='income-content'>
                    <div className='form-container'>
                        <ExpenseForm />
                    </div>
                    <div className='incomes'>
                        {expenses.map((expense) => {
                            const {_id, title, amount, date, category, description, type} = expense;
                            return <IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .heading-content{
        display: flex;
        flex: 2;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;
    }
    .total-income{
        width: 61%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
    }
    .incomes{
        flex: 1;
    }
`;

export default Expenses