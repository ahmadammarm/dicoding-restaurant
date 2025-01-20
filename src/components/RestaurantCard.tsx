"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

interface RestaurantProps {
    id: string
    name: string
    description: string
    pictureId: string
    city: string
    rating: string
}


const RestaurantCard: React.FC = () => {

    const [resto, setResto] = useState<RestaurantProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://restaurant-api.dicoding.dev/list")
                const result = await response.json()
                console.log(result)
                setResto(result.restaurants)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
        {resto.map((item, index) => (
            <Card key={index}>
                <CardTitle className="text-center mt-6 mb-6">
                    {item.name}
                </CardTitle>
                <CardContent className="flex items-center justify-center">
                    <Image src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`} width={100} height={100} alt="resto image" />
                </CardContent>
                <CardContent>
                    {item.description}
                </CardContent>
                <div className="flex items-center justify-center">
                    <Link href={item.id} target='blank'>
                        <Button>
                            Detail
                        </Button>
                    </Link>
                </div>
            </Card>
        ))}
    </div>
  )
}

export default RestaurantCard
