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