
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import T2 from "./index";

storiesOf("Components/Arrangements/Body copy two (t2)", module)
  .add("Default", () => (
    <T2 classes="" text="This is a body copy two style (mediu)" />
  ));