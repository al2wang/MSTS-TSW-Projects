include "rzdcargovehicle6.gs"
include "locomotive.gs"
include "packart_cabindata.gs"
include "Vehicle.gs"


class LocoLightController{
	Locomotive myLoc=null;
	public bool autoLight=true;
	public string stateLights="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-";

	public int GetMyPosition()
		{
		Vehicle[]	TrainVehiclesArray;
		int			ArraySize;
		int			ret;
		TrainVehiclesArray = myLoc.GetMyTrain().GetVehicles();	
		ArraySize = TrainVehiclesArray.size();
		if (ArraySize == 1)					
			{
			ret = 0;
			}
		else if (myLoc == TrainVehiclesArray[0])
			{
			ret = 1;
			}
		else if (myLoc == TrainVehiclesArray[ArraySize-1])	
			{
			ret = 3;
			}
		else							     
			{
			ret = 2;
			}	

		return ret;
		
		}
	public int IsNight(){
		int ret=1;
		if(World.GetGameTime() >=0 and  World.GetGameTime()<=1  ){
			ret=1;
		}
		return ret;
	}

	public int IsActive(){
		int ret=0;
		DriverCharacter adc=myLoc.GetMyTrain().GetActiveDriver();
		DriverCharacter[] dcl=World.GetDriverCharacterList();
		int i=0;
		for(;i<dcl.size();i++){
			if(dcl[i].GetLocation()==myLoc and dcl[i]==adc){
				ret=1;
				break;
			}
		}
		return ret;
	}
	
	public void Init(Locomotive loc){
		myLoc=loc;
	}

	public string CheckForState(){
	        string ret="";
//		int prior=myLoc.GetMyTrain().GetTrainPriorityNumber();
		int prior=myLoc.GetMyTrain().GetTrainPriorityNumber();
		int pos=GetMyPosition();
		int night=IsNight();
		int active=IsActive();
		int wrong=0;
		if(prior==1 or prior==2){
			if(night==1){
				if(active==1){
					switch(pos){
						case 0:ret="flw+,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw+,frw+,flr-,frr-,ftr-,blw-,brw-,blr+,brr+,btr-"; break;
						case 2:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						default:ret="";
					} 
				}
				if(active==0){
					switch(pos){
						case 0:ret="flw-,frw-,flr+,frr-,ftr+,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw+,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 2:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						default:ret="";
					} 
				}
			}
			if(night==0){
				if(active==1){
					switch(pos){
						case 0:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						case 2:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						default:ret="";
					} 
				}
				if(active==0){
					switch(pos){
						case 0:ret="flw-,frw-,flr+,frr-,ftr+,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 2:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr+,btr+"; break;
						default:ret="";
					} 
				}
			}

		}
		if(prior==3){
			if(night==1){
				if(active==1){
					ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-";
				}
				if(active==0){
					switch(pos){
						case 0:ret="flw-,frw-,flr+,frr-,ftr+,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 2:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						default:ret="";
					} 
				}
			}
			if(night==0){
				if(active==1){
					ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-";
				}
				if(active==0){
					switch(pos){
						case 0:ret="flw-,frw-,flr+,frr-,ftr+,blw-,brw-,blr-,brr+,btr+"; break;
						case 1:ret="flw-,frw+,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 2:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw-,blr-,brr-,btr-"; break;
						case 3:ret="flw-,frw-,flr-,frr-,ftr-,blw-,brw+,blr-,brr-,btr-"; break;
						default:ret="";
					} 
				}
			}

		}
		return ret;
	}

	public void LightsOff(){
		/*
		myLoc.SetFXCoronaTexture("arw0",null);
		myLoc.SetFXCoronaTexture("alw0",null);
		myLoc.SetFXCoronaTexture("brw0",null);
		myLoc.SetFXCoronaTexture("blw0",null);
		myLoc.SetFXCoronaTexture("alr0",null);
		myLoc.SetFXCoronaTexture("arr0",null);
		myLoc.SetFXCoronaTexture("atr1",null);
		myLoc.SetFXCoronaTexture("atr2",null);
		myLoc.SetFXCoronaTexture("blr0",null);
		myLoc.SetFXCoronaTexture("btr1",null);
		myLoc.SetFXCoronaTexture("btr2",null);
                */
		myLoc.SetFXAttachment("arw0",null);
		myLoc.SetFXAttachment("alw0",null);
		myLoc.SetFXAttachment("brw0",null);
		myLoc.SetFXAttachment("blw0",null);
		myLoc.SetFXAttachment("alr0",null);
		myLoc.SetFXAttachment("arr0",null);
		myLoc.SetFXAttachment("atr1",null);
		myLoc.SetFXAttachment("atr2",null);
		myLoc.SetFXAttachment("blr0",null);
		myLoc.SetFXAttachment("btr1",null);
		myLoc.SetFXAttachment("btr2",null);

		stateLights="";
	}

