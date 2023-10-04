import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/Login";
import Welcome from "../../pages/Welcome";

const { Navigator, Screen } = createNativeStackNavigator()

export default function() {
    return(
        <Navigator initialRouteName="Welcome">
            <Screen name="Welcome" component={Welcome} options={{ headerShown: false}} />
            <Screen name="Login" component={Login} options={{ headerShown: false}} />
        </Navigator>
    )
}