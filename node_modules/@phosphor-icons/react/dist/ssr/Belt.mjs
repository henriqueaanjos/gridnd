var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Belt.mjs";
const w = R((t, e) => /* @__PURE__ */ B.createElement(d, f(a({ ref: e }, t), { weights: n })));
w.displayName = "Belt";
export {
  w as Belt
};
