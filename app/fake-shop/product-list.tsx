"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import axios from "axios";
import { fetchProducts } from "@/lib/features/productSlice";
import { Button } from '@/components/ui/button';
import { addToCart } from '@/lib/features/cartSlice';
import { ShoppingCart, Plus } from 'lucide-react';
import Link from "next/link";
import { Badge } from '@/components/ui/badge';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import items from "@/db/items.json";

function ProductList() {
    const [products, setProducts] = useState([]);
    const dispatch = useAppDispatch();
     const { totalQuantity } = useAppSelector((state) => state.cart);
    
    const handleAddToCart = (product: any) => {
       dispatch(addToCart(product));
    }

    return (
        <div>

            <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ShoppingCart className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">ShopHub</h1>
                      </div>
                      <Link href="/fake-cart">
                        <Button variant="outline" className="relative">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Cart
                          {totalQuantity > 0 && (
                            <Badge className="ml-2 bg-primary text-primary-foreground">
                              {totalQuantity}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </header>
            

            <h1>Product List Page</h1>
            {items.itemsGrid.map((item) => (
                <div key={item.id}>
                <img src={item.image} alt="image title" />
                <p>Price : ${item.price}</p>
                <Button
                              onClick={() => handleAddToCart(item)}
                              className="w-full"
                              size="lg"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                </div>
            ))}
           
        </div>
    )
}

export default ProductList

{/*
    // https://www.geeksforgeeks.org/reactjs/fetching-data-from-an-api-with-useeffect-and-usestate-hook/ 
        const [userList, setUserList] = useState([]);

        useEffect(() => {
            fetch('https://random-data-api.com/api/v2/users?size=5')
                .then(response => response.json())
                .then(data => setUserList(data));
        }, []);
*/}
