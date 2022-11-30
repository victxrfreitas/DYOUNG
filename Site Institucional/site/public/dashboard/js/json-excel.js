var data = [];

// DADOS CPU //

document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 6);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;chartset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function downloadExcel() {

    if (confirm("Deseja exportar para excel?")) {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = {
            Sheets: {
                'data': worksheet
            },
            SheetNames: ['data']
        };
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        console.log(excelBuffer);
        saveAsExcel(excelBuffer, 'Relatório');
    }
}

function saveAsExcel(buffer, fileName) {
    const data = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, fileName + '_export_' + EXCEL_EXTENSION);
}