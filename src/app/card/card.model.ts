export class TableConfig {
    row : Array<row> = new Array<row>()
}

export class row {
    width: string;
    name: string;
    id: string;
    tableData: Array<any> = new Array<any>()
}

export class D_Table { 
    tableTitle: Array<any> = new Array<any>();
    tableData: Array<any> = new Array<any>();
}