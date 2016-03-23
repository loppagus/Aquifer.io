

#include <Ethernet.h>

 // the media access control (ethernet hardware) address for the shield:
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
//the IP address for the shield:
byte ip[] = { 192,168,1,2};
// the router's gateway address:
byte gateway[] = { 192,168,1,1 };
// the subnet:
byte subnet[] = { 255, 255, 255, 0 };

EthernetClient client;
EthernetServer server(80);

void setup()
{
  // initialize the ethernet device
  Ethernet.begin(mac, ip, gateway, subnet);
  Serial.begin(9600);
  delay(500);  // start listening for clients
  server.begin();
  Serial.println("server started");
  delay(500);
}

void loop()
{
   EthernetClient client = server.available();
   if (client) {
     while (client.connected()){

        client.stop();
     }
     delay(5000);
  }

}
