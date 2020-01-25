
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import H4 from "./index";

storiesOf("Components/Arrangements/Heading four", module)
  .add("Default", () => (
    <H4 classes="" text="This is a heading four" />
  ));