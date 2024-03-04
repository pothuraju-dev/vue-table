import * as components from "./components";

const defaultComponents: any = components?.default;
const Components = {
  install(Vue: any) {
    Object.keys(defaultComponents).forEach((name) => {
      Vue.component(name, defaultComponents[name]);
    });
  }
};
export default Components;
