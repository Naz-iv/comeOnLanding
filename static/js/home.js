var t = {
    d: (e, n) => {
        for (var r in n)
            t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
    }
    ,
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
}
    , e = {};
t.d(e, {
    Tm: () => F,
    az: () => y,
    Aj: () => Gt,
    XM: () => He,
    LO: () => Qe,
    fw: () => Se,
    sb: () => Ee,
    D_: () => Ne,
    y7: () => an,
    sY: () => D,
    h: () => ve,
    l2: () => cn,
    I4: () => qe,
    qp: () => st,
    d4: () => Ve,
    Dp: () => Fe,
    bt: () => Ie,
    Ye: () => ze,
    sO: () => rt,
    eJ: () => et,
    qo: () => Re,
    $e: () => De
});
var n, r, o, i, s, _, u, c, l, a = {}, f = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    h = Array.isArray;

function d(t, e) {
    for (var n in e)
        t[n] = e[n];
    return t
}

function v(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
}

function y(t, e, r) {
    var o, i, s, _ = {};
    for (s in e)
        "key" == s ? o = e[s] : "ref" == s ? i = e[s] : _[s] = e[s];
    if (arguments.length > 2 && (_.children = arguments.length > 3 ? n.call(arguments, 2) : r),
    "function" == typeof t && null != t.defaultProps)
        for (s in t.defaultProps)
            void 0 === _[s] && (_[s] = t.defaultProps[s]);
    return m(t, _, o, i, null)
}

function m(t, e, n, i, s) {
    var _ = {
        type: t,
        props: e,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == s ? ++o : s,
        __i: -1,
        __u: 0
    };
    return null == s && null != r.vnode && r.vnode(_),
        _
}

function g(t) {
    return t.children
}

function b(t, e) {
    this.props = t,
        this.context = e
}

function w(t, e) {
    if (null == e)
        return t.__ ? w(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
        if (null != (n = t.__k[e]) && null != n.__e)
            return n.__e;
    return "function" == typeof t.type ? w(t) : null
}

function x(t) {
    var e, n;
    if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null,
                 e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
                t.__e = t.__c.base = n.__e;
                break
            }
        return x(t)
    }
}

function k(t) {
    (!t.__d && (t.__d = !0) && s.push(t) && !S.__r++ || _ !== r.debounceRendering) && ((_ = r.debounceRendering) || u)(S)
}

function S() {
    var t, e, n, o, i, _, u, l, a;
    for (s.sort(c); t = s.shift();)
        t.__d && (e = s.length,
            o = void 0,
            _ = (i = (n = t).__v).__e,
            l = [],
            a = [],
        (u = n.__P) && ((o = d({}, i)).__v = i.__v + 1,
        r.vnode && r.vnode(o),
            U(u, o, i, n.__n, void 0 !== u.ownerSVGElement, 32 & i.__u ? [_] : null, l, null == _ ? w(i) : _, !!(32 & i.__u), a),
            o.__.__k[o.__i] = o,
            H(l, o, a),
        o.__e != _ && x(o)),
        s.length > e && s.sort(c));
    S.__r = 0
}

function E(t, e, n, r, o, i, s, _, u, c, l) {
    var p, h, d, v, y, m = r && r.__k || f, g = e.length;
    for (n.__d = u,
             P(n, e, m),
             u = n.__d,
             p = 0; p < g; p++)
        null != (d = n.__k[p]) && "boolean" != typeof d && "function" != typeof d && (h = -1 === d.__i ? a : m[d.__i] || a,
            d.__i = p,
            U(t, d, h, o, i, s, _, u, c, l),
            v = d.__e,
        d.ref && h.ref != d.ref && (h.ref && j(h.ref, null, d),
            l.push(d.ref, d.__c || v, d)),
        null == y && null != v && (y = v),
            65536 & d.__u || h.__k === d.__k ? u = C(d, u, t) : "function" == typeof d.type && void 0 !== d.__d ? u = d.__d : v && (u = v.nextSibling),
            d.__d = void 0,
            d.__u &= -196609);
    n.__d = u,
        n.__e = y
}

