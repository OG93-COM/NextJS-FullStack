import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:"About US",
  },
  description: "Try  Metadata",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  )

}
