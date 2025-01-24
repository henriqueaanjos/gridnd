var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => n(r, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tornado.mjs";
const R = l((r, o) => /* @__PURE__ */ d.createElement(w, f(m({ ref: o }, r), { weights: I })));
R.displayName = "Tornado";
export {
  R as Tornado
};
