"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface CatagoriesProps {
    name: string
}

interface FoodsProps {
    name: string
}

interface CustomerReviewsProps {
    name: string
    review: string
    date: string
}

interface RestaurantDetailProps {
    id: string
    name: string
    description:string
    pictureId: string
    city: string
    rating: string
    cattegories: CatagoriesProps[]
    menus: FoodsProps[]
    customerReviews: CustomerReviewsProps[]
}

export default function DetailPage() {

    const [resto, setResto] = useState<RestaurantDetailProps | null>(null)
    const { id } = useParams()

    const fetchData = async () => {
        try {
            const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`)
            const result = await response.json()
            setResto(result)
            console.log(result)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            
        </div>
    )
}