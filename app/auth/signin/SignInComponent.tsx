'use client'
import { BsPersonCircle } from 'react-icons/bs'
import Link from "next/link";
import { getProviders, signIn } from 'next-auth/react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>
}

export default function SignInComponent({providers}: Props) {
  return (
    <div className="flex justify-center items-center h-screen text-slate-50 bg-gray-700">
        <div className="bg-slate-50 w-96 p-6 rounded shadow-sm text-gray-700 text-lg font-medium">
          <div className="flex items-center justify-center mb-4 text-6xl">
            <BsPersonCircle />
          </div>

          <div className="flex items-center justify-center mb-4 text-6xl">
            {Object.values(providers!).map((provider) => (
                <div key={provider.name}>
                    <button 
                    onClick={() => signIn(provider.id, {
                        callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"
                    })} 
                    className="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors mt-4 mb-2"
                    >
                    Login with {provider.name}
                    </button>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}