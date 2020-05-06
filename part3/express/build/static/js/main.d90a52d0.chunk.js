;(this.webpackJsonpphonebook = this.webpackJsonpphonebook || []).push([
  [0],
  {
    15: function (e, t, n) {
      e.exports = n(37)
    },
    37: function (e, t, n) {
      n.r(t)
      var a = n(4),
        o = n(3),
        r = n(0),
        c = n.n(r),
        l = n(14),
        u = n.n(l),
        i = n(2),
        d = n.n(i),
        m = 'https://hidden-springs-29768.herokuapp.com/api/persons',
        s = function () {
          return d.a.get(m)
        },
        f = function (e) {
          return d.a.post(m, e)
        },
        h = function (e, t) {
          return d.a.put(''.concat(m, '/').concat(e), t)
        },
        p = function (e) {
          return d.a.delete(''.concat(m, '/').concat(e))
        },
        b = function (e) {
          var t = e.message
          return (
            t &&
            c.a.createElement(
              'div',
              {
                style: {
                  color: 'white',
                  fontStyle: 'italic',
                  width: '100%',
                  padding: '1rem',
                  fontSize: 16,
                  backgroundColor: 'grey',
                },
                className: 'error',
              },
              t
            )
          )
        },
        v = function (e) {
          var t = e.persons,
            n = e.handleDeleteClick
          return (
            console.log(t),
            c.a.createElement(
              'article',
              null,
              c.a.createElement('h2', null, 'Numbers'),
              t.length > 0 &&
                c.a.createElement(
                  'ul',
                  null,
                  t.map(function (e) {
                    return c.a.createElement(
                      'li',
                      { key: e.id },
                      e.name,
                      ' ',
                      e.phone,
                      ' ',
                      c.a.createElement(
                        'button',
                        {
                          onClick: function () {
                            return window.confirm('Are you sure?') && n(e.id)
                          },
                        },
                        'delete'
                      )
                    )
                  })
                )
            )
          )
        },
        E = function () {
          var e = Object(r.useState)([]),
            t = Object(o.a)(e, 2),
            n = t[0],
            l = t[1],
            u = Object(r.useState)(''),
            i = Object(o.a)(u, 2),
            d = i[0],
            m = i[1],
            E = Object(r.useState)(''),
            g = Object(o.a)(E, 2),
            k = g[0],
            j = g[1],
            O = Object(r.useState)(null),
            y = Object(o.a)(O, 2),
            S = y[0],
            w = y[1]
          Object(r.useEffect)(function () {
            s().then(function (e) {
              l(e.data)
            })
          }, [])
          return c.a.createElement(
            'div',
            null,
            c.a.createElement('h2', null, 'Phonebook'),
            c.a.createElement(b, { message: S }),
            c.a.createElement(
              'form',
              {
                onSubmit: function (e) {
                  e.preventDefault()
                  for (
                    var t = 1,
                      o = function (e) {
                        return n[e].name === d
                          ? (alert(''.concat(d, ' already exists in the phone book!')), { v: void 0 })
                          : n[e].phone === k
                          ? (h(n[e].id, Object(a.a)(Object(a.a)({}, n[e]), {}, { name: d })).then(function (t) {
                              l(
                                n.map(function (a) {
                                  return a.id !== n[e].id ? a : t.data
                                })
                              )
                            }),
                            { v: void 0 })
                          : void (n[e].id >= t && (t = n[e].id + 1))
                      },
                      r = 0;
                    r < n.length;
                    r++
                  ) {
                    var c = o(r)
                    if ('object' === typeof c) return c.v
                  }
                  var u = { id: t, name: d, phone: k }
                  f(u).then(function () {
                    w('Added '.concat(u.name, ' to the phone book!')),
                      setTimeout(function () {
                        w(null)
                      }, 3e3)
                  }),
                    l(n.concat(u)),
                    m(''),
                    j('')
                },
              },
              c.a.createElement(
                'div',
                null,
                'name: ',
                c.a.createElement('input', {
                  value: d,
                  onChange: function (e) {
                    m(e.target.value)
                  },
                  required: !0,
                })
              ),
              c.a.createElement(
                'div',
                null,
                'phone: ',
                c.a.createElement('input', {
                  value: k,
                  onChange: function (e) {
                    j(e.target.value)
                  },
                  required: !0,
                })
              ),
              c.a.createElement('div', null, c.a.createElement('button', { disabled: !d.length || !k.length }, 'add'))
            ),
            c.a.createElement(v, {
              persons: n,
              handleDeleteClick: function (e) {
                p(e).then(function () {
                  l(
                    n.filter(function (t) {
                      return t.id !== e
                    })
                  )
                })
              },
            })
          )
        }
      u.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(E, null)), document.getElementById('root'))
    },
  },
  [[15, 1, 2]],
])
//# sourceMappingURL=main.d90a52d0.chunk.js.map
