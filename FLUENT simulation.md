# FLUENT高速火车运行模拟

read://https_www.fangzhenxiu.com/?url=https%3A%2F%2Fwww.fangzhenxiu.com%2Fpost%2F1951774%3F3739a18c-0c68-43cc-a4cb-b8b99e9bfd72%3Dbe856fe5-59e9-4f9e-b496-79d87d743789

在此模拟示例中，我们将分析高速火车的外部流场。工程师可以通过模拟来了解火车在高速行驶时周围的空气流动情况，并估算产生的阻力。通过CFD分析能够使工程师提出更加创新的，优化的设计方案。在此示例中，我们将模拟两列火车之间的流场：一列旧火车和一列新的“简化”子弹头火车。我们将围绕这两列火车建立一个简单的流动模拟，然后使用它来分析流场的关键特征。

pic url needed

 1   启动FLUENT并导入网格 
（1）在Windows系统下执行“开始”→“所有程序”→ANSYS 2020→Fluid Dynamics→Fluent 2020命令，启动Fluent 2020。

（2）单击主菜单中File→Read→Mesh命令，导入.msh网格文件。

（1）单击命令结构树中General按钮，弹出General（总体模型设定）面板，在Solver中Time选择Steady，进行瞬态计算。

在模型设定面板Models中双击Viscous按钮，弹出Viscous Models对话框，在Model中选择SST k-omega，单击OK按钮确认。
图片

（1）单击主菜单中Physics→Zones→Boundaries按钮启动的边界条件面板。

（2）在边界条件面板中，双击wall-tunnel弹出边界条件设置对话框。ShearCondition选择为Specified Shear，Shear Stress输入（0,0,0）。

图片

（3）设置inlet，Velocity Magnitude输入50。

图片

（1）单击主菜单中Solution→Initialization按钮，弹出Solution Initialization（初始化设置）面板。

Initialization Methods中选择Hyper Initialization，单击Initialize按钮进行初始化。

（2）在命令栏输入以下命令：

solve/initialize/fmg-initialization

Enable FMG initialization?输入yes

单击主菜单中Solving→Run Calculation按钮，弹出Run Calculation（运行计算）面板。

在Number of Iterations中输入500，单击Calculate开始计算。

 7    结果后处理 
（1）双击A6栏Results项，进入CFD-Post界面。

（2）显示速度矢量图。

图片

图片

