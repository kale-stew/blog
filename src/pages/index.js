import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { ProjectCard } from '../components/card'

import projects from '../../content/data/projects'

import { HOME_TITLE } from '../constants'

export default ({ data, location }) => {
  const { siteMetadata } = data.site

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
      <div className="lander">
        <div className="intro">
          <div>
            👋 Hi, I'm <b>Kylie Stewart</b>, a Software Engineer in Denver,
            Colorado.
          </div>
          <div>
            👩‍💻 I currently work at a javascript consultancy named{' '}
            <b>Formidable</b>.
          </div>
          <div>
            🏔️ When I'm not working, I like to hike with my dog, Otis.
          </div>
        </div>
        <div className="project-wrapper">
          {projects.map(project => (
            <ProjectCard item={project} key={project.title} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
