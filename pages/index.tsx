import type { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import Head from "next/head"

import { SliceZone } from "@prismicio/react"

import { createClient } from "prismicio"
import { components } from "slices"

// https://blog.logrocket.com/how-next-js-can-help-improve-seo/
// https://ahrefs.com/blog/seo-meta-tags/

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = ({ page }: PageProps) => {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export default Home

export async function getStaticProps({}: GetStaticPropsContext) {
  const client = createClient()

  const page = await client.getByUID("page", "home")

  return {
    props: {
      page,
    },
  }
}
