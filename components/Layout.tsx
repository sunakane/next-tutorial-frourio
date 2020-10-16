import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'

type LayoutProps = {
  title: string
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = (props) => {
  const { title, children } = props
  const siteTitle = 'やっていき'

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ''}
        <div className="page-main">{children}</div>
      </main>

      <footer>&copy; {siteTitle}</footer>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Layout
