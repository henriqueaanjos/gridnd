var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => n(r, p(e));
import d, { forwardRef as N } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/GenderNeuter.mjs";
const w = N((r, e) => /* @__PURE__ */ d.createElement(l, f(a({ ref: e }, r), { weights: u })));
w.displayName = "GenderNeuter";
export {
  w as GenderNeuter
};
