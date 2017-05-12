/* jshint esversion:6 */
default_table_classes = {
    table : 'csvTable',
    top: 'csvTop',
    uprlft: 'csvUpperLeft',
    left: 'csvLeft',
    erow: 'csvEven',
    orow: 'csvOdd',
    cell: 'csvCell',
    ecol: '',
    ocol: '',
    right: 'csvRight',
    bottom: 'csvBottom',
};

// cribbed from: http://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
// Return array of string values, or NULL if CSV string not well formed.
function csvLineToArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
}


var csvToArry = function(dstring) {
    var oa = [];
    var lines = dstring.split(/\r?\n/);
    for (var j=0; j<lines.length; j++) {
        var line = lines[j];
        var row = csvLineToArray(line);
        oa.push(row);
    }
    return oa;
};


var makeTableFromCSV = function(target, url, classes = default_table_classes) {
    console.log('makeTableFromCSV');
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function() {
        console.log(xhr);
        if ((xhr.status === 200) || (xhr.status === 0)){
            var ary = csvToArry(xhr.responseText);
            var table = makeTableFromArry(ary, classes);
            target.appendChild(table);
        } else {
            target.innerText = 'Failed to load supporting data';
        }
    };
    xhr.send();
};


var makeTableFromArry = function(data, classes = default_table_classes) {
    var telem = document.createElement('table');
    telem.className = classes.table;
    var i,j;
    for (j=0; j<data.length; j++) {
        var tr = document.createElement('tr');
        var tr_classes = [];
        if (j === 0) tr_classes.push(classes.top);
        else tr_classes.push(j % 2 ? classes.orow : classes.erow);
        if (j === data.length-1) tr_classes.push(classes.bottom);
        tr.className = tr_classes.join(' ');
        var row = data[j];
        for (i=0;i<row.length;i++) {
            var td = document.createElement('td');
            var td_classes = [];
            if ((i === 0) && (j === 0)) td_classes.push(classes.uprlft);
            if (i === 0) td_classes.push(classes.left);
            else td_classes.push(i % 2 ? classes.ocol : classes.ecol);
            if (i === row.length-1) td_classes.push(classes.right);
            td.className = td_classes.join(' ');
            var cell = row[i];
            td.innerText = cell.toString();
            tr.appendChild(td);
        }
        telem.appendChild(tr);
    }
    return telem;
};


