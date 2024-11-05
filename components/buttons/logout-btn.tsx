"use client"; // Adicione esta linha para tornar o componente um componente de cliente

import { useEffect } from "react";
import { SignedOut, SignInButton, SignedIn, useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Se o usuário estiver logado, redireciona
      router.push("/");
    }
  }, [user, router]); // O efeito depende do usuário e do roteador

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default LogoutBtn;
