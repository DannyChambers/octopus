
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ProductPage from "./index";

storiesOf("Components/Pages/Product page", module)
  .add("Default", () => (
    <ProductPage />
  ));