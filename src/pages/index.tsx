import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Testimonial from "../components/testimonial"
import Team from "../components/team"

export default function IndexPage() {
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    const counterIntervalId = setInterval(() => {
      setCount((count: number) => count + 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(counterIntervalId)
      setCount(0)
    }, 20000);

    return () => {
      clearInterval(counterIntervalId)
    }

  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <p className="text-center font-semibold text-gray-400 px-2 py-8">
        This is Myat Hsu - {count}
      </p>
      <Testimonial />
      <Team />
    </Layout>
  )
}
