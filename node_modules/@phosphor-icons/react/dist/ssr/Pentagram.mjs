var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && m(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Pentagram.mjs";
const w = R((r, e) => /* @__PURE__ */ g.createElement(d, f(o({ ref: e }, r), { weights: l })));
w.displayName = "Pentagram";
export {
  w as Pentagram
};
