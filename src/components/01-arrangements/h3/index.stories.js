
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import H3 from "./index";

storiesOf("Components/Arrangements/Heading three", module)
  .add("Default", () => (
    <H3 classes="" text="This is a heading three" />
  ));