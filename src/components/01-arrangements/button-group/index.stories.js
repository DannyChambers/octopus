
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../../02-patterns/button/index";
import ButtonGroup from './index'

storiesOf("Components/Arrangements/Button group", module)
  .add("Left aligned", () => (
    <ButtonGroup variant="left">
    	<Button variant="primary" text="A primary button" />
    	<Button variant="secondary" text="A secondary button" />
    </ButtonGroup>
  ));