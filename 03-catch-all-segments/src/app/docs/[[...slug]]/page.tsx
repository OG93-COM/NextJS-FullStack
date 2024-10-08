export default function Docs({params}: {
    params : {
        slug : string[]
    }
}) {

    if (params.slug?.length === 2){
        return <h2>Slug 1 : {params.slug[0]} et Slug 2 : {params.slug[1]}</h2>
    } else if(params.slug?.length === 1) {
        return <h2>Slug 1 : {params.slug[0]}</h2>
    }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-700">Docs Page</h1>
    </div>
  )
}
