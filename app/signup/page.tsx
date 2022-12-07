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
            <label htmlFor="">First Name</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="name" 
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Last Name</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="name" 
            />
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
          <button type="submit" className="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors mt-4 mb-2">Sign up</button>
          <div className="text-sm">
            Already have an account?
            <Link className="text-blue-500 hover:text-blue-600" href="/login"> Login here!</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
