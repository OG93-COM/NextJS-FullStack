import type { Metadata } from "next";

export const metadata:Metadata = {
  title:"RealTime Database",
  description:"App using Realttime database from Firebase",
  openGraph: {
    title: 'Realtime',
    description: 'Realttime database from Firebase',
    images: ["https://miro.medium.com/v2/resize:fit:1024/1*csQT-n_POQQTfDLywDEdQQ.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: 'Realtime for twitter',
    description: 'Realttime database from Firebase',
    images: ["https://miro.medium.com/v2/resize:fit:1024/1*csQT-n_POQQTfDLywDEdQQ.png"]
  },
}

export default function RealTimeLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
        {children}
        </>
    );
  }