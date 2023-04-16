import Head from "next/head"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import * as prismicH from "@prismicio/helpers"
import { SliceZone } from "@prismicio/react"
import { components } from "slices"

import { createClient } from "prismicio"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Page({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const client = createClient()
  const page = await client.getByUID("page", params?.uid?.toString() ?? "")

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("page")

  return {
    // Remove any specific pages such as home.
    paths: pages
      .filter((page) => page.url !== "/")
      .map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
