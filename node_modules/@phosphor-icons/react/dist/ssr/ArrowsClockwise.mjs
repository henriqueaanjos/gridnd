var i = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && t(o, e, r[e]);
  if (s)
    for (var e of s(r))
      p.call(r, e) && t(o, e, r[e]);
  return o;
}, a = (o, r) => w(o, c(r));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/ArrowsClockwise.mjs";
const n = R((o, r) => /* @__PURE__ */ l.createElement(d, a(m({ ref: r }, o), { weights: k })));
n.displayName = "ArrowsClockwise";
export {
  n as ArrowsClockwise
};
