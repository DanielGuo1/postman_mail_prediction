function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Wetter API Menu')
      .addItem('Wetter hinzufügen','getWeatherData')
      .addToUi();
}
function getWeatherData() {
  
  var response = UrlFetchApp.fetch("https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid={your_api_key}");
  Logger.log(response.getContentText());
  
  var json = response.getContentText();
  var data = JSON.parse(json);

  var wetter = data["weather"][0]["main"];//["main"];
  var temp = data["main"]["temp"];
  var temp_min = data["main"]["temp_min"];
  var temp_max = data["main"]["temp_max"];
  var humidity = data["main"]["humidity"];
  var pressure = data["main"]["pressure"];
  var wind = data["wind"]["speed"];


  var sheet = SpreadsheetApp.getActiveSheet();

  // get current Date
  var date = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy")
  
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([date]);
  // sheet.getRange(sheet.getLastRow() + 0,2).setFormula("=WEEKDAY(A"+sheet.getLastRow()+";2)");
  sheet.getRange(sheet.getLastRow() + 0,7).setValue([wetter]);
  sheet.getRange(sheet.getLastRow() + 0,8).setValue([temp]);
  sheet.getRange(sheet.getLastRow() + 0,9).setValue([temp_min]);
  sheet.getRange(sheet.getLastRow() + 0,10).setValue([temp_max]);
  sheet.getRange(sheet.getLastRow() + 0,11).setValue([humidity]);
  sheet.getRange(sheet.getLastRow() + 0,12).setValue([pressure]);
  sheet.getRange(sheet.getLastRow() + 0,13).setValue([wind]);

}
