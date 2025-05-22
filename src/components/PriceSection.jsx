import React from 'react'
import { packages } from '../data/packages'
import PriceCard from './PriceCard'

export default function PriceSection() {
  return (
    <section className="px-1 py-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">💲Pricing</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((packag, i) => (
          <PriceCard key={i} {...packag} />
        ))}
      </div>
    </section>
  )
}
