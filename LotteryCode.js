function sendEmailMessage(msg) {
  var message = {
    to: "*****@tmomail.net" + "," + "******@gmail.com" + "," +"******@tmomail.net" + "," + "******@tmomail.net" ,
    subject: "CAMPBOWIE Winner selected",
    body: "< WINNERS > " + msg
  }
  MailApp.sendEmail(message);
}

function removeDuplicates() {
 var worksheet = SpreadsheetApp.openById('1N6owUD-RyAQBovumieSUAXeCsGuVctWyQ34SxqMVjrk');
var sheet = worksheet.getSheetByName('Form Responses 1');
 var data = sheet.getDataRange().getValues();

 var newData = [];
 // Logger.log(filtered);
 var d = new Date();
  d.setDate(d.getDate() - 1);
 var yesterdayDate=new Date(d);  
 //Logger.log(yesterdayDate)
 //Logger.log(data.splice(0,1))
// Logger.log(data)
for (var i in data) {
 var row = data[i];
 //Logger.log(row);
 //Logger.log(new Date(row[0]).getDate());
 if(new Date(row[0]).getDate()==yesterdayDate.getDate()){
   var duplicate = false;
    for (var j in newData) {
      if (row.join() == newData[j].join()) {
        duplicate = true;
       }
    }
    if (!duplicate) {
      newData.push(row);
    }
  let targetSheet = worksheet.getSheetByName('Sheet1');
 targetSheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}
else {
   
}
 
 
}
}
//Removing duplicates and  timestamping

 

function winner() {
removeDuplicates();
var worksheet = SpreadsheetApp.openById('1N6owUD-RyAQBovumieSUAXeCsGuVctWyQ34SxqMVjrk');
var sheet = worksheet.getSheetByName('Sheet1');
var headerRowNumber = 0; //NO COLUMN HEADERS
var values = sheet.getDataRange().offset(headerRowNumber, 0, sheet.getLastRow() - headerRowNumber).getValues();
Logger.log(values)
    random1 = Math.floor(Math.random()* (values.length));
    winner_1 = values[random1][1];
    phone_1 =  values[random1][2];
  Logger.log(winner_1);
  Logger.log(phone_1);
    //console.log(values.length)
    values2 = values.splice(random1,1);
   
    random2 = Math.floor(Math.random()* (values2.length));
    winner_2 = values[random2][1];
    phone_2 =  values[random2][2];
 Logger.log(winner_2);
  Logger.log(phone_2);
    values3 = values.splice(random2,1);
    random3 = Math.floor(Math.random()* (values3.length));
    winner_3 = values[random3][1];
    phone_3 =  values[random3][2];
    Logger.log(winner_3);
     Logger.log(phone_3);
   // SpreadsheetApp.getActiveSpreadsheet().getRange('D2').setValue(winner_row[1])
   msg = 'The winner selected today for CAMPBOWIE are : \n ' + winner_1 +
   '   with phone-->' + phone_1 + ' AND \n ' + winner_2 +
   '   with phone--> ' + phone_2 + ' AND \n ' + winner_3 +
   '   with phone--> ' + phone_3 
   return msg
};

function main() {
sendEmailMessage(winner())
};

