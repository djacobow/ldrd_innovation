// This function is for an experimental feature to specify the page
// as a json struct rather than html. Probably more trouble than it's worth

var elaborateFromJSON = function(target, data) {
    console.log('elaborateJSON');
    var iter = 0;
    data.forEach(function(d) {
        var div0 = document.createElement('div');
        div0.className = 'section';
        target.appendChild(div0);
        var div00 = document.createElement('div');
        div00.className = 'section_heading';
        div00.innerText = d.head;
        // console.log('elaborating: ' + d.head);
        div0.appendChild(div00);

        var contents = d.contents;
        if (contents.hasOwnProperty('paras')) {
            contents.paras.forEach(function(para) {
                // console.log('doing para');
                if (para.hasOwnProperty('subhead')) {
                    var div01 = document.createElement('div');
                    div01.className = 'section_subheading';
                    div01.innerText = para.subhead;
                    div0.appendChild(div01);
                }
                if (para.hasOwnProperty('text')) {
                    var p = document.createElement('p');
                    p.className = 'paragraph';
                    p.innerText = para.text;
                    div0.appendChild(p);
                }
            });
        }

        var div0n = document.createElement('div');
        div0n.id = target.id + '_' + iter.toString();
        div0.appendChild(div0n);

        extra_args = {};
        if (contents.hasOwnProperty('args')) extra_args = contents.args;

        var copyanchor = null;
        if (contents.hasOwnProperty('copyright')) {
            if (contents.copyright.hasOwnProperty('href')) {
                copyanchor = document.createElement('a');
                copyanchor.className = 'section_copyright';
                copyanchor.href = contents.copyright.href;
                if (contents.copyright.hasOwnProperty('text')) {
                    copyanchor.innerText = contents.copyright.text;
                } else {
                    copyanchor.innerText = contents.copyright.href;
                }
            }
        }


        var type = contents.hasOwnProperty('type') ? contents.type : '';

        switch (contents.type) {
            case 'raw_html':
                div0n.innerHTML = contents.data;
                break;
            case 'paragraphs':
                // any section can have paras; we deal with them above.
                // They will always come before the element.
                break;
            case 'table':
                if (contents.hasOwnProperty('file')) {
                    makeTableFromCSV(div0n,contents.file);
                } else if (contents.hasOwnProperty('data')) {
                    div0n.appendChild(makeTableFromArry(contents.data));
                }
                break;
            case 'pie':
            case 'bar':
            case 'line':
                div0n.className = 'basic_chart';
                // console.log(contents.type);
                makeChartFromCSV(contents.type,div0n,contents.file, extra_args);
                break;
            case 'gsheet':
                var ifr = document.createElement('iframe');
                ifr.className = 'basic_sheet';
                ifr.src = contents.src;
                div0n.appendChild(ifr);
                break;
            default:
                // do nothing
                break;
        }

        if (copyanchor) {
            div0.appendChild(copyanchor);
            div0c = document.createElement('div');
            div0c.className = 'section_copyright';
            div0c.appendChild(copyanchor);
            div0.appendChild(div0c);
        }

        // console.log('appending');
        iter += 1;
    });
};

