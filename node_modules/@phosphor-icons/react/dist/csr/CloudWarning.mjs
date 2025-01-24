var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, p(o));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import u from "../defs/CloudWarning.mjs";
const w = l((r, o) => /* @__PURE__ */ d.createElement(g, i(m({ ref: o }, r), { weights: u })));
w.displayName = "CloudWarning";
export {
  w as CloudWarning
};
