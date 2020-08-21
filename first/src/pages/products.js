import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(products => {
          return (
            <article key={products.id}>
              <Image fluid={products.image.fluid} alt={products.title}></Image>
              <h3>
                {products.title}
                <span> ${products.price}</span>
              </h3>
              <Link to={`/products/${products.slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
