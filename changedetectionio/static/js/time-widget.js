// jQuery plugin to convert an <input> field which normally contains seconds
// (as integer) into some kind of nice pickable field
// days/hours/minutes/seconds
(function ($) {
  $.fn.secondsToSelectorField = function () {
    // @todo handle unique ID for each one when we need multiples
    return this.each(function () {
      // You will get each targeted element here
      // and it will be returned back


fuck it, better to store each fields vaue i think, incase they have a weird mix of like "25 hours"
      var n =$(this).after('<div class="time-widget">' +
          '<ul>' +
          '<li>' +
          '<span class="heading">Weeks</span><br/>' +
          '<input type="number" data-multiplier=604800 name="time_days" min="0" size=4>' +
          '</li>' +
          '<li>' +
          '<span class="heading">Days</span><br/>' +
          '<input type="number"  data-multiplier=86400  name="time_days" min="0" size=4>' +
          '</li>' +
          '<li>' +
          '<span class="heading">Hours</span><br/>' +
          '<input type="number" data-multiplier=3600 name="time_days" min="0" size=4>' +
          '</li>' +
          '<li>' +
          '<span class="heading">Minutes</span><br/>' +
          '<input type="number" data-multiplier=60 name="time_minutes" min="0" size=4>' +
          '</li>' +
          '<li>' +
          '<span class="heading">Seconds</span><br/>' +
          '<input type="number" data-multiplier=0 name="time_days" min="0" size=4>' +
          '</li>' +
          '</ul>' +
          '</div>');

// @todo onload - set the numbers
          var inserted_widget=$(this).closest('.time-widget');

          $('input', inserted_widget).change(function() {
                var seconds=0;
                //foreach input, get multiplier, add the value

          });
          //sync_inserted_widget_to_target(this, inserted_widget);
    });
  };

}(jQuery));
