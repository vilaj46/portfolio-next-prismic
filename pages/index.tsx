import type { GetStaticPropsContext, InferGetStaticPropsType } from "next"

import { SliceZone } from "@prismicio/react"

import { createClient } from "prismicio"
import { components } from "slices"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = ({ page }: PageProps) => {
  return <SliceZone slices={page.data.slices} components={components} />
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
