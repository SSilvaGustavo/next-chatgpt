"use client";

import Image from "next/image";
import OpenIALogo from "@/assets/logo-open-ai.png";
import { signIn } from "next-auth/react";

export default async function Login() {
  return (
    <div className="bg-openai-200 h-screen flex flex-col items-center justify-center text-center">
      <Image src={OpenIALogo} alt="logo" width={300} height={300} />
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Click here to begin your session
      </button>
    </div>
  );
}
