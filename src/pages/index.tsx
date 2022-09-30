import type { NextPage } from 'next';
import { useRouter } from "next/router";



const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap" rel="stylesheet"/>
    <div className='text-center mt-[18%] text-3xl font-bold '>
      Hello from Notez
    </div>
    <div className='flex justify-center'>
    <button className='mt-[5rem] text-xl bg-white text-black border-2 border-white font-semibold py-3 px-7 rounded-full hover:bg-black hover:text-white' onClick={()=>router.push('/notes')}>
      Try now
    </button>
    </div>
    </>
  )
}

export default Home
