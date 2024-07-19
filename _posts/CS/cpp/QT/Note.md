---
title: 'Note'
date: 2024-05-29 16:27:31
tags: [QT]
categories: 
- [CS,cpp,QT]
---

# Stacked Widget

## 单窗口多页面

1. 新建一个页面。
   - 新建文件，选择**Qt 设计器界面类**
     

![](/pic/CS/QT/Note/1.png)

- 界面模板选择**Widget**

- 其余默认(注意修改类名，例如"Page1")

2. 在主页面的ui设计中添加**Stacked** **Widget**

> 以下代码添加均在主页面类进行

注意！还需在Stacked Widget去添加页面数量

- 右键选择插入页

![](/pic/CS/QT/Note/3.png)

3. 进入主页面类的头文件
4. include新页面的头文件
5. 添加数据成员

![](/pic/CS/QT/Note/2.png)

---



6. 然后在主页面类的源文件的构造函数中添加如下格式的代码

```cpp
Page1 *p1 = new Page1(this); // 虽然在private中已经声明了p1变量，但这里需要这么做一次

ui->stackedWidget->addWidget(p1); 
```

这样就将新建的页面添加到主页面的**Stacked Widget**中了

通过以下代码来显示指定页面

```cpp
 ui->stackedWidget->setCurrentWidget(p1);
```

同时可以获得对应页面在**Stacked** **Widget**的位置

```cpp
int homeIndex = 0;
homeIndex = ui->stackedWidget->currentIndex();
```

可以通过homeIndex来切换页面

```cpp
ui->stackedWidget->setCurrentIndex(homeIndex + 0);//第一个页面

ui->stackedWidget->setCurrentIndex(homeIndex + 1);//第二个页面

```

7. 然后实现切换页面的方法并绑定给按钮

```cpp
connect(ui->page1Button,&QPushButton::clicked,this,&MainWidget::toP1);
```

# TableWidget




- 添加行

```cpp
ui->mainTableWidget->insertRow(POS);
```

该函数实现在POS位置添加一行。若POS为0，则在第1行添加一行。

在POS等于0的情况下，若在添加之前已经存在n行，那么这n行将会在执行这个函数后被推下去一行，新行将成为第一行。

可以通过如下实现在尾部添加
```cpp
    int curRow = ui->mainTableWidget->currentRow();
    ui->mainTableWidget->insertRow(curRow + 1);
```

> 添加列同理

- 创建一个`QTableWidgetItem`

```cpp
QTableWidgetItem * testItem = new QTableWidgetItem("text");
```

- 将`QTableWidgetItem`对象添加到对应位置

```cpp
ui->mainTableWidget->setItem(2,1,testItem); 
```

- 设置指定列的宽度

```cpp
ui->mainTableWidget->setColumnWidth(1,200); //第一个参数为列的位置，第二个为宽度
```







