import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

type Props = {
  products: Product[]
}

const IndexPage: React.FunctionComponent<Props> = ({ products }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div>
      {products && products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
//   const products: Product[] = [
//     { id: 1, name: 'Product 1', price: 100, image: '/images/product-1.jpg' },
//     { id: 2, name: 'Product 2', price: 200, image: '/images/product-2.jpg' },
//     // Add more products as needed...
//   ]
  // Fetch your product data here...
  const res = await fetch('http://localhost:5001/products')
  const products: Product[] = await res.json()

  return {
    props: {
      products,
    },
  }
}
