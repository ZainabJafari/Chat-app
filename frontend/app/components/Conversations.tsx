"use client"
import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversation'

const Conversations = () => {
  const { loading, conversation} = useGetConversations()
  console.log('conversations loaded 999' , conversation)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations