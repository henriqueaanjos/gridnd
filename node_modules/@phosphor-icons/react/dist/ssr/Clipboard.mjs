var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      l.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, s(r));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import n from "../defs/Clipboard.mjs";
const w = R((o, r) => /* @__PURE__ */ c.createElement(b, i(m({ ref: r }, o), { weights: n })));
w.displayName = "Clipboard";
export {
  w as Clipboard
};