function P(t, e, n) {
    var r, o, i, s, _, u = e.length, c = n.length, l = c, a = 0;
    for (t.__k = [],
             r = 0; r < u; r++)
        null != (o = t.__k[r] = null == (o = e[r]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? m(null, o, null, null, o) : h(o) ? m(g, {
            children: o
        }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = t,
            o.__b = t.__b + 1,
            _ = $(o, n, s = r + a, l),
            o.__i = _,
            i = null,
        -1 !== _ && (l--,
        (i = n[_]) && (i.__u |= 131072)),
            null == i || null === i.__v ? (-1 == _ && a--,
            "function" != typeof o.type && (o.__u |= 65536)) : _ !== s && (_ === s + 1 ? a++ : _ > s ? l > u - s ? a += _ - s : a-- : a = _ < s && _ == s - 1 ? _ - s : 0,
            _ !== r + a && (o.__u |= 65536))) : (i = n[r]) && null == i.key && i.__e && (i.__e == t.__d && (t.__d = w(i)),
            A(i, i, !1),
            n[r] = null,
            l--);
    if (l)
        for (r = 0; r < c; r++)
            null != (i = n[r]) && 0 == (131072 & i.__u) && (i.__e == t.__d && (t.__d = w(i)),
                A(i, i))
}

function C(t, e, n) {
    var r, o;
    if ("function" == typeof t.type) {
        for (r = t.__k,
                 o = 0; r && o < r.length; o++)
            r[o] && (r[o].__ = t,
                e = C(r[o], e, n));
        return e
    }
    return t.__e != e && (n.insertBefore(t.__e, e || null),
        e = t.__e),
    e && e.nextSibling
}

function $(t, e, n, r) {
    var o = t.key
        , i = t.type
        , s = n - 1
        , _ = n + 1
        , u = e[n];
    if (null === u || u && o == u.key && i === u.type)
        return n;
    if (r > (null != u && 0 == (131072 & u.__u) ? 1 : 0))
        for (; s >= 0 || _ < e.length;) {
            if (s >= 0) {
                if ((u = e[s]) && 0 == (131072 & u.__u) && o == u.key && i === u.type)
                    return s;
                s--
            }
            if (_ < e.length) {
                if ((u = e[_]) && 0 == (131072 & u.__u) && o == u.key && i === u.type)
                    return _;
                _++
            }
        }
    return -1
}

function N(t, e, n) {
    "-" === e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || p.test(e) ? n : n + "px"
}

function O(t, e, n, r, o) {
    var i;
    t: if ("style" === e)
        if ("string" == typeof n)
            t.style.cssText = n;
        else {
            if ("string" == typeof r && (t.style.cssText = r = ""),
                r)
                for (e in r)
                    n && e in n || N(t.style, e, "");
            if (n)
                for (e in n)
                    r && n[e] === r[e] || N(t.style, e, n[e])
        }
    else if ("o" === e[0] && "n" === e[1])
        i = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")),
            e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2),
        t.l || (t.l = {}),
            t.l[e + i] = n,
            n ? r ? n.u = r.u : (n.u = Date.now(),
                t.addEventListener(e, i ? M : T, i)) : t.removeEventListener(e, i ? M : T, i);
    else {
        if (o)
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== e && "height" !== e && "href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && "rowSpan" !== e && "colSpan" !== e && "role" !== e && e in t)
            try {
                t[e] = null == n ? "" : n;
                break t
            } catch (t) {
            }
        "function" == typeof n || (null == n || !1 === n && "-" !== e[4] ? t.removeAttribute(e) : t.setAttribute(e, n))
    }
}

function T(t) {
    var e = this.l[t.type + !1];
    if (t.t) {
        if (t.t <= e.u)
            return
    } else
        t.t = Date.now();
    return e(r.event ? r.event(t) : t)
}

function M(t) {
    return this.l[t.type + !0](r.event ? r.event(t) : t)
}

function U(t, e, n, o, i, s, _, u, c, l) {
    var a, f, p, v, y, m, w, x, k, S, P, C, $, N, O, T = e.type;
    if (void 0 !== e.constructor)
        return null;
    128 & n.__u && (c = !!(32 & n.__u),
        s = [u = e.__e = n.__e]),
    (a = r.__b) && a(e);
    t: if ("function" == typeof T)
        try {
            if (x = e.props,
                k = (a = T.contextType) && o[a.__c],
                S = a ? k ? k.props.value : a.__ : o,
                n.__c ? w = (f = e.__c = n.__c).__ = f.__E : ("prototype" in T && T.prototype.render ? e.__c = f = new T(x, S) : (e.__c = f = new b(x, S),
                    f.constructor = T,
                    f.render = L),
                k && k.sub(f),
                    f.props = x,
                f.state || (f.state = {}),
                    f.context = S,
                    f.__n = o,
                    p = f.__d = !0,
                    f.__h = [],
                    f._sb = []),
            null == f.__s && (f.__s = f.state),
            null != T.getDerivedStateFromProps && (f.__s == f.state && (f.__s = d({}, f.__s)),
                d(f.__s, T.getDerivedStateFromProps(x, f.__s))),
                v = f.props,
                y = f.state,
                f.__v = e,
                p)
                null == T.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
                null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
                if (null == T.getDerivedStateFromProps && x !== v && null != f.componentWillReceiveProps && f.componentWillReceiveProps(x, S),
                !f.__e && (null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(x, f.__s, S) || e.__v === n.__v)) {
                    for (e.__v !== n.__v && (f.props = x,
                        f.state = f.__s,
                        f.__d = !1),
                             e.__e = n.__e,
                             e.__k = n.__k,
                             e.__k.forEach((function (t) {
                                     t && (t.__ = e)
                                 }
                             )),
                             P = 0; P < f._sb.length; P++)
                        f.__h.push(f._sb[P]);
                    f._sb = [],
                    f.__h.length && _.push(f);
                    break t
                }
                null != f.componentWillUpdate && f.componentWillUpdate(x, f.__s, S),
                null != f.componentDidUpdate && f.__h.push((function () {
                        f.componentDidUpdate(v, y, m)
                    }
                ))
            }
            if (f.context = S,
                f.props = x,
                f.__P = t,
                f.__e = !1,
                C = r.__r,
                $ = 0,
            "prototype" in T && T.prototype.render) {
                for (f.state = f.__s,
                         f.__d = !1,
                     C && C(e),
                         a = f.render(f.props, f.state, f.context),
                         N = 0; N < f._sb.length; N++)
                    f.__h.push(f._sb[N]);
                f._sb = []
            } else
                do {
                    f.__d = !1,
                    C && C(e),
                        a = f.render(f.props, f.state, f.context),
                        f.state = f.__s
                } while (f.__d && ++$ < 25);
            f.state = f.__s,
            null != f.getChildContext && (o = d(d({}, o), f.getChildContext())),
            p || null == f.getSnapshotBeforeUpdate || (m = f.getSnapshotBeforeUpdate(v, y)),
                E(t, h(O = null != a && a.type === g && null == a.key ? a.props.children : a) ? O : [O], e, n, o, i, s, _, u, c, l),
                f.base = e.__e,
                e.__u &= -161,
            f.__h.length && _.push(f),
            w && (f.__E = f.__ = null)
        } catch (t) {
            e.__v = null,
                c || null != s ? (e.__e = u,
                    e.__u |= c ? 160 : 32,
                    s[s.indexOf(u)] = null) : (e.__e = n.__e,
                    e.__k = n.__k),
                r.__e(t, e, n)
        }
    else
        null == s && e.__v === n.__v ? (e.__k = n.__k,
            e.__e = n.__e) : e.__e = W(n.__e, e, n, o, i, s, _, c, l);
    (a = r.diffed) && a(e)
}

function H(t, e, n) {
    e.__d = void 0;
    for (var o = 0; o < n.length; o++)
        j(n[o], n[++o], n[++o]);
    r.__c && r.__c(e, t),
        t.some((function (e) {
                try {
                    t = e.__h,
                        e.__h = [],
                        t.some((function (t) {
                                t.call(e)
                            }
                        ))
                } catch (t) {
                    r.__e(t, e.__v)
                }
            }
        ))
}

function W(t, e, r, o, i, s, _, u, c) {
    var l, f, p, d, y, m, g, b = r.props, x = e.props, k = e.type;
    if ("svg" === k && (i = !0),
    null != s)
        for (l = 0; l < s.length; l++)
            if ((y = s[l]) && "setAttribute" in y == !!k && (k ? y.localName === k : 3 === y.nodeType)) {
                t = y,
                    s[l] = null;
                break
            }
    if (null == t) {
        if (null === k)
            return document.createTextNode(x);
        t = i ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, x.is && x),
            s = null,
            u = !1
    }
    if (null === k)
        b === x || u && t.data === x || (t.data = x);
    else {
        if (s = s && n.call(t.childNodes),
            b = r.props || a,
        !u && null != s)
            for (b = {},
                     l = 0; l < t.attributes.length; l++)
                b[(y = t.attributes[l]).name] = y.value;
        for (l in b)
            y = b[l],
            "children" == l || ("dangerouslySetInnerHTML" == l ? p = y : "key" === l || l in x || O(t, l, null, y, i));
        for (l in x)
            y = x[l],
                "children" == l ? d = y : "dangerouslySetInnerHTML" == l ? f = y : "value" == l ? m = y : "checked" == l ? g = y : "key" === l || u && "function" != typeof y || b[l] === y || O(t, l, y, b[l], i);
        if (f)
            u || p && (f.__html === p.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html),
                e.__k = [];
        else if (p && (t.innerHTML = ""),
            E(t, h(d) ? d : [d], e, r, o, i && "foreignObject" !== k, s, _, s ? s[0] : r.__k && w(r, 0), u, c),
        null != s)
            for (l = s.length; l--;)
                null != s[l] && v(s[l]);
        u || (l = "value",
        void 0 !== m && (m !== t[l] || "progress" === k && !m || "option" === k && m !== b[l]) && O(t, l, m, b[l], !1),
            l = "checked",
        void 0 !== g && g !== t[l] && O(t, l, g, b[l], !1))
    }
    return t
}

function j(t, e, n) {
    try {
        "function" == typeof t ? t(e) : t.current = e
    } catch (t) {
        r.__e(t, n)
    }
}

function A(t, e, n) {
    var o, i;
    if (r.unmount && r.unmount(t),
    (o = t.ref) && (o.current && o.current !== t.__e || j(o, null, e)),
    null != (o = t.__c)) {
        if (o.componentWillUnmount)
            try {
                o.componentWillUnmount()
            } catch (t) {
                r.__e(t, e)
            }
        o.base = o.__P = null,
            t.__c = void 0
    }
    if (o = t.__k)
        for (i = 0; i < o.length; i++)
            o[i] && A(o[i], e, n || "function" != typeof t.type);
    n || null == t.__e || v(t.__e),
        t.__ = t.__e = t.__d = void 0
}

function L(t, e, n) {
    return this.constructor(t, n)
}

