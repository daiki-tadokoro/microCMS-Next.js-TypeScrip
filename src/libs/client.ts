import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "wonderful-dog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "5b6e24a3a65d44738b06b328db9482e3b074",
});
