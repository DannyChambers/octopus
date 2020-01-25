
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import QuantityBox from "./index";

storiesOf("Components/Patterns/Quantity box", module)
  .add("Default", () => (
    <QuantityBox />
  ));