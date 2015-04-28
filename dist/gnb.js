(function() {
    (function($, window, document) {
        'use strict';
        var Plugin, defaults, pluginName;
        pluginName = 'dropdownMenu';
        defaults = {
            propertyName: 'value'
        };
        Plugin = (function() {
            var toggleMenu;

            function Plugin(element, options) {
                this.element = element;
                this.options = $.extend({}, defaults, options);
                this._defaults = defaults;
                this._name = pluginName;
                this.init();
            }

            toggleMenu = function(el) {
                el.closest('li').addClass('on');
                return el.next().show().closest('li').siblings().removeClass('on').find('ul').hide();
            };

            Plugin.prototype.init = function() {
                var $el;
                $el = $(this.element);
                $el.on('mouseleave', function(e) {
                    e.preventDefault();
                    $el.find('li').removeClass('on').find('ul').hide();
                });
                $el.find('> li').find('> a').on('mouseenter keydown', function(e) {
                    var $this, keyCode;
                    $this = $(this);
                    keyCode = e.keyCode;
                    if (keyCode === void 0) {
                        return toggleMenu($this);
                    } else if (keyCode === 9 && e.shiftKey === false) {
                        return toggleMenu($this);
                    }
                }).next().find('> li:last').find('> a').on('focusout', function(e) {
                    var $this, len;
                    $this = $(this);
                    len = $this.closest('.on').next().length;
                    if (len === 0) {
                        return $this.closest('.on').removeClass('on').find('ul').hide();
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
