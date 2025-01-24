var n = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, a) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a, r = (o, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && m(o, a, e[a]);
  if (t)
    for (var a of t(e))
      s.call(e, a) && m(o, a, e[a]);
  return o;
}, i = (o, e) => p(o, c(e));
import d, { forwardRef as L } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/LockLaminatedOpen.mjs";
const w = L((o, e) => /* @__PURE__ */ d.createElement(k, i(r({ ref: e }, o), { weights: l })));
w.displayName = "LockLaminatedOpen";
export {
  w as LockLaminatedOpen
};
