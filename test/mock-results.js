var xml = require('xml');

module.exports = function(stats){
  var data = {
    testsuites: [
      {
        _attr: {
          name: "Mocha Tests",
          tests: "2",
          failures: "1",
          timestamp: stats.start.toISOString().substr(0, stats.start.toISOString().indexOf('.')),
          time: "0.002"
        }
      },
      {
        testsuite: [
          {
            _attr: {
              name: "Foo Bar module",
              timestamp: stats.start.toISOString().substr(0,stats.start.toISOString().indexOf('.')),
              tests: "2",
              failures: "1",
              time: "0.002"
            }
          },
          {
            testcase: {
              _attr: {
                name: "Foo can weez the juice",
                className: "can weez the juice",
                time: "0.001"
              }
            }
          },
          {
            testcase: [
              {
                _attr: {
                  name: "Bar can narfle the garthog",
                  className: "can narfle the garthog",
                  time: "0.001"
                }
              },
              {
                failure: "expected garthog to be dead with invalid char:"
              }
            ]
          }
        ]
      }
    ]
  };
  return xml(data, { declaration: true });
};
