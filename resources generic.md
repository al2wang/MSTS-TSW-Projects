模拟火车世界CSX重载货运控制台怎么用 修改代码
发布时间：2017/06/28 17:26:11 来源：电玩巴士 作者：勤奋的汉子
　　《模拟火车世界CSX重载货运》中火车的动力有很多种，使用哪种动力系统是玩家的自由，不过如果能使用完全清洁的能源势必能给玩家带来莫大的成就感。而众多清洁能源中，电能作为既可以稳定输出，又没有任何污染排放的能源，必然会作为玩家的首选。本期小编就给大家带来了《模拟火车世界CSX重载货运》纯电力运行攻略，一起来看吧。

电玩巴士

模拟火车世界CSX重载货运控制台怎么用

　　游戏里如果不修改文件是不可能存在纯电力火车的，因为即使火车使用超大容量电池，在运行一段时间后就会停止，所以想直接利用游戏内物品做一个纯电力火车是不可能的。

　　但是如果你修改游戏资源代码，把引擎部分的代码改掉，就有可能实现纯电力运行了。

　　以下是游戏纯电力引擎代码：
  '''
　　RESOURCE_DEFINITION

　　{

　　name = EC

　　density = 0.00001

　　flowMode = ALL_VESSEL

　　transfer = PUMP

　　isTweakable = false

　　}

　　// Modulemanager

　　// 修改推进剂与isp

　　@PART[ionEnigne]

　　{

　　@MODULE[ModuleEngines]

　　{

　　@PROPELLANT[ElectricCharge]

　　{

　　@name = EC

　　@ratio = 1.0

　　}

　　!PROPELLANT[XenonGas]{}

　　@atmosphereCurve

　　{

　　@key = 0 40000

　　}

　　}

　　// 资源自动转换

　　MODULE

　　{

　　name = ModuleGenerator

　　isAlwaysActive = true

　　INPUT_RESOURCE

　　{

　　name = ElectricCharge

　　ratio = 20.0

　　}

　　OUTPUT_RESOURCE

　　{

　　name = EC

　　ratio = 20

　　}

　　}

　　// 资源存储

　　RESOURCE

　　{

　　name = EC

　　amount = 0

　　maxAmount = 20

　　}

　　}
  '''

电玩巴士

修改代码

　　将以上代码复制到X:\GameData\Squad\Resources\ResourcesGeneric.cfg里就可以了。

　　X为安装游戏的硬盘分区。

　　所以无论游戏，还是现实，都不可能有纯能源的永动机出现，那些萌生想造一个纯电力永动机的小伙伴们还是消停一下吧，给你们的火车放个假吧。当然如果你有黑科技那就另当别论了。

　　以上就是《模拟火车世界CSX重载货运》纯电力运行攻略，希望对各位小伙伴能有所帮助。
