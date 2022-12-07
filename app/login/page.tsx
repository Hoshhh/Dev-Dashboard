import { BsPersonCircle } from 'react-icons/bs'
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen text-slate-50 bg-gray-700">
      <form action="">
        <div className="bg-slate-50 w-96 p-6 rounded shadow-sm text-gray-700 text-lg font-medium">
          <div className="flex items-center justify-center mb-4 text-6xl">
            <BsPersonCircle />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="email" 
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="password" 
            />
          </div>

           <div className="flex flex-row items-center">
            <input 
              id="remember"
              className="mr-2" 
              type="checkbox" 
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors mt-4 mb-2">Login</button>
          <div className="text-sm">
            Don&apos;t have an account?
            <Link className="text-blue-500 hover:text-blue-600" href="/signup"> Signup here!</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
