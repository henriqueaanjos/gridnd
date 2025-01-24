var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => f(e, n(r));
import w, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowLineUpRight.mjs";
const d = R((e, r) => /* @__PURE__ */ w.createElement(g, a(m({ ref: r }, e), { weights: h })));
d.displayName = "ArrowLineUpRight";
export {
  d as ArrowLineUpRight
};
