import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfb98A2096421917dd79D5CC0BB90B6C975068b19",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Welcome to the land of the free",
        description: "This NFT will give you access to AGORA!",
        image: readFileSync("scripts/assets/pot.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()