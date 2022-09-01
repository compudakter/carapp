
import { FC } from 'react'
import './Badge.scss'

interface BadgeProps{
    text:string
}
export const Badge:FC<BadgeProps> = ({text}) =>{

    return (<div className="badge">
        {text}
    </div>)
}