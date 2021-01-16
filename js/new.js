$(document).ready(function(){
    $('.nav_parent').click( function(){
        $('.nav_parent').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.acc_b_menu').click( function(){
        $('.nav_parent').addClass('adaptive');
        $('body').addClass('noscroll')
        $('.left_menu').css({'display': 'block'})
        $('.overlay').css({'display': 'block', 'z-index': '12'})
        return false;
    });

    $('.add_sklad_adaptive').click( function(){
        $('body').addClass('noscroll')
        $('.overlay').css({'display': 'block'})
        return false;
    });

    $('.add_partner_adaptive').click( function(){
        $('body').addClass('noscroll')
        $('.overlay').css({'display': 'block'})
        return false;
    });

    $('.modal_view_adaptive').click( function(){
        $('body').addClass('noscroll')
        $('.overlay').css({'display': 'block'})
        return false;
    });

    $('.overlay').click( function(){
        $('.nav_parent').removeClass('adaptive');
        $('.left_menu').css({'display': 'none'})
        $('.overlay').css({'display': 'none', 'z-index': '10'})
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

    $('.add_sklad').click(function(){
        $('.modal_sklad').css({'display': 'block'});
        $('body').addClass('noscroll')
    });

    $('.close_modal').click(function(){
        $('.modal_sale').css({'display': 'none'});
        $('body').removeClass('noscroll');
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

    $('.title_line_adaptive').click(function(){
        $('.overlay').css({'display': 'block', 'z-index': '10'})
    });

    $('.closebig').click(function(){
        $('.modal_partner').css({'display': 'none'});
        $('.modal_send').css({'display': 'none'});
        $('.modal_view').css({'display': 'none'});
        $('.modal_sale').css({'display': 'none'});
        $('.modal_sklad').css({'display': 'none'});
        $('.overlay').css({'display': 'none'})
        $('body').removeClass('noscroll')
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

    $('.tinput_menu').click(function(){
        $(this).toggleClass('tinput_menu_active')
        $('.array_down').toggleClass('tinput_menu_array_down');
    });

    // $('body').click(function(){
    //     $('.tinput_menu').removeClass('tinput_menu_active')
    //     // $('.sklad_menu').css({'display': 'block'});
    //     $('.tinput_menu_array_down').css({'transform': 'rotate(180deg)'});
    // });
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



