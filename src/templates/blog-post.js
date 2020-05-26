import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import * as ScrollManager from '../utils/scroll'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { author, title, siteUrl } = metaData
  const { title: postTitle, date, thumbnail } = post.frontmatter
  const thumbnailSrc = thumbnail
    ? `${siteUrl}${thumbnail.childImageSharp.fixed.src}`
    : undefined

  return (
    <Layout location={location} title={title}>
      <Head
        title={postTitle}
        description={post.excerpt}
        thumbnail={thumbnailSrc}
      />
      <PostTitle title={postTitle} />
      <PostDate date={date} />
      <PostContainer html={post.html} />
      <Elements.Hr />
      <Bio />
      <PostNavigator pageContext={pageContext} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            fixed(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