	public void LightsOn(string localizedLights){
		string[] t=Str.Tokens(localizedLights,",");
		int i=0;
		Asset white=myLoc.GetAsset().FindAsset("white");
		Asset red  =myLoc.GetAsset().FindAsset("red");
		for(;i<t.size();i++){
			string s=t[i];
			bool onLight= s[4,]=="+";
			Asset crn=null;
			if(s[2,3]=="r"){
				crn=red;
			}else{
				crn=white;
			}
			if(onLight){
				myLoc.SetFXAttachment(s[0,4],crn);
			}
		}
	}
        //v           
	public string lNameLight(string gNameLight){
	        string ret="";
                //v      
                bool a=myLoc.GetDirectionRelativeToTrain(); //   "",  -  ""
                if(gNameLight[0,1]=="f"){
                	if(a){
	                	ret="a";
	                }else{
	                	ret="b";
	                }
                }else{
                	if(a){
	                	ret="b";
                	}else{
        	        	ret="a";
                	}
                }

                if(gNameLight[1,3]=="tr"){ //   
                	ret=ret+"tr1"+gNameLight[3,]+","+ret+"tr2"+gNameLight[3,];
                }else{
			if(ret=="b"){
				string s=gNameLight[1,3];
				if(a){
					if(s[0,1]=="l" ){
						s[0,1]="r";
					}else{
						s[0,1]="l";
					}
				}
				ret=ret+s+"0"+gNameLight[3,] ;
			}else{
				string s=gNameLight[1,3];
				if(!a){
					if(s[0,1]=="l"){
						s[0,1]="r";
					}else{
						s[0,1]="l";
					}
				}
				ret=ret+s+"0"+gNameLight[3,] ;
			}
                }
		return ret;
	}

	public void LightsEvent(Message msg){
	        string lights="";

	        if(msg.minor=="autoOn"){
	        	autoLight=true;
	        }else
	        if(msg.major=="LightsEventHand" and msg.minor!="autoOn"){
	        	autoLight=false;
	        }
	        if(autoLight){
			lights=CheckForState();
		}else{
			if(msg.minor==""){
				return;
			}
			lights=msg.minor;
		}
		string localizedLight="";
		int i=0;
		string[] t=Str.Tokens(lights,",");
		for(;i<t.size();i++){
			localizedLight=localizedLight+lNameLight(t[i])+",";
		}	
		LightsOff();
		LightsOn(localizedLight);
		stateLights=lights;
	}

	public bool GetLightState(string globalCode){
		string[] t=Str.Tokens(stateLights,",");
		int i;
		for(i=0;i<t.size();i++){
			if(TrainUtil.HasPrefix(t[i],globalCode)){
				if(TrainUtil.HasSufix(t[i],"+")){
					return true;
				}else{
					return false;
				}
			}
		}
		return false;
	}

	public bool SetLightState(string globalCode,bool state){
		string[] t=Str.Tokens(stateLights,",");
		string s,s1="";
		bool ret=false;
		int i;
		for(i=0;i<t.size();i++){
			if(TrainUtil.HasPrefix(t[i],globalCode)){
				if(state){
			                s=globalCode+"+";
			        }else{
			        	s=globalCode+"-";
			        }
				ret=state;
				s1=s1+s+",";
			}else{
				s1=s1+t[i]+",";
			}
		}
		myLoc.PostMessage(myLoc,"LightsEventHand",s1,0.01);
		return state;
	}


};

//
class ELLC_v10 isclass Locomotive
{

	bool	DeRailed,zaluzi, motor_vent, CompressorStarted,Disel1,zal_mv,fuel_cons,objectRunningDriver=false;
	bool diselon=true, diseloff=true,autoswitch=false, PANT1ll=1;
	string process="sw_is_off.tga",process2="vent_is_off.tga" ,polozh="bgcolor='#AAAAAA'";
	Train 	oldTrain=null;	//v
	int	oldPrior=2,pant22=1;
	int 	oldPos=-1;
	Train MyTrain2;
	
	float DizelAddSound=0,DizelAddSoundbase=0,soundkoef=1.4;
	string  oldDayTime="";
	
