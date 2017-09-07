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

var placeImage = function(args, cb = null) {
    var target = args.target;
    var url = args.source;
    var title = args.title || null;
    var refs = args.references || [];
    if (!Array.isArray(refs)) refs = [];

    var tra = makeTitleAndRefAnchors(title, refs, 'image_heading');
    if (tra) target.appendChild(tra);
    var img  = document.createElement('img');
    img.className = 'image';
    img.src = url;
    target.appendChild(img);
    if (cb) return cb(null);
};

var makeTitleAndRefAnchors = function(title, refs, tclass = 'table_heading') {
    var t = null;
    if (title) {
        t = document.createElement('div');
        t.innerText = title;
        t.className = tclass;
        for (var i=0;i<refs.length;i++) {
            console.log('ref: ' + refs[i]);
            var x = document.createElement('span');
            x.className = "reference";
            x.setAttribute('ref',refs[i]);
            t.appendChild(x);
            if (i < refs.length-1) {
                var y = document.createElement('sup');
                y.innerText = ',';
                t.appendChild(y);
            }
        }
    }
    return t;
};

var makeTableFromCSV = function(args, cb = null) {
    var target = args.target;
    var url = args.source;
    var title = args.title || null;
    var refs = args.references || [];
    var classes = args.classes || default_table_classes;
    var widths = args.widths || null;

    // target, url, title, refs = null, classes = default_table_classes) {
    console.log('makeTableFromCSV');
    if (!Array.isArray(refs)) refs = [];
    console.log(JSON.stringify(refs,null,2));
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function() {
        // console.log(xhr);
        if ((xhr.status === 200) || (xhr.status === 0)){
            var tra = makeTitleAndRefAnchors(title, refs, 'table_heading');
            if (tra) target.appendChild(tra);
            var ary = csvToArry(xhr.responseText);
            var reflink = { text: url, href: url };
            var table = makeTableFromArry(ary, classes, reflink, widths);
            target.appendChild(table);
        } else {
            target.innerText = 'Failed to load supporting data';
        }
        if (cb) return cb();
    };
    xhr.send();
};

var makeChartFromCSV = function(args, cb = null) {
    var type = args.type;
    var target = args.target;
    var url = args.source;
    var options= args.options;
    var title = args.title;
    var refs = args.references || [];

    console.log('makeChartFromCSV');
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function() {
        // console.log(xhr);
        if ((xhr.status === 200) || (xhr.status === 0)){
            var ary = csvToArry(xhr.responseText);
            var reflink = { text: url, href: url };
            makeChartFromArry(type, target, ary, options, reflink);
            var tra = makeTitleAndRefAnchors(title, refs, 'table_heading');
            if (tra) target.insertBefore(tra,target.firstChild);
        } else {
            target.innerText = 'Failed to load supporting data';
        }
        if (cb) return cb(null);
    };
    xhr.send();
};

var makeChartFromArry = function(type, target, data, options = null, link = null) {
    console.log('makeBarChartFromArry()');
    console.log(data);
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
    // console.log('widths');
    // console.log(JSON.stringify(widths,null,2));
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
    console.log('finalizeReferences');
    if ((refs === null) || (refs === undefined))  refs = references;

    var mentions = target.getElementsByClassName('reference');
    console.log(JSON.stringify(mentions,null,2));
    if (!mentions.length) return;
    // console.log('MENTIONS');
    // console.log(mentions);
    var uses = {};

    for (var j=0; j<mentions.length; j++) {
        var refkey = mentions[j].getAttribute('ref');
        var suppress_anchor = mentions[j].getAttribute('suppress');
        console.log('refkey: ' + refkey);
        if (refkey && refkey.length) {
            // console.log('refkey: ' + refkey);
            ref_dst_anchor = '#ref_dst_' + refkey;
            ref_src_anchor = '#ref_src_' + j.toString();
            if (refs.hasOwnProperty(refkey)) {
                var ref = refs[refkey];
                // console.log(ref);
                if (!uses.hasOwnProperty(refkey)) uses[refkey] = [];
                uses[refkey].push(j);

                if (!suppress_anchor) {
                    var a = document.createElement('a');
                    a.className = 'ref_marker';
                    var b = document.createElement('sup');
                    b.innerText = (j+1).toString();
                    a.href = ref_dst_anchor;
                    a.appendChild(b);
                    mentions[j].appendChild(a);
                    mentions[j].id = ref_src_anchor;
                }
            } else {
                var e = document.createElement('div');
                e.className = 'tbd';
                e.innerText = 'Reference error: "' + refkey + '" not defined';
                mentions[j].appendChild(e);
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
            ['title',   'span', 'reflist_title',   ['','']   ],
            ['journal', 'span', 'reflist_journal', ['','']   ],
            ['author',  'span', 'reflist_author',  ['','']   ],
            ['date',    'span', 'reflist_year',    ['(',')'] ],
            ['link',    'a',    'reflist_link',    ['<','>'] ],

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

var applyActions = function(actions, cb = null) {
    async.each(actions,function(action,ecb) {
        var target = action.target || null;
        if (typeof target === 'string') {
            target = document.getElementById(target);
            action.target = target;
        }
        if (!target) {
            if (cb) return cb('err - missing target');
            return;
        }
        if (!target.className || (target.className.length === 0)) {
            target.className = 'generic_object_container';
        }

        console.log(action);
        switch (action.action) {
            case 'tablecsv':
                makeTableFromCSV(action,function() {
                    console.log('calling callback from makeTableFromCSV');
                    ecb(null);
                });
                break;
            case 'chartcsv':
                makeChartFromCSV(action,function() {
                    ecb(null);
                });
                break;
            case 'image':
                placeImage(action,function() { ecb(null); });
                break;
            default:
                ecb(null);
        }
    },
    function() {
        console.log('done with each');
        contentAllDone();
        if (cb) return cb();
    });
};

