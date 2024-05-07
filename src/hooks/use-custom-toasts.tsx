import Link from "next/link";
import { toast } from "./use-toast";
import { buttonVariants } from "@/components/ui/Button";

export const useCustomToasts = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Nahi tu samja nahi 🥲 ",
      description: "Are baba pahile login karna padega.",
      variant: "destructive",
      action: (
        <Link
          onClick={() => dismiss()}
          className={buttonVariants({ variant: "outline" })}
          href="/sign-in"
        >
          Login Karo Bhai ☘️
        </Link>
      ),
    });
  };
  return { loginToast };
};
