var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/User.mjs";
const R = l((r, e) => /* @__PURE__ */ d.createElement(w, s(a({ ref: e }, r), { weights: I })));
R.displayName = "User";
export {
  R as User
};
