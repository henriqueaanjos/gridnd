var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && m(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Browser.mjs";
const I = B((e, r) => /* @__PURE__ */ n.createElement(d, s(a({ ref: r }, e), { weights: l })));
I.displayName = "Browser";
export {
  I as Browser
};
