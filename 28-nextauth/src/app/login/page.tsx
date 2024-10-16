import SignInBtn from "../components/SignInBtn";

export default function Login() {
    return (
      <div className="mx-auto h-screen flex flex-col justify-center items-center text-2xl font-bold gap-6">
          Welcome to our NextAuth Login
          <SignInBtn/>
      </div>
    )
  }
  