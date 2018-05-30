module.exports = function(options) {
  const seneca = this;
  const plugin = 'effe';

  options = this.util.deepextend(
    {
      content: {},
      mail: {},
      transport: 'smtp',
      config: {}
    },
    options
  );

  function init() {}

  seneca.add({ role: plugin, hook: 'init' }, init);

  return {
    name: plugin
  };
};
