// app/page.ts
"use client";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

Amplify.configure(outputs);

import { StorageBrowser } from "@aws-amplify/ui-react-storage";
import { Authenticator, Button } from "@aws-amplify/ui-react";

const defaultPrefixes = [
  "public/",
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];

export default function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <Button onClick={signOut}>Sign Out</Button>
          <StorageBrowser defaultPrefixes={defaultPrefixes} />
        </>
      )}
    </Authenticator>
  );
}
