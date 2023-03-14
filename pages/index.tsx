import type { NextPage } from 'next'
import DemoWidget from '../components/demo-widget'

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <div className="hidden
      bg-[#EEB155] bg-[#A796CC] bg-[#88b1DB] bg-[#CD808B] bg-[#D3BC8D] bg-[#000000]
      ">

      </div>
      <DemoWidget />
    </div>
  )
}

export default Home
