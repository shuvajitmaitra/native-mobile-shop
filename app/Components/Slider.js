import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

const Slider = () => {
  const data = [
    {
      id: 1,
      model: "iPhone 13",
      image: "https://i.postimg.cc/L4GPdRz7/i-Phone-13.jpg",
    },
    {
      id: 2,
      model: "Galaxy S21",
      image: "https://i.postimg.cc/tg9C0vS8/Galaxy-S21.jpg",
    },
    {
      id: 3,
      model: "Pixel 6",
      image: "https://i.postimg.cc/0jSb5Mp4/Pixel-6.jpg",
    },
    {
      id: 4,
      model: "OnePlus 9",
      image: "https://i.postimg.cc/wTJmgP2B/One-Plus-9.jpg",
    },
    {
      id: 5,
      model: "Xperia 5 III",
      image: "https://i.postimg.cc/14xsvvVC/Xperia-5-III.jpg",
    },
    {
      id: 6,
      model: "Mi 11",
      image: "https://i.postimg.cc/g2W6JDtH/Mi-11.jpg",
    },
    {
      id: 7,
      model: "ZenFone 8",
      image: "https://i.postimg.cc/LXnJ70h2/Zen-Fone-8.jpg",
    },
    {
      id: 8,
      model: "Moto G Power",
      image: "https://i.postimg.cc/wBWtwdqw/Moto-G-Power.jpg",
    },
    {
      id: 9,
      model: "Nokia 8.3",
      image: "https://i.postimg.cc/MGZM0GSc/Nokia-8-3.jpg",
    },
    {
      id: 10,
      model: "LG Velvet",
      image: "https://i.postimg.cc/2j1WX3Bh/LG-Velvet.jpg",
    },
  ];

  const renderItem = ({ item }) => {
    <View>
      <Image source={{ uri: item.image }} height={100} width={100} />
      <Text>{item.model} </Text>
    </View>;
  };
  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={renderItem}
      sliderWidth={360}
      itemWidth={360 * 0.68}
    />
  );
};

export default Slider;
