import React, { useState, useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { AuthContext } from "../context/AuthContext";

const Onboarding = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");

  const [email, onChangeEmail] = useState("");

  const isEmailValid = validateEmail(email);
  const isFirstNameValid = validateName(firstName);

  const { onboard } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </View>
      <Text style={styles.welcomeText}>Let us get to know you</Text>
      <View style={styles.page}>
        <View style={styles.pageContainer}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={"First Name"}
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.inputBox}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={"Last Name"}
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"Email"}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.halfBtn, isEmailValid ? "" : styles.btnDisabled]}
            onPress={() => onboard({ firstName, lastName, email })}
            disabled={!isEmailValid || !isFirstNameValid}
          >
            <Text style={styles.btntext}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dee3e9",
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },

  page: {
    justifyContent: "center",
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 40,
    paddingVertical: 60,
    fontFamily: "MarkaziText-Medium",
    color: "#495E57",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#495E57",
  },
  inputBox: {
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    alignSelf: "stretch",
    height: 50,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
  btn: {
    backgroundColor: "#f4ce14",
    borderColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginHorizontal: 18,
    marginBottom: 60,
    padding: 10,
    borderWidth: 1,
  },
  btnDisabled: {
    backgroundColor: "#f1f4f7",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 18,
    marginBottom: 60,
    marginTop: 100,
  },
  halfBtn: {
    flex: 1,
    borderColor: "#f4ce14",
    backgroundColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
  },
  btntext: {
    fontSize: 22,
    color: "#333",
    alignSelf: "center",
  },
  pageIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  pageDot: {
    backgroundColor: "#67788a",
    width: 22,
    height: 22,
    marginHorizontal: 10,
    borderRadius: 11,
  },
  pageDotActive: {
    backgroundColor: "#f4ce14",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validateName = (name) => {
  return name.match(/^[a-zA-Z]+$/);
};

export default Onboarding;
