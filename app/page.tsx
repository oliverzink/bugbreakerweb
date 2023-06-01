
import Image from 'next/image'
import TerminalBox from './TerminalBox'
import ContactForm from './ContactForm'
import bugbreakerdemo from '../public/bugbreakerdemo.gif'
import Terminal2 from './Terminal2'

export default function Home() {
  return (
    <div className="mx-5">
      <div className="text-center mt-10 shadow-lg">

        <h1 className="mb-4 text-5xl font-extrabold text-gray-200 md:text-6xl lg:text-7xl">
          Errors <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-sky-400">Made Easy.</span>
        </h1>
        <p className="text-lg mb-5 font-normal text-gray-500 lg:text-xl dark:text-gray-400"> 
          Bugbreaker Elevates Developer Potential with AI-Powered Error Analysis.
        </p>

        <div className='mt-0 grid h-3/4 place-items-center shadow-lg'>
          <Image src={bugbreakerdemo} alt='' width={850} height={300}></Image>
        </div> 
      </div>

      <h1 className="text-5xl leading-none font-extrabold text-gray-200 tracking-tight mb-2 text-center mt-10 shadow-lg">
        Getting started: 
      </h1>
      <p className="text-center shadow-lg mt-5 text-lg mb-5 font-normal text-gray-200 lg:text-xl">
        Use pip to install bugbreaker through your terminal.
      </p>
      <div className="min-h-3/4 mb-5">
        <TerminalBox></TerminalBox>
      </div>
      <div className="text-center mt-10">
      <p className="text-lg mb-5 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        When prompted, enter your OpenAI API key. You can register for an API key&nbsp;
      <a className="underline font-extrabold" href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer">
        here
      </a>
      </p>
      <p className="font-semibold text-lg mb-5 font-normal text-gray-200 lg:text-xl">
        Now you're ready to start debugging!
      </p>
      </div>
      <div className="min-h-3/4 mb-5">
      <Terminal2></Terminal2>
      </div>
      <p className="text-center mt-10 shadow-lg text-lg mb-10 font-normal text-gray-200 lg:text-xl">
        Use Bugbreaker for any Python, Java, Node.js, Golang, or Ruby file.
      </p>
      <ContactForm></ContactForm>
      
    </div>
  )
}
