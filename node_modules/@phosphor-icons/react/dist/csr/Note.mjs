var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Note.mjs";
const I = d((o, e) => /* @__PURE__ */ N.createElement(l, f(a({ ref: e }, o), { weights: w })));
I.displayName = "Note";
export {
  I as Note
};
