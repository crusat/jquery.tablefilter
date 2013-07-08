jquery.tablefilter
==================

Just another filter of table rows.

Using:

    // Table #myTable must contain tbody tag.

    $('input#myFilter').tablefilter({
        table: '#myTable'
    });

    // Filter without ignoring letter case.

    $('input#myFilter').tablefilter({
        table: '#myTable',
        ignoreLetterCase: false
    });

    // You can use data-tablefilter-ignore="1" for ignoring rows
    <tr data-tablefilter-ignore="1">...</tr>