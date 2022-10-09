import React, { useEffect } from "react";
import { Client } from "@livepeer/webrtmp-sdk";

type Props = {};

const client = new Client();

const STREAM_KEY = "2e88-8muh-g6ar-hkze";

export default function tv({}: Props) {
  useEffect(() => {
    async function start() {
      const streamKey = STREAM_KEY;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const session = client.cast(stream, streamKey);

      session.on("open", () => {
        console.log("Stream started.");
      });

      session.on("close", () => {
        console.log("Stream stopped.");
      });

      session.on("error", (err) => {
        console.log("Stream error.", err.message);
      });
    }
    start();
  }, []);
  return <div>tv</div>;
}
