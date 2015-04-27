(( $, window, document ) ->
  'use strict';
  pluginName = 'dropdownMenu'
  defaults =
    propertyName : 'value'

  class Plugin
    constructor : ( element, options ) ->
      @element = element
      @options = $.extend {} , defaults , options
      @_defaults = defaults;
      @_name = pluginName;
      @init()

    init : ->
      $el = $ @element
      $el.on 'mouseleave' , ( e ) ->
        e.preventDefault()
        $el
        .find 'li'
        .removeClass 'on'
        .find 'ul'
        .hide()

        return

      $el
      .find '> li'
      .find 'a'
      .on 'mouseenter' , ( e ) ->
        $this = $ @
        $this
        .closest 'li'
        .addClass 'on'

        $this
        .next()
        .show()
        .closest 'li'
        .siblings()
        .removeClass 'on'
        .find 'ul'
        .hide()
        return

      $el
      .find '> li'
      .find 'a'
      .on 'keydown' , ( e ) ->
        $this = $ @
        keyCode = e.keyCode

        if keyCode == 9
          alert 'a'
        return
      return

  $.fn[ pluginName ] = ( options ) ->
    return @.each ->
      unless $.data @, 'plugin_' + pluginName
        new Plugin @, options
) jQuery, window, document
