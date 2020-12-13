$(document).ready(function(){
    $('.nav_parent').click( function(){
        $(this).toggleClass('active');
        return false;
    });

    $(document).on('click', '.acc_n', function(){
        $(this).toggleClass('active');
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

    $('.footer_line a').click(function(){
        $('.modal_send').addClass('modal_send_active');

        if ($('.modal_send').hasClass('modal_send_active')) {
            $('.overlay').css({'display': 'block'})
        }
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

    $('.open_view').click(function(){
        $('.modal_view').css({'display': 'block'});
    });

    $('.add_partner').click(function(){
        $('.modal_partner').css({'display': 'block'});
    });

    $('.add_sale').click(function(){
        $('.modal_sale').css({'display': 'block'});
    });

    $('.send_points').click(function(){
        $('.modal_send').css({'display': 'block'});
    });

    $('.modal_line .closebig').click(function(){
        $('.modal_line').css({'display': 'none'});
        $('.footer_line').css({'display': 'block'});
        $('.title_line').css({'display': 'block'});
    });

    $('.title_line').click(function(){
        $('.modal_line').css({'display': 'block'});
        $(this).css({'display': 'none'});
    });

    $('.closebig').click(function(){
        $('.modal_partner').css({'display': 'none'});
        $('.modal_send').css({'display': 'none'});
        $('.modal_view').css({'display': 'none'});
        $('.modal_sale').css({'display': 'none'});
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

    $('a.open').click(function(){
        $('.hidden_component').addClass('active');
    });

    $('a.hidden').click(function(){
        $('.hidden_component').removeClass('active');
    });

    $('.mailslog').click(function(){
        $(this).addClass('active');
        $('.comment_block').css({'display': 'block'});
        $('.footer').css({'display': 'block'});
    });
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



