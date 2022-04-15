import logo from './logo.svg';
import './App.css';
import Screen from './crc/screens/Screen';
import Btn1 from './crc/components/buttons'
import Footer from './crc/components/footer';

function App() {
  return (
    <div className="App">
      <div className='relative pb-60'>
        <div className='grid place-items-center h-10 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
          <a className='font-bold text-white text-sm hover:cursor-pointer hover:opacity-75 transition duration-100 ease-in-out align-middle'>Visit our main website ✨</a>
        </div>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:py-24 lg:py-32 grid place-items-center'>
          <div className='pb-0'>
            <h3 className='order-first text-xs lg:text-lg text-transparent font-sans font-medium tracking-wide bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text'>Say Hello to the Future!! </h3>
            <h1 style={{ lineHeight: 'initial' }} className='font-sans h-full font-extrabold text-transparent text-5xl lg:text-7xl text-center bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500 bg-clip-text'>Conversation Intelligence</h1>
            <h1 style={{ lineHeight: 'initial' }} className='font-sans h-full font-extrabold text-white text-2xl lg:text-7xl text-center '>for Developers</h1>
            <p className=' text-xs lg:text-lg text-white my-9 mx-auto lg:w-[30rem] text-center '>
              Simplifying the creation of landing pages, blog pages, application pages and so much more!
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
