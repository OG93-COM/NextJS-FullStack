import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page Dev With NEXT",
  description: "Try  Metadata",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  )
    
}
