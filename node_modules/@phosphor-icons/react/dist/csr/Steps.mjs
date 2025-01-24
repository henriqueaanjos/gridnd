var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, p = (t, e) => f(t, i(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Steps.mjs";
const R = l((t, e) => /* @__PURE__ */ d.createElement(w, p(a({ ref: e }, t), { weights: I })));
R.displayName = "Steps";
export {
  R as Steps
};
