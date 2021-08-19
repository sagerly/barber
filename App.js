import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
  TextInput,
  Button,
  Platform,
} from "react-native";
import styles from "./src/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DateTimePicker from "@react-native-community/datetimepicker";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("./assets/iconScissors.png")}
          style={{
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text style={styles.homeText}>Scissors and Clippers</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const Register = ({ navigation }) => {
  return (
    <View style={styles.regcontainer}>
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>
        <TextInput
          style={styles.regtext}
          placeholder="First Name"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.regtext}
          placeholder="Last Name"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.regtext}
          placeholder="Email"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.regtext}
          placeholder="Password"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Datetime")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Login = ({ navigation }) => {
  return (
    <View style={styles.regcontainer}>
      <View style={styles.regform}>
        <Text>testing</Text>
        <Text style={styles.header}>Log In</Text>
        <TextInput
          style={styles.regtext}
          placeholder="Email"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.regtext}
          placeholder="Password"
          placeholderTextColor="white"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Datetime")}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Datetime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.booking}>
      <View style={styles.bookingcontainer}>
        <Text style={styles.bookingtext}>Book Your Appointment</Text>
      </View>
      <View style={styles.datepicker}>
        <Button onPress={showDatepicker} title="Date for haircut" />
      </View>
      <View style={styles.timepicker}>
        <Button onPress={showTimepicker} title="Time for haircut" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.description}>
        <TextInput
          placeholder="Description of what you would like"
          placeholderTextColor="grey"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.bookbutton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookbutton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Datetime"
          component={Datetime}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