	public bool powerState;
        ProductQueue fuelQ;
        float fuelCS,fcs_k,ComprEff;               // G = %throttle% * fcs_k + fuelCS, where G is fuel consumption speed on current throttle position

	LocoLightController LLC=null;
	Browser VDB;
	Asset	SA3_coupled, SA3_uncouped;

	public void LightHandler(Message msg); //v  ,
	
	public void Init(void);                     //
        void LPCHandler(Message msg);               //
         
        thread void Compressor();

	thread void beg11();
        thread void BPMonitor(void);
        thread void Disel(Asset MyAsset);
  
       


	public bool GetpowerState(void)
	{
	return powerState; 
	}
     
       void ModuleInitHandler(Message msg)
       {
        if (objectRunningDriver)
           return;
     
         if (World.GetCurrentModule() == World.DRIVER_MODULE)
         {
           objectRunningDriver =true;
	   beg11();
         }
       }




 
	public float GetPressureParam(Locomotive loco,string param)
	{
		float pressureMultiplier = 1.0 / (0.145 * 0.0000703);
		float pressureBase = 14.7 * 0.0000703;

		return pressureMultiplier * (loco.GetEngineParam(param) - pressureBase);
	}

	thread void Compressor(void)
	{	float mr_press, oldpress;
		bool mode2;
		Asset MyAsset = GetAsset();
		int j;
			      
		if (!CompressorStarted and powerState)
		{	CompressorStarted=true;
			MyAsset = me.GetAsset();
			DizelAddSound=DizelAddSoundbase;
			mr_press = GetPressureParam(me,"main-reservoir-pressure");
			
			World.PlaySound(MyAsset,"sound/compressor_start.wav",soundkoef*0.5,10.0f,100.0f,me,"a.bog1");//"a.bog1"
			Sleep(2);

			while ((mr_press < 850) and powerState)     //oбычн? "за?дк?
			{	
				World.PlaySound(MyAsset,"sound/compressor_run.wav",soundkoef*0.5,10.0f,100.0f,me,"a.bog1");//7
				Sleep(2);
				mr_press = GetPressureParam(me,"main-reservoir-pressure");

				
			

			}

			
			
			World.PlaySound(MyAsset,"sound/compressor_stop.wav",soundkoef*0.5,10.0f,100.0f,me,"a.bog1");
			DizelAddSound=0;
			CompressorStarted = false;

		}
	}



	thread void BPMonitor()
	{	float mr_press;
		while(!DeRailed)
		{	
  	
		
			if ((GetPressureParam(me,"main-reservoir-pressure") < 700) and powerState)
			{ 
			 Compressor();
			}
			if(CompressorStarted)
				{
				ComprEff = (1800 - GetPressureParam(me,"main-reservoir-pressure")) / 7500;
				if(ComprEff<0) ComprEff=0;
				if(ComprEff>1) ComprEff=1;
				SetCompressorEfficiency(ComprEff);
				}
				else SetCompressorEfficiency(0.0);
			Sleep(0.3);		
		}
	}



   void LPCHandler(Message msg)
   {	
        if(msg.minor == "StartUp")
      {
	if(!powerState)
	{
	Disel(GetAsset());
      	}
	return;
      }//if

      if(msg.minor == "ShutDown")
      {
         SetMaximumTractiveEffort(0.0f);
	//me.SetWheelslipTractionMultiplier(0.0f);
         powerState = false;
         return;
      }//if
   }//LPCHandler



	public void SetCouplerAttach(int pos, bool type)
		{
		//// Устоавливает сцепку взависимости от параметров
		//// public void SetCouplerAttach(int type, int pos)
		////	pos:
		////		0		-	сперед?вагона	(front_couple)
		////		1		-	сзад?вагона	(back_couple)
		////	type:
		////		false	-	разомкнутоя		(SA3-uncoupled)
		////		true	-	сомкнутоя		(SA3-coupled)
		
		if (pos == 0)			//пере?вангон?
			{
			if (type == true)	//устонавливае?размкнутую сцепку
				{
				SetFXAttachment ("front_couple", SA3_coupled);
				}
			else				//устонавливае?сомкнуту?сцепку
				{
				SetFXAttachment ("front_couple", SA3_uncouped);
				}
			}
		else					//за?вагона		
			{
			if (type == true)	//устонавливае?размкнутую сцепку
				{
				SetFXAttachment ("back_couple", SA3_coupled);
				}
			else				//устонавливае?сомкнуту?сцепку
				{
				SetFXAttachment ("back_couple", SA3_uncouped);
				}
			}
		}
	
