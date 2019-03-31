let STORE = {
    count: 0,
    tiptotal: 0    
}
 
 $(function () {
     $('#js-meal-details-form').submit(event => {
        event.preventDefault(); 
        const mealprice = $('input#base-meal-price').val();
        const taxrate = $('input#tax-rate').val();
        const tippercent = $('input#tip-percentage').val();
        if ($.isNumeric(mealprice) && $.isNumeric(taxrate) && $.isNumeric(tippercent))
        {   
            const tip = (mealprice*(tippercent/100)).toFixed(2);
            const tax = mealprice*(taxrate/100);
            const total =(Number(mealprice)+Number(tip)+Number(tax)).toFixed(2);
            $('div#tip').html(tip);
            $('div#subtotal').html((Number(mealprice)+tax).toFixed(2));
            $('div#total').html(total);

            STORE.count ++;
            STORE.tiptotal += Number(tip);

            const average = (STORE.tiptotal/STORE.count).toFixed(2);

            $('div#tiptotal').html((STORE.tiptotal).toFixed(2));
            $('div#mealcount').html(STORE.count);
            $('div#tipaverage').html(average);

            $('input#base-meal-price').val('');
            $('input#tax-rate').val('');
            $('input#tip-percentage').val('');

        } else {

        }

     })
 });


 $(function () {
    $('#js-meal-details-form').on( "click", ".cancel", function(event) {   
        $('input#base-meal-price').val('');
        $('input#tax-rate').val('');
        $('input#tip-percentage').val('');
      });
});


$(function () {
    $('#reset_buttom').on( "click", ".reset", function(event) {   
        $('input#base-meal-price').val('');
        $('input#tax-rate').val('');
        $('input#tip-percentage').val('');

        $('div#tiptotal').html('0.00');
        $('div#mealcount').html('0');
        $('div#tipaverage').html('0');

        $('div#tip').html('0.00');
        $('div#subtotal').html('0.00');
        $('div#total').html('0.00');

      });

      STORE.count = 0;
      STORE.tiptotal =0;
});
