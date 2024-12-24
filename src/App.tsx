import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import config from '../amplify_outputs.json';
import { Amplify } from "aws-amplify";

Amplify.configure(config);

// these should match access patterns defined in amplify/storage/resource.ts
const defaultPrefixes = [
  'publci/',
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});


function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>MeetingAI-Upload-Bucket</h1>
          <StorageBrowser/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default App