	public int GetMyPosition(Train MyTrain)
		{
		//// Возвраще?позици?вагона ?состав?
		//// 0	-	одиночны?
		//// 1	-	Первый
		//// 2	-	?центре
		//// 3	-	Последни?

		//// обявляем переменные ////
		Vehicle[]	TrainVehiclesArray;
		int			ArraySize;
		int			result;
		//// ------------------- ////


		TrainVehiclesArray = MyTrain.GetVehicles();		//// получаем массив вагоно??состав?

		
		ArraySize = TrainVehiclesArray.size();			//// получаем количестов?элементо?массив?количество вагонгов ?состав?

		
		if (ArraySize == 1)								//// ваго?одиночны?
			{polozh =  "bgcolor='#00FF00'";
			result = 0;
			}
		else{        polozh =  "bgcolor='#AAAAAA'"; 
                        if (me == TrainVehiclesArray[0])			//// вагоно?больше одного, этот ваго?находить? первым ?состав?
			{

			result = 1;
			}
		else if (me == TrainVehiclesArray[ArraySize-1])	//// вагоно?больше одного, этот ваго?находить? ?конц?состав?
			{
			result = 3;
			}
		else											//// вагоно?больше одного, этот ваго?находить? ?центре состав?
			{
			result = 2;
			}}	

		return result;
		
		}
	
	public void SetCoupler(int pos, bool direction)
		{
		//// устонавливае?соотвецтвующий ти?сцепки для переда ?зада вагона
		//// ?зависимост?от положения ?направления вагона ?состав?
		//// public void SetCouplerType(int pos, bool direction);
		////	pos :
		////		0		-	одиночны?
		////		1		-	Первый
		////		2		-	?центре
		////		3		-	Последни?
		////
		////	durection :
		////		true	-	направлени?вагона соотвецтвует направлени?состав?
		////		false	-	направлени?вагона не соотвецтвует направлени?состав?
				
		if (pos == 0)		//// ваго?одиночны?
			{
			SetCouplerAttach(0,false);
			SetCouplerAttach(1,false);
			}
		else if (pos == 1)	//// ваго??начале состав?
			{
			if (direction)
				{
				SetCouplerAttach(0,false);
				SetCouplerAttach(1,true);
				}
			else
				{
				SetCouplerAttach(0,true);
				SetCouplerAttach(1,false);
				}
			}
		else if (pos == 2)	//// ваго??центре состав?
			{
			SetCouplerAttach(0,true);
			SetCouplerAttach(1,true);
			}
		else if (pos == 3)	//// ваго??конц?состав?
			{
			if (direction)
				{
				SetCouplerAttach(0,true);
				SetCouplerAttach(1,false);
				}
			else
				{
				SetCouplerAttach(0,false);
				SetCouplerAttach(1,true);
				}			
			}
		}
	


	thread void Disel(Asset MyAsset)
        {
           int i, currTr, sndTr;//currTr - текущая позиция контроллер? sndTr - позиция, звук которо?проигрывается
           float dt;
           string sndFile;
		bool k1=false,k7=false;
	    if(!Disel1)
	   {
	      Disel1=true;
              
		process="sw_is_on.tga";
		PostMessage(null,"RefreshBrowser","",0.01);
		
		World.PlaySound(MyAsset,"sound/engine_start.wav",soundkoef*(1.2+DizelAddSound),20.0f,1000.0f,me,"a.bog0");
		Sleep(1);
		
 		SetMaximumTractiveEffort(GetDefaultMaximumTractiveEffort());

		MyTrain2=me.GetMyTrain();
		PANT1ll=MyTrain2.GetPantographState();

		PostMessage(null,"RefreshBrowser","",0.01);//"RefreshBrowser",""
	if(PANT1ll)
	{
		powerState = true;
		
		sndTr = 1;
		
		if(VDB) PostMessage(me,"MapObject","View-Details",0.0);
		
              
		
              while(powerState and !DeRailed)
	      {
                 currTr = (int)(GetEngineSetting("throttle"));
			/*if(sndTr>4 and !k1) {soundkoef=soundkoef-0.5;k1 = true;}
			else if(sndTr<=4 and k1) {soundkoef=soundkoef+0.5;k1 =false;}
			if(sndTr>6 and !k7) {soundkoef=soundkoef-0.4;k7 = true;}
			else if(sndTr<=6 and k7) {soundkoef=soundkoef+0.4;k7 =false;}*/
		if(!currTr)
		{ 
		sndFile = "idle "+"0";
		}
		else
                 {
                    sndFile = "idle "+"1";
                 }//if

              	 World.PlaySound(MyAsset,"sound/"+sndFile+".wav",soundkoef*(1.05+DizelAddSound),10.0f,1000.0f,me,"a.bog0");
		Sleep(1);
              }//while
             }
		(cast<Vehicle>me).SetWheelslipTractionMultiplier(1);
              World.PlaySound(MyAsset,"sound/engine_stop.wav",soundkoef*(1.05+DizelAddSound),10.0f,1000.0f,me,"a.bog0");
		Sleep(1);
		process="sw_is_off.tga";
		PostMessage(null,"RefreshBrowser","",0.01);
		 Disel1=false;
	   } //if
        }//Disel





