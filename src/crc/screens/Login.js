import react from 'react';
import Buttons from '../components/buttons';
// import Btti from '../components/buttons';
import Input from '../components/Input';

// magic.link

const Login = () => {
    return (
        <div className="bg-white absolute h-full w-full text-[#4d5d6e] flex">
            <div className='bg-blue w-0 lg:w-1/2 h-full lg:visible invisible'>
                <img className="object-cover h-full" src='https://images.unsplash.com/photo-1472772224448-b24d00409675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
            </div>
            <div className="items-center place-content-center w-80 m-auto">
                {/* <p><span className="font-bold">{'<'}</span> Home</p> */}
                <h1 className='text-[#0b121f] opacity-80 font-extrabold text-3xl text-center mb-10'>Sign in to XYZ</h1>
                <div>
                    <div className=' cursor-pointer w-full px-10 py-2 bg-slate-200 rounded-md flex justify-center'>
                        <svg className=" mr-5 text-center self-center align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                        <p className="text-[#2d3032] self-center font-medium">Login With Google</p>
                    </div>

                    {/* <hr className='w-auto my-10'/> */}
                    <p className=" opacity-30 text-xs text-center w-full my-8">- or via email -</p>
                    {/* <hr className='my-10'/> */}
                    <div>
                        <label className="font-bold text-lg">E mail</label><br />
                        <Input.Email name={"@mail.com"} classes={" w-full bg-slate-200 text-gray-600 mt-2 mb-6 py-3"} />
                    </div>
                    <div>
                        <label className="font-bold text-lg">Password</label><br />
                        <Input.Email name={"·······"} classes={" w-full bg-slate-200 text-gray-600 mt-2 py-3"} />
                    </div>
                    <div className='flex justify-between my-5 px-1'>
                        <div className='flex'>
                            <Input.Checkbox classes={"align-middle self-center mr-2 checked:bg-blue-500 required:border-red-500"} />
                            <p className=' font-medium'>remember me</p>
                        </div>
                        <a href='/reset' className=' font-medium text-blue hover:text-black'>forgot password?</a>
                    </div>
                    <Buttons.dark name="Login" classes=" bg-[#0b121f] !text-white !w-full hover:!bg-[#0d1a2d] my-10" />
                    <p className='opacity-30 text-xs text-center'>© 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Login;