function D(t, e, o) {
    var i, s, _, u;
    r.__ && r.__(t, e),
        s = (i = "function" == typeof o) ? null : o && o.__k || e.__k,
        _ = [],
        u = [],
        U(e, t = (!i && o || e).__k = y(g, null, [t]), s || a, a, void 0 !== e.ownerSVGElement, !i && o ? [o] : s ? null : e.firstChild ? n.call(e.childNodes) : null, _, !i && o ? o : s ? s.__e : e.firstChild, i, u),
        H(_, t, u)
}

function R(t, e) {
    D(t, e, R)
}

function F(t, e, r) {
    var o, i, s, _, u = d({}, t.props);
    for (s in t.type && t.type.defaultProps && (_ = t.type.defaultProps),
        e)
        "key" == s ? o = e[s] : "ref" == s ? i = e[s] : u[s] = void 0 === e[s] && void 0 !== _ ? _[s] : e[s];
    return arguments.length > 2 && (u.children = arguments.length > 3 ? n.call(arguments, 2) : r),
        m(t.type, u, o || t.key, i || t.ref, null)
}

n = f.slice,
    r = {
        __e: function (t, e, n, r) {
            for (var o, i, s; e = e.__;)
                if ((o = e.__c) && !o.__)
                    try {
                        if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(t)),
                            s = o.__d),
                        null != o.componentDidCatch && (o.componentDidCatch(t, r || {}),
                            s = o.__d),
                            s)
                            return o.__E = o
                    } catch (e) {
                        t = e
                    }
            throw t
        }
    },
    o = 0,
    i = function (t) {
        return null != t && null == t.constructor
    }
    ,
    b.prototype.setState = function (t, e) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state),
        "function" == typeof t && (t = t(d({}, n), this.props)),
        t && d(n, t),
        null != t && this.__v && (e && this._sb.push(e),
            k(this))
    }
    ,
    b.prototype.forceUpdate = function (t) {
        this.__v && (this.__e = !0,
        t && this.__h.push(t),
            k(this))
    }
    ,
    b.prototype.render = g,
    s = [],
    u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    c = function (t, e) {
        return t.__v.__b - e.__v.__b
    }
    ,
    S.__r = 0,
    l = 0;
var V, I, q, z, B = 0, G = [], J = [], Y = r.__b, K = r.__r, X = r.diffed, Q = r.__c, Z = r.unmount;

function tt(t, e) {
    r.__h && r.__h(I, t, B || e),
        B = 0;
    var n = I.__H || (I.__H = {
        __: [],
        __h: []
    });
    return t >= n.__.length && n.__.push({
        __V: J
    }),
        n.__[t]
}

function et(t) {
    return B = 1,
        function (t, e, n) {
            var r = tt(V++, 2);
            if (r.t = t,
            !r.__c && (r.__ = [pt(void 0, e), function (t) {
                var e = r.__N ? r.__N[0] : r.__[0]
                    , n = r.t(e, t);
                e !== n && (r.__N = [n, r.__[1]],
                    r.__c.setState({}))
            }
            ],
                r.__c = I,
                !I.u)) {
                var o = function (t, e, n) {
                    if (!r.__c.__H)
                        return !0;
                    var o = r.__c.__H.__.filter((function (t) {
                            return t.__c
                        }
                    ));
                    if (o.every((function (t) {
                            return !t.__N
                        }
                    )))
                        return !i || i.call(this, t, e, n);
                    var s = !1;
                    return o.forEach((function (t) {
                            if (t.__N) {
                                var e = t.__[0];
                                t.__ = t.__N,
                                    t.__N = void 0,
                                e !== t.__[0] && (s = !0)
                            }
                        }
                    )),
                    !(!s && r.__c.props === t) && (!i || i.call(this, t, e, n))
                };
                I.u = !0;
                var i = I.shouldComponentUpdate
                    , s = I.componentWillUpdate;
                I.componentWillUpdate = function (t, e, n) {
                    if (this.__e) {
                        var r = i;
                        i = void 0,
                            o(t, e, n),
                            i = r
                    }
                    s && s.call(this, t, e, n)
                }
                    ,
                    I.shouldComponentUpdate = o
            }
            return r.__N || r.__
        }(pt, t)
}

function nt(t, e) {
    var n = tt(V++, 3);
    !r.__s && ft(n.__H, e) && (n.__ = t,
        n.i = e,
        I.__H.__h.push(n))
}

function rt(t) {
    return B = 5,
        ot((function () {
                return {
                    current: t
                }
            }
        ), [])
}

function ot(t, e) {
    var n = tt(V++, 7);
    return ft(n.__H, e) ? (n.__V = t(),
        n.i = e,
        n.__h = t,
        n.__V) : n.__
}

function it(t, e) {
    return B = 8,
        ot((function () {
                return t
            }
        ), e)
}

function st(t) {
    var e = I.context[t.__c]
        , n = tt(V++, 9);
    return n.c = t,
        e ? (null == n.__ && (n.__ = !0,
            e.sub(I)),
            e.props.value) : t.__
}

function _t() {
    for (var t; t = G.shift();)
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(lt),
                    t.__H.__h.forEach(at),
                    t.__H.__h = []
            } catch (e) {
                t.__H.__h = [],
                    r.__e(e, t.__v)
            }
}

r.__b = function (t) {
    I = null,
    Y && Y(t)
}
    ,
    r.__r = function (t) {
        K && K(t),
            V = 0;
        var e = (I = t.__c).__H;
        e && (q === I ? (e.__h = [],
            I.__h = [],
            e.__.forEach((function (t) {
                    t.__N && (t.__ = t.__N),
                        t.__V = J,
                        t.__N = t.i = void 0
                }
            ))) : (e.__h.forEach(lt),
            e.__h.forEach(at),
            e.__h = [],
            V = 0)),
            q = I
    }
    ,
    r.diffed = function (t) {
        X && X(t);
        var e = t.__c;
        e && e.__H && (e.__H.__h.length && (1 !== G.push(e) && z === r.requestAnimationFrame || ((z = r.requestAnimationFrame) || ct)(_t)),
            e.__H.__.forEach((function (t) {
                    t.i && (t.__H = t.i),
                    t.__V !== J && (t.__ = t.__V),
                        t.i = void 0,
                        t.__V = J
                }
            ))),
            q = I = null
    }
    ,
    r.__c = function (t, e) {
        e.some((function (t) {
                try {
                    t.__h.forEach(lt),
                        t.__h = t.__h.filter((function (t) {
                                return !t.__ || at(t)
                            }
                        ))
                } catch (n) {
                    e.some((function (t) {
                            t.__h && (t.__h = [])
                        }
                    )),
                        e = [],
                        r.__e(n, t.__v)
                }
            }
        )),
        Q && Q(t, e)
    }
    ,
    r.unmount = function (t) {
        Z && Z(t);
        var e, n = t.__c;
        n && n.__H && (n.__H.__.forEach((function (t) {
                try {
                    lt(t)
                } catch (t) {
                    e = t
                }
            }
        )),
            n.__H = void 0,
        e && r.__e(e, n.__v))
    }
;
var ut = "function" == typeof requestAnimationFrame;

function ct(t) {
    var e, n = function () {
        clearTimeout(r),
        ut && cancelAnimationFrame(e),
            setTimeout(t)
    }, r = setTimeout(n, 100);
    ut && (e = requestAnimationFrame(n))
}

function lt(t) {
    var e = I
        , n = t.__c;
    "function" == typeof n && (t.__c = void 0,
        n()),
        I = e
}

function at(t) {
    var e = I;
    t.__c = t.__(),
        I = e
}

function ft(t, e) {
    return !t || t.length !== e.length || e.some((function (e, n) {
            return e !== t[n]
        }
    ))
}

function pt(t, e) {
    return "function" == typeof e ? e(t) : e
}

function ht() {
    throw new Error("Cycle detected")
}

