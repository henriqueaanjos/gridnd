var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PianoKeys.mjs";
const I = d((o, e) => /* @__PURE__ */ y.createElement(l, i(m({ ref: e }, o), { weights: w })));
I.displayName = "PianoKeys";
export {
  I as PianoKeys
};
