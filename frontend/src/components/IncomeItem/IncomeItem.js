import React from 'react'
import styled from'styled-components'
import { business, calender, clothing, comment, commission, dining, dollar, education, employment, entertainment, freelance, groceries, health, investments, miscellaneous, money, other, pension, personalcare, rent, rental, selfEmployment, stocks, subscriptions, tips, transportation, trash, travel, utilities } from '../../utils/Icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function IncomeItem({ id, amount, title, date, category, description, deleteItem, indicatorColor, type }) {

    const categoryIcon = () => {
        switch (category) {
            case 'employment':
                return employment;
            case 'self-employment':
                return selfEmployment;
            case 'business':
                return business;
            case 'stocks':
                return stocks;
            case 'rental':
                return rental;
            case 'investments':
                return investments;
            case 'freelance':
                return freelance;
            case 'pension':
                return pension;
            case 'tips':
                return tips;
            case 'commission':
                return commission;
            case 'other':
                return other;
            default:
                return '';
        }
    }

    const expenseCatIcon = () => {
            switch (category) {
                case 'groceries':
                    return groceries;
                case 'rent':
                    return rent;
                case 'utilities':
                    return utilities;
                case 'transportation':
                    return transportation;
                case 'entertainment':
                    return entertainment;
                case 'health':
                    return health;
                case 'education':
                    return education;
                case 'dining':
                    return dining;
                case 'clothing':
                    return clothing;
                case 'travel':
                    return travel;
                case 'subscriptions':
                    return subscriptions;
                case 'personalcare':
                    return personalcare;
                case 'miscellaneous':
                    return miscellaneous;
                default:
                    return '';
            }
    }

    return (
        <IncomeStyled indicator={indicatorColor}>
            <div className='icon'>
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className='content'>
                <h5>{title}</h5>
                <div className='inner-content'>
                    <div className='text'>
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>{comment} {description}</p>
                    </div>
                    <div className='btn-con'>
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'car(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem; 
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator}
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primary-color);
                opacity: 0.8;
                }
 
            }
        }
    }
`;

export default IncomeItem