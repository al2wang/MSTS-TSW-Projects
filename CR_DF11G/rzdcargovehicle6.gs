// author Vladimir Zapara
// авто?Запара Владимир aka TRam_


include "vehiclewithlink.gs"


class RZDCargo6 isclass VehWithLink
{


public void Init(void) 
	{
	inherited();
	
	GSObject[] GSO1=new GSObject[1];
	GSO1[0]= cast<GSObject>me;

	KUID utilLibKUID2 = GetAsset().LookupKUIDTable("reflection");
        Library  utilLib2 = World.GetLibrary(utilLibKUID2);
	utilLib2.LibraryCall("Init reflection",null,GSO1);

	
	AddHandler(me,"Browser-URL","","ChangeText");
	AddHandler(me,"MapObject","View-Details","ViewDetails");
	AddHandler(me,"Browser-Closed","","BrowserClose");
	} 
};