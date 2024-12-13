'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ClientCardProps {
  cardRefs: any
  imageUrl: string
  title: string
  description: string
  heightInViewPort: string
}

export function ClientCard({ cardRefs, imageUrl, title, description, heightInViewPort }: ClientCardProps = {
  cardRefs: "",
  imageUrl: '/placeholder.svg?height=200&width=300',
  title: 'Client Name',
  description: 'A brief description of the client or their project.',
  heightInViewPort: 'height percentage'
}) {

  // console.log("cardRefs", cardRefs)
  return (
    <Card ref={cardRefs} className={`w-full h-[80vh] bg-gray-400 mx-auto overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1`}>
      {/* <div className="relative h-48 w-full"> */}
      {/* <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-105"
        /> */}
      {/* </div> */}
      {/* <CardHeader className="p-4">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </CardHeader> */}
      {/* <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent> */}
    </Card>
  )
}