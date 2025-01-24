var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (s)
    for (var o of s(r))
      w.call(r, o) && t(e, o, r[o]);
  return e;
}, a = (e, r) => i(e, p(r));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Browsers.mjs";
const I = B((e, r) => /* @__PURE__ */ n.createElement(d, a(m({ ref: r }, e), { weights: l })));
I.displayName = "Browsers";
export {
  I as Browsers
};
