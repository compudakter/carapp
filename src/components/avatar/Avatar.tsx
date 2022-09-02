import { FC } from "react" 
import { getBlockClass } from "../../utils/utils";
import './Avatar.scss';

interface AvatarProps{
    image:string
    block?:string
}

export const Avatar:FC<AvatarProps> = ({image,block}) =>{
    const blockClass = getBlockClass('avatar',block)
    return (
        <div className={`${blockClass} avatar`}>
            <img src={image} alt="" />
        </div>
    )
}