module.exports = function (server) {

  server.route({
    method: 'GET',
    path: '/calculator/about',
    handler: function (order) {

      let data = {
        msg: 'API with Calculator',
      };
        return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/sum/{n1}/{n2}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);
      const n2 = parseInt(order.params.n2);

      let data = {
        res: n1 + n2
      }
      return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/subtraction/{n1}/{n2}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);
      const n2 = parseInt(order.params.n2);

      let data = {
        res: n1 - n2
      }
      return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/multiplication/{n1}/{n2}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);
      const n2 = parseInt(order.params.n2);

      let data = {
        res: n1 * n2
      }
      return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/exponentiation/{n1}/{n2}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);
      const n2 = parseInt(order.params.n2);

      let data = {
        res: n1 ** n2
      }
      return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/division/{n1}/{n2}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);
      const n2 = parseInt(order.params.n2);

      let data = {
        res: n1 / n2
      }
      return data
    }
  })

  server.route({
    method: 'GET',
    path: '/calculator/squareroot/{n1}',
    handler: function (order) {
      const n1 = parseInt(order.params.n1);

      let data = {
        res: Math.sqrt(n1)
      }
      return data
    }
  })
}
//
