import Image from "next/image";

export default function Home() {
  const imgUrl = "https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_640.jpg"
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello</h1>
      <div className="relative h-72 w-full">
        <Image
          className="rounded-xl shadow-sm object-cover "
          src={imgUrl}
          // width={250}
          // height={250}
          fill
          alt="This is an image about OG93 Oussama Galai"
          // sizes="(max-width:768px) 100vw, 33vw"
          quality={100}
          priority={true}
          loading="eager"
          // placeholder="blur"
          // blurDataURL="/MeilleurDiag.png"
          // onLoad={()=> console.log("loading")}
          // onError={()=> console.log("Error Charging")}
          // overrideSrc={imgUrl}
        />
      </div>
    </div>
  );
}
