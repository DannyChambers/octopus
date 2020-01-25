
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PageHeader from "./index";

storiesOf("Components/Arrangements/Paired list", module)
  .add("Primary", () => (
    <PageHeader />
  ));