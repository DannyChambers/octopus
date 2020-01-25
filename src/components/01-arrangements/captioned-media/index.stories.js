
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CaptionedMedia from "./index";

storiesOf("Components/Arrangements/Captioned media", module)
  .add("Default", () => (
    <CaptionedMedia />
  ));