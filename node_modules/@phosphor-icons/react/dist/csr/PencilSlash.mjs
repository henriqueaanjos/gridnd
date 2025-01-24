var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, l(e));
import p, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PencilSlash.mjs";
const I = h((o, e) => /* @__PURE__ */ p.createElement(d, i(m({ ref: e }, o), { weights: w })));
I.displayName = "PencilSlash";
export {
  I as PencilSlash
};
