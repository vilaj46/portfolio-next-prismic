import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"

import { SliceZone } from "@prismicio/react"

import { createClient } from "../prismicio"
import { components } from "../slices"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = ({ page }: PageProps) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Home

export async function getStaticProps({
  locale,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const page = await client.getByUID("page", "home")

  return {
    props: {
      page,
    },
  }
}
