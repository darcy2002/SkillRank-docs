import nextra from 'nextra'

const withNextra = nextra({
  // Nextra options — leaving defaults for now
})

export default withNextra({
  output: 'export',        // build to static HTML in out/
  images: {
    unoptimized: true,     // mandatory for static export
  },
})
