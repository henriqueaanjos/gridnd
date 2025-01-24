var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && s(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && s(r, e, o[e]);
  return r;
}, m = (r, o) => i(r, p(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Hourglass.mjs";
const w = n((r, o) => /* @__PURE__ */ g.createElement(d, m(t({ ref: o }, r), { weights: u })));
w.displayName = "Hourglass";
export {
  w as Hourglass
};
