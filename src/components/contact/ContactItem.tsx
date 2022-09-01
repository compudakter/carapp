import { FC } from "react"
import { Avatar } from "../avatar/Avatar"
import { Badge } from "../badge/Badge"

interface CantactItemProps{
    avatar:string
    name:string
    lastMessage:string
    lastDate:Date
    newMessagesCount?:number
}
export const CantactItem:FC<CantactItemProps> = ({avatar,lastDate,lastMessage,name,newMessagesCount}) => {
    const renderBadge = () => {
        if(!newMessagesCount){
            return null
        }
        return <Badge block={'contact-item'} content={`${newMessagesCount}`}/>
    }
    return (
        <div className="contact-item">
            <Avatar block="contact-item" image={avatar}/>
            <div className="contact-item__content">
                <div className="contact-item__name">{name}</div>
                <div className="contact-item__last-message">{name}</div>
            </div>
            <div className="contact-item__addition">
                <div className="contact-item__last-date">{lastDate.getFullYear()}</div>
                {renderBadge()}
            </div>
        </div>
    )
}