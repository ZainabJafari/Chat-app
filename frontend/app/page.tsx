import Image from 'next/image'
import Sidebar from './components/Sidebar'
import MessageContainer from './components/Messages/MessageContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Sidebar />
            <MessageContainer />
    </main>
  )
}
