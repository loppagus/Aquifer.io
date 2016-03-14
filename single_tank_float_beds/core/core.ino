#include <OneWire.h>
#include <DallasTemperature.h>
#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
File growlog;

void setup() {
  Serial.begin(9600);
  Serial.println("starting system..");
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");
  delay(20);

  // initialize file, if missing create file
  if (SD.exists("growlog.csv")) {
    Serial.println("growlog.csv exists.");
  } else {
    Serial.println("growlog.csv doesn't exist.");
    Serial.println("Creating growlog.csv...");
    growlog = SD.open("growlog.csv", FILE_WRITE);
    growlog.close();
     if (SD.exists("growlog.csv")) {
        Serial.println("growlog.csv exists.");
         } else {
          Serial.println("growlog.csv doesn't exist.");
      }    
  }

  Serial.println("system started");
  delay(2000);

}

void loop() {



float dataString[] = {}; //values ready to bewritten on the sd card


  
 File dataFile = SD.open("growlog.csv", FILE_WRITE); //starting sd card to write. 

  // if the file is available, write to it:
  if (dataFile) {
    int i;
    for (i = 0; i < 3; i = i + 1) {  
        dataFile.print(dataString[i]);
        if (i < 2) {
            dataFile.print(",");
        }
    }
    dataFile.println();
    dataFile.close();
    // print to the serial port too:
    
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening datalog.csv");
  }
Serial.println("file writing finished"); //At this point a new write sequence can start. sd card can only write one set of variables at a time


}
