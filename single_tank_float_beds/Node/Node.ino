#include <Ethernet.h>

byte ip[] = { 192,168,1,3};
// the router's gateway address:
byte gateway[] = { 192,168,1,1 };
// the subnet:
byte subnet[] = { 255, 255, 255, 0 };
byte mac[] = { 0xDE, 0xAA, 0xBE, 0xEF, 0xFE, 0xED };
byte server[] = {192,168,1,2}; // server ipaddress

EthernetClient client;

void setup()
{
 Ethernet.begin(mac, ip, gateway, subnet);

  Serial.begin(9600);

  delay(1000);

  Serial.println("connecting...");
  client.connect(server,80);

  delay(1000);

  if (client.connected()) {
    Serial.println("connected");
  } else {
    Serial.println("connection failed");
  }

}

void loop()
{

 if (client.available()) {
   client.print("GET /write_data.php?"); // write first part of the resquest
    client.print("relay="); // This
    client.print(relay); //
    client.print("?value=");
    client.print(value); //
    client.println(" HTTP/1.1"); // Part of the GET request
    client.println("Host: 192.168.0.11"); //change to match host
    client.println(); // Empty line
    client.println(); // Empty line
    client.stop();    // Closing connection to server
  }

  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();
  }
}
