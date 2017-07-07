#!/usr/bin/env python3

import requests
import json
import csv

def namesAndValsToHash(names, vals):
    idx = 0;
    h = {}
    for name in names:
        if idx < len(vals):
            h[name] = vals[idx]
        else:
            h[name] = ''
        idx += 1
    return h


def arrayToHashByIndex(ary):
    h = {}
    idx = 0
    for aval in ary:
        h[aval] = idx
        idx += 1
    return h

def loadByKey(reader, keyname):
    result = {}
    rownum = 0
    colnames = []
    colnums = {}
    for row in reader:
        if rownum == 0:
            colnames = row
            colnums = arrayToHashByIndex(colnames)
        else:
            if len(row):
                rowid = row[colnums[keyname]]
                result[rowid] = namesAndValsToHash(colnames,row)
            else:
                pass # empty line?
        rownum += 1
    return result


def dumpJSfile(fn,data,varname):
    with open(fn,'w') as ofh:
        ofh.write('var ' + varname + ' =\n')
        ofh.write(json.dumps(data,sort_keys=True,indent=4))
        ofh.write(';\n')

def fetchData(url):
    r = requests.get(url);
    if r.status_code == 200:
        reader = csv.reader(r.content.decode('utf-8').splitlines())
        data = loadByKey(reader, 'identifier')
        return data
    return None


if __name__ == '__main__':
    sheet_url = 'https://docs.google.com/spreadsheets/d/1fO305OVGkHsPI92kKmgSvNwRT3025wOeuTwV7tc0jbE/pub?gid=0&single=true&output=csv'
    data = fetchData(sheet_url);
    if data:
        dumpJSfile('references.js',data,'references') 
    else:
        print('Error could not get data.')


