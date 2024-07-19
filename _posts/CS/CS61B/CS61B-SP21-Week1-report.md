---
title: '[CS61B_SP21]Week1_report'
date: 2024-03-17 16:52:11
tags: [java,CS61B]
sticky: false
categories: 
- [CS,CS61B]
cover: https://ooo.0x0.ooo/2024/03/17/OgUIaC.jpg
---
# Intro

我的CS61B SP21的课程学习于2024/3/14开始，这是Week 1的学习报告。

主要为个人的知识记录和理解，部分引用的官方教案的原文。

第一周主要了解了CS61B是个怎样的课程。

本文篇幅可能较大，我将挑选部分内容在*Suggest*列出

代码供交流，若有问题可以向我发送邮件，当然，可以于底部评论（如果你可以的话），我也会收到邮件信息。 
:::info 
在阅读这篇博文之前，你或许需要做一次proj0  
:::

> Suggest
>
> - [Keyword `static` in Java ](#keyword-static-in-java) 关于`static`的浅理解


# Lecture 2. Defining and Using Classes 

**借`dogProblem`引入`helper`工具**

在`dogs[]`中，找到满足条件，即 在周围四个当中`weight`最大 的`dog`，并纳入`bigDogs1[]`。如果数组越界，则只考虑存在的`dog`

> Suppose we want to write a method:  
>
> `public static Dog[] largerThanFourNeighbors(Dog[] dogs)`
>
> This method will return a new array that contains every Dog that is larger  
>
> than its 4 closest neighbors, i.e. the two on the left and the two in the right.  
>
> For example:  
>
> - Input: Dogs with size `[10, 20, 30, 25, 20, 40, 10]`  
> - Returns: Dogs with size `[30, 40]`
>   - 30 is greater than 10, 20, 25 and 20.  
>   - 40 is greater than 25, 20, and 10.

思路是这样的：

大问题是 找到所有的满足条件的元素。“所有” 可以思考遍历所有的元素，那么满足条件呢， “在周围四个当中`weight`最大” 感觉是蛮复杂的，所以将它从大问题下独立出来，使用`helper`。

现在关注实现条件判断的方法。周围四个，也就是前两个和后两个，可以用`j` 的`[-2,2]`范围来限制，但是对于那些邻居中有越界的元素呢？故，在配合`j`的前后遍历下，要判断当前元素是否越界。又引入`helper`

现在关注元素是否越界，那这是一个很简单的问题。只需要判断`index`是否在`[0, length)`之间即可。该问题解决，回到上一级问题。

判断越界已经解决，确保了比较大小的元素是有效的，那么进一步则是简单的大小比较。比较的结果返回大问题。

大问题已经实现了条件判断，剩下的仅需记录答案了。毕。

由以上可见，基本思路下我们使用了两个`helper`，分别是条件判断和元素越界。从大问题的角度看，这是一个由复杂到简单的过程。也就是把复杂的问题细化成简单的小问题，然后一个一个解决，随后就自然的解决了大问题。这样的好处是我们能以简单的方式写代码，单个问题复杂性降低，同时还便于调试。

`helper` 大概反映的就是分治思想了

## Java

```java dog.java
public class dog {
    public int weight;
    dog(int w) {
        weight = w;
    }
}
```

```java dogProblem.java
public class dogProblem {
    public static dog[] largerThanFourNeighbors(dog[] dogs){
        dog[] retDogs = new dog[dogs.length];
        int cnt = 0;// count
        for(int i = 0;i<dogs.length;i+=1){
            if(isBiggestDogInFour(dogs,i)){
                retDogs[cnt] = dogs[i];
                cnt+=1;
            }
        }
        retDogs = removeNull(retDogs, cnt);
        return retDogs;
    }
    // a method to delete null part of a dog array.
    public static dog[] removeNull(dog[] dogs, int actualSize){ //helper
        dog[] newDogs = new dog[actualSize];
        for(int i = 0;i<actualSize;i+=1){
            newDogs[i]=dogs[i];
        }
        return newDogs;
    }
    public static boolean isBiggestDogInFour(dog[] dogs, int i){ //helper
        boolean isBiggest = true;
        for(int j = -2;j<=2;j+=1){
            if(j==0)continue;
            int compareIndex = i+j;
            if(availableDog(dogs,compareIndex)){
                if(dogs[compareIndex].weight>=dogs[i].weight){
                    isBiggest=false;
                    break;
                }
            }
        }
        return isBiggest;
    }
    public static boolean availableDog(dog[] dogs, int index){ //helper
        if(index <0)return false;
        if(index >=dogs.length)return false;
        return true;
    }
    public static void main(String[] args) {
        dog[] dogs = new dog[]{
                new dog(5),
                new dog(15),
                new dog(20),
                new dog(15),
                new dog(10),
                new dog(5),
                new dog(10),
                new dog(15),
                new dog(22),
                new dog(15),
                new dog(20)
        };
        dog[] bigDogs1 = largerThanFourNeighbors(dogs);
        // if we don't use the method like "removeNull", we can check whether current index points to null , if it does, break then,
        // but it makes bigDogs1 less effective, maybe it can make big troubles that hard to notice.So, develop a good habit.
        for(int i = 0 ;i<bigDogs1.length;i+=1) {
            System.out.println(bigDogs1[i].weight + " ");
        }
    }
}

```

## CPP

对比Java，cpp要考虑内存的管理。

```cpp
#include <iostream>
class dog
{
public:
    int weight;
    dog(int w = 0)
    {
        this->weight = w;
    }
};
class dogProblem
{
public:
    static std::pair<dog *, int> largerThanFourNeighbors(dog dogs[], int size)
    {
        dog *retDogs = new dog[size];
        int cnt = 0;
        for (int i = 0; i < size; i++)
        {
            if (isBiggestDogInFour(dogs, i, size))
            {
                retDogs[cnt++] = dogs[i];
            }
        }
        retDogs = removeNull(retDogs, cnt);
        return std::make_pair(retDogs, cnt);
    }
    static dog *removeNull(dog dogs[], int actualSize)
    {
        dog *newDogs = new dog[actualSize];
        for (int i = 0; i < actualSize; i++)
        {
            newDogs[i] = dogs[i];
        }
        delete[] dogs;
        dogs = nullptr;
        return newDogs;
    }
    static bool isBiggestDogInFour(dog dogs[], int i, int size)
    {
        bool isBiggest = true;
        for (int j = -2; j <= 2; j++)
        {
            if (!j)
                continue;
            int compareIndex = i + j;
            if (availableDog(size, compareIndex))
            {
                if (dogs[compareIndex].weight > dogs[i].weight)
                {
                    isBiggest = false;
                    break;
                }
            }
        }
        return isBiggest;
    }
    static bool availableDog(int size, int index)
    {
        if (index < 0)
            return false;
        if (index >= size)
            return false;
        return true;
    }
};
int main()
{
    dog dogs[]{dog(5), dog(15), dog(20), dog(15), dog(10), dog(5), dog(10), dog(15), dog(22), dog(15), dog(20)};
    auto [bigDogs1, size] = dogProblem::largerThanFourNeighbors(dogs, sizeof(dogs) / sizeof(dogs[0]));
    for(int i = 0;i<size;i++){
        std::cout<<bigDogs1[i].weight<<" ";
    }
    std::cin.get();
    return EXIT_SUCCESS;
}
```
# Keyword `static` in Java 

```java cube
public class cube {
    public int length;
    public int width;
    public int height;
    public int volunm;

    cube(int l, int w,int h) {
        length = l;
        width = w;
        height = h;
        //calculateVolunm(this);
        this.calculateVolunm();
    }

    public static void calculateVolunm(cube c) {
        c.volunm = c.length * c.width * c.height;
    }

    public void calculateVolunm() {
        volunm = length * width*height;
    }

    public static cube maxCube(cube c1, cube c2) {
        if (c1.volunm > c2.volunm) {
            return c1;
        }
        return c2;
    }

    public cube maxCube(cube c) {
        if (this.volunm > c.volunm) {
            return this;
        }
        return c;
    }
}

```

```java cubeLauncher
public class cubeLauncher {
    public static void main(String[] args) {
        cube cube1 = new cube(3, 5,2);
        cube cube2 = new cube(6, 5,3);
        cube myCube1 = cube.maxCube(cube1, cube2);
        cube myCube2 = cube1.maxCube(cube2);
        System.out.println(myCube1.volunm + " " + myCube2.volunm);
    }
}
```

`static`修饰的成员是所有对象共享的，正因为是共享的，所以在静态方法中不能使用非静态成员。也就是大家共享的方法里不能有个人的成员存在。

就如上的`cube`类，对`cube`对象，共享计算体积的方法，共享比较大小的方法。计算体积和比较大小均有两套方法，分别是静态和非静态。

它们的调用存在差异。对于静态方法，我们需要通过类名来调用，因为我们不关心对象。对于非静态方法，我们需要通过对象来调用，因为我们需要这个方法来知道调用对象的信息。进一步说的话，是调用目的的不同导致了调用方式的不同。

按教授的讲解，假设我们有一个`dog`类。

使用静态成员就好似：对上帝说，“Hey！请你告诉我狗是怎么走路的”  然后上帝告诉你狗走路的方法`dog.howDogWalks()`

使用非静态成员就好似：对一个名为`Marx`的狗说，“`Marx`！让我听听你的叫声” 然后`Marx`: "Bark! Bark!" `Marx.makeNoise()`，然后又对一个名为`Danae`的狗说，“来，你叫叫”，然后`Danae`: "woof!!" `Danae.makeNoise()`

因此，可以看出，对于一些成员，我们有必要使用`static`修饰，我们通过调用可以知道共通的特性，对于不用`static`修饰的成员，我们通过调用可以知道对象的特性。

简单思考一下，对于以上的`cube`类，假如我们引入一个单位体积权重的变量`weight`，那么它是否要用`static`修饰呢？假如引进的是一个特异性的权重`myWeight`呢？
# Proj 0

## **MVC模式** 和 **观察者模式**

> The skeleton exhibits two *design patterns* in common use: the Model-View-Controller Pattern (MVC), and the Observer Pattern.
>
> The MVC pattern divides our problem into three parts:
>
> - The **model** represents the subject matter being represented and acted upon – in this case incorporating the state of a board game and the rules by which it may be modified. Our model resides in the `Model`, `Side`, `Board`, and `Tile` classes. The instance variables of `Model` fully determine what the state of the game is. Note: You’ll only be modifying the `Model` class.
> - A **view** of the model, which displays the game state to the user. Our view resides in the `GUI` and `BoardWidget` classes.
> - A **controller** for the game, which translates user actions into operations on the model. Our controller resides mainly in the `Game` class, although it also uses the GUI class to read keystrokes.
>
> The MVC pattern is not a topic of 61B, nor will you be expected to know or understand this design pattern on exams or future projects.
>
> The second pattern utilized is the “Observer pattern”. Basically this means that the **model** doesn’t actually report changes to the **view**. Instead, the **view** *registers* itself as an *observer* of the `Model` object. This is a somewhat advanced topic so we will provide no additional information here.

骨架展示了两种常用的*设计模式*：模型-视图-控制器模式（MVC）和观察者模式。

MVC 模式将我们的问题分为三个部分：

- **模型**代表被表示和被执行的主题--在本例中，它包含了棋盘游戏的状态和可对其进行修改的规则。我们的模型包含在`Model`、`Side`、`Board` 和`Tile`类中。`Model`的实例变量完全决定了游戏的状态。注意：您只需修改`Model`类。
- 模型的**视图**，用于向用户显示游戏状态。我们的视图位于`GUI`和`BoardWidget`类中。
- 游戏**控制器**，用于将用户操作转化为对模型的操作。我们的控制器主要位于`Game`类中，不过它也使用 GUI 类来读取按键。

MVC 模式不是 61B 的主题，在考试或未来的项目中也不会要求你了解或理解这种设计模式。

使用的第二种模式是 "观察者模式"。基本上，这意味着**模型**实际上并不向**视图**报告变化。相反，**视图** *将*自己*注册*为`模型`对象的*观察者*。这是一个有些高深的话题，因此我们在此不再提供更多信息。

> *通过[DeepL.com](https://www.deepl.com?utm_campaign=product&utm_source=web_translator&utm_medium=web&utm_content=copy_free_translation)（免费版）翻译*

## My answer

在如下四个方法中，前三个是相对简单的，最后一个需要官方提示才能轻松完成。

对于复杂的问题，尽可能地使用了`helper`简化。

### `public static boolean emptySpaceExists(Board b)`

```java public static boolean emptySpaceExists(Board b)
    public static boolean emptySpaceExists(Board b) {
        // TODO: Fill in this function.
        for(int i = 0 ;i<b.size();i++){
            for(int j =0;j<b.size();j++){
                if(b.tile(i,j)==null) {
                    return true;
                }
            }
        }
        return false;
    }
```

### `public static boolean maxTileExists(Board b)`

```java public static boolean maxTileExists(Board b)
   public static boolean maxTileExists(Board b) {
        // TODO: Fill in this function.
        for(int i = 0 ;i<b.size();i++){
            for(int j =0;j<b.size();j++){
                if(b.tile(i,j)==null){
                    continue;
                }
                if(b.tile(i,j).value()==MAX_PIECE) {
                    return true;
                }
            }
        }
        return false;
    }
```

### `public static boolean atLeastOneMoveExists(Board b)`

#### 未优化

```java public static boolean atLeastOneMoveExists(Board b) before
    public static boolean atLeastOneMoveExists(Board b) {
        // TODO: Fill in this function.
        for (int i = 0; i < b.size(); i++) {
            for (int j = 0; j < b.size(); j++) {
                if (b.tile(i, j) == null) {
                    return true;
                }
                if (hasSameNeighbor(b, i, j)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean hasSameNeighbor(Board b, int x, int y) {
        if (b.tile(x, y) == null) {
            return false;
        }
        int val = b.tile(x, y).value();
        if (exist(b, x - 1, y)) {
            if (b.tile(x - 1, y).value() == val) return true;
        }
        if (exist(b, x + 1, y)) {
            if (b.tile(x + 1, y).value() == val) return true;
        }
        if (exist(b, x, y + 1)) {
            if (b.tile(x, y + 1).value() == val) return true;
        }
        if (exist(b, x, y - 1)) {
            if (b.tile(x, y - 1).value() == val) return true;
        }
        return false;
    }

    public static boolean exist(Board b, int x, int y) {
        if (x >= 0 && x < b.size() && y >= 0 && y < b.size()) {
            if(b.tile(x,y)==null){
                return false;
            }
            return true;
        }
        return false;
    }
```

#### 优化

优化了含有逻辑重复的`if`语句，使 `hasSameNeighbor` 内部代码更简洁。  

优化方式：  

将四个邻居的坐标存在一个二维数组中，通过遍历数组代替对四个邻居分别使用`if`判断  

```java public static boolean atLeastOneMoveExists(Board b) after
public static boolean atLeastOneMoveExists(Board b) {
        // TODO: Fill in this function.
        for (int i = 0; i < b.size(); i++) {
            for (int j = 0; j < b.size(); j++) {
                if (b.tile(i, j) == null) {
                    return true;
                }
                int[][] neighbors={{i+1,j},{i-1,j},{i,j+1},{i,j-1}};
                if (hasSameNeighbor(b, neighbors,i,j)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean hasSameNeighbor(Board b, int neighbors[][],int i,int j) {
        for(int[] pair: neighbors){
            if(exist(b,pair[0],pair[1])){
                if(b.tile(pair[0],pair[1]).value()==b.tile(i,j).value()){
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean exist(Board b, int x, int y) {
        if (x >= 0 && x < b.size() && y >= 0 && y < b.size()) {
            if(b.tile(x,y)==null){
                return false;
            }
            return true;
        }
        return false;
    }
```



###   `public boolean tilt(Side side)`

这个方法是`proj0`中最难的一个，但是官方给的提示非常棒，看完了官方给的文档后会清晰不少。详见官方文档。

最让我惊叹的是对于四个方向的移动的统一，也就是`board.setViewingPerspective(Side side)`这个方法。这个方法使得我们仅考虑棋盘的一个方向移动，也就是向上only。否则，我们将重复四次逻辑相同的代码块。

#### 未优化

```java  public boolean tilt(Side side) before
    public boolean tilt(Side side) {
        boolean changed;
        changed = false;

        // TODO: Modify this.board (and perhaps this.score) to account
        // for the tilt to the Side SIDE. If the board changed, set the
        // changed local variable to true.
        // 旋转棋盘
        board.setViewingPerspective(side);
        // 映射整个棋盘的合并情况
        boolean[][] mergetab =new boolean[board.size()][board.size()];
        //行优先遍历，即，从上到下，从左到右
        for (int j = 2; j >= 0; j--) {
            for (int i = 0; i < board.size(); i++) {
                if (board.tile(i, j) == null) {
                    continue;
                }
                Tile myTile = board.tile(i, j);
                int d = moveDistance(i, j,mergetab); 
                if (d != 0) {
                    // board.move()若为true，则发生合并
                    if(board.move(i, j + d, myTile)){
                        score += myTile.value()*2;
                        // 记录合并信息
                        mergetab[i][j+d]=true;
                    }
                    changed = true;
                }
            }
        }
        // 回旋棋盘
        board.setViewingPerspective(Side.NORTH);
        checkGameOver();
        if (changed) {
            setChanged();
        }
        return changed;
    }
	// 获得向上移动的步数
    public int moveDistance(int c, int r,boolean tab[][]) {
        int distance = 0;
        for (int i = r + 1; i <= 3; i++) {
            if (board.tile(c, i) == null) {
                distance++;
            } else if (!tab[c][i]&&board.tile(c, i).value() == board.tile(c, r).value()) {
                distance++;
                break;
            } else {
                break;
            }
        }
        return distance;
    }
```

#### 优化

在未优化代码块中，选择的是行优先遍历，根据官方提示，可以考虑选择列优先遍历。  

优化针对的部分是： 用`boolean` 数组记录遍历到的`tile`对应的那一列中，发生了合并的位置。  

由于未优化的代码是行优先遍历，就导致我们需要一个二维的`boolean`数组，但是变为列优先遍历后，我们仅需要一个一维`boolean`数组。优化，也就是优化了一小点点内存。  

```java public boolean tilt(Side side) after
    public boolean tilt(Side side) {
        boolean changed;
        changed = false;

        // TODO: Modify this.board (and perhaps this.score) to account
        // for the tilt to the Side SIDE. If the board changed, set the
        // changed local variable to true.
        board.setViewingPerspective(side);
        // 列优先遍历，即，从左到右，从上到下
        for(int i = 0 ; i<board.size();i++){
            // 映射单列的合并情况
            boolean[] checkMergeTab=new boolean[board.size()];
            for (int j = board.size()-1;j>=0;j--){
                Tile myTile = board.tile(i,j);
                if(myTile == null){
                    continue;
                }
                int d = moveDistance(i,j,checkMergeTab);
                if(d!=0){
                    if(board.move(i,j+d,myTile)){
                        score+= myTile.value()*2;
                        //记录合并信息
                        checkMergeTab[j+d]=true;
                    };
                    changed = true;

                }
            }
        }
        board.setViewingPerspective(Side.NORTH);
        checkGameOver();
        if (changed) {
            setChanged();
        }
        return changed;
    }

    public int moveDistance(int c, int r,boolean tab[]) {
        int distance = 0;
        for (int i = r + 1; i <= 3; i++) {
            if (board.tile(c, i) == null) {
                distance++;
            } else if (!tab[i]&&board.tile(c, i).value() == board.tile(c, r).value()) {
                distance++;
                break;
            } else {
                break;
            }
        }
        return distance;
    }
```

# VOCABULARY 



|       词        |       解释       |                             备注                             |
| :-------------: | :--------------: | :----------------------------------------------------------: |
| `curly braces`  |    {}，花括号    |                         `curly` 弯曲                         |
|  `parameter `   |       参数       |                                                              |
|    `syntax`     |       语法       |                                                              |
|  `declaration`  |       声明       |                        `declare`声明                         |
| `instantiation` |      实例化      |                     `instantiate` 实例化                     |
|  `assignment`   | 分配，指派，赋值 | `Dog smallDog = new Dog(5)` `declaration`, `instantiation` and `assignment`. |

