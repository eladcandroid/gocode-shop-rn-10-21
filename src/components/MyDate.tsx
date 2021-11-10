import React from "react";
import { Text } from "react-native";
function MyDate() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  console.log("hours", hours);

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <Text>{timeOfDay}</Text>;
}

export default MyDate;
