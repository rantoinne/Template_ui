import React from "react";
import { render } from "react-dom";
import Demo from "./demo";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import App from './App'
const rootElement = document.querySelector("#root");
if (rootElement) {
  render(
    <div>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <Demo />
        </Grid>
        <Grid item xs={4}>
          <App />
        </Grid>
        
      </Grid>
    </div>,
    rootElement
  );
}
