$(function() {
    var quoteList = [];
    $.get('/quotes', appendToList);

    function appendToList(quotes) {
        quoteList = quotes;
        var list = [];
        for (var i in quotes) {
            quote = quotes[i];
            content = '<a href="/quotes/' + quote + '">' + quote + '</a> ' +
                '<a href="#" data-block="' + quote + '"><img src="delete.jpg" width="20" height="20"></a>';
            list.push($('<li>', { html: content }));
        }
        $('.quote-list').append(list);
    }

    $('.quote-list').on('click', 'a[data-block]', function(event) {

        if (!confirm('Are you sure ?')) { return false; }
        var target = $(event.currentTarget);
        $.ajax({
            type: 'DELETE',
            url: '/quotes/' + target.data('block')
        }).done(function() {
            target.parents('li').remove();
        });
    });

    function addQuote(form) {
      var quoteData = form.serialize();

        $.ajax({
            type: 'POST',
            url: '/quotes',
            data: quoteData
        }).done(function(quoteName) {
            appendToList([quoteName]);
            form.trigger('reset');
        });
    }

    function updateQuote(form) {
      var quoteData = form.serializeArray();
      console.log(quoteData);
        $.ajax({
            type: 'PUT',
            url: `/quotes/${quoteData[0].value}`,
            data: {text: quoteData[1].value}
        }).done(function(res) {
            form.trigger('reset');
        });
    }

    $('form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        if (!quoteList.includes(form.serializeArray()[0].value))
          addQuote(form);
        else
          updateQuote(form);
        // location.reload();
    });
});