function dt() {
    if (gt > 1)
        gt--;
    else {
        for (var t, e = !1; void 0 !== mt;) {
            var n = mt;
            for (mt = void 0,
                     bt++; void 0 !== n;) {
                var r = n.o;
                if (n.o = void 0,
                    n.f &= -3,
                !(8 & n.f) && Et(n))
                    try {
                        n.c()
                    } catch (n) {
                        e || (t = n,
                            e = !0)
                    }
                n = r
            }
        }
        if (bt = 0,
            gt--,
            e)
            throw t
    }
}

var vt, yt = void 0, mt = void 0, gt = 0, bt = 0, wt = 0;

function xt(t) {
    if (void 0 !== yt) {
        var e = t.n;
        if (void 0 === e || e.t !== yt)
            return e = {
                i: 0,
                S: t,
                p: yt.s,
                n: void 0,
                t: yt,
                e: void 0,
                x: void 0,
                r: e
            },
            void 0 !== yt.s && (yt.s.n = e),
                yt.s = e,
                t.n = e,
            32 & yt.f && t.S(e),
                e;
        if (-1 === e.i)
            return e.i = 0,
            void 0 !== e.n && (e.n.p = e.p,
            void 0 !== e.p && (e.p.n = e.n),
                e.p = yt.s,
                e.n = void 0,
                yt.s.n = e,
                yt.s = e),
                e
    }
}

function kt(t) {
    this.v = t,
        this.i = 0,
        this.n = void 0,
        this.t = void 0
}

function St(t) {
    return new kt(t)
}

function Et(t) {
    for (var e = t.s; void 0 !== e; e = e.n)
        if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
            return !0;
    return !1
}

function Pt(t) {
    for (var e = t.s; void 0 !== e; e = e.n) {
        var n = e.S.n;
        if (void 0 !== n && (e.r = n),
            e.S.n = e,
            e.i = -1,
        void 0 === e.n) {
            t.s = e;
            break
        }
    }
}

function Ct(t) {
    for (var e = t.s, n = void 0; void 0 !== e;) {
        var r = e.p;
        -1 === e.i ? (e.S.U(e),
        void 0 !== r && (r.n = e.n),
        void 0 !== e.n && (e.n.p = r)) : n = e,
            e.S.n = e.r,
        void 0 !== e.r && (e.r = void 0),
            e = r
    }
    t.s = n
}

function $t(t) {
    kt.call(this, void 0),
        this.x = t,
        this.s = void 0,
        this.g = wt - 1,
        this.f = 4
}

function Nt(t) {
    return new $t(t)
}

function Ot(t) {
    var e = t.u;
    if (t.u = void 0,
    "function" == typeof e) {
        gt++;
        var n = yt;
        yt = void 0;
        try {
            e()
        } catch (e) {
            throw t.f &= -2,
                t.f |= 8,
                Tt(t),
                e
        } finally {
            yt = n,
                dt()
        }
    }
}

function Tt(t) {
    for (var e = t.s; void 0 !== e; e = e.n)
        e.S.U(e);
    t.x = void 0,
        t.s = void 0,
        Ot(t)
}

function Mt(t) {
    if (yt !== this)
        throw new Error("Out-of-order effect");
    Ct(this),
        yt = t,
        this.f &= -2,
    8 & this.f && Tt(this),
        dt()
}

function Ut(t) {
    this.x = t,
        this.u = void 0,
        this.s = void 0,
        this.o = void 0,
        this.f = 32
}

function Ht(t) {
    var e = new Ut(t);
    try {
        e.c()
    } catch (t) {
        throw e.d(),
            t
    }
    return e.d.bind(e)
}

function Wt(t, e) {
    r[t] = e.bind(null, r[t] || function () {
    }
    )
}

function jt(t) {
    vt && vt(),
        vt = t && t.S()
}

function At(t) {
    var e = this
        , n = t.data
        , r = function (t) {
        return ot((function () {
                return St(t)
            }
        ), [])
    }(n);
    r.value = n;
    var o = ot((function () {
            for (var t = e.__v; t = t.__;)
                if (t.__c) {
                    t.__c.__$f |= 4;
                    break
                }
            return e.__$u.c = function () {
                var t;
                i(o.peek()) || 3 !== (null == (t = e.base) ? void 0 : t.nodeType) ? (e.__$f |= 1,
                    e.setState({})) : e.base.data = o.peek()
            }
                ,
                Nt((function () {
                        var t = r.value.value;
                        return 0 === t ? 0 : !0 === t ? "" : t || ""
                    }
                ))
        }
    ), []);
    return o.value
}

function Lt(t, e, n, r) {
    var o = e in t && void 0 === t.ownerSVGElement
        , i = St(n);
    return {
        o: function (t, e) {
            i.value = t,
                r = e
        },
        d: Ht((function () {
                var n = i.value.value;
                r[e] !== n && (r[e] = n,
                    o ? t[e] = n : n ? t.setAttribute(e, n) : t.removeAttribute(e))
            }
        ))
    }
}

