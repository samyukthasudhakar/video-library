import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  VideosProvider,
  LikedVideosProvider,
  HistoryProvider,
  WatchLaterProvider
} from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <LikedVideosProvider>
            <HistoryProvider>
              <WatchLaterProvider>
              <App />
              </WatchLaterProvider>
            </HistoryProvider>
          </LikedVideosProvider>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
