import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ShopCard from '../../Components/ShopCard'

const Shop = () => {
  const data = [
    {
      "index": 1,
      "model": "iPhone 13",
      "brand": "Apple",
      "price": 999.99,
      "image": "https://i.postimg.cc/L4GPdRz7/i-Phone-13.jpg",
      "quantity": 50
    },
    {
      "index": 2,
      "model": "Galaxy S21",
      "brand": "Samsung",
      "price": 799.99,
      "image": "https://i.postimg.cc/tg9C0vS8/Galaxy-S21.jpg",
      "quantity": 30
    },
    {
      "index": 3,
      "model": "Pixel 6",
      "brand": "Google",
      "price": 699.99,
      "image": "https://i.postimg.cc/0jSb5Mp4/Pixel-6.jpg",
      "quantity": 25
    },
    {
      "index": 4,
      "model": "OnePlus 9",
      "brand": "OnePlus",
      "price": 899.99,
      "image": "https://i.postimg.cc/wTJmgP2B/One-Plus-9.jpg",
      "quantity": 35
    },
    {
      "index": 5,
      "model": "Xperia 5 III",
      "brand": "Sony",
      "price": 849.99,
      "image": "https://i.postimg.cc/14xsvvVC/Xperia-5-III.jpg",
      "quantity": 20
    },
    {
      "index": 6,
      "model": "Mi 11",
      "brand": "Xiaomi",
      "price": 699.99,
      "image": "https://i.postimg.cc/g2W6JDtH/Mi-11.jpg",
      "quantity": 40
    },
    {
      "index": 7,
      "model": "ZenFone 8",
      "brand": "ASUS",
      "price": 749.99,
      "image": "https://i.postimg.cc/LXnJ70h2/Zen-Fone-8.jpg",
      "quantity": 15
    },
    {
      "index": 8,
      "model": "Moto G Power",
      "brand": "Motorola",
      "price": 249.99,
      "image": "https://i.postimg.cc/wBWtwdqw/Moto-G-Power.jpg",
      "quantity": 50
    },
    {
      "index": 9,
      "model": "Nokia 8.3",
      "brand": "Nokia",
      "price": 499.99,
      "image": "https://i.postimg.cc/MGZM0GSc/Nokia-8-3.jpg",
      "quantity": 20
    },
    {
      "index": 10,
      "model": "LG Velvet",
      "brand": "LG",
      "price": 599.99,
      "image": "https://i.postimg.cc/2j1WX3Bh/LG-Velvet.jpg",
      "quantity": 30
    }
  ]
  return (
    <ScrollView>
     <View style={{alignItems: "center", justifyContent: "center",flexWrap: "wrap", flexDirection: "row"}}>
     {
        data.map(item => <ShopCard key={item.index} item={item}></ShopCard>)
      }
     </View>
    </ScrollView>
  )
}

export default Shop;