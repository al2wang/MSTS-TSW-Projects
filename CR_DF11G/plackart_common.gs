include "rzdcargovehicle6.gs"
include "packart_cabindata.gs"
include "locomotive.gs"
include "ellc_v10.gs"
include "gs.gs"
include "common.gs"
include "Vehicle.gs"

class plackart_common isclass RZDCargo6
{

public bool WeInsideCabin=false;
public StringTable ST;

PcabinDATA PData;

public void Init(void) 
	{
	inherited();
	SetCabinSwayAmount(0.6);
    	SetRollBasedOnTrack(-1.6);
	ST=GetAsset().GetStringTable();

	AddHandler(me,"Camera","","InternalHandler");
	AddHandler(me,"PassengerInfo","","InfoHandler");

	SetMeshVisible("shadow",false,0);

	PData=new PcabinDATA();
	
	PData.lightmode=0;


	Link= cast<GSObject>PData;
	}

};