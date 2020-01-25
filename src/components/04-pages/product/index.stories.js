
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => {

	saveState(store.getState());

})


import ProductPage from "./index";

storiesOf("Components/Pages/Product page", module)
  .add("Default", () => (
    <Provider store={store}><ProductPage /></Provider>
  ));