import React from "react"
import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.HeadingSlice} HeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingSlice>} HeadingProps
 * @param { HeadingProps }
 */
const Heading = ({ slice }) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </section>
)

export default Heading
