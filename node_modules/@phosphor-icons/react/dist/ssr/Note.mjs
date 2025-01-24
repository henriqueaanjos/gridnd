var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      N.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Note.mjs";
const w = d((o, e) => /* @__PURE__ */ R.createElement(l, f(a({ ref: e }, o), { weights: n })));
w.displayName = "Note";
export {
  w as Note
};
