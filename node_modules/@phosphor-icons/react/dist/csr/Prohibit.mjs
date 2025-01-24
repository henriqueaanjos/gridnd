var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && i(r, t, o[t]);
  if (e)
    for (var t of e(o))
      h.call(o, t) && i(r, t, o[t]);
  return r;
}, a = (r, o) => p(r, s(o));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Prohibit.mjs";
const w = b((r, o) => /* @__PURE__ */ n.createElement(d, a(m({ ref: o }, r), { weights: l })));
w.displayName = "Prohibit";
export {
  w as Prohibit
};
