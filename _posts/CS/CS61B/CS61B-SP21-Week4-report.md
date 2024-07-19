---
title: '[CS61B_SP21]Week4_report'
date: 2024-04-11 21:40:22
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/04/08/OmvSTF.jpg
sticky: false
categories: 
- [CS,CS61B]
---

# Intro

本周并没有讨论太多编程思想上的问题，主要扩展了Java的语法知识

但依旧给出*Suggest*

> Suggest
>
> - [封装](#encapsulation) 关于封装思想
> - [类编写的扩展](#arrayset-cs61b-version) 借`ArraySet(CS61B version)`示例
> - [`varargs`可变参数](#of) 另一种初始化
> - [`git`基础（主要为视频）](#git) 附有一些简单的控制台指令

# Lecture 9. Extends, Casting, Higher Order Functions

## Extends & super

### Extends

`extends`的作用非常像cpp中通过`: 继承方式 + 类`继承

```java
public class Base1 extends Base{}
```

所有类都默认`extends Object`

```java
public class AnyClass extends Object{}
```

接口并不`extends Object`

> Interfaces don’t extend Object:  [why?](http://docs.oracle.com/javase/specs/jls/se7/html/jls-9.html#jls-9.2)

`is-a` relationship，这也是关于`extends`适用的层级关系

> **Important Note** : extends should only be used for **is-a** (hypernymic) relationships!

### super

在cpp中，我们可以通过`Base::method()`访问父类的成员（`Base`为对应父类）

在Java，可以通过`super`来达到同样的效果

```java	
public class Base1 extends Base{
    public void print(){
        super.print(); // print() in Base but Base1;
    }
}
```

若要使用调用默认的空构造，则只需

```java	
super(); 
```

Java会我们隐式调用默认构造

但如果你的父类没有默认的空构造，只有带参的构造，那么你必须在子类的构造函数正确的调用父类的构造，同时你应该对应修改函数签名

```java
public class Base1 extends Base{
	public Base1(int data){
        super(data);
        // ... // 
    }
}
```

## Encapsulation

封装，`encapsulation`

对复杂性的处理可以区别程序员的好坏。在目前为止（包括将来）的课程内容，其实都体现了一定的封装思想。

可以回顾一下我们向`AutoGrader`提交的所有作业。这些作业都会给出`To Do`注释，它会告诉我们要做什么，可能会借助到什么类、方法等等。我们在使用它提示的方法的时候，我们知道这个方法的功能，但若我们去查看具体实现，里面可能是我们未知的领域。但是这并不影响我们去使用它。

隐藏内部的复杂性，这就是封装。

人类的各个器官行使着自己的功能，又与其他器官联结起来，构成了系统，进而构成了一个人体。自然就是如此构建我们人类其他物种。可以说，封装是来源于自然的规律。借此进一步阐述上段的内容，我们去观察其他人的时候，最浅层次也就是关注其外表，外表隐藏了内部的各种复杂性（结构，各个器官的交互等等），可以想象，如果失去了这种自然的封装性，在第一次接触某人的时候，你就得一次性接受从细胞层面到系统的各种信息，可以想象，这是极为困难的。就好似一辆汽车没有外壳，一眼过去就是赤裸裸的机械装置。

> **Module**: A set of methods that work together as a whole to perform some task or set of related tasks. 
>
> A module is said to be **encapsulated** if its implementation is completely hidden, and it can be accessed only through a documented interface.

### Puzzle

但是，有些情况下我们会不经意的破坏程序的封装性。

以下两个问题仅存在一小点区别，请你仔细观察和思考

![](/pic/CS/CS61B/week4/1.png)

---

![](/pic/CS/CS61B/week4/2.png)

---



+++success Answer

第一题为: a

第二题为: c -> 它会陷入循环：bark() -> barkMany(1) -> bark() ->barkMany(1) -> ...



+++

可以看到，这种情况下我们破坏了其封装性

## Type Checking and Casting

如图所示

![](/pic/CS/CS61B/week4/3.png)

这部分内容延续了上周`lec 8`中的`Dynamic Method Selection`部分



类型转换，`casting`，可以在一些情况下解决如上的问题，但这会来带风险

> Casting is a powerful but dangerous tool.

---

![](/pic/CS/CS61B/week4/4.png)

---

我们关注如下代码。我们将会得到一个编译错误。(并没有给出`Dog.java`的具体内容，`bigger`是定义在其内部的一个通过`weight`比较大小的方法，其声明为`public Dog bigger(Dog d1, Dogd 2) `)

```java
public class Poodle extends Dog {
	public Poodle(int weight) {
		super(weight);
	}
	public Poodle() {
		super();
	}
	
	public static void main(String[] args) {
		Dog myDog = new Dog(10);
		Dog myPoodle = new Dog(20);
		Dog cmpDog = Dog.bigger(myDog, myPoodle);
		Poodle cmpPoodle = (Poodle)Dog.bigger(myDog, myPoodle); 
		cmpDog.print();
		cmpPoodle.print();
	}
}
```

如果我们将`main`中前两行代码都修改成如下，它会通过编译。但也仅仅是在这种情况下，因为这是一个幸运的情况。

```java
		Dog myDog = new Dog(10);
		Dog myPoodle = new Poodle(20);
```

如果是这样，也会出现最开始问题。

```java
	Dog myDog = new Poodle(10);
	Dog myPoodle = new Dog(20);
```

唯有都改为`Poodle`才会稳定的通过编译。

```java
	Dog myDog = new Poodle(10);
	Dog myPoodle = new Poodle(20);
```

可以借[[CS61B_SP21]Week3_report](https://cypressen.github.io/CS/CS61B/CS61B-SP21-Week3-report/)中`lec 8`中的`Dynamic Method Selection`部分来理解。

我自己的理解的话就是`(Type)`转型与其对应的两个类型的上下位关系有关（即`hypernym`和`hyponym`）

允许下位->上位，但不允许上位->下位。至于为什么如此限定，因为在子类中我们可能会新增特异的方法，这些方法都不是父类所拥有的，若我们尝试去把父类类型转化为子类类型，那在子类中特异的成员最后又将如何体现。



## Higher Order Functions (prelook)

高阶函数，也就是实现像`f(f(x))`如此。

但在Java，它的体现有些*verbose*

```java
public interface IntUnaryFunction {
	int apply(int x);
}
```

```java
public class TenX implements IntUnaryFunction {
	public int apply(int x) {
   		return 10 * x;
	}
}
```

```java
public class HoFDemo {
	public static int do_twice(IntUnaryFunction f, int x) {
   		return f.apply(f.apply(x));
	}
	public static void main(String[] args) {
   		System.out.println(do_twice(new TenX(), 2));
	}
}
```

# Lecture 10. Subtype Polymorphism vs. HoFs

## Implements vs. Extends

在上节讲座了解了`extends`，那么，我们要在什么情况下使用`extends`和`implements`呢

> Somehow I didn’t explicitly mention the difference between “implements” and “extends” during lecture.
>
> - You must use “implements” if the hyperym is an interface and the hyponym is a class (e.g. hypernym List, hyponym AList).
> - You must use “extends” in all other cases.

## Subtype Polymorphism

子类型多态性，`subtype polymorphism`

> Polymorphism: “providing a single interface to entities of different types”

它与先前讲的`Dynamic Method Selection` (week3) 有关。



回调，`callback`。也就是方法主体中使用了传入的方法（在参数列表里）



在了解以上两点后就进入这节讲座的重要部分

## Comparable

假设一个情景，我们需要一个`max`方法，它接收一个对象数组，返回对象数组中以特定的标准比较出来的最大对象。

形如 `Object max(Object[] os)`，这是最广泛的一个签名。

假设我们有一个`Dog`类，它有名字`name`和大小`size`两个成员变量（可以当作比较的标准），我们可以将以上的签名修改为`Dog max(Dog[] ds)`

但很显然，它的泛用性降低了。所以为了泛用性，思考设计形如`Object max(Object[] os)`这样的签名。

**我们可以设计一个接口`OurComparable`**，主体伴随一个`comparaTo`方法。在定义`Dog`类以及其他将会用到`max`的类的时候，使用`implements OurComparable`，并在类内覆写`comparaTo`方法。最后`max`可以设置这样的函数签名: `OurComparable max(OurComparable[] arr)`

三个文件依次如下

```java OurComparable
public interface OurCompareble {
    int compareTo(Object ob);
}
```

```java Dog
public class Dog implements OurCompareble {
    private String name;
    private int size;

    public Dog() {
    }

    public Dog(String name, int size) {
        this.name = name;
        this.size = size;
    }

    public void printName(){
        System.out.println(name);
    }
    public int compareTo(Object d) {
        Dog nd = (Dog) d;
        return this.size - nd.size;
    }
}

```

```java Main
public class Main {
    public static OurCompareble max(OurCompareble[] arr) {
        int index = 0;
        for (int i = 0; i < arr.length; i += 1) {
            if (arr[i].compareTo(arr[index]) > 0) {
                index = i;
            }
        }
        return arr[index];
    }

    public static void main(String[] args) {
        Dog[] dogArr = { new Dog(" shabby", 10), new Dog("marx", 20) };
        ( (Dog)max(dogArr) ).printName();
    }
}
```

可以在覆写`compareTo`方法的时候发现: `Dog nd = (Dog) d;`看起来是危险的。

幸运的是，Java自带名为`Compara`的接口能够相似地实现以上代码，解决了以上这个问题之外，它还更有取代性。只不过它需要带一个泛型使用

```java
public interface Comparable<T> {
     int compareTo(T obj);
} 
```

对以上代码的修改如下

```java
public class Dog implements Comparable<Dog>{
    // ... //
	public int compareTo(Dog d) { // 依旧能够覆写 因为接口的方法签名为compareTo(T obj); 此时T为Dog
        return this.size - d.size;
    }
}
```

```java Main
public static Comparable max(Comparable[] arr)
```



虽然这比较靠近我们理想的实现，但是，它还不够意思。

以上我们是以`size`为指标判断大小的，那么若以`name`在字符表中的排序（或者其他数据成员）为指标呢？

## Comparators

在上述我们提到了`callback`。在cpp理解就是作为参数的函数指针。

那么，在设计`max`的时候，除了传入一个数组，我们还可以传入一个方法，并以此方法来进行比较

因此，`max`的签名会是这样`Comparable max(Comparable[] arr , Object method)` 这里的`Object method`在一般指的是`Comparator<T> c`

一般情况下，这个`Comparator`是由对应的类导出，也就是它被特异定义在类内部

所以我们还要对上面的`Dog`类增加如下代码

```java Dog
    // public static class NameComparator implements Comparator<Dog>{
    //     public int compare(Dog d1 ,Dog d2){
    //         return d1.name.compareTo(d2.name);
    //     }
    // }
    private static class NameComparator implements Comparator<Dog>{
          // 如果d1的字母表顺序后出现，则返回正
        public int compare(Dog d1 ,Dog d2){
            return d1.name.compareTo(d2.name);
        }
    }
    public Comparator<Dog> getNameComparator(){
        return new NameComparator();
    }
```

`max`将修改为

```java max
    public static Comparable max(Comparable[] arr,Comparator c) {
        int index = 0;
        for (int i = 0; i < arr.length; i += 1) {
            if ((c.compare(arr[index], arr[i])) > 0) {
                index = i;
            }
        }
        return arr[index];
    }
```

在外部如此调用

```java Main
        Comparator<Dog> c = Dog.getNameComparator(); 
        ((Dog)max(dogArr,c)).printName();
```

若想新增一个比较方法，则只管在类中添加它，就不必再去特别修改`max`了

# Lecture 11. Exceptions, Iterators, Object Methods

## Lists and Sets in Java

### List

在之前的内容，我们一直使用的是自己构建的`List`，但很显然，我们不必每次都那么做

以下代码介绍了`List` in Java 的基本操作。

```java SimpleUseListInJava
import java.util.ArrayList;
import java.util.List;
public class SimpleUseListInJava {
    public static void main(String[] args) {
        ArrayList<Integer> myAList1 = new ArrayList<>(); // need  import java.util.ArrayList;
        ArrayList<String> myAList2 =new  ArrayList<>();

        myAList1.add(1);
        myAList1.add(10);
        myAList1.add(15);

        myAList2.add("blue");
        myAList2.add("red");
        myAList2.add("yellow");

        System.out.println(myAList1);
        System.out.println(myAList2);

        // List.of(); a special way to define a list object; (ArrayList.of() can not compile)
        List<Integer> myList = List.of(1,2,3); // need import java.util.List;

        System.out.println(myList);
    }
}

```

```console
[1, 10, 15]
[blue, red, yellow]
[1, 2, 3]
```

从以上代码发现，可以直接用对象名将对象打印出来，我们将在后面讨论

### Set

同上，只不过这里我们会初见`.of()`这个特殊的用来初始化的方法。

```java SimpleUseSetInJava
import java.util.HashSet;
import java.util.Set;

public class SimpleUseSetInJava {
    public static void main(String[] args) {
        Set<Integer> mySet = Set.of(1, 2, 3); // we`ll talk about this later.
        Set<String> myHashSet = new HashSet<>();

        myHashSet.add("blue");
        myHashSet.add("yellow");
        myHashSet.add("red");
        myHashSet.add("blue");

        System.out.println(mySet);
        System.out.println(myHashSet);

        for(String x : myHashSet){  // we`ll talk about this later.
            System.out.print(x + " ");
        }
        System.out.println();

        System.out.println(mySet.contains(1));
        System.out.println(mySet.contains(10));

        System.out.println(myHashSet.size());
        System.out.println(myHashSet.contains("red"));
        System.out.println(myHashSet.contains("orange"));
        
		System.out.println(myHashSet.contains(null));
        myHashSet.add(null);
        System.out.println(myHashSet.contains(null));
    }
}

```

```console
[1, 2, 3]
[red, blue, yellow]
red blue yellow 
true
false
3
true
false
false
true
```

请注意以上的`for(String x : myHashSet)`这段代码以及往对象添加`null`，我们将在后面讨论。


## ArraySet (CS61B version)

`Set`展示的代码中体现了一些新的语法特性。

我们借自己去模拟以上的实现来学习它们

---



```java ArraySet
public class ArraySet<T> {
    private T[] items;
    private int size;

    public ArraySet() {
        items = (T[]) new Object[100];
        size = 0;
    }

    public void add(T item) {
        if (item == null) {
            throw new IllegalArgumentException("Cannot add null!"); // if someone inputs null;
        }
		if(contains(item)){ // avoid repeated elements 
            return;
        }
        items[size] = item;
        size += 1;
    }

    public boolean contains(T x) {
        for (int i = 0; i < size; i += 1) {
            if (items[i].equals(x)) { // you can't use "==", think about a condition that there are objects inside;
                return true;
            }
        }
        return false;
    }

    public int size() {
        return size;
    }

    public static void main(String[] args) {
        ArraySet<Integer> myArraySet = new ArraySet<>();
        myArraySet.add(1);
        myArraySet.add(10);
        myArraySet.add(15);

        System.out.println("size = " + myArraySet.size() + '\n' + "contains 20? " + myArraySet.contains(20) + '\n'
                + "contains 1? " + myArraySet.contains(1));

        myArraySet.add(null);
    }
}
```

```console
size = 3
contains 20? false
contains 1? true
Exception in thread "main" java.lang.IllegalArgumentException: Cannot add null!
	at ArraySet.add(ArraySet.java:12)
	at ArraySet.main(ArraySet.java:40)
```

---



### Exception

输出的内容中有一段我们十分熟悉且恼人的信息。

`Exception in thread "main" java.lang.IllegalArgumentException: Cannot add null`

这来源于`main`的最后一条语句 -> 我们试图添加`null`

但这条异常信息不是由IDEA自然发生的，它直接来源于`add`方法主体的第一条`if`

```java
        if (item == null) {
            throw new IllegalArgumentException("Cannot add null!"); // if someone inputs null;
        }
```

请注意，它并不会中断程序。

---

事实上，真正的`Set`可以添加`null`。我们设置如上这条`if`是我们应对试图添加`null`这一行为的一种处理方式。

当然，我们完全可以真正的添加`null`。需要我们对`add`和`contain`做出相应的更改。

```java modified
    public void add(T item) {
        if (item == null) {
            size += 1;
            return;
        }
        if(contains(item)){
            return;
        }
        items[size] = item;
        size += 1;
    }    
	public boolean contains(T x) {
        for (int i = 0; i < size; i += 1) {
            if(items[i] == null){
                if(x == null){
                    return true;
                }
                continue;
            }
            if (items[i].equals(x)) { // you can't use "==", think about a condition that there are objects inside;
                return true;
            }
        }
        return false;
    }
```

### Iteration

在`Set`展示的代码中，`for(String x : myHashSet)` (也叫作`for-each`)看起来非常的简洁，但它具体是如何实现的呢。

---

我们需要使用类似在`Lecture 10`涉及的[`comparable`](#comparable)和[`comparator`](#comparators)的类对象

先看一段示例代码，此代码可以说是等同于`for-each`

```java
Iterator<Integer> seer = javaset.iterator();
while (seer.hasNext()) {
  System.out.println(seer.next());
}
```

从以上看出，`hasNext()`返回的是一个`boolean`类型，`next()`返回了当前的元素并且自动往后移动一个单位。

这就好像是使用基础的`for`循环遍历一个数组。但是我们的对象不总是为数组。我们需要`iterator`使得这种属于数组的特性泛用。

```java modified
import java.util.Iterator;
// ... //
	public Iterator<T> iterator() {
        return new ArraySetIterator();
    }

    private class ArraySetIterator implements Iterator<T> {// import
        private int pos;

        public ArraySetIterator() {
            pos = 0;
        }

        @Override
        public boolean hasNext() {
            return pos < size;
        }

        @Override
        public T next() {
            T returnItem = items[pos];
            pos += 1;
            return returnItem;
        }
    }
// ... //
	public static void main(String[] args) {
        ArraySet<Integer> myArraySet = new ArraySet<>();
        myArraySet.add(1);
        myArraySet.add(10);
        myArraySet.add(15);

        Iterator<Integer> it = myArraySet.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
```

```console
1
10
15
```

但是，我们还不能直接使用`for-each`，因为`for-each`中没有体现`Iterator`，换句话说，它不知道这个类对象是否在内部定义了`Iterator`

因此，我们需要这样做

```java
public class ArraySet<T> implements Iterable<T>
```

至此，我们可以使用`for-each`了

## Equals and toString

这里将介绍在以上代码出现过的`equals`方法，以及解释能够借对象名打印出数据的`toString`（你或许对这个方法名表示疑惑，我将会在后面分享自己对此的看法）

在此之前，可以了解`Object`中有哪些方法

```java
String toString()
boolean equals(Object obj)

Class<?> getClass()
int hashCode()

protected Object clone()
protected void finalize()
void notify()
void notifyAll()
void wait()
void wait(long timeout)
void wait(long timeout, int nanos)
```

这次讲座，我们重点讨论前两个。 `int hashCode()`将在后面讨论。其余方法不会在课程中体现。

在此之前，我需要强调，自写的类都默认实现`Object`，这也意味着，我们需要覆写这些方法 -> 也就是注意方法签名一致

### toString

打印就是输出字符串到控制台上，`toString`便于这一操作，把类中的元素格式化整合为一个字符串。可以将它想象成cpp中对`<<`的重载。

`toString`，我们将返回一个`String`类型 -> 自然想到的是把想到的输出内容全部存在一个`String`变量。

但遗憾的是，在这种情况下使用`String`来增删是非常耗时的，`IDEA`会推荐使用`StringBuilder`。

>  Adding even a single character to a string creates an entirely new string. Will discuss why at end of course.
>
> Spoiler: It’s because Strings are “immutable”.

```java
    @Override
    public String toString() {
        StringBuilder returnSB = new StringBuilder("{");
        for (int i = 0; i < size; i += 1) {
            returnSB.append(items[i]);
            if(i == size - 1){
                break;
            }
            returnSB.append(", ");
        }
        returnSB.append("}");
        return returnSB.toString();
    }
```

也可以配合`String`的一个方法实现。

```java
    @Override
    public String toString() {
        List<String> listOfItems = new ArrayList<>();
        for(T x : this){
            listOfItems.add(x.toString());
        }
        return String.join(", ",listOfItems); // 对`listOfItems`的每个元素使用`, `分割然后再拼接为一个String
    }
```





### Equals

使用`equals`而不是`==`不需赘述，可见[Reference Type](https://cypressen.github.io/CS/CS61B/CS61B-SP21-Week2-report/#reference-type)

```java
    @Override
    public boolean equals(Object other){
        if(this == other){
            return true; // same bits -> the same ONE object
        }
        if(other == null){
            return false;
        }
       if(this.getClass() != other.getClass()){
        return false;
       }
        ArraySet<T> otherArr = (ArraySet<T>) other;
        if(this.size != otherArr.size){
            return false;
        }

        for(T x : this){ // 'this' but 'this.items'
            if(!otherArr.contains(x)){
                return false;
            }
        }

        return true;
    }
```

使用了`getClass`方法，判断两对象是否为同一类型。

以上代码均可灵活变动，比如在`proj 1`中，判断是否为同一类型的标准是`ADeque`和`DDeque`的共同上位`Deque`

## of

在以上代码展示过的`of`，从效果来看，就像是cpp的初始化列表。

下面给出具体的实现

```java
    public static <TT> ArraySet<TT> of(TT... stuff) {
        ArraySet<TT> newArr = new ArraySet<>();
        for (TT item : stuff) {
            newArr.add(item);
        }
        return newArr;
    }
```

- 首先它得是静态方法，因此要新设置一个泛型才能达到理想效果 -> 在返回类型前新增一个泛型，不能与类声明的那个泛型同名
- `(TT... stuff)` 中 `...`代表的是`varargs`: 可变参数。能够和不确定个数的实参相匹配
- 此方法方法对所有实例后的类都适用，但一般就以`类名.of`进行初始化

# git

通过视频学习基本的git使用和原理

- [Git Intro - Part 1](https://www.youtube.com/watch?v=yWBzCAY_5UI)->基本指令
- [Git Intro - Part 2](https://www.youtube.com/watch?v=CnMpARAOhFg)->基本原理
- [Git Intro - Part 3](https://www.youtube.com/watch?v=t0tzTcZESWk)->`git`与`github`
- [Git Intro - Part 4](https://www.youtube.com/watch?v=ca1oCEMQGRQ)->合作使用`git`&`github`
- [Git Intro - Part 5](https://www.youtube.com/watch?v=dZbj9gjjYv8)->解决`merge conflicts`
- [Git Intro - Part 6](https://www.youtube.com/watch?v=r0oHi0vXhLE)->骨架`skeleton`



附上视频中出现的指令（`""` `<>`仅作说明，实际指令不包含）

| COMMAND                        | EFFECT                                                       |
| ------------------------------ | ------------------------------------------------------------ |
| `cd ~`                         | 回到父目录                                                   |
| `mkdir <folderName>`           | 在当前目录下创建文件夹                                       |
| `ls`                           | 得到当前目录下的文件                                         |
| `git init`                     | 初始化git。会创建一个空的repo（储存库）                      |
| `pwd`                          | 知道自己在哪个文件位置 会显示当前路径                        |
| `touch <fileName.format>`      | 创建指定格式的文件                                           |
| `git status`                   | 了解现在git的状态 -> 哪些文件变动                            |
| `git add <file>`               | 增加想要提交的文件/文件夹                                    |
| `git commit -m "message"`      | 提交更改 附上message                                         |
| `git log`                      | 可以看到自己完成提交的信息 也可以看到先前附上的message       |
| `clear`                        | 清理已输出的内容                                             |
| `cat <file>`                   | 可以看到文件的内容                                           |
| `cp <file1> <file2>`           | 将file1的内容复制给file2，如果file2不存在则新建后再拷入      |
| `./`                           | 表示当前目录                                                 |
| `subl <file>`                  | 需关联sublime） 通过sublime打开文件 -> 你也可以通过其他软件如此格式打开对应文件 |
| `git add *`                    | 其中的*表示当前目录的所有文件                                |
| `git checkout <magicalString>` | 这里的magicalString指的是git log 后显示的每次提交的那串蜜汁字符。通过这条指令 可以暂时回到相应的版本 |
| `git checkout main`            | 可以回到最新版本 -> `checkout`后面具体的参数见[Git Intro - Part 5](https://www.youtube.com/watch?v=dZbj9gjjYv8) |
| `git checkout <id> <file>`     | 恢复指定版本的某一文件                                       |
| `echo "message" >> <file>`     | 向文件写入message  注意： >> 是增添 > 是覆盖                 |
| `git push/pull origin main`    | 具体看视频[Git Intro - Part 6](https://www.youtube.com/watch?v=r0oHi0vXhLE) |

# Lab 4

此次`Lab`并不难，重点就是熟悉`git`的基本操作以及知晓原理。

故这次只给出`debugging`部分的提示。

`isSameNumber`的参数为对象，做`==`判断的时候比较的是`bits`，具体解释见[Reference-type](https://cypressen.github.io/CS/CS61B/CS61B-SP21-Week2-report/#reference-type)

# VOCABULARY

| 词              | 解释     | 备注                                                         |
| --------------- | -------- | ------------------------------------------------------------ |
| `encapsulation` | 封装     |                                                              |
| `casting`       | 转型     | 类型转换                                                     |
| `callback`      | 回调     |                                                              |
| `varargs`       | 可变参数 | variable number of arguments。有时候也被简单的称为"variable arguments" |

