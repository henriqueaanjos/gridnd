var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var s = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && s(r, t, e[t]);
  if (o)
    for (var t of o(e))
      R.call(e, t) && s(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/UserList.mjs";
const L = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: w })));
L.displayName = "UserList";
export {
  L as UserList
};
