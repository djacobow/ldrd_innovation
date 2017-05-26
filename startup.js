/* jshint esversion:6 */

function makeScriptsRun(node) {
    if (node.tagName === 'SCRIPT') {
        node.parentNode.replaceChild( nodeScriptClone(node) , node );
    }
    else {
        var i        = 0;
        var children = node.childNodes;
        while ( i < children.length ) {
            makeScriptsRun( children[i++] );
        }
    }
    return node;
}

function nodeScriptClone(node){
    var script  = document.createElement("script");
    script.text = node.innerHTML;
    for( var i = node.attributes.length-1; i >= 0; i-- ) {
        script.setAttribute( node.attributes[i].name, node.attributes[i].value );
    }
    return script;
}




var indata_by_id = {};

function selectTab (evt, tabName) {
    // console.log('selectTab ' + tabName);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contenttab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var contentName = tabName.replace('btn_','info_');
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}


var makeTreeData = function(id) {
    var od = [];
    for (var i=0; i<id.length; i++) {
        var leafdata = id[i];
        var leaf = {};
        leaf.icon = 'rt_chev_32.png';
        leaf.id = leafdata.id;
        leaf.text = leafdata.name;
        leaf.parent = leafdata.parent ? leafdata.parent : '#';
        od.push(leaf);
    }
    return od;
};


var fetchAndDo = function(target, resource, cb = null) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(e) {
        // console.log(e);
        if (cb) {
            try {
                var d = JSON.parse(xhr.response);
                cb(target,d);
            } catch(err) {
                var pre = document.createElement('pre');
                console.log(err);
                pre.innerText = JSON.stringify(err,null,2);
            }
        } else {
            target.innerHTML = xhr.response;
        }
        makeScriptsRun(target);
    });
    xhr.open('GET',resource);
    xhr.send();
};

function makeid(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i<len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

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
        console.log('elaborating: ' + d.head);
        div0.appendChild(div00);

        var contents = d.contents;
        if (contents.hasOwnProperty('paras')) {
            contents.paras.forEach(function(para) {
                if (para.hasOwnProperty('text')) {
                    var p = document.createElement('p');
                    p.className = 'paragraph';
                    p.innerText = para.text;
                    div0.appendChild(p);
                }
                if (para.hasOwnProperty('subhead')) {
                    var div01 = document.createElement('div');
                    div01.className = 'section_subheading';
                    div01.innerText = para.subhead;
                    div0.appendChild(div01);
                }
            });
        }

        var div0n = document.createElement('div');
        div0n.id = target.id + '_' + iter.toString();
        div0.appendChild(div0n);

        extra_args = {};
        if (contents.hasOwnProperty('args')) extra_args = contents.args;

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
                console.log(contents.type);
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
        console.log('appending');
        iter += 1;
    });
    console.log(data);
};

var populateTabs = function(item_id, item_path) {
    var i;
    console.log('populateTabs: ' + item_id);

    var tabLinksDiv = document.getElementById('tab_buttons');
    while (tabLinksDiv.firstChild) {
        tabLinksDiv.removeChild(tabLinksDiv.firstChild);
    }
    var infosDiv = document.getElementById('info_blobs');
    while (infosDiv.firstChild) {
        infosDiv.removeChild(infosDiv.firstChild);
    }

    document.getElementById('leafname').innerText = item_path.join(' \u21A0 ');
    var leafdata = indata_by_id[item_id];

    var first_button = null;
    if (leafdata.hasOwnProperty('info')) {
        var tab_ids = Object.keys(leafdata.info);
        for (i=0; i<tab_ids.length; i++) {
            var tabbutton = document.createElement('button');
            if (i===0) first_button = tabbutton;
            var tab_id = tab_ids[i];
            tabbutton.id = 'btn_' + tab_id;
            tabbutton.innerText = leafdata.info[tab_id].name;
            tabbutton.className = 'tablinks';
            /* jshint loopfunc: true */
            tabbutton.addEventListener('click', function(ev) {
                selectTab(ev,ev.target.id);
            });
            tabLinksDiv.appendChild(tabbutton);

            var target = document.createElement('div');
            var target_id = 'info_' + tab_id;
            target.id = target_id;
            var tab = leafdata.info[tab_id];
            if (tab.hasOwnProperty('embed')) {
                var nif = document.createElement('iframe');
                nif.src = tab.embed;
                target.appendChild(nif);
            } else if (tab.hasOwnProperty('htfile')) {
                fetchAndDo(target,tab.htfile,null);
            } else if (tab.hasOwnProperty('jsfile')) {
                fetchAndDo(target,tab.jsfile,elaborateFromJSON);
            } else {
                target.innerText = tab.data;
            }
            target.className = 'contenttab';
            infosDiv.appendChild(target);
        }

        // kick off a fake event that will select the first
        // tab
        var event = new MouseEvent('click', {
            currentTarget: first_button,
            srcElement: first_button,
        });
        first_button.dispatchEvent(event);
    }
};

var setup = function() {

  for (var i=0; i<indata.length; i++) {
      indata_by_id[indata[i].id] = indata[i];
  }

  $('#treediv').jstree({
    'core': {
      'themes': {
        'variant': 'large',
      },
      // 'plugin': [ 'wholerow', ],
      'data': makeTreeData(indata),
    },
  });

 $('#treediv').on('changed.jstree', function(e, data) {
     if (data.action == 'select_node') {
         var path = data.node.parents.reverse();
         path.push(data.node.text);
         path.shift();
         var id = data.node.id;
         populateTabs(id,path);
     }
 });
};

google.charts.setOnLoadCallback(function() {
    console.log('google charts loaded');
    setup();
});
google.charts.load('current', {'packages':['corechart','bar']});