kt.prototype.h = function () {
    return !0
}
    ,
    kt.prototype.S = function (t) {
        this.t !== t && void 0 === t.e && (t.x = this.t,
        void 0 !== this.t && (this.t.e = t),
            this.t = t)
    }
    ,
    kt.prototype.U = function (t) {
        if (void 0 !== this.t) {
            var e = t.e
                , n = t.x;
            void 0 !== e && (e.x = n,
                t.e = void 0),
            void 0 !== n && (n.e = e,
                t.x = void 0),
            t === this.t && (this.t = n)
        }
    }
    ,
    kt.prototype.subscribe = function (t) {
        var e = this;
        return Ht((function () {
                var n = e.value
                    , r = 32 & this.f;
                this.f &= -33;
                try {
                    t(n)
                } finally {
                    this.f |= r
                }
            }
        ))
    }
    ,
    kt.prototype.valueOf = function () {
        return this.value
    }
    ,
    kt.prototype.toString = function () {
        return this.value + ""
    }
    ,
    kt.prototype.toJSON = function () {
        return this.value
    }
    ,
    kt.prototype.peek = function () {
        return this.v
    }
    ,
    Object.defineProperty(kt.prototype, "value", {
        get: function () {
            var t = xt(this);
            return void 0 !== t && (t.i = this.i),
                this.v
        },
        set: function (t) {
            if (yt instanceof $t && function () {
                throw new Error("Computed cannot have side-effects")
            }(),
            t !== this.v) {
                bt > 100 && ht(),
                    this.v = t,
                    this.i++,
                    wt++,
                    gt++;
                try {
                    for (var e = this.t; void 0 !== e; e = e.x)
                        e.t.N()
                } finally {
                    dt()
                }
            }
        }
    }),
    ($t.prototype = new kt).h = function () {
        if (this.f &= -3,
        1 & this.f)
            return !1;
        if (32 == (36 & this.f))
            return !0;
        if (this.f &= -5,
        this.g === wt)
            return !0;
        if (this.g = wt,
            this.f |= 1,
        this.i > 0 && !Et(this))
            return this.f &= -2,
                !0;
        var t = yt;
        try {
            Pt(this),
                yt = this;
            var e = this.x();
            (16 & this.f || this.v !== e || 0 === this.i) && (this.v = e,
                this.f &= -17,
                this.i++)
        } catch (t) {
            this.v = t,
                this.f |= 16,
                this.i++
        }
        return yt = t,
            Ct(this),
            this.f &= -2,
            !0
    }
    ,
    $t.prototype.S = function (t) {
        if (void 0 === this.t) {
            this.f |= 36;
            for (var e = this.s; void 0 !== e; e = e.n)
                e.S.S(e)
        }
        kt.prototype.S.call(this, t)
    }
    ,
    $t.prototype.U = function (t) {
        if (void 0 !== this.t && (kt.prototype.U.call(this, t),
        void 0 === this.t)) {
            this.f &= -33;
            for (var e = this.s; void 0 !== e; e = e.n)
                e.S.U(e)
        }
    }
    ,
    $t.prototype.N = function () {
        if (!(2 & this.f)) {
            this.f |= 6;
            for (var t = this.t; void 0 !== t; t = t.x)
                t.t.N()
        }
    }
    ,
    $t.prototype.peek = function () {
        if (this.h() || ht(),
        16 & this.f)
            throw this.v;
        return this.v
    }
    ,
    Object.defineProperty($t.prototype, "value", {
        get: function () {
            1 & this.f && ht();
            var t = xt(this);
            if (this.h(),
            void 0 !== t && (t.i = this.i),
            16 & this.f)
                throw this.v;
            return this.v
        }
    }),
    Ut.prototype.c = function () {
        var t = this.S();
        try {
            if (8 & this.f)
                return;
            if (void 0 === this.x)
                return;
            var e = this.x();
            "function" == typeof e && (this.u = e)
        } finally {
            t()
        }
    }
    ,
    Ut.prototype.S = function () {
        1 & this.f && ht(),
            this.f |= 1,
            this.f &= -9,
            Ot(this),
            Pt(this),
            gt++;
        var t = yt;
        return yt = this,
            Mt.bind(this, t)
    }
    ,
    Ut.prototype.N = function () {
        2 & this.f || (this.f |= 2,
            this.o = mt,
            mt = this)
    }
    ,
    Ut.prototype.d = function () {
        this.f |= 8,
        1 & this.f || Tt(this)
    }
    ,
    At.displayName = "_st",
    Object.defineProperties(kt.prototype, {
        constructor: {
            configurable: !0,
            value: void 0
        },
        type: {
            configurable: !0,
            value: At
        },
        props: {
            configurable: !0,
            get: function () {
                return {
                    data: this
                }
            }
        },
        __b: {
            configurable: !0,
            value: 1
        }
    }),
    Wt("__b", (function (t, e) {
            if ("string" == typeof e.type) {
                var n, r = e.props;
                for (var o in r)
                    if ("children" !== o) {
                        var i = r[o];
                        i instanceof kt && (n || (e.__np = n = {}),
                            n[o] = i,
                            r[o] = i.peek())
                    }
            }
            t(e)
        }
    )),
    Wt("__r", (function (t, e) {
            jt();
            var n, r = e.__c;
            r && (r.__$f &= -2,
            void 0 === (n = r.__$u) && (r.__$u = n = function (t) {
                var e;
                return Ht((function () {
                        e = this
                    }
                )),
                    e.c = function () {
                        r.__$f |= 1,
                            r.setState({})
                    }
                    ,
                    e
            }())),
                jt(n),
                t(e)
        }
    )),
    Wt("__e", (function (t, e, n, r) {
            jt(),
                t(e, n, r)
        }
    )),
    Wt("diffed", (function (t, e) {
            var n;
            if (jt(),
            "string" == typeof e.type && (n = e.__e)) {
                var r = e.__np
                    , o = e.props;
                if (r) {
                    var i = n.U;
                    if (i)
                        for (var s in i) {
                            var _ = i[s];
                            void 0 === _ || s in r || (_.d(),
                                i[s] = void 0)
                        }
                    else
                        n.U = i = {};
                    for (var u in r) {
                        var c = i[u]
                            , l = r[u];
                        void 0 === c ? (c = Lt(n, u, l, o),
                            i[u] = c) : c.o(l, o)
                    }
                }
            }
            t(e)
        }
    )),
    Wt("unmount", (function (t, e) {
            if ("string" == typeof e.type) {
                var n = e.__e;
                if (n) {
                    var r = n.U;
                    if (r)
                        for (var o in n.U = void 0,
                            r) {
                            var i = r[o];
                            i && i.d()
                        }
                }
            } else {
                var s = e.__c;
                if (s) {
                    var _ = s.__$u;
                    _ && (s.__$u = void 0,
                        _.d())
                }
            }
            t(e)
        }
    )),
    Wt("__h", (function (t, e, n, r) {
            (r < 3 || 9 === r) && (e.__$f |= 2),
                t(e, n, r)
        }
    )),
    b.prototype.shouldComponentUpdate = function (t, e) {
        var n = this.__$u;
        if (!(n && void 0 !== n.s || 4 & this.__$f))
            return !0;
        if (3 & this.__$f)
            return !0;
        for (var r in e)
            return !0;
        for (var o in t)
            if ("__source" !== o && t[o] !== this.props[o])
                return !0;
        for (var i in this.props)
            if (!(i in t))
                return !0;
        return !1
    }
;
var Dt = new WeakMap
    , Rt = new WeakMap
    , Ft = new WeakMap
    , Vt = new WeakSet
    , It = new WeakMap
    , qt = /^\$/
    , zt = Object.getOwnPropertyDescriptor
    , Bt = !1
    , Gt = function (t) {
    if (!ne(t))
        throw new Error("This object can't be observed.");
    return Rt.has(t) || Rt.set(t, Yt(t, Qt)),
        Rt.get(t)
}
    , Jt = function (t, e) {
    Bt = !0;
    var n = t[e];
    try {
        Bt = !1
    } catch (t) {
    }
    return n
}
    , Yt = function (t, e) {
    var n = new Proxy(t, e);
    return Vt.add(n),
        n
}
    , Kt = function () {
    throw new Error("Don't mutate the signals directly.")
}
    , Xt = function (t) {
    return function (e, n, r) {
        var o;
        if (Bt)
            return Reflect.get(e, n, r);
        var i = t || "$" === n[0];
        if (!t && i && Array.isArray(e)) {
            if ("$" === n)
                return Ft.has(e) || Ft.set(e, Yt(e, Zt)),
                    Ft.get(e);
            i = "$length" === n
        }
        Dt.has(r) || Dt.set(r, new Map);
        var s = Dt.get(r)
            , _ = i ? n.replace(qt, "") : n;
        if (s.has(_) || "function" != typeof (null == (o = zt(e, _)) ? void 0 : o.get)) {
            var u = Reflect.get(e, _, r);
            if (i && "function" == typeof u)
                return;
            if ("symbol" == typeof _ && te.has(_))
                return u;
            s.has(_) || (ne(u) && (Rt.has(u) || Rt.set(u, Yt(u, Qt)),
                u = Rt.get(u)),
                s.set(_, St(u)))
        } else
            s.set(_, Nt((function () {
                    return Reflect.get(e, _, r)
                }
            )));
        return i ? s.get(_) : s.get(_).value
    }
}
    , Qt = {
    get: Xt(!1),
    set: function (t, e, n, r) {
        var o;
        if ("function" == typeof (null == (o = zt(t, e)) ? void 0 : o.set))
            return Reflect.set(t, e, n, r);
        Dt.has(r) || Dt.set(r, new Map);
        var i = Dt.get(r);
        if ("$" === e[0]) {
            n instanceof kt || Kt();
            var s = e.replace(qt, "");
            return i.set(s, n),
                Reflect.set(t, s, n.peek(), r)
        }
        var _ = n;
        ne(n) && (Rt.has(n) || Rt.set(n, Yt(n, Qt)),
            _ = Rt.get(n));
        var u = !(e in t)
            , c = Reflect.set(t, e, n, r);
        return i.has(e) ? i.get(e).value = _ : i.set(e, St(_)),
        u && It.has(t) && It.get(t).value++,
        Array.isArray(t) && i.has("length") && (i.get("length").value = t.length),
            c
    },
    deleteProperty: function (t, e) {
        "$" === e[0] && Kt();
        var n = Dt.get(Rt.get(t))
            , r = Reflect.deleteProperty(t, e);
        return n && n.has(e) && (n.get(e).value = void 0),
        It.has(t) && It.get(t).value++,
            r
    },
    ownKeys: function (t) {
        return It.has(t) || It.set(t, St(0)),
            It._ = It.get(t).value,
            Reflect.ownKeys(t)
    }
}
    , Zt = {
    get: Xt(!0),
    set: Kt,
    deleteProperty: Kt
}
    , te = new Set(Object.getOwnPropertyNames(Symbol).map((function (t) {
        return Symbol[t]
    }
)).filter((function (t) {
        return "symbol" == typeof t
    }
)))
    , ee = new Set([Object, Array])
    , ne = function (t) {
    return "object" == typeof t && null !== t && (!("function" == typeof t.constructor && t.constructor.name in globalThis && globalThis[t.constructor.name] === t.constructor) || ee.has(t.constructor)) && !Vt.has(t)
};