	void CouplerMonitor(void){

		int pos;
		Asset MyAsset;
		Train	MyTrain;
		bool	direction;
		MyAsset = me.GetAsset();
	        
			MyTrain	= me.GetMyTrain();	
			if (MyTrain != null)		//// пропускаем ко?если для вагона не?состав?
			{
				direction = me.GetDirectionRelativeToTrain();	//// получе?направлени?вагона относительно состав?
				pos = GetMyPosition(MyTrain);					//// получе?положени?вагона ?состав?
				PANT1ll=MyTrain.GetPantographState();

				if(pos!=oldPos){
					oldPos=pos;
					SetCoupler(pos, direction);						//// устонавливае?сцепки
				}

				if(!autoswitch){
					if(!PANT1ll){ diseloff=true; autoswitch=true; if(powerState)PostMessage(me,"LPC-298469","ShutDown",0.0f);}
					else
					if(!diseloff)
						{	
						   if(!powerState and !DeRailed)PostMessage(me,"LPC-298469","StartUp",0.0f);
						}
						else
						{
                                	           if(powerState)PostMessage(me,"LPC-298469","ShutDown",0.0f);

						}
						

				}
					else {
					if(powerState and !PANT1ll)PostMessage(me,"LPC-298469","ShutDown",0.0f);
					}
			}
		Sleep(1.0);
		

	}
	
	thread void Ventilator(Asset MyAsset)
        {	

	   if(!zal_mv and powerState)
           {
	      zal_mv=true;
              float dt;
		DizelAddSound=DizelAddSoundbase;
              dt=World.PlaySound(MyAsset,"sound/ventilator_start.wav",soundkoef,8.0f,100.0f,me,"a.bog0");
		
              Sleep(dt-0.05f);

              while(motor_vent and powerState and !DeRailed and zal_mv)
	      {
                 dt=World.PlaySound(MyAsset,"sound/ventilator_run.wav",soundkoef,8.0f,100.0f,me,"a.bog0");
                 Sleep(4);
              }//while
		
              World.PlaySound(MyAsset,"sound/ventilator_stop.wav",soundkoef,8.0f,100.0f,me,"a.bog0");
		Sleep(10);
		DizelAddSound=DizelAddSoundbase;
		process2="vent_is_off.tga";
		PostMessage(null,"RefreshBrowser","",0.01);
	      zal_mv=false;
           }
        }



	thread void Zaluzi(void)			
		{
		Train	MyTrain;
		Asset MyAsset;
		MyAsset = me.GetAsset();
		while (!DeRailed)
			{
			MyTrain = me.GetMyTrain();	//// получаем состав которому принадлежи?этот ваго?
			if (MyTrain != null){ 

				if(powerState){		//// пропускаем ко?если для вагона не?состав?ил?локомоти?выключен
					if(motor_vent)
					{
					process2="vent_is_on.tga";
					PostMessage(null,"RefreshBrowser","",0.0);
					Ventilator(MyAsset);
					}
					else{
					
						if(powerState and GetEngineSetting("throttle")>1){ autoswitch=true; PostMessage(me,"LPC-298469","ShutDown",0.0f);
						}
					}
				}
			}
			Sleep(0.5);
			}

		}



	





	thread void HourMonitor(){
		while(!DeRailed){
			if(oldPrior!=GetMyTrain().GetTrainPriorityNumber()){
				oldPrior=GetMyTrain().GetTrainPriorityNumber();
				PostMessage(me,"LightsEvent","",0.5);
			}
			CouplerMonitor();
			Sleep(5.0);
		}
	}


	public void NewHandlers(Message msg){
		int		pos;
		Train	MyTrain;
		MyTrain	= me.GetMyTrain();	
		if(oldTrain==MyTrain){
			return;		
		}
		oldTrain=MyTrain;

		AddHandler(oldTrain,"Train", "TurnAround","LightHandler");
		//AddHandler(oldTrain,"Train", "EnterTrack","LightHandler");
		AddHandler(oldTrain,"Train", "StartedMoving","LightHandler");
	}

