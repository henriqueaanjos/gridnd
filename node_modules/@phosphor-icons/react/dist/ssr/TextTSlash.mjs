var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(t, r, e[r]);
  return t;
}, s = (t, e) => i(t, p(e));
import T, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import x from "../defs/TextTSlash.mjs";
const R = c((t, e) => /* @__PURE__ */ T.createElement(h, s(m({ ref: e }, t), { weights: x })));
R.displayName = "TextTSlash";
export {
  R as TextTSlash
};
