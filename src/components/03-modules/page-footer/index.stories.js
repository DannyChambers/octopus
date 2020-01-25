
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PageFooter from "./index";

storiesOf("Components/Modules/Page footer", module)
  .add("Primary", () => (
    <PageFooter />
  ));