/* jshint esversion:6 */
var default_table_classes = {
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
    reflink: 'csvRefLink',
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
        if (line.length) {
            var row = csvLineToArray(line);
            for (var k=0;k<row.length;k++) {
                if (row[k].match(/^\d+\.?\d*$/)) {
                    row[k] = parseFloat(row[k]);
                }
            }
            oa.push(row);
        }
    }
    return oa;
};


var makeTableFromCSV = function(target, url, title, classes = default_table_classes) {
    console.log('makeTableFromCSV');
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function() {
        // console.log(xhr);
        if ((xhr.status === 200) || (xhr.status === 0)){
            if (title) {
                var t = document.createElement('div');
                t.innerText = title;
                t.className = 'table_heading';
                target.appendChild(t);
            }
            var ary = csvToArry(xhr.responseText);
            var reflink = { text: url, href: url };
            var table = makeTableFromArry(ary, classes,reflink);
            target.appendChild(table);
        } else {
            target.innerText = 'Failed to load supporting data';
        }
    };
    xhr.send();
};

var makeChartFromCSV = function(type, target, url, titles) {
    console.log('makeBarChartFromCSV');
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function() {
        // console.log(xhr);
        if ((xhr.status === 200) || (xhr.status === 0)){
            var ary = csvToArry(xhr.responseText);
            var reflink = { text: url, href: url };
            makeChartFromArry(type, target, ary, titles, reflink);
        } else {
            target.innerText = 'Failed to load supporting data';
        }
    };
    xhr.send();
};

var makeChartFromArry = function(type, target, data, options = null, link = null) {
    console.log('makeBarChartFromArry()');
    var drawChart = function() {
        console.log('drawChart()');
        var cdata = google.visualization.arrayToDataTable(data);
        // var chart = new google.charts.Bar(target);
        // chart.draw(cdata, google.charts.Bar.convertOptions(options));
        var chart = null;
        switch (type) {
            case 'bar': 
                chart = new google.visualization.ColumnChart(target); 
                break;
            case 'pie': 
                chart = new google.visualization.PieChart(target); 
                break;
            case 'line': 
                chart = new google.visualization.LineChart(target); 
                break;
            default:
                chart = new google.visualization.ColumnChart(target); 
        }

        chart.draw(cdata, options);
    };

    // This is a hack to unhide the div's hidden parent because
    // Google Charts won't render properly in a hidden div
    var contentdiv = target.parentNode.parentNode;
    var cdiv_display = contentdiv.style.display; 
    contentdiv.style.display = 'block';
    drawChart();
    // then return the content div to whatever it had been before
    contentdiv.style.display = cdiv_display;

    if (link) {
        var ld = document.createElement('div');
        ld.className = 'refLink';
        var a = document.createElement('a');
        a.innerText = link.text;
        a.href = link.href;
        ld.appendChild(a);
        target.appendChild(ld);
    }
};


var makeTableFromArry = function(data, classes = default_table_classes,
                                 link = null, widths = null) {
    var telem = document.createElement('table');
    telem.className = classes.table;
    var i,j;
    var max_cols = 0;
    for (j=0; j<data.length; j++) {
        var tr = document.createElement('tr');
        var tr_classes = [];
        if (j === 0) tr_classes.push(classes.top);
        else tr_classes.push(j % 2 ? classes.orow : classes.erow);
        if (j === data.length-1) tr_classes.push(classes.bottom);
        tr.className = tr_classes.join(' ');
        var row = data[j];
        if (row.length > max_cols) max_cols = row.length;
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
            if (widths && (i<widths.length)) {
                td.width = widths[i].toString() +'%';
            }

            tr.appendChild(td);
        }
        telem.appendChild(tr);
    }
    // optionally add a final row that has a single td that contains
    // a link to the source data file for download
    if (link) {
        var ltr = document.createElement('tr');
        var ltd = document.createElement('td');
        ltd.colSpan = max_cols;
        ltd.className = classes.reflink;
        var a = document.createElement('a');
        a.href = link.href;
        a.innerText = link.text;
        ltd.appendChild(a);
        ltr.appendChild(ltd);
        telem.appendChild(ltr);
    }
    return telem;
};

