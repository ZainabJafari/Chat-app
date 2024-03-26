import React from 'react'
import Messages from './Messages'
import MessagesInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {

    const noChatSelecterd = true;

  return (
    <div className='md:min-w-[450px] flex flex-col'>

        {noChatSelecterd ? <NochatSelected /> : (        <>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						{/* <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span> */}
					</div>
					<Messages />
					<MessagesInput />
				</>)}

    </div>
  )
}

export default MessageContainer

const NochatSelected = () => {
    return (
        <div className="flex flex-col felx-1">
            <p className="font-bold">Select a conversation to start chatting!</p>
            <TiMessages />
        </div>
    )
}