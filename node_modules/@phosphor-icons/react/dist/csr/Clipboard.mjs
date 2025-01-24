var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      d.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, s(o));
import l, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import w from "../defs/Clipboard.mjs";
const C = n((r, o) => /* @__PURE__ */ l.createElement(b, i(m({ ref: o }, r), { weights: w })));
C.displayName = "Clipboard";
export {
  C as Clipboard
};
