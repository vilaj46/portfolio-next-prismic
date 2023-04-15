import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import * as prismicH from "@prismicio/helpers"
import { SliceZone } from "@prismicio/react"
import { components } from "slices"

import { createClient } from "prismicio"

type PostProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Post({ post }: PostProps) {
  return (
    <div>
      Dynamic Post ---------
      <SliceZone slices={post.data.slices} components={components} />
    </div>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const client = createClient()
  const post = await client.getByUID("post", params?.uid?.toString() ?? "")

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const posts = await client.getAllByType("post")

  return {
    // Remove any specific posts such as home.
    paths: posts
      .filter((post) => post.url !== "/")
      .map((post) => prismicH.asLink(post)),
    fallback: false,
  }
}
