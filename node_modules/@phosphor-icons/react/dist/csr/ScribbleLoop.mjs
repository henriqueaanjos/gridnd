var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      b.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => c(e, f(o));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ScribbleLoop.mjs";
const I = n((e, o) => /* @__PURE__ */ l.createElement(d, i(a({ ref: o }, e), { weights: w })));
I.displayName = "ScribbleLoop";
export {
  I as ScribbleLoop
};