	public void Derailed(Message msg){
		if(cast<ELLC_v10>msg.src == me)
                {
                   DeRailed=true;
                }//if
	}

	public void LightHandler(Message msg){
		if(msg.src==me or msg.src==oldTrain){
			if(msg.minor=="BoardedTrain" or msg.minor=="Coupled" or msg.minor=="EnterTrack"){
		       		NewHandlers(msg);
       			}
			LLC.LightsEvent(msg);
		}
	}

	public string GetImgBtn(int locoId,string code){
		string s="";
		bool state=false;
		if(locoId==GetId()){
			state=LLC.GetLightState(code);
			if(state){
				if(TrainUtil.HasSufix(code,"r")){
					s="but_red_on.tga";
				}else{
					s="but_white_on.tga";
				}
			}else{
				if(TrainUtil.HasSufix(code,"r")){
					s="but_red_off.tga";
				}else{
					s="but_white_off.tga";
				}
			}
		}
		return s;		
	}

	public string GetAutoLightImgBtn(bool state){
		string s="";
		HTMLWindow hw=HTMLWindow;
		if(state){
			s=hw.MakeImage("but_sm_yel_on.tga",false,32,32);
		}else{
			s=hw.MakeImage("but_sm_yel_off.tga",false,32,32);
		}
		return s;		

	}

