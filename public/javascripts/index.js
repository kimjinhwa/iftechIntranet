
fileList = document.getElementById('file-list');
const table = document.createElement('table');
table.classList.add('file-table');
fileList.appendChild(table);
const hrow = document.createElement('tr');
hrow.classList.add('file-hrow');
var hcolumn = document.createElement('th');
hcolumn.classList.add('file-column');
hcolumn.innerText = "first";
hrow.appendChild(hcolumn);
hcolumn = document.createElement('th');
hcolumn.classList.add('file-column');
hcolumn.innerText = "second";
hrow.appendChild(hcolumn);
hcolumn = document.createElement('th');
hcolumn.classList.add('file-column');
hcolumn.innerText = "third";
hrow.appendChild(hcolumn);
hcolumn = document.createElement('th');
hcolumn.classList.add('file-column');
hcolumn.innerText = "forth";
hrow.appendChild(hcolumn);


fileList.appendChild(hrow);

fetch('/files?years=' + requestYears)
    .then(response => response.json())
    .then(data => {
        fileListArray = data.map(filePath => filePath.split(/[\\/]/));
        let firstValue = "";
        let secondValue = "";
        let thirdValue = "";
        fileListArray.forEach(parts => {
            const row = document.createElement('tr');
            row.classList.add('file-row');
            let colPos = 0;
            if (parts.length == 2) {
                parts.push("");
                parts.push("");
                //parts.appendChild("");
            }
            if (parts.length == 3) {
                parts.push("");
            }
            console.log(parts.length)

            parts.forEach(part => {
                if (colPos === 0) {
                    if (firstValue === part) {
                        part = "";
                    }
                    else {
                        firstValue = part;
                    }
                }
                if (colPos === 1) {
                    if (secondValue === part) {
                        part = "";
                    }
                    else {
                        secondValue = part;
                    }
                }
                if (colPos === 2) {
                    if (thirdValue === part) {
                        part = "";
                    }
                    else {
                        thirdValue = part;
                    }
                }
                // if (colPos === 3) {
                //     const column = document.createElement('td');
                //     column.classList.add('file-column');
                //     const link = document.createElement('a');
                //     //link.href = 'file://' + parts.join('/');
                //     link.href = '\\\\192.168.0.7\\01 민수 장비 제작\\2022년 진행중 프로젝트';
                //     link.target = '_blank';
                //     link.innerText = part;
                //     column.appendChild(link);
                //     console.log(link);
                //     row.appendChild(column);
                // }
                //else 
                {
                    var column = document.createElement('td');
                    column.classList.add('file-column');
                    column.innerText = part;
                    row.appendChild(column);
                }
                colPos++;
            });
            fileList.appendChild(row);
        });
    });

        // var cells = document.querySelectorAll('#file-list td');
        // var newdata = [];
        // let row = [];
        // for (let i = 0; i < cells.length; i++) {
        //     const cell = cells[i];
        //     row.push(cell.innerText);
        //     if (cell.cellIndex === cell.parentElement.cells.length - 1) {
        //         newdata.push(row);
        //         console.log(row);
        //         row = [];
        //     }
        // }
        // console.log(row);
        // row = [];

