import '../styles/base.css'
import '../styles/utilities.css'
import '@/components/UI/Container/container.css'
import '@/components/UI/Grid/grid.css'
import '@/components/UI/Avatar/avatar.css'
import '@/components/UI/Skeleton/skeleton.css'
import '@/components/UI/Text/text.css'
import '@/components/UI/Button/button.css'
import '@/components/UI/Profile/profile.css'
import Layout from '@/components/UI/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
