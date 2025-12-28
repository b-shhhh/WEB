"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { loginSchema } from "../../app/schema/loginschema"; // ← your existing schema

type LoginFormData = z.infer<typeof loginSchema>;



export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
    router.push("/auth/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Login
      </h2>
        <label className="block text-gray-700">Email</label>
        <input type="email" {...register("email")} className="w-full p-2 border rounded mt-1"/>
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input type="password" {...register("password")} className="w-full p-2 border rounded mt-1"/>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
        Login
      </button>
    </form>
  );
}
