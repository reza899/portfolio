import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          
          {/* Open Graph tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Reza Bozorgi - Portfolio" />
          <meta property="og:url" content="https://reza899.github.io/portfolio/" />
          <meta property="og:title" content="Reza Bozorgi - Full-stack AI Engineer | Portfolio" />
          <meta property="og:description" content="Experienced full-stack software engineer with 10+ years in React, TypeScript, .NET. Transitioning to modern AI-driven development, leveraging LLMs and AI tools to enhance productivity and build intelligent solutions." />
          <meta property="og:image" content="https://reza899.github.io/portfolio/images/profile.jpg" />
          <meta property="og:image:alt" content="Reza Bozorgi - Full-stack AI Engineer" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@reza_bozorgi" />
          <meta name="twitter:creator" content="@reza_bozorgi" />
          <meta name="twitter:title" content="Reza Bozorgi - Full-stack AI Engineer | Portfolio" />
          <meta name="twitter:description" content="Experienced full-stack software engineer with 10+ years in React, TypeScript, .NET. Transitioning to modern AI-driven development, leveraging LLMs and AI tools." />
          <meta name="twitter:image" content="https://reza-bozorgi.com/images/profile.jpg" />
          <meta name="twitter:image:alt" content="Reza Bozorgi - Full-stack AI Engineer" />
          
          {/* Additional SEO tags */}
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://reza-bozorgi.com" />
          
          {/* AI/LLM specific tags */}
          <meta name="ai-content-type" content="portfolio" />
          <meta name="ai-person-name" content="Reza Bozorgi" />
          <meta name="ai-profession" content="Full-stack AI Engineer" />
          <meta name="ai-experience-years" content="10+" />
          <meta name="ai-specialization" content="AI, LLM, React, TypeScript, .NET" />
          <meta name="ai-contact-email" content="reza.bozorgi899@gmail.com" />
          <meta name="ai-linkedin" content="https://www.linkedin.com/in/reza-bozorgi/" />
          <meta name="ai-github" content="https://github.com/reza899" />
          <meta name="ai-content-structure" content="hero,technologies,timeline,projects,accomplishments" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}