import { ButtonPrimary, ButtonSecondary } from '@/components/Buttons'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Seo from '@/components/Seo'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {ninjas: data}
    }
}

export default function About({ninjas}) {
  return (
    <Layout>
        <Seo title="About" />
        <h1>about</h1>
        <ButtonPrimary href="/">home</ButtonPrimary>
        <ButtonSecondary href="/">second</ButtonSecondary>
        <Image src="/banner-image-1.png" width={500} height={500} />
        {ninjas.map(ninja => (
            <div key={ninja.id}>
                <Link href={'/ninjas/' + ninja.id}>{ninja.name}</Link>
            </div>
        ))}
    </Layout>
  )
}
