import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {/* other meta tags... */}
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
    <footer>
      <p>© 2023 My E-commerce Site</p>
    </footer>
  </div>
)

export default Layout
