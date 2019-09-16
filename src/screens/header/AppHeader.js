import React from "react";
import { Text, View } from "react-native";


const AppHeader = props => {
    const { title } = props;
    return (
        <View
            style={{
                backgroundColor: "gray",
                paddingVertical: 10,
                paddingHorizontal: 2,
                height:'10%'
            }}
        >
            <Text>{title}</Text>
        </View>
    );
};

export default AppHeader;
