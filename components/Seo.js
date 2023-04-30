import Head from 'next/head'
import React from 'react'

export default function Seo(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
    </Head>
  )
}