function re(t) {
    return this.getChildContext = () => t.context,
        t.children
}

function oe(t) {
    const e = this
        , n = t._container;
    e.componentWillUnmount = function () {
        D(null, e._temp),
            e._temp = null,
            e._container = null
    }
        ,
    e._container && e._container !== n && e.componentWillUnmount(),
        t._vnode ? (e._temp || (e._container = n,
            e._temp = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                appendChild(t) {
                    this.childNodes.push(t),
                        e._container.appendChild(t)
                },
                insertBefore(t) {
                    this.childNodes.push(t),
                        e._container.appendChild(t)
                },
                removeChild(t) {
                    this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1),
                        e._container.removeChild(t)
                }
            }),
            D(y(re, {
                context: e.context
            }, t._vnode), e._temp)) : e._temp && e.componentWillUnmount()
}

const ie = t => !!t && "object" == typeof t && !Array.isArray(t)
    , se = (t, e) => {
    if (ie(t) && ie(e))
        for (const n in e) {
            const r = Object.getOwnPropertyDescriptor(e, n)?.get;
            "function" == typeof r ? Object.defineProperty(t, n, {
                get: r
            }) : ie(e[n]) ? (t[n] || Object.assign(t, {
                [n]: {}
            }),
                se(t[n], e[n])) : Object.assign(t, {
                [n]: e[n]
            })
        }
}
    , _e = new Map
    , ue = new Map
    , ce = new Map
    , le = new WeakMap
    , ae = new WeakMap
    , fe = new WeakMap
    , pe = (t, e) => {
    if (!le.has(t)) {
        const n = new Proxy(t, he);
        le.set(t, n),
            ae.set(n, e)
    }
    return le.get(t)
}
    , he = {
    get: (t, e, n) => {
        const r = ae.get(n)
            , o = Object.getOwnPropertyDescriptor(t, e)?.get;
        if (o) {
            const e = Pe();
            if (e) {
                const n = fe.get(e) || fe.set(e, new Map).get(e);
                return n.has(o) || n.set(o, Nt((() => {
                        Oe(r),
                            Ce(e);
                        try {
                            return o.call(t)
                        } finally {
                            $e(),
                                Te()
                        }
                    }
                ))),
                    n.get(o).value
            }
        }
        const i = Reflect.get(t, e, n);
        if (void 0 === i && n === _e.get(r)) {
            const o = {};
            return Reflect.set(t, e, o, n),
                pe(o, r)
        }
        return "GeneratorFunction" === i?.constructor?.name ? async (...t) => {
                const e = Pe()
                    , n = i(...t);
                let o, s;
                for (; ;) {
                    Oe(r),
                        Ce(e);
                    try {
                        s = n.next(o)
                    } finally {
                        $e(),
                            Te()
                    }
                    try {
                        o = await s.value
                    } catch (t) {
                        n.throw(t)
                    }
                    if (s.done)
                        break
                }
                return o
            }
            : "function" == typeof i ? (...t) => {
                    Oe(r);
                    try {
                        return i(...t)
                    } finally {
                        Te()
                    }
                }
                : ie(i) ? pe(i, r) : i
    }
}
    , de = "I acknowledge that using a private store means my plugin will inevitably break on the next store release.";

function ve(t, {state: e = {}, ...n} = {}, {lock: r = !1} = {}) {
    if (_e.has(t)) {
        if (r === de || ce.has(t)) {
            const e = ce.get(t);
            if (r !== de && (!0 === r || r !== e))
                throw e ? Error("Cannot unlock a private store with an invalid lock code") : Error("Cannot lock a public store")
        } else
            ce.set(t, r);
        const o = ue.get(t);
        se(o, n),
            se(o.state, e)
    } else {
        r !== de && ce.set(t, r);
        const o = {
            state: Gt(e),
            ...n
        }
            , i = new Proxy(o, he);
        ue.set(t, o),
            _e.set(t, i),
            ae.set(i, t)
    }
    return _e.get(t)
}

