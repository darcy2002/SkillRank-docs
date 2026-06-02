import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'SkillRank Docs',
  description: 'A quality layer for the agent skills ecosystem.',
}

const navbar = (
  <Navbar
    logo={<b>SkillRank</b>}
    projectLink="https://github.com/darcy2002/SkillStack"
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © SkillRank.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/darcy2002/SkillStack/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
