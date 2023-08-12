import { createMethod } from "meteor/zodern:relay";

export const add = createMethod({
  name: "add",
  run: function (a: number, b: number) {
    return a + b;
  },
});
