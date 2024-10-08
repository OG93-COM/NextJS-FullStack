  
export default function ReviewOne({params} : {params :{reviewsId : string ; productId : string}}) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-slate-700">The product {params.productId} <br/> has review : {params.reviewsId}</h1>
      </div>
    );
  }
  

