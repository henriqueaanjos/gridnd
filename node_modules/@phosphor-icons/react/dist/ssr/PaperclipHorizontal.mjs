var m = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? m(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, i = (o, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => l(o, c(r));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/PaperclipHorizontal.mjs";
const z = R((o, r) => /* @__PURE__ */ n.createElement(d, p(i({ ref: r }, o), { weights: w })));
z.displayName = "PaperclipHorizontal";
export {
  z as PaperclipHorizontal
};
