import { StatusBar } from "expo-status-bar";
import { UserProvider } from "./src/contexts/UserContext";
import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes/routes";

export default function App() {
  return (
    <NativeBaseProvider>
       <UserProvider>
        <StatusBar style="auto" />
        <Routes />
      </UserProvider>
    </NativeBaseProvider>
  );
}