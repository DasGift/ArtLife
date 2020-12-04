$(document).ready(function(){
    $('.nav_parent').click( function(){
        $('.nav_parent').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(document).on('click', '.title_line', function(){
        $(this).next('.modal_line').addClass('active');
        $('body').addClass('hidden');
    });
    $(document).on('click', '.closebig', function(){
        $('.modal_line').removeClass('active');
        $('body').removeClass('hidden');
        return false;
    });

    $('.line_param_input .calendar').click(function(){
        $('.modal_calend').addClass('active');
    });

    $('.close_clnd').click(function(){
        $('.modal_calend').removeClass('active');
    });

    $('.create_account').click(function(){
        $('.modal_line').css({'display': 'block'});
    });

    $('.add_partner').click(function(){
        $('.modal_partner').css({'display': 'block'});
    });

    $('.modal_line .closebig').click(function(){
        $('.modal_line').css({'display': 'none'});
    });

    $('.modal_partner .closebig').click(function(){
        $('.modal_partner').css({'display': 'none'});
    });

    $('a.more').click(function(){
        if ($(this).hasClass('active')) {
            $('.hidden_component').removeClass('active');
            $(this).text('Раскрыть');
            $(this).removeClass('active');
        } else {
            $('.hidden_component').addClass('active');
            $(this).text('Свернуть');
            $(this).addClass('active');
        }
    });
    /* $('.fixtable').each(function() {

new FixTable(this);

}); */
});

function FixTable(table) {

    var inst = this;

    this.table  = table;



    $('tr > th',$(this.table)).each(function(index) {

        var div_fixed = $('<div/>').addClass('fixtable-fixed');

        var div_relat = $('<div/>').addClass('fixtable-relative');

        div_fixed.html($(this).html());

        div_relat.html($(this).html());

        $(this).html('').append(div_fixed).append(div_relat);

        $(div_fixed).hide();

    });



    this.StyleColumns();

    this.FixColumns();



    $(window).scroll(function(){

        inst.FixColumns()

    }).resize(function(){

        inst.StyleColumns()

    });

}



FixTable.prototype.StyleColumns = function() {

    var inst = this;

    $('tr > th', $(this.table)).each(function(){

        var div_relat = $('div.fixtable-relative', $(this));

        var th = $(div_relat).parent('th');

        $('div.fixtable-fixed', $(this)).css({

            'width': $(th).outerWidth(true) - parseInt($(th).css('border-left-width')) + 'px',

            'height': $(th).outerHeight(true) + 'px',

            'left': $(div_relat).offset().left - parseInt($(th).css('padding-left')) + 'px',

            'padding-top': $(div_relat).offset().top - $(inst.table).offset().top + 'px',

            'padding-left': $(th).css('padding-left'),

            'padding-right': $(th).css('padding-right')

        });

    });

};



FixTable.prototype.FixColumns = function() {

    var inst = this;

    var show = false;

    var s_top = $(window).scrollTop();

    var h_top = $(inst.table).offset().top;



    if (s_top < (h_top + $(inst.table).height() - $(inst.table).find('.fixtable-fixed').outerHeight()) && s_top > h_top) {

        show = true;

    }



    $('tr > th > div.fixtable-fixed', $(this.table)).each(function(){

        show ? $(this).show() : $(this).hide()

    });

};



