import type { NextPage } from 'next';
import { useRouter } from "next/router";
import {useTheme} from 'next-themes'



const Home: NextPage = () => {
  const router = useRouter();

  const {theme,setTheme} = useTheme();

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
    <button
      className='px-6 py-2 bg-black dark:bg-white text-white dark:text-black absolute top-6 left-32'
      onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </button>
    </>
  )
}

export default Home
