
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

storiesOf("Components/Patterns/Button", module)
  .add("Primary", () => (
    <Button variant="primary" text="A button" />
  ));