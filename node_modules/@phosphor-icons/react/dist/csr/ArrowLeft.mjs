var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowLeft.mjs";
const I = d((e, r) => /* @__PURE__ */ n.createElement(l, f(a({ ref: r }, e), { weights: A })));
I.displayName = "ArrowLeft";
export {
  I as ArrowLeft
};
