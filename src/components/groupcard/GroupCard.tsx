import { FC } from 'react'
import { Button } from '../ui/button/Button'
import './GroupCard.scss'

interface GroupCardProps{
    title:string
    img:string
}

export const GroupCard:FC<GroupCardProps> = ({title,img}) => {

    return(
        <div className="group-card" style={{backgroundImage:`url(../../assets/${img})`}}>
            <div className="group-card__bottom">
                <div className="group-card__title">{title}</div>
                <Button size='sm'>
                    Посмотреть
                </Button>
            </div>
        </div>
    )
}