var finalizeReferences = function(target, refs) {
    if ((refs === null) || (refs === undefined))  refs = references;

    var mentions = target.getElementsByClassName('reference');
    if (!mentions.length) return;
    // console.log('MENTIONS');
    // console.log(mentions);
    var uses = {};

    for (var j=0; j<mentions.length; j++) {
        var refkey = mentions[j].getAttribute('ref');
        if (refkey && refkey.length) {
            // console.log('refkey: ' + refkey);
            ref_dst_anchor = '#ref_dst_' + refkey;
            ref_src_anchor = '#ref_src_' + j.toString();
            if (refs.hasOwnProperty(refkey)) {
                var ref = refs[refkey];
                // console.log(ref);
                if (!uses.hasOwnProperty(refkey)) uses[refkey] = [];
                uses[refkey].push(j);

                var a = document.createElement('a');
                a.className = 'ref_marker';
                var b = document.createElement('sup');
                b.innerText = (j+1).toString();
                a.href = ref_dst_anchor;
                a.appendChild(b);
                mentions[j].appendChild(a);
                mentions[j].id = ref_src_anchor;
            }
        }
    }

    // var refshome = target.getElementById('refs_container');
    var refshomes = target.getElementsByClassName('references_container');
    if (!refshomes.length) return;
    var refshome = refshomes[0];

    var x0 = document.createElement('hr');
    refshome.appendChild(x0);
    var x1 = document.createElement('div');
    x1.innerText = 'References';
    refshome.appendChild(x1);
    var t0 = document.createElement('table');
    var use_keys = Object.keys(uses);
    for (j=0; j<use_keys.length; j++) {
        var use_key = use_keys[j];
        // var ref = refs[use_key];
        var tr0 = document.createElement('tr');
        tr0.id = 'ref_dst_' + use_key;
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        for (var i=0;i<uses[use_key].length;i++) {
            idx = uses[use_key][i];
            var a1 = document.createElement('a');
            a1.innerText = (idx + 1).toString();
            a1.href = '#ref_src_' + idx.toString();
            td0.appendChild(a1);
            if (i != (uses[use_key].length-1)) {
                var s1 = document.createElement('span');
                s1.innerText = ', ';
                td0.appendChild(s1);
            }
        }
        // td0.innerText = uses[use_key].map(function(x) { return x+1; }).join(', ');
        tr0.appendChild(td0);
        var s0 = document.createElement('span');

        var r = refs[use_key];
        var rs = [];
        var t;

        var bibElems = [
            ['title', 'span', 'reflist_title', ['',''] ],
            ['journal', 'span', 'reflist_journal', ['',''] ],
            ['author', 'span', 'reflist_author', ['',''] ],
            ['date', 'span', 'reflist_year', ['(',')'] ],
            ['link', 'a', 'reflist_link', ['<','>'] ],

        ];

        /*jshint loopfunc: true */
        bibElems.forEach(function(bibElem) {
            if (r.hasOwnProperty(bibElem[0]) &&
                r[bibElem[0]].length) {
                t = document.createElement(bibElem[1]);
                t.className = bibElem[2];
                t.innerText = bibElem[3][0] + r[bibElem[0]] + bibElem[3][1];
                if (bibElem[1] == 'a') {
                    t.href = r[bibElem[0]];
                }
                rs.push(t);
            }
        });

        for (var k=0; k<rs.length; k++) {
            s0.appendChild(rs[k]);
            if (k < (rs.length-1)) {
                var c = document.createElement('span');
                c.innerText = ', ';
                s0.appendChild(c);
            }
        }
        td1.appendChild(s0);

        tr0.appendChild(td1);
        t0.appendChild(tr0);
    }
    refshome.appendChild(t0);
    
};

