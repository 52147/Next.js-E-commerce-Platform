import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

type Props = {
  product: Product
}

const ProductPage: React.FunctionComponent<Props> = ({ product }) => (
  <Layout title={`${product.name} | Next.js + TypeScript Example`}>
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  </Layout>
)

export default ProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  // Fetch your product data here...
  const res = await fetch(`http://localhost:5001/products/${id}`)
  const product: Product = await res.json()

  return {
    props: {
      product,
    },
  }
}

