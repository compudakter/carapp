
export const getBlockClass = (element:string,block?:string) =>{
    if(!block){
        return ''
    }
    return `${block}__${element}`
}