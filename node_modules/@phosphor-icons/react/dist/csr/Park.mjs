var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      n.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Park.mjs";
const I = k((e, r) => /* @__PURE__ */ d.createElement(l, f(m({ ref: r }, e), { weights: w })));
I.displayName = "Park";
export {
  I as Park
};
