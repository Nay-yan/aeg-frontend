let sortDirectioy = false;
let personData=[
    {id:'1',type:'income',description:'Rice Sale',amount:1000000,quantity:'10 bags',created:'2020-11-24T00:10:33.000Z'},
    {id:'2',type:'expense',description:'Utility Bill',amount:150000,quantity:'500 kW',created:'2020-11-24T00:10:33.000Z'},
    {id:'3',type:'income',description:'Rice Sale',amount:1000500,quantity:'10 bags',created:'2020-11-24T00:10:33.000Z'},
    {id:'4',type:'expense',description:'Tractor Rent',amount:150030,quantity:'500 kW',created:'2020-11-24T00:10:33.000Z'},
    {id:'5',type:'income',description:'Corn Sale',amount:10005660,quantity:'10 bags',created:'2020-11-24T00:10:33.000Z'},
    {id:'6',type:'expense',description:'Utility Bill',amount:150000,quantity:'500 kW',created:'2020-11-24T00:10:33.000Z'},
    {id:'10',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:13:07.000Z'},
    {id:'11',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:13:27.000Z'},
    {id:'12',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:13:48.000Z'},
    {id:'13',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:13:56.000Z'},
    {id:'14',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:14:40.000Z'},
    {id:'15',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:15:27.000Z'},
    {id:'16',type:'income',description:'test description',amount:100,quantity:'10 bags',created:'2020-11-24T00:15:59.000Z'},
];
window.onload =() =>{
    loadTableDT(personData);
};
function loadTableDT(personData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml ='';

    for(let person of personData){
        dataHtml += `<tr>
                        <td style="vertical-align:middle">${person.id}</td>
                        <td style="vertical-align:middle">${person.type}</td>
                        <td style="vertical-align:middle">${person.description}</td>
                        <td style="vertical-align:middle">${person.amount}</td>
                        <td style="vertical-align:middle">${person.quantity}</td>
                        <td style="vertical-align:middle">${person.created}</td>
                    </tr> `;              
    }
    tableBody.innerHTML=dataHtml;
}

// adsfasdfasdf
const incomingJSONString =`[
    {"id":"1","type":"income","description":"Rice Sale","amount":1000000,"quantity":"10 bags","created":"2020-11-24T00:10:33.000Z"},
    {"id":"2","type":"expense","description":"Utility Bill","amount":150000,"quantity":"500 kW","created":"2020-11-24T00:10:33.000Z"},
    {"id":"3","type":"income","description":"Rice Sale","amount":1000500,"quantity":"10 bags","created":"2020-11-24T00:10:33.000Z"},
    {"id":"4","type":"expense","description":"Tractor Rent","amount":150030,"quantity":"500 kW","created":"2020-11-24T00:10:33.000Z"},
    {"id":"5","type":"income","description":"Corn Sale","amount":10005660,"quantity":"10 bags","created":"2020-11-24T00:10:33.000Z"},
    {"id":"6","type":"expense","description":"Utility Bill","amount":150000,"quantity":"500 kW","created":"2020-11-24T00:10:33.000Z"},
    {"id":"10","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:13:07.000Z"},
    {"id":"11","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:13:27.000Z"},
    {"id":"12","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:13:48.000Z"},
    {"id":"13","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:13:56.000Z"},
    {"id":"14","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:14:40.000Z"},
    {"id":"15","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:15:27.000Z"},
    {"id":"16","type":"income","description":"test description","amount":100,"quantity":"10 bags","created":"2020-11-24T00:15:59.000Z"}
]`;
const jsonData =JSON.parse(incomingJSONString);
const jsonDataWithTimeObject = jsonData.map((item)=>{
    item.created_at = new Date(item.created_at);
    return item;
})
let totalIncome  = 0;
let totalExpense = 0;
let totalCashFlow  = 0;
for (let i of jsonDataWithTimeObject){
    if(i.type == "income"){
        totalIncome = totalIncome + i.amount;
    }else if(i.type == "expense"){
        totalExpense = totalExpense + i.amount;
    }
    totalCashFlow = totalCashFlow + i.amount;
}

console.log(totalIncome);
console.log(totalExpense);
console.log(totalCashFlow);
document.getElementById('totalIncome').innerHTML=totalIncome;
document.getElementById('totalExpense').innerHTML=totalExpense;
document.getElementById('totalCashFlow').innerHTML=totalCashFlow;



// Sort 
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true; 
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
