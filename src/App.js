import logo from './logo.svg';
import './App.css';
import Screen from './crc/screens/Screen';
import Btn1 from './crc/components/buttons'
import Footer from './crc/components/footer';
import Topnav from './crc/components/navoffer';
import Navbar from './crc/components/navbar';

function App() {
  return (
    <div className="App">
      <Topnav classes={"mb-4"}/>
      <Navbar />
      <div className='relative pb-60'>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:py-24 lg:py-32 grid place-items-center'>
          <div className='pb-0'>
            <h3 className='order-first text-xs lg:text-lg text-transparent font-sans font-medium tracking-wide bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text'>Say Hello to the Future!! </h3>
            <h1 style={{ lineHeight: 'initial' }} className='font-sans h-full font-extrabold text-transparent text-5xl lg:text-7xl text-center bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500 bg-clip-text'>Conversation Intelligence</h1>
            <h1 style={{ lineHeight: 'initial' }} className='font-sans h-full font-extrabold text-white text-2xl lg:text-7xl text-center '>for Developers</h1>
            <p className=' text-xs lg:text-lg text-[#9fa3a8] my-9 mx-auto lg:px-64 text-center '>
            A utility-first Audio framework packed with 100+ AI voices, like <span className='text-white underline'>flex-10</span> , <span className='text-white underline'></span>pt-4, <span className='text-white underline'>text-center</span> and <span className='text-white underline'>rotate-90</span> that can be composed to build any design, directly in your markup.
            </p>
          </div>
        </div>
        <Btn1 name='Get Started' />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
