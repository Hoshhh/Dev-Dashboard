import Login from "./login/page"
import Signup from "./signup/page"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen text-slate-50 bg-gray-700">
      <Login />
    </div>
  )
}
