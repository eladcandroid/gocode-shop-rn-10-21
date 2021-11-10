import React from "react";
import { Text, View } from "react-native";

const Product = () => {
  return (
    <>
      <View
        style={{
          marginRight: 10,
          width: 220,
          height: 270,
          borderRadius: 20,
          backgroundColor: "#FFFFFF",
          shadowColor: "rgba(57, 57, 57, 0.1)",
          shadowOffset: {
            width: 0,
            height: 30,
          },
          shadowRadius: 60,
          shadowOpacity: 1,
          elevation: 10,
        }}
      />
      <View
        style={{
          width: 157.20712280273438,
          height: 157.20712280273438,
          shadowColor: "rgba(0, 0, 0, 0.07)",
          shadowOffset: {
            width: 0,
            height: 40,
          },
          shadowRadius: 40,
          shadowOpacity: 1,
          backgroundColor: "red",
          borderRadius: 80,
          position: "absolute",
          top: -30,
          zIndex: 9999,
          overflow: "scroll",
          elevation: 50,
        }}
      />
    </>
  );
};

export default Product;
