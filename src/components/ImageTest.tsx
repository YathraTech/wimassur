'use client'

import Image from 'next/image'

export function ImageTest() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Test d'affichage d'image</h1>
      
      {/* Test 1: Image HTML standard */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Test 1: Balise img standard</h2>
        <img 
          src="/images/home/home1.jpg" 
          alt="Test image standard" 
          className="w-full max-w-md rounded-lg"
        />
      </div>

      {/* Test 2: Next Image avec dimensions fixes */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Test 2: Next/Image avec dimensions fixes</h2>
        <Image
          src="/images/home/home1.jpg"
          alt="Test Next Image fixed"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Test 3: Next Image avec fill (votre implémentation) */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Test 3: Next/Image avec fill</h2>
        <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/images/home/home1.jpg"
            alt="Test Next Image fill"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* Test 4: Background CSS */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Test 4: Background CSS</h2>
        <div 
          className="h-[300px] w-full max-w-md rounded-lg bg-gray-100"
          style={{ 
            backgroundImage: 'url("/images/home/home1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Test 5: Next Image avec fill sans overflow-hidden */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Test 5: Next/Image fill sans overflow-hidden</h2>
        <div className="relative h-[300px] w-full max-w-md rounded-lg bg-gray-100">
          <Image
            src="/images/home/home1.jpg"
            alt="Test Next Image no overflow"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}