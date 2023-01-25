
import { Avatar } from '@mui/material'
import React , {forwardRef} from 'react'
import InputOptions from './InputOptions'
import "./Posts.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


const Posts = forwardRef(({name, description, message, photoUrl}, ref) => {
    
    return (
        <div ref = {ref} className='posts'>
            <div className="posts__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="posts__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="posts__body">
                <p>{message}</p>
            </div>
            <div className="posts__buttons">
                <InputOptions Icon = {ThumbUpIcon} title ="Like" color="gray"/>
                <InputOptions Icon = {ChatIcon} title ="Comment" color="gray"/>
                <InputOptions Icon = {ShareIcon} title ="Share" color="gray"/>
                <InputOptions Icon = {SendIcon} title ="Send" color="gray"/>
                
            </div>
        </div>
    )
}
)

export default Posts