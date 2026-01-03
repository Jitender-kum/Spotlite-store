import ProductCard from '../components/ProductCard'
import { useAppStore} from '../store/AppStore'
export default function Catalog(){
    const {products} = useAppStore()
    return(
        <div className='conatiner'>
            <h2>Products</h2>
            <div className='grid'>
                {products.map((p=> (
                    <ProductCard key ={p._id || p.id} product={p}></ProductCard>
                )))}
            </div>
        </div>
    )
}