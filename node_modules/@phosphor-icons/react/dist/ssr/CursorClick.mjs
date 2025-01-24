var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => c(o, f(r));
import C, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/CursorClick.mjs";
const n = R((o, r) => /* @__PURE__ */ C.createElement(d, i(a({ ref: r }, o), { weights: k })));
n.displayName = "CursorClick";
export {
  n as CursorClick
};
