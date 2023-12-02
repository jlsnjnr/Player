import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Onboarding } from "./src/screens/Onboarding";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Routes />
    </GluestackUIProvider>
  );
}
