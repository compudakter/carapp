import { FC } from 'react' 
import { getBlockClass } from '../../utils/utils'
import './Badge.scss'

interface BadgeProps{
    content:string
    block?:string
}
export const Badge:FC<BadgeProps> =({content,block})=>{
    const blockClass = getBlockClass('badge',block)
    return (
        <div className={`${blockClass} badge`}>
            {content}
        </div>
    )
}