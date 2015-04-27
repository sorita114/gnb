(function() {
    (function($, window, document) {
        'use strict';
        var Plugin, defaults, pluginName;
        pluginName = 'dropdownMenu';
        defaults = {
            propertyName: 'value'
        };
        Plugin = (function() {
            function Plugin(element, options) {
                this.element = element;
                this.options = $.extend({}, defaults, options);
                this._defaults = defaults;
                this._name = pluginName;
                this.init();
            }

            Plugin.prototype.init = function() {
                var $el;
                $el = $(this.element);
                $el.on('mouseleave', function(e) {
                    e.preventDefault();
                    $el.find('li').removeClass('on').find('ul').hide();
                });
                $el.find('> li').find('a').on('mouseenter', function(e) {
                    var $this;
                    $this = $(this);
                    $this.closest('li').addClass('on');
                    $this.next().show().closest('li').siblings().removeClass('on').find('ul').hide();
                });
                $el.find('> li').find('a').on('keydown', function(e) {
                    var $this, keyCode;
                    $this = $(this);
                    keyCode = e.keyCode;
                    if (keyCode === 9) {
                        alert('a');
                    }
                });
            };

            return Plugin;

        })();
        return $.fn[pluginName] = function(options) {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    return new Plugin(this, options);
                }
            });
        };
    })(jQuery, window, document);

}).call(this);
