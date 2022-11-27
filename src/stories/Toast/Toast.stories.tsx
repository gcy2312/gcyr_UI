import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Toast, {ToastProps} from './Toast'
import { CheckCircleIcon, DocumentArrowUpIcon, FolderIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import profilePic from '../assets/Brad_Pitt_2019_by_Glenn_Francis.jpeg';
import Button from "../Button/Button";

export default {
    title: "Design/Toast",
    component: Toast
} as Meta;

export const ToastExample = (args: ToastProps)=>{
    const [open, setOpen] = useState(true)
    return(
        <Toast id='' open={open} setOpen={setOpen} title={"Product added"} text={"You've successfully added a product to your Available Products List."} Icon={<CheckCircleIcon className='text-green-600'/>}/>
    )
}

export const ToastActionsExample = (args: ToastProps)=>{
    const [open, setOpen] = useState(true)
    return(
        <Toast id='' open={open} setOpen={setOpen} title={"Discussion moved"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu urna quis sapien convallis consequat."} Icon={<FolderIcon className='text-gray-400'/>} actions={<div className='space-x-3'><Button id={""} type='primary' text='Confirm'onClick={()=>alert('reply')}/><Button id={""} type='secondary' text='Undo' onClick={()=>alert('reply')}/></div>}/>
    )
}

export const ToastAvatarExample = (args: ToastProps)=>{
    const [open, setOpen] = useState(true)
    return(
        <Toast id='' open={open} setOpen={setOpen} title={"Brad Pitt"} text={"You've received an invitation to connect."} avatar={true} Icon={<img src={profilePic}/>} actions={<div className='space-x-3'><Button id={""} type='primary' text='Reply'onClick={()=>alert('reply')}/><Button id={""} type='secondary' text='Ignore' onClick={()=>alert('reply')}/></div>}/>
    )
}