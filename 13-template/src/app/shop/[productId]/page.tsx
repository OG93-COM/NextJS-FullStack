const Shop = ({params} : {params : {productId : string}}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-700">Product with ID : {params.productId}</h1>
    </div>
  )
}

export default Shop