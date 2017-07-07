/* jshint esversion:6 */

var indata_by_id = {}; // global copies of all leafdata
var leafdata = null;   // currently selected leaf's data

// magic that can be run on imported html that will make the scripts
// within runnable.
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




var selectTab = function (evt, buttonID) {
    console.log('buttonID: ' + buttonID);
    var i, tabcontent, tablinks;

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";

    var tab_name = buttonID.replace('btn_','');
    populateTab(document.getElementById('info_blobs'),tab_name);
};


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


// fetch a resource then apply it to a target, or run a callback.
// Also, make any scripts embedded in the html runnable
var fetchAndDo = function(target, resource, parse, cb = null) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(e) {
        if (parse && cb) {
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
            if (cb) cb();
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



var populateTab = function(target, tab_id) {
    console.log('populateTab');
    console.log('target');
    console.log(target);
    console.log('tab_id');
    console.log(tab_id);

    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

    function placeRefs() { finalizeReferences(target); }

    var tab = leafdata.info[tab_id];
    if (tab.hasOwnProperty('embed')) {
        var nif = document.createElement('iframe');
        nif.src = tab.embed;
        target.appendChild(nif);
        placeRefs();
    } else if (tab.hasOwnProperty('htfile')) {
        fetchAndDo(target,tab.htfile,false,function() {
            placeRefs();
        });
    } else if (tab.hasOwnProperty('jsfile')) {
        fetchAndDo(target,tab.jsfile,true,function(t,d) {
            elaborateFromJSON(t,d);
            placeRefs();
        });
    } else {
        target.innerText = tab.data;
        placeRefs();
    }
    target.className = 'contenttab';
};



var setupTabs = function(item_id, item_path) {
    var i;
    console.log('setupTabs: ' + item_id);

    // remove all the tab buttons
    var tabLinksDiv = document.getElementById('tab_buttons');
    while (tabLinksDiv.firstChild) {
        tabLinksDiv.removeChild(tabLinksDiv.firstChild);
    }

    // remove everything in the "content" area
    var infosDiv = document.getElementById('info_blobs');
    while (infosDiv.firstChild) {
        infosDiv.removeChild(infosDiv.firstChild);
    }

    // create cute "arrows" at the top of the page
    document.getElementById('leafname').innerText = item_path.join(' \u21A0 ');
    leafdata = indata_by_id[item_id];

    // create buttons and attach listener
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

        }

        // kick off a fake event that will select the first
        // tab after a leaf has been selected
        var event = new MouseEvent('click', {
            currentTarget: first_button,
            srcElement: first_button,
        });
        first_button.dispatchEvent(event);
    }
};

var setupTree = function() {

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
         console.log('DATA_NODE');
         path.push(data.node.text);
         path.shift();

         var np = path.map(function(elem) {
             if (indata_by_id.hasOwnProperty(elem) &&
                 indata_by_id[elem].hasOwnProperty('name')) return indata_by_id[elem].name;
             else
                 return elem;

         });
         var id = data.node.id;
         setupTabs(id,np);
     }
 });
};

var init = function() {
    google.charts.load('current', {'packages':['corechart','bar']});

    google.charts.setOnLoadCallback(function() {
        console.log('google charts loaded');
        setupTree();
    });
};



init();