Object.entries((() => {
        const t = document.querySelector('script[type="application/json"]#interactivity-data');
        if (!t?.textContent)
            return {};
        try {
            const {state: e} = JSON.parse(t.textContent);
            if (ie(e))
                return e;
            throw Error("Parsed state is not an object")
        } catch (t) {
            console.log(t)
        }
        return {}
    }
)()).forEach((([t, e]) => {
        ve(t, {
            state: e
        })
    }
));
const ye = function (t, e) {
    var n = {
        __c: e = "__cC" + l++,
        __: {},
        Consumer: function (t, e) {
            return t.children(e)
        },
        Provider: function (t) {
            var n, r;
            return this.getChildContext || (n = [],
                    (r = {})[e] = this,
                    this.getChildContext = function () {
                        return r
                    }
                    ,
                    this.shouldComponentUpdate = function (t) {
                        this.props.value !== t.value && n.some((function (t) {
                                t.__e = !0,
                                    k(t)
                            }
                        ))
                    }
                    ,
                    this.sub = function (t) {
                        n.push(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function () {
                            n.splice(n.indexOf(t), 1),
                            e && e.call(t)
                        }
                    }
            ),
                t.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}()
    , me = new WeakMap
    , ge = () => {
    throw new Error("Please use `data-bind` to modify the attributes of an element.")
}
    , be = {
    get(t, e, n) {
        const r = Reflect.get(t, e, n);
        return r && "object" == typeof r ? we(r) : r
    },
    set: ge,
    deleteProperty: ge
}
    , we = t => (me.has(t) || me.set(t, new Proxy(t, be)),
    me.get(t))
    , xe = []
    , ke = []
    , Se = t => Pe()?.context[t || ke.slice(-1)[0]]
    , Ee = () => {
    if (!Pe())
        throw Error("Cannot call `getElement()` outside getters and actions used by directives.");
    const {ref: t, attributes: e} = Pe();
    return Object.freeze({
        ref: t.current,
        attributes: we(e)
    })
}
    , Pe = () => xe.slice(-1)[0]
    , Ce = t => {
    xe.push(t)
}
    , $e = () => {
    xe.pop()
}
    , Ne = () => ke.slice(-1)[0]
    , Oe = t => {
    ke.push(t)
}
    , Te = () => {
    ke.pop()
}
    , Me = {}
    , Ue = {}
    , He = (t, e, {priority: n = 10} = {}) => {
    Me[t] = e,
        Ue[t] = n
}
    , We = ({scope: t}) => (e, ...n) => {
    let {value: r, namespace: o} = e;
    if ("string" != typeof r)
        throw new Error("The `value` prop should be a string path");
    const i = "!" === r[0] && !!(r = r.slice(1));
    Ce(t);
    const s = ((t, e) => {
            let n = {
                ..._e.get(e),
                context: Pe().context[e]
            };
            return t.split(".").forEach((t => n = n[t])),
                n
        }
    )(r, o)
        , _ = "function" == typeof s ? s(...n) : s;
    return $e(),
        i ? !_ : _
}
    , je = ({directives: t, priorityLevels: [e, ...n], element: r, originalProps: o, previousScope: i}) => {
    const s = rt({}).current;
    s.evaluate = it(We({
        scope: s
    }), []),
        s.context = st(ye),
        s.ref = i?.ref || rt(null),
        r = F(r, {
            ref: s.ref
        }),
        s.attributes = r.props;
    const _ = n.length > 0 ? y(je, {
        directives: t,
        priorityLevels: n,
        element: r,
        originalProps: o,
        previousScope: s
    }) : r
        , u = {
        ...o,
        children: _
    }
        , c = {
        directives: t,
        props: u,
        element: r,
        context: ye,
        evaluate: s.evaluate
    };
    Ce(s);
    for (const t of e) {
        const e = Me[t]?.(c);
        void 0 !== e && (u.children = e)
    }
    return $e(),
        u.children
}
    , Ae = r.vnode;
r.vnode = t => {
    if (t.props.__directives) {
        const e = t.props
            , n = e.__directives;
        n.key && (t.key = n.key.find((({suffix: t}) => "default" === t)).value),
            delete e.__directives;
        const r = (t => {
                const e = Object.keys(t).reduce(((t, e) => {
                        if (Me[e]) {
                            const n = Ue[e];
                            (t[n] = t[n] || []).push(e)
                        }
                        return t
                    }
                ), {});
                return Object.entries(e).sort((([t], [e]) => parseInt(t) - parseInt(e))).map((([, t]) => t))
            }
        )(n);
        r.length > 0 && (t.props = {
            directives: n,
            priorityLevels: r,
            originalProps: e,
            type: t.type,
            element: y(t.type, e),
            top: !0
        },
            t.type = je)
    }
    Ae && Ae(t)
}
;
const Le = t => new Promise((e => {
        const n = () => {
            clearTimeout(r),
                window.cancelAnimationFrame(o),
                setTimeout((() => {
                        t(),
                            e()
                    }
                ))
        }
            , r = setTimeout(n, 100)
            , o = window.requestAnimationFrame(n)
    }
));
const De = t => {
        const e = Pe()
            , n = Ne();
        return "GeneratorFunction" === t?.constructor?.name ? async (...r) => {
                const o = t(...r);
                let i, s;
                for (; ;) {
                    Oe(n),
                        Ce(e);
                    try {
                        s = o.next(i)
                    } finally {
                        Te(),
                            $e()
                    }
                    try {
                        i = await s.value
                    } catch (t) {
                        o.throw(t)
                    }
                    if (s.done)
                        break
                }
                return i
            }
            : (...r) => {
                Oe(n),
                    Ce(e);
                try {
                    return t(...r)
                } finally {
                    Te(),
                        $e()
                }
            }
    }
;

function Re(t) {
    !function (t) {
        nt((() => {
                let e = null
                    , n = !1;
                return e = function (t, e) {
                    let n;
                    const r = Ht((function () {
                            return n = this.c.bind(this),
                                this.x = t,
                                this.c = e,
                                t()
                        }
                    ));
                    return {
                        flush: n,
                        dispose: r
                    }
                }(t, (async () => {
                        e && !n && (n = !0,
                            await Le(e.flush),
                            n = !1)
                    }
                )),
                    e.dispose
            }
        ), [])
    }(De(t))
}

function Fe(t) {
    nt(De(t), [])
}

function Ve(t, e) {
    nt(De(t), e)
}

function Ie(t, e) {
    !function (t, e) {
        var n = tt(V++, 4);
        !r.__s && ft(n.__H, e) && (n.__ = t,
            n.i = e,
            I.__h.push(n))
    }(De(t), e)
}

function qe(t, e) {
    it(De(t), e)
}

function ze(t, e) {
    ot(De(t), e)
}

const Be = t => t && "object" == typeof t && !Array.isArray(t)
    , Ge = (t, e, n) => {
    for (const r in e)
        Be(Jt(t, r)) && Be(Jt(e, r)) ? Ge(t[`$${r}`].peek(), e[`$${r}`].peek(), n) : (n || void 0 === Jt(t, r)) && (t[`$${r}`] = e[`$${r}`])
}
    , Je = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
    , Ye = /\/\*[^]*?\*\/|  +/g
    , Ke = /\n+/g
    , Xe = t => ({directives: e, evaluate: n}) => {
    e[`on-${t}`].filter((({suffix: t}) => "default" !== t)).forEach((e => {
            Fe((() => {
                    const r = t => n(e, t)
                        , o = "window" === t ? window : document;
                    return o.addEventListener(e.suffix, r),
                        () => o.removeEventListener(e.suffix, r)
                }
            ))
        }
    ))
}
    , Qe = "wp"
    , Ze = `data-${Qe}-ignore`
    , tn = `data-${Qe}-interactive`
    , en = `data-${Qe}-`
    , nn = []
    , rn = () => {
    var t;
    return null !== (t = nn[nn.length - 1]) && void 0 !== t ? t : null
}
    , on = new RegExp(`^data-${Qe}-([a-z0-9]+(?:-[a-z0-9]+)*)(?:--([a-z0-9_-]+))?$`, "i")
    , sn = /^([\w-_\/]+)::(.+)$/
    , un = new WeakSet;

function cn(t) {
    const e = document.createTreeWalker(t, 205);
    return function t(n) {
        const {attributes: r, nodeType: o, localName: i} = n;
        if (3 === o)
            return [n.data];
        if (4 === o) {
            const t = e.nextSibling();
            return n.replaceWith(new window.Text(n.nodeValue)),
                [n.nodeValue, t]
        }
        if (8 === o || 7 === o) {
            const t = e.nextSibling();
            return n.remove(),
                [null, t]
        }
        const s = {}
            , _ = []
            , u = [];
        let c = !1
            , l = !1;
        for (let t = 0; t < r.length; t++) {
            const e = r[t].name;
            if (e[en.length] && e.slice(0, en.length) === en)
                if (e === Ze)
                    c = !0;
                else {
                    var a;
                    let [n, o] = null !== (a = sn.exec(r[t].value)?.slice(1)) && void 0 !== a ? a : [null, r[t].value];
                    try {
                        o = JSON.parse(o)
                    } catch (t) {
                    }
                    var f;
                    e === tn ? (l = !0,
                        nn.push(null !== (f = o?.namespace) && void 0 !== f ? f : null)) : u.push([e, n, o])
                }
            else if ("ref" === e)
                continue;
            s[e] = r[t].value
        }
        if (c && !l)
            return [y(i, {
                ...s,
                innerHTML: n.innerHTML,
                __directives: {
                    ignore: !0
                }
            })];
        if (l && un.add(n),
        u.length && (s.__directives = u.reduce(((t, [e, n, r]) => {
                const [, o, i = "default"] = on.exec(e);
                return t[o] || (t[o] = []),
                    t[o].push({
                        namespace: null != n ? n : rn(),
                        value: r,
                        suffix: i
                    }),
                    t
            }
        ), {})),
        "template" === i)
            s.content = [...n.content.childNodes].map((t => cn(t)));
        else {
            let n = e.firstChild();
            if (n) {
                for (; n;) {
                    const [r, o] = t(n);
                    r && _.push(r),
                        n = o || e.nextSibling()
                }
                e.parentNode()
            }
        }
        return l && nn.pop(),
            [y(i, s, _)]
    }(e.currentNode)
}

const ln = new WeakMap
    , an = t => (ln.has(t) || ln.set(t, ((t, e) => {
        const n = (e = [].concat(e))[e.length - 1].nextSibling;

        function r(e, r) {
            t.insertBefore(e, r || n)
        }

        return t.__k = {
            nodeType: 1,
            parentNode: t,
            firstChild: e[0],
            childNodes: e,
            insertBefore: r,
            appendChild: r,
            removeChild(e) {
                t.removeChild(e)
            }
        }
    }
)(t.parentElement, t)),
    ln.get(t));
document.addEventListener("DOMContentLoaded", (async () => {
        He("context", (({directives: {context: t}, props: {children: e}, context: n}) => {
                const {Provider: r} = n
                    , o = st(n)
                    , i = rt(Gt({}))
                    , s = t.map((({value: t}) => t));
                return i.current = ot((() => {
                        const e = t.map((t => Gt({
                            [t.namespace]: t.value
                        }))).reduceRight(Ge);
                        return Ge(e, o),
                            Ge(i.current, e, !0),
                            i.current
                    }
                ), [o, ...s]),
                    y(r, {
                        value: i.current
                    }, e)
            }
        ), {
            priority: 5
        }),
            He("body", (({props: {children: t}}) => function (t, e) {
                const n = y(oe, {
                    _vnode: t,
                    _container: e
                });
                return n.containerInfo = e,
                    n
            }(t, document.body))),
            He("watch", (({directives: {watch: t}, evaluate: e}) => {
                    t.forEach((t => {
                            Re((() => e(t)))
                        }
                    ))
                }
            )),
            He("init", (({directives: {init: t}, evaluate: e}) => {
                    t.forEach((t => {
                            Fe((() => e(t)))
                        }
                    ))
                }
            )),
            He("on", (({directives: {on: t}, element: e, evaluate: n}) => {
                    t.filter((({suffix: t}) => "default" !== t)).forEach((t => {
                            e.props[`on${t.suffix}`] = e => {
                                n(t, e)
                            }
                        }
                    ))
                }
            )),
            He("on-window", Xe("window")),
            He("on-document", Xe("document")),
            He("class", (({directives: {class: t}, element: e, evaluate: n}) => {
                    t.filter((({suffix: t}) => "default" !== t)).forEach((t => {
                            const r = t.suffix
                                , o = n(t, {
                                className: r
                            })
                                , i = e.props.class || ""
                                , s = new RegExp(`(^|\\s)${r}(\\s|$)`, "g");
                            o ? s.test(i) || (e.props.class = i ? `${i} ${r}` : r) : e.props.class = i.replace(s, " ").trim(),
                                Fe((() => {
                                        o ? e.ref.current.classList.add(r) : e.ref.current.classList.remove(r)
                                    }
                                ))
                        }
                    ))
                }
            )),
            He("style", (({directives: {style: t}, element: e, evaluate: n}) => {
                    t.filter((({suffix: t}) => "default" !== t)).forEach((t => {
                            const r = t.suffix
                                , o = n(t, {
                                key: r
                            });
                            e.props.style = e.props.style || {},
                            "string" == typeof e.props.style && (e.props.style = (t => {
                                    const e = [{}];
                                    let n, r;
                                    for (; n = Je.exec(t.replace(Ye, ""));)
                                        n[4] ? e.shift() : n[3] ? (r = n[3].replace(Ke, " ").trim(),
                                            e.unshift(e[0][r] = e[0][r] || {})) : e[0][n[1]] = n[2].replace(Ke, " ").trim();
                                    return e[0]
                                }
                            )(e.props.style)),
                                o ? e.props.style[r] = o : delete e.props.style[r],
                                Fe((() => {
                                        o ? e.ref.current.style[r] = o : e.ref.current.style.removeProperty(r)
                                    }
                                ))
                        }
                    ))
                }
            )),
            He("bind", (({directives: {bind: t}, element: e, evaluate: n}) => {
                    t.filter((({suffix: t}) => "default" !== t)).forEach((t => {
                            const r = t.suffix
                                , o = n(t);
                            e.props[r] = o,
                                Fe((() => {
                                        const t = e.ref.current;
                                        if ("width" !== r && "height" !== r && "href" !== r && "list" !== r && "form" !== r && "tabIndex" !== r && "download" !== r && "rowSpan" !== r && "colSpan" !== r && "role" !== r && r in t)
                                            try {
                                                return void (t[r] = null == o ? "" : o)
                                            } catch (t) {
                                            }
                                        null == o || !1 === o && "-" !== r[4] ? t.removeAttribute(r) : t.setAttribute(r, o)
                                    }
                                ))
                        }
                    ))
                }
            )),
            He("ignore", (({element: {type: t, props: {innerHTML: e, ...n}}}) => y(t, {
                dangerouslySetInnerHTML: {
                    __html: ot((() => e), [])
                },
                ...n
            }))),
            He("text", (({directives: {text: t}, element: e, evaluate: n}) => {
                    const r = t.find((({suffix: t}) => "default" === t));
                    try {
                        const t = n(r);
                        e.props.children = "object" == typeof t ? null : t.toString()
                    } catch (t) {
                        e.props.children = null
                    }
                }
            )),
            He("run", (({directives: {run: t}, evaluate: e}) => {
                    t.forEach((t => e(t)))
                }
            )),
            He("each", (({directives: {each: t, "each-key": e}, context: n, element: r, evaluate: o}) => {
                    if ("template" !== r.type)
                        return;
                    const {Provider: i} = n
                        , s = st(n)
                        , [_] = t
                        , {namespace: u, suffix: c} = _;
                    return o(_).map((t => {
                            const n = Gt({})
                                , o = Gt({
                                [u]: {
                                    ["default" === c ? "item" : c]: t
                                }
                            });
                            Ge(o, s),
                                Ge(n, o, !0);
                            const _ = {
                                ...Pe(),
                                context: n
                            }
                                , l = e ? We({
                                scope: _
                            })(e[0]) : t;
                            return y(i, {
                                value: n,
                                key: l
                            }, r.props.content)
                        }
                    ))
                }
            ), {
                priority: 20
            }),
            He("each-child", (() => null)),
            await (async () => {
                    document.querySelectorAll(`[data-${Qe}-interactive]`).forEach((t => {
                            if (!un.has(t)) {
                                const e = an(t);
                                R(cn(t), e)
                            }
                        }
                    ))
                }
            )()
    }
));
var fn = e.Tm
    , pn = e.az
    , hn = e.Aj
    , dn = e.XM
    , vn = e.LO
    , yn = e.fw
    , mn = e.sb
    , gn = e.D_
    , bn = e.y7
    , wn = e.sY
    , xn = e.h
    , kn = e.l2
    , Sn = e.I4
    , En = e.qp
    , Pn = e.d4
    , Cn = e.Dp
    , $n = e.bt
    , Nn = e.Ye
    , On = e.sO
    , Tn = e.eJ
    , Mn = e.qo
    , Un = e.$e;
export {
    fn as cloneElement,
    pn as createElement,
    hn as deepSignal,
    dn as directive,
    vn as directivePrefix,
    yn as getContext,
    mn as getElement,
    gn as getNamespace,
    bn as getRegionRootFragment,
    wn as render,
    xn as store,
    kn as toVdom,
    Sn as useCallback,
    En as useContext,
    Pn as useEffect,
    Cn as useInit,
    $n as useLayoutEffect,
    Nn as useMemo,
    On as useRef,
    Tn as useState,
    Mn as useWatch,
    Un as withScope
};
