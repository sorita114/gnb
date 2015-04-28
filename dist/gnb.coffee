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

    toggleMenu = ( el ) ->
      el
      .closest 'li'
      .addClass 'on'

      el
      .next()
      .show()
      .closest 'li'
      .siblings()
      .removeClass 'on'
      .find 'ul'
      .hide()

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
      .find '> a'
      .on 'mouseenter keydown' , ( e ) ->
        $this = $ @
        keyCode = e.keyCode

        if keyCode is undefined
          toggleMenu $this
        else if keyCode is 9 and e.shiftKey is false
          toggleMenu $this
      .next()
      .find '> li:last'
      .find '> a'
      .on 'focusout' , ( e ) ->
        $this = $ @

        len = $this
              .closest '.on'
              .next().length

        if len is 0
          $this
          .closest '.on'
          .removeClass 'on'
          .find 'ul'
          .hide()

      return

  $.fn[ pluginName ] = ( options ) ->
    return @.each ->
      unless $.data @, 'plugin_' + pluginName
        new Plugin @, options
) jQuery, window, document
