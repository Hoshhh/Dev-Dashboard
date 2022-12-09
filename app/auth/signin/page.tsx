import { getProviders, signIn } from "next-auth/react"
import SignInComponent from "./SignInComponent"

async function page() {
    const providers = await getProviders();
  return (
    <div className="flex justify-center items-center h-screen text-slate-50 bg-gray-700">
        <SignInComponent providers={providers} />
    </div>
  )
}

export default page