var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && m(r, t, o[t]);
  return r;
}, f = (r, o) => n(r, p(o));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Control.mjs";
const I = d((r, o) => /* @__PURE__ */ l.createElement(w, f(a({ ref: o }, r), { weights: C })));
I.displayName = "Control";
export {
  I as Control
};
