var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (e, i, o) => i in e ? f(e, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[i] = o, m = (e, i) => {
  for (var o in i || (i = {}))
    s.call(i, o) && r(e, o, i[o]);
  if (t)
    for (var o of t(i))
      c.call(i, o) && r(e, o, i[o]);
  return e;
}, a = (e, i) => n(e, p(i));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HighDefinition.mjs";
const l = h((e, i) => /* @__PURE__ */ g.createElement(R, a(m({ ref: i }, e), { weights: d })));
l.displayName = "HighDefinition";
export {
  l as HighDefinition
};
