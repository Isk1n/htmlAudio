import xlrd
import json
rb = xlrd.open_workbook('music.xls')
rs = rb.sheet_by_index(0)
obj = {}

for rownum in range(0,rs.nrows):
    obj[rs.cell_value(rownum, 0)] = []
    obj[rs.cell_value(rownum, 0)].append({u'url':rs.cell_value(rownum, 1),u'credits':rs.cell_value(rownum, 2)})

with open('music.json', 'w') as f:
    f.write(json.dumps(obj))