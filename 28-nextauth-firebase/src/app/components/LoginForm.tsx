import Link from "next/link";
import { toast } from 'react-toastify';
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

interface FormData{
  email: string,
  password: string,
}

const formSchema = z.object({
  email: z.string().min(1, {message:"Email is Required"}).email("Format Invalid").max(300, {message:"Email too long"}),
  password: z.string().min(6, {message:"Password is Required"}).max(300, {message:"Password too long"}),
})

export default function LoginForm() {
  const router = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password: "",
    }
})

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        const response = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        })
        if(!response?.error){
          router.push('/dashboard')
          toast.success("Hello User 👋")
        }
        

    } catch (error: any) {
        toast.error(error.message)
    }
}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6 bg-white max-w-[800px] min-w-[450px] p-10 rounded-xl shadow-md">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            {...register('email')}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="contact@OG93.com"/>
            {errors.email && <p className="text-md text-red-500">{errors.email.message}</p> }
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••••"/>
            {errors.password && <p className="text-md text-red-500">{errors.password.message}</p> }
        </div>

        <button
          type="submit"
          className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Login
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          I dont have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Create new Account here
          </Link>
        </p>
      </form>
    </>
  )
}
