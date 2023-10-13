import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { type } from 'os'

type productType = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}
const MerchPage = () => {
    const[isLogin, setIsLogin] = React.useState(true)
    const [product, setProduct] = React.useState([]);
    const {push} = useRouter();
    console.log(product);
    useEffect(() => {
        if(!isLogin){
            push('/auth/login');
        }
    }, [])
    useEffect(() => {
        fetch('/api/product').then((res) => res.json()).then((response) => {
        setProduct(response.data)})
    }
    , [])

  return (
    <div>
        <h1>Merch Page</h1>
        {product.map((product: productType) => (
            <div key={product.id}>{product.name}-{product.price}</div>
        )  
        )
                }

        
    </div>
  )
}

export default MerchPage