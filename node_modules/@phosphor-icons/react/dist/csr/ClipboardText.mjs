var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, s(e));
import l, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import b from "../defs/ClipboardText.mjs";
const w = n((o, e) => /* @__PURE__ */ l.createElement(x, i(m({ ref: e }, o), { weights: b })));
w.displayName = "ClipboardText";
export {
  w as ClipboardText
};
