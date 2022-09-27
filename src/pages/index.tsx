import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap" rel="stylesheet"/>
    <div className='text-center mt-[22%] text-3xl font-bold '>
      Hello from Notez
    </div>
    </>
  )
}

export default Home