	public string GetHeadCntVD(){
	        string s="";
		HTMLWindow hw=HTMLWindow;
       	        int w=0,l=0,i=0;
		for(i=0;i<GetMyTrain().GetVehicles().size();i++){
			w=w+GetMyTrain().GetVehicles()[i].GetMass();
			l=l+GetMyTrain().GetVehicles()[i].GetLength();
		}

		s=s+"<font color='#000000' size=3><b>"+GetMyTrain().GetTrainDisplayName()+"</b></font><br>";
		s=s+"<font color='#000000'>";
		s=s+"РІРµСЃ РїРѕРµР·РґР° "+w+" <br>";
		s=s+"РґР»РёРЅР° РїРѕРµР·РґР° "+l+" <br>";
		s=s+hw.MakeLink("live://priority","РїСЂРёРѕСЂРёС‚РµС‚")+" ";
		s=s+hw.MakeLink("live://priority"," "+GetMyTrain().GetTrainPriorityNumber());
		s=s+"</font>";
		s=s+"<br><br>";
                return s;
	}


        
     

	
	public string GetCntVD(){

		string s;
		HTMLWindow hw=HTMLWindow;
		string tbl=	hw.MakeTable(hw.MakeRow(hw.MakeCell(hw.MakeLink("live://disel5on2^"+GetId()+"^diselff",hw.MakeImage("pusk.tga",false,40,40))+hw.MakeCell(hw.MakeImage(process,false,90,50))))+
					hw.MakeRow(hw.MakeCell(hw.MakeLink("live://vent5on2^"+GetId()+"^diselff",hw.MakeImage("pusk.tga",false,40,40))+hw.MakeCell(hw.MakeImage(process2,false,90,50)))))+
				hw.MakeTable(
					
				hw.MakeRow(
					hw.MakeCell("LightController","colspan=10 "+"bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell(hw.MakeLink("live://autoLight",GetAutoLightImgBtn(LLC.autoLight)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://autoLight","AutoLight"),"colspan=7 bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell("Forward","colspan=8 bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell("Left","colspan=2 bgcolor='#555555'")+
					hw.MakeCell("Right","colspan=2 bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell(hw.MakeLink("live://flw^"+GetId()+"^"+LLC.GetLightState("flw"),hw.MakeImage(GetImgBtn(GetId(),"flw"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://flr^"+GetId()+"^"+LLC.GetLightState("flr"),hw.MakeImage(GetImgBtn(GetId(),"flr"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://frr^"+GetId()+"^"+LLC.GetLightState("frr"),hw.MakeImage(GetImgBtn(GetId(),"frr"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://frw^"+GetId()+"^"+LLC.GetLightState("frw"),hw.MakeImage(GetImgBtn(GetId(),"frw"),false,45,45)),"bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell("Backward","colspan=6 bgcolor='#555555'")
				)+
				

				hw.MakeRow(
					hw.MakeCell("Left","colspan=2 bgcolor='#555555'")+
					hw.MakeCell("Right","colspan=2 bgcolor='#555555'")
				)+
				hw.MakeRow(
					hw.MakeCell(hw.MakeLink("live://blw^"+GetId()+"^"+LLC.GetLightState("blw"),hw.MakeImage(GetImgBtn(GetId(),"blw"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://blr^"+GetId()+"^"+LLC.GetLightState("blr"),hw.MakeImage(GetImgBtn(GetId(),"blr"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://brr^"+GetId()+"^"+LLC.GetLightState("brr"),hw.MakeImage(GetImgBtn(GetId(),"brr"),false,45,45)),"bgcolor='#555555'")+
					hw.MakeCell(hw.MakeLink("live://brw^"+GetId()+"^"+LLC.GetLightState("brw"),hw.MakeImage(GetImgBtn(GetId(),"brw"),false,45,45)),"bgcolor='#555555'")
					)
				);
                s=s+hw.MakeTable(
			hw.MakeRow(
				hw.MakeCell(
					hw.MakeTable(
						hw.MakeRow(
							hw.MakeCell(tbl,"bgcolor='#AAAAAA'")
						)
					)	
				,"bgcolor='#555555'")
			)


		);



		
		return s;
	}


	public void ViewDetails(Message msg){
		//inherited(veh);
		if (!VDB){
			VDB=Constructors.NewBrowser();
			VDB.SetWindowRect(25, 30, 290, 485);
		}

		string paramOutput="";
		paramOutput = paramOutput+GetHeadCntVD() +GetCntVD();
		int i;
		Vehicle[] veh=GetMyTrain().GetVehicles();
		for(i=0;i<veh.size();i++){
			if(veh[i].isclass(Locomotive) and veh[i] !=me){
				Soup sp=veh[i].GetProperties();
				string sl=sp.GetNamedTag("stateLights");
				if(sl!=""){
					paramOutput=paramOutput+sp.GetNamedTag("GetCntVD");
				}
			}
		}
	  	VDB.LoadHTMLString(GetAsset(),paramOutput);

	}

		public void RefreshBrowser(Message msg){
	if(VDB){
			ViewDetails(msg);
		}
	}

	public void ChangeText(Message msg){
 	 	string s="";
        
 	 	string[] tok=Str.Tokens(msg.minor,"/");

 	 	if(tok[tok.size()-1]=="turnaround")
 	 	{
                   if(Math.Fabs( GetMyTrain().GetVelocity())<=0.2)
					{ 
					PostMessage(me,"LightsEventHand", "TurnAround",0.1);
					GetMyTrain().Turnaround();
					PostMessage(me,"LightsEventHand","autoOn",2);
					}
                   return;
                }//if


	




		
 	 	string[] tok2=Str.Tokens(tok[1],"^");
 	 	if(tok2.size()>1){
 	 		if(tok2[0]=="flw" or tok2[0]=="flr" or tok2[0]=="frr" or tok2[0]=="frw" or
 	 			tok2[0]=="ftr" or
 	 			tok2[0]=="blw" or tok2[0]=="blr" or tok2[0]=="brr" or tok2[0]=="brw" or
 	 			tok2[0]=="btr" ){
		 		 	if(Str.ToInt(tok2[1])==GetId()){
 		 		                LLC.SetLightState(tok2[0],!(tok2[2]=="true"));
 			 		}
 		 	}
 		}else{
 			if(tok[1]=="priority"){
 				int p=GetMyTrain().GetTrainPriorityNumber();
 				p++;
 				if(p>3){
 					p=1;
 				}
				GetMyTrain().SetTrainPriorityNumber(p);
 			}
 			if(tok[1]=="autoLight"){
 				if(! LLC.autoLight){
 					PostMessage(me,"LightsEventHand","autoOn",0.01);
 				}
 			}
 		}
		if(tok2.size()> 1){ if(tok2[0]=="disel5on2" and (Str.ToInt(tok2[1])==GetId())){  if(PANT1ll) { autoswitch=false; diseloff=!diseloff;  }
				    }
					 if(tok2[0]=="vent5on2" and (Str.ToInt(tok2[1])==GetId())){  if(PANT1ll and powerState and !motor_vent){ motor_vent = true;}
																else	motor_vent=false;
					 }
		}

 		if(VDB){
	 		PostMessage(me,"MapObject","View-Details",0.25);
 		}
	}
	thread void beg11(){
		
	if(diselon){ MyTrain2	= me.GetMyTrain();  MyTrain2.SetPantographState(1); autoswitch=true; if(!powerState){PostMessage(me,"LPC-298469","StartUp",0.0f);  Sleep(3); motor_vent = true;}}
		
	}

	public void BrowserClose(Message msg){
		if(msg.src==VDB){
			VDB=null;
		}
	}

	public Soup GetProperties(){
		Soup sp=inherited();
		sp.SetNamedTag("diselon",diselon);
		sp.SetNamedTag("stateLights",LLC.stateLights);
		sp.SetNamedTag("autoLight",LLC.autoLight);
		sp.SetNamedTag("GetCntVD",GetCntVD());
		return sp;
	}

	public void SetProperties(Soup sp){
		inherited(sp);
		string stateLights=sp.GetNamedTag("stateLights");
		LLC.stateLights=stateLights;
		bool   autoLight=sp.GetNamedTagAsBool("autoLight",true);
		if(autoLight){
			PostMessage(me,"LightsEventHand","autoOn",0.01);
		}else{
			PostMessage(me,"LightsEventHand","stateLights",0.01);
		}


		if(!powerState and !GetMaximumTractiveEffort()) {SetMaximumTractiveEffort(0);}

		diselon = sp.GetNamedTagAsBool("diselon",false);


	}
	public string GetDescriptionHTML(void)
        {
           string s = inherited();
           s=s+HTMLWindow.CheckBox("live://property/diselon",diselon)+" Engine on at startup";
           return s;
        }//GetDescriptionHTML
        
           string GetPropertyType(string propertyID)
           {	
           if(propertyID == "diselon")
           {
              return "link";
           }//if
           return inherited(propertyID);
           }//GetPropertyType
   
           void LinkPropertyValue(string propertyID)
           {
           if(propertyID == "diselon")
           {
              diselon = !diselon;
              return;
           }//if
           inherited(propertyID);
           }//LinkPropertyValue
	
	   public void Init(void)
		{
		inherited();
		
		SA3_coupled		= GetAsset().FindAsset("SA3-coupled");
		SA3_uncouped	= GetAsset().FindAsset("SA3-uncoupled");

		
		SetCouplerAttach(0,false);	//// устонавливае?переднюю сцепку ?положени?- разомкнуто
		SetCouplerAttach(1,false);	//// устонавливае?заднюю сцепку ?положени?- разомкнуто
		
		AddHandler(me,"LPC-298469","","LPCHandler");//minor can be "StartUp","ShutDown","QuietShutDown","QuietStartUp"
	      	SetCompressorEfficiency(0.0f);

                Soup extensions = GetAsset().GetConfigSoup().GetNamedSoup("extensions");
                 extensions = GetAsset().GetConfigSoup().GetNamedSoup("extensions");//is_off
		DizelAddSoundbase=extensions.GetNamedTagAsFloat("diesel_add_sound");
		soundkoef=extensions.GetNamedTagAsFloat("Sound_koef");
               //гд?R - разность расход?топлив?межд?двумя соседним?позициями контроллер? Фи?смыс?- раве?повышени?расход?топлив?пр?
                //увеличении позици?контроллер?на единиц? Зависимост?конешн не прямая, но оч близка ?не? Сложност??то?чт??ТР?
                //тока 8 позици?плюс дробны? поэтом?расчитыват?нужн?внимательн? если мыслей не?обращайтес?)

		
		LLC=new LocoLightController(); //v    
		LLC.Init(me);  //v
		
		Zaluzi();
		BPMonitor();
		
		AddHandler(me,"RefreshBrowser","","RefreshBrowser");

		AddHandler(me,"Vehicle", "Derailed",  "Derailed");
		AddHandler(me,"Vehicle", "Coupled" , "LightHandler");
		AddHandler(me,"DriverCharacter", "LeftTrain","LightHandler");
		AddHandler(me,"DriverCharacter",  "BoardedTrain","LightHandler");

		oldTrain=GetMyTrain();
		AddHandler(oldTrain,"Train", "TurnAround","LightHandler");
		AddHandler(oldTrain,"Train", "StartedMoving","LightHandler");
		
		
		beg11();
		AddHandler(me,"LightsEvent","","LightHandler"); //v     :)   
		AddHandler(me,"LightsEventHand","","LightHandler"); //v     :)
		AddHandler(me,"Browser-URL","","ChangeText");
		AddHandler(me,"MapObject","View-Details","ViewDetails");
		AddHandler(me,"Browser-Closed","","BrowserClose");
		HourMonitor(); //v       , ..
		//if(diselon)  PostMessage(me,"LPC-298469","StartUp",0.0f);
				           
    	} 
};