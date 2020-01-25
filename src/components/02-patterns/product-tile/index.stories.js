
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ProductTile from "./index";

storiesOf("Components/Patterns/Product tile", module)
  .add("Default", () => (
    <ProductTile />
  ));