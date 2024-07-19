---
title: '[CS61B_SP21]Week3_report'
date: 2024-04-07 17:03:16
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/04/07/OmAU1x.png
sticky: false 
categories: 
- [CS,CS61B]
---
# Intro

由于最近学校的事开始变忙，该课程的学习进度可能会变缓。

这篇报告我花了两周完成。篇幅相当大。同时伴随了一篇关于博客网站的踩坑分享[[shokax]log_4 [踩坑]本地图片部署后显示异常](https://cypressen.github.io/shokax/shokaxLog/shokax-log-4)

> Suggest
>
> - [Lec 8](#lecture-8-inheritance-implements) 关于继承

# Lecture 6. DLLists, Arrays

## DLLists

反思在上一周编写的链表。

> While fast, adding, .last and .prev introduces lots of special cases.
>
> To avoid these, eighter:
>
> > Add an additional sentBack sentinel at the end of the list.
> >
> > Make your linked list circular (highly recommended for project 1), with a single sentinel in the middle.

为了应对一些特殊情况，我们可以增加一个 `sentinel` 节点，以及考虑改造成双向链表。

+++success 展开见图
添加一个`sentBack`
![](/pic/CS/CS61B/week3/2.png)  

也可以充分利用一个`sentinel`

![](/pic/CS/CS61B/week3/1.png)

+++

## Generics

泛型`generics` 会使我们的类更加的"现实"

```java SSList
public class SSList<T> {
    private Node sentinel;
    private int size;

    private class Node {
        private T item;
        private Node next;
    }
}
```

```java Main
public class Main {
    public static void main(String[] args) {
        SSList<Integer> myList = new SSList<Integer>(); // not int but Integer
     // SSList<Integer> myList = new SSList<>();
    }
}
```

在带入`<>`中的类型写法和平时声明的写法不同。

| 一般写法 | 泛型写法  |
| :------: | :-------: |
|   int    |  Integer  |
|  double  |  Double   |
|   char   | Character |
| boolean  |  Boolean  |
|   long   |   Long    |



## Arrays

### 声明定义

有三种方式

```java
int[] y, x;
y = new int[3]; // 默认0 / null
x = new int[]{1, 2, 3, 4, 5}; // 自动推断数组长度
 // int[2] arr1; 不可以这样声明

int[] w = {9, 10, 11, 12, 13};
```

### 拷贝

数组在Java是个引用类型

```java
int[] x, y;
x = new int[]{1, 2, 3};
y = x; // 引用
```

使用数组拷贝方法可以实现我们想要的拷贝。

```java
System.arraycopy(arr1,0,arr2,0,3); 
//arraycopy(源数组,源数组的起始位置,目标数组,目标数组的起始位置,拷贝长度)
```

## 2D Array

### 声明定义

```java
int[][] arr1;
arr1 = new int[4][];
arr1[0] = new int[]{1, 2, 3};
arr1[1] = new int[]{7, 1, 2, 3};
// ... //

int[][] arr2;
arr2 = new int[4][4];

int[][] arr3 = new int[][]{ {1, 2, 3}, {2, 3, 4}, {2, 6, 4} };
```



# Lecture 7. ALists, Resizing, vs. SLists

Lec 7并没有讲太多的对于我来说新鲜的内容，故仅记录一小部分。

### Generics AList

在知道了泛型`generics`，可以思考进一步优化列表。

`AList`是类似于数组的列表

比较简单，直接看代码。

> 注意
> - 在使用泛型的时候，new关键词表达式有特定的语法
> - `resize`的扩容思想： `A multiplicative resizing strategy` 乘法调整大小策略

```java AList<T>
/**
 * Invariants:
 * addLast: The next item we want to add, will go into position size.
 * getLast: The item we want to return is in position size - 1.
 * size: The number of items in the last should be size.
 */

public class AList<T> {

    private T[] items;
    private int size;


    // Creates an empty list.
    public AList() {
        items = (T[]) new Object[100]; //items =new T[100] is not allowed, java don't allow to new generics array.
        size = 0;
    }


    // Resizes the underlying array to the target capacity. Private of course.
    private void resize(int capacity) {
        T[] a = (T[]) new Object[capacity];
        System.arraycopy(items, 0, a, 0, size);
        items = a;
    }

    // Inserts X into the back of the list.
    public void addLast(T x) {
        if (size == items.length) {
            resize(size * 2); // not (size + num) but (size * num), the later would be more efficient in time.
        }
        items[size] = x;
        size++;
    }

    /**
     * Return the item from the back of the list.
     */
    public T getLast() {
        return items[size - 1];
    }

    // Gets the ith item int the list (0 is the front).
    public T get(int i) {
        return items[i];
    }

    // Returns the number of items in the list.
    public int size() {
        return size;
    }

    /**
     * Deletes item from back of the list and
     * returns deleted item.
     */
    public T removeLast() {
        T x = getLast();
        items[size] = null; // we have to add this (if you are still confused, think about an occasion that we use AList to store objects).
        size -= 1;
        return x;
    }
}
```

#  Lecture 8. Inheritance, Implements

这部分内容或许有点`complicated`

## Inheritance

以下是两个功能相同的方法，仅在传入的参数有不同。

```java
public static String longest(SLList<String> list) {
    int maxDex = 0;
    for (int i = 0; i < list.size(); i += 1) {
        String longestString = list.get(maxDex);
        String thisString = list.get(i);
        if (thisString.length() > longestString.length()) {
            maxDex = i;
        }
    }
    return list.get(maxDex);
}

public static String longest(AList<String> list) {
    int maxDex = 0;
    for (int i = 0; i < list.size(); i += 1) {
        String longestString = list.get(maxDex);
        String thisString = list.get(i);
        if (thisString.length() > longestString.length()) {
            maxDex = i;
        }
    }
    return list.get(maxDex);
}
```

> While overloading works, it is a bad idea in the case of longest. Why?
>
> - Code is virtually identical. Aesthetically gross.
> - Won’t work for future lists. If we create a QList class, have to make a third method.
> - Harder to **maintain**.
>   - Example: Suppose you find a bug in one of the methods. You fix it in the SLList version, and forget to do it in the AList version.
> - Suppose we make another list someday, we'll need yet another function.

在这种情况下，方法传入的类对象可以用它们的共同上位来替代。

这就需要，类的继承。

### Hypernym and Hyponym

上位词`hypernym` ，下位词 `hyponym`

> 举个例子
>
> e.g. `dog`是`hypernym`，而贵宾犬`poodle`是`hyponym`  

> SLLists and ALists are both clearly some kind of "list". 
>
> - List is a `hypernym` of SLList and Alist.  

> Expressing this in Java is a two-step process:
>
> - Step 1: Define a reference type for our `hypernym` (List61B.java).
> - Step 2: Specify that SLLists and ALists are `hyponyms` of that type.

![](/pic/CS/CS61B/week3/3.png)

---



## Interface and Implements

所以，我们要如何实现和使用这种关系呢？

### Step 1: Defining a List61B

> We'll use the new keyword **interface** instead of **class** to define a List61B.
>
> - Idea: Interface is a specification of what a list is able to do, not how to do it.

```java List61B<Item>
public interface List61B<Item> { // "interface"
    public void addFirst(Item x);
    public void addLast(Item x);
    public Item getFirst();
    public Item getLast();
    public Item removeLast();
    public Item get(int i);
    public void insert(Item x, int position);
    public int size();
}
```

### Step 2: Implementing the List61B Interface

>  We'll now:
>
> - Use the new **implements** keyword to tell the Java compiler that SLList and AList are hyponyms of List61B.

```java
public class SLList<Item> implements List61B<Item> { // two generics should be same name

    public void addFirst(Item x) {
        // ... //
    }

    public void addLast(Item x) {
    }

    public Item getFirst() {
        return null;
    }

    public Item getLast() {
        return null;
    }

    public Item removeLast() {
        return null;
    }

    public Item get(int i) {
        return null;
    }

    public void insert(Item x, int position) {
    }

    public int size() {
        return 0;
    }
}
```

### Final: Use It

```java
public class Main {
    public static String longest(List61B<String> list) {
        int maxDex = 0;
        for(int i = 0; i < list.size();i+=1){
            String longestString = list.get(maxDex);
            String thisString = list.get(i);
            if( thisString.length() > longestString.length()){
                maxDex = i;
            }
        }
        return list.get(maxDex);
    }

    public static void main(String[] args) {
        //call longest(SLList / AList) 
    }
}
```

你可以这样去定义。

```java
public static void main(String[] args) {
   List61B<String> someList = new SLList<String>();	
   someList.addFirst("elk");
}
```
>  关于这段代码能实现的解释，详见[Dynamic Method Selection](#dynamic-method-selection)

## Override

> If a “subclass” has a method with the exact same signature as in the    “superclass”, we say the subclass **overrides** the method.

在父类`superclass`声明了一系列方法，在子类`subclass`定义这类方法的操作，就叫覆写`override`  

在实际代码中，使用`@Override`标签提示该方法是覆写的。当然，子类无法对不属于父类的方法使用该标签。

```java
public class SLList<Item> implements List61B<Item> {
    @Override
    public void addFirst(Item x) {
        //...//  
    }
}
```

> - Even if you don’t write @Override, subclass still overrides the method.
> - @Override is just an optional reminder that you’re overriding.

不添加这个`@Override`标签也是能通过编译的，但是我们有其他理由

> Why use @Override?
>
> - Main reason: Protects against typos.
>   - If you say @Override, but it the method isn’t actually overriding anything, you’ll get a compile error.
>   - e.g. **public** void addLats(Item x)
> - Reminds programmer that method definition came from somewhere higher up in the inheritance hierarchy.

与重载`overload`不同。在形式上，覆写`override`要求方法签名`signature`是一致的，并且其意义与重载不同。

> `signature`，方法签名 / 函数签名。由方法名、参数数量和类型决定。注意，它与返回值类型无关。

## Interface Inheritance

接口继承`Interface Inheritance`

> Specifying the capabilities of a subclass using the **implements**            
>
> keyword is known as **interface inheritance**.
>
> - Interface: The list of all method signatures.
> - Inheritance: The subclass “inherits” the interface from a superclass.
> - Specifies what the subclass can do, but not how.
> - Subclasses must override all of these methods!
>   - Will fail to compile otherwise.
> - Such relationships can be multi-generational.
>   - Figure: Interfaces in white, classes in green.
>   - We’ll talk about this in a later lecture.
>
> Interface inheritance is a powerful tool for generalizing code.
>
> - WordUtils.longest works on SLLists, ALists, and even lists that have not yet been invented!

在父类`superclass`声明的一系列方法，在子类继承的时候一定要覆写`override`所有的这些方法，否则编译不通过。



自然，它也能嵌套。

![](/pic/CS/CS61B/week3/4.png)  

---

## Implementation Inheritance

实现继承`Implementation Inheritance`

> For better or worse, Java also allows **implementation inheritance**.
>
> - Subclasses can inherit signatures AND implementation.

子类可以继承父类声明的方法`interface`和已经定义实现了的方法`implementation`

> Use the **default** keyword to specify a method that subclasses should inherit from an **interface.**
>
> - Example: Let’s add a default print()	 method to List61B.java

当然，`interface`修饰的父类不只有方法的声明，可以使用`default`关键词在父类中定义方法。

如果你没有使用`default`，IDEA就会提示

![](/pic/CS/CS61B/week3/5.png)  

所以也可以看出，父类被`interface`修饰后，内部的方法默认为`接口 abstract 方法`

```java
    default public void print(){ 
    // ... //
    }
```

但是，在`List61B`中，我们没有像`sentinel`，`size`这样的成员变量。想在这样的条件下去实现print方法有点奇怪。

但是，我们可以使用已声明的方法去帮助完成。这是另一种思路

> 为了便于观察，这里直接复制在上文展示过的`List61B`

```java
public interface List61B<Item> { 
    public void addFirst(Item x);
    public void addLast(Item x);
    public Item getFirst();
    public Item getLast();
    public Item removeLast();
    public Item get(int i);
    public void insert(Item x, int position);
    public int size();
}
```

在其中，我们添加一个`default`方法

```java
    default public void print() {
        for (int i = 0; i < size(); i += 1) {  // size() method
            System.out.print(get(i) + " ");   // get(int i) method
        }
        System.out.println();
    }
```

至此，我们可以不用在子类`SLList`或`AList`再次写`print`方法，外部也可以同样通过`.`调用

```java
public static void main(String[] args) {
   List61B<String> someList = new SLList<String>();	
   someList.addFirst("elk");
   someList.print();
}
```

那么我们要如何对待`default`方法呢，这里有道思考题或许能引导我们进一步思考

![](/pic/CS/CS61B/week3/6.png)

+++success Answer

B. Efficient for AList, inefficient for SLList
`get`方法对于`SLList`链表结构是低效的

+++

所以，在知晓答案之后，我们可以做这样的思考：

虽然我们有一个大家通用的方法，但是这个方法对于某些子类来说会有更好的选择。

所以，我们思考能否替代这方法呢？

---

`override`！！

我们可以在子类中覆写`default`方法

> If you don’t like a default method, you can override it.
>
> - Any call to print() on an SLList will use this method instead of default.
> - Use (optional) @Override to catch typos like **public void pirnt()**

```java
public class SLList<Item> implements List61B<Item> {
    @Override
    public void print(){ 
        //...//
    }
}
```

这里又提出了一个问题：
```java
public static void main(String[] args) {
   List61B<String> someList = new SLList<String>();	
   someList.addFirst("elk");
}
```

在这种情况下，我们若调用`somelist.print()`，它会用的是哪一个方法？

答案是你所想的那个`print`方法。

也就是覆写的`print()`

但是，这是为什么呢？

> **SLList.print() : And this is the sensible choice. But how does it work?**
>
> > Before we can answer that, we need new terms: static and dynamic type.

## Static and Dynamic Type

> Every variable in Java has a “compile-time type”, a.k.a. “static type”.
>
> - This is the type specified at **declaration**. Never changes!
>
> 
> Variables also have a “run-time type”, a.k.a. “dynamic type”.
>
> - This is the type specified at **instantiation** (e.g. when using new).
> - Equal to the type of the object being pointed at.

通过一个例子可以更直观地理解。

+++success 可视化过程



![](/pic/CS/CS61B/week3/t1.png)

---

![](/pic/CS/CS61B/week3/t2.png)

---

![](/pic/CS/CS61B/week3/t3.png)

---

![](/pic/CS/CS61B/week3/t4.png)

---

![](/pic/CS/CS61B/week3/t5.png)



+++

---



## Dynamic Method Selection

这直接回答了上面的那个问题。

> Suppose we call a method of an object using a variable with:
>
> - compile-time type X
> - run-time type Y
>
> Then if Y **overrides** the method, Y’s method is used instead.
>
> - This is known as “dynamic method selection”.

![](/pic/CS/CS61B/week3/7.png)

---

## Dynamic Method Selection Puzzle: Try to Predict the Results

这是一道值得关注的谜题，这会帮助我们更好地理解动态方法。

QUES: **最后的输出是什么？** 

> 你可以尝试单击图片，这样你或许能更容易关注题目

![](/pic/CS/CS61B/week3/p1.png)

+++success 必要的小提示



![](/pic/CS/CS61B/week3/p2.png)



+++

请随便找个地方记录你的答案

以下的折叠卡将会揭晓答案，well，在你思考完之前，还请你不要继续往下看。

---

### Answer

+++success Answer

```java
a.greet(d);  // "hello animal"
a.sniff(d);  // "dog sniff animal"
d.praise(d); // "u r cool dog"
a.praise(d); // “u r cool animal”
```

+++

关于这道题，讲座提供了一种理解方式。



> These two steps obey rules that are easy to apply, but take time to understand.
>
> - At compile time: We determine the **signature S** of the method to be called.
>   - S is decided using **ONLY static types**.
> - At runtime: The dynamic type of the **invoking object** uses its method with this exact signature S.
>   - By “invoking object”, we mean the object whose method is invoked.

这两点需要花时间去理解。

以下贴出了题目所示的代码，并有注释。

> 你可以将它们粘贴到自己的IDEA上，然后配合注释去调动（如果有相应的注释的话），我想这会更好的帮助理解。


```java Animal
public interface Animal {
    default void greet(Animal a) {
        System.out.println("hello animal");
    }

    default void sniff(Animal a) {
        System.out.println("sniff animal");
    }

    default void praise(Animal a) {
        System.out.println("u r cool animal");
    }

}
```

```java Dog
public class Dog implements Animal {
    // 注释的方法均可以看作实际存在Dog类中
    // default void greet(Animal a);
    @Override
    public void sniff(Animal a) {
        System.out.println("dog sniff animal");
    }
    // default void praise(Animal a);
    public void praise(Dog a) {
        System.out.println("u r cool dog");
    }

}
```

```java Main
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        Dog d = new Dog();
        a.greet(d);
        a.sniff(d);
        d.praise(d);
        a.praise(d);
    }
}

// 在编译时期，确定了调用的方法的签名
// 签名由静态类型决定

/*
 a.greet(d) 确定签名，对a来说，Animal是静态类型
 所以就确定了 greet(Animal a)

 a.sniff(d)，同上，找的是sniff(Animal a)

 d.praise(d) 对d来说，Dog是静态类型，编译器优先选择praise(Dog a) 因为它能准确对上签名
               经测试，如果删除重载的praise(Dog a)，编译器就会选择praise(Animal a)

 a.praise(d)，找的就是praise(Animal a)

*/

/*
 *  值得注意的是，sniff被Dog覆写了，所以一个签名sniff(Animal a)有两个主体 Paul Hilfinger calls these a “Dynamic Method Set”. 动态方法集
 *  但是对于praise(Animal a)来说，没有被覆写，而是被重载了，因此它是和sniff不一样的，因此方法名praise，两个标签( praise(Animal a) 和 praise(Dog a) ) 两个主体。
 *              如果在Dog中的praise上加上@Override标签，会报错，表示"方法未从其超类重写方法"，也就说明了该方法签名无法覆写，即便它们有相同的方法名
 *  */

// ----------------------------------- //

// 在运行时期，在编译时期确定了方法签名的基础上，最后则确定了调用的方法
/*
    a.greet(d) -> greet(Animal a) -> default void greet(Animal a)

    a.sniff(d) -> sniff(Animal a) -> sniff(Animal a)在动态类型Dog中被覆写
      ->
      @Override
       public void sniff(Animal a) {
          System.out.println("dog sniff animal");
      }

    d.praise(d) -> praise(Dog a) -> public void praise(Dog a);

    a.praise(d) -> praise(Animal a) -> default void praise(Animal a);
    // 对于此条，这里作详细解释：
            因为在编译时期确定了签名praise(Animal a)，即便存在praise(Dog a)并且传入的变量d就是Dog类型，但它依旧会确定调用前者。
            如果我们在Dog类下定义一个praises(Dog a)，然后再调用，会出现报错 "无法解析 'Animal' 中的方法 'praises'" 这就说明，在静态类型下，无法调用动态类型的特异成员（覆写的方法除外）。也就是静态类型只能使用其下的方法签名，然后再借此确定方法。
 */
```

## Interface vs. Implementation Inheritance

接口继承`interface inheritance`就像说明书，说明了这里有什么方法；

实现继承`implementation inheritance`就像解释书，解释了怎么实现这些方法。

> Interface Inheritance (a.k.a. what):
>
> - Allows you to generalize code in a powerful, simple way.
>
> Implementation Inheritance (a.k.a. how):
>
> - Allows code-reuse: Subclasses can rely on superclasses or interfaces.
>   - Example: print() implemented in List61B.java.
>
> - Gives another dimension of control to subclass designers: Can decide whether or not to override default implementations.
>
> **Important:** In both cases, we specify “is-a” relationships, not “has-a”.
>
> - Good: Dog implements Animal, SLList implements List61B.
> - Bad: Cat implements Claw, Set implements SLList.

关于最后的`Important`，它介绍了如何正确地描述继承关系。

`Dog` implements `Animal` ：`Dog`是(is-a) `Animal`。不是 `Dog` 有(has-a)  `Animal`。

### The Dangers of Implementation Inheritance

> Particular Dangers of Implementation Inheritance
>
> - Makes it harder to keep track of where something was actually implemented (though a good IDE makes this better).
> - Rules for resolving conflicts can be arcane. Won’t cover in 61B.
>   - Example: What if two interfaces both give conflicting default methods?
> - Encourages overly complex code (especially with novices).
>   - Common mistake: Has-a vs. Is-a!
> - Breaks encapsulation!
>   - What is encapsulation? See next week.

## Lists in Real Java Code

当然，Java肯定有自己的List。

至此，我们就能够理解以下代码。

> List methods [here](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/List.html).

```java
java.util.List<Integer> L = new java.util.ArrayList<>();
L.add(5);
L.add(10);
L.add(15);
System.out.println(L); // print: [5, 10, 15]
```

像使用`JUnit`的方法那样，填上这样的语句。就可以省略`java.util.`

```java
import java.util.List;
import java.util.ArrayList;
```



# Lab 3

> In this lab, we’ve seen how to:
>
> - Empirically measure the time it takes to construct a data structure.
> - Empirically measure the runtime of a data structure’s methods as a function of the size of the data structure.
> - Perform a comparison test between two implementations of a class.
> - Randomly call methods inside of a class.
> - Perform random comparison tests between two implementations of a class.
> - Use the resume button in IntelliJ.
> - Add a condition to a breakpoint.
> - Create an execution breakpoint.

## Timing Tests for List61B

### My answer

```java TimeAList
public static void timeAListConstruction() {
        // TODO: YOUR CODE HERE
        AList<Integer> Ns = new AList<>();
        AList<Double> times = new AList<>();
        Stopwatch sw = new Stopwatch();
        double startTime;
        double endTime;
        for (int N = 1000; N <= 128000; N *= 2) {
            AList<Integer> arr = new AList<>();

            Ns.addLast(N);
            startTime = sw.elapsedTime();
            for (int j = 0; j < N; j += 1) {
                arr.addLast(1);
            }
            endTime = sw.elapsedTime();

            times.addLast(endTime - startTime);
        }
        printTimingTable(Ns, times, Ns);
    }
```

```java TimeSLList
 public static void timeGetLast() {
        // TODO: YOUR CODE HERE
        AList<Integer> Ns = new AList<>();
        AList<Double> times = new AList<>();
        AList<Integer> opCounts = new AList<>();
        Stopwatch sw = new Stopwatch();
        double startTime;
        double endTime;
        int M = 10000;
        for (int N = 1000; N <= 128000; N *= 2) {
            SLList<Integer> arr = new SLList<>();
            opCounts.addLast(M);
            Ns.addLast(N);
            for (int j = 0; j < N; j += 1) {
                arr.addLast(1);
            }
            startTime = sw.elapsedTime();

            for(int j = 0 ; j < M;j+=1){
                arr.getLast();
            }
            endTime = sw.elapsedTime();

            times.addLast(endTime - startTime);
        }
        printTimingTable(Ns, times, opCounts);
    }
```

## Randomized Comparison Tests

> One technique for testing code is to do a “comparison test”. In such a test, we have two implementations of the same class. 
>
> One implementation is known (or strongly believed) to be correct, and the other is under development and not yet verified.

也就是借用随机数去调用方法进行测试。

```java
    @Test
    public void randomizedTest() {
        AListNoResizing<Integer> L = new AListNoResizing<>();
        int N = 500;
        for (int i = 0; i < N; i += 1) {
            int operationNumber = StdRandom.uniform(0, 2);
            if (operationNumber == 0) {
                // addLast
                int randVal = StdRandom.uniform(0, 100);
                L.addLast(randVal);
                System.out.println("addLast(" + randVal + ")");
            } else if (operationNumber == 1) {
                // size
                int size = L.size();
                System.out.println("size: " + size);
            }
        }
    }
```

### My answer

前期配合文档了解更多的测试技巧。

这里贴出最后找到问题的JUnit测试

```java
    @Test
    public void randomizedTest() {
        AListNoResizing<Integer> L = new AListNoResizing<>();
        BuggyAList<Integer> cmp = new BuggyAList<>();

        int N = 5000;
        for (int i = 0; i < N; i += 1) {
            int operationNumber = StdRandom.uniform(0, 4);
            if (operationNumber == 0) {
                // addLast
                int randVal = StdRandom.uniform(0, 100);
                L.addLast(randVal);
                cmp.addLast(randVal);
            } else if (operationNumber == 1) {
                // size
                int sizeL = L.size();
                int sizeCmp = cmp.size();
                assertEquals(sizeL,sizeCmp);
            } else if (operationNumber == 2) {
                // getLast
                if (L.size() != 0 && L.size() == cmp.size()) {
                    int valL = L.getLast();
                    int valCmp = cmp.getLast();
                    assertEquals(valL,valCmp);
                }
            } else if (operationNumber == 3) {
                // removeLast
                if (L.size() != 0 && L.size() == cmp.size()) {
                    int valL = L.removeLast();
                    int valCmp = cmp.removeLast();
                    assertEquals(valL,valCmp);
                }
            }
        }
    }
```

然后仅需修改BuggyAList中的一小点。

```java BuggyAList
    public Item removeLast() {
        if ((size < items.length / 4) && (size > 4)) {
            resize(items.length / 4);
        }
        Item x = getLast();
        items[size - 1] = null;
        size = size - 1;
        return x;
    }
```



# Proj 1

## Intro

因为在这个时间段我比较忙碌，此次作业我利用了比较散的时间完成。

官方给的作业文档对我来说有点理解困难，尤其是`equals`方法和`Iterator`相关的知识。对于我这种Java就是跟着该课程学习的来说，对这两个知识点是一头雾水的。

所以，我也花了相当的时间去完成这项作业。跨越了三天的时间。

我的代码可以说是有点混乱。我反复修改了很多次，部分代码也是借鉴了其他人的。所以关于此部分的`My answer`，我会着重分享我踩的坑，而不仅仅是贴上答案。

> 你可以通过在`github`上搜索`cs61b-sp21`获得别人的答案。大多数可供参考。



---



+++success 于Apr 4开始提交，Apr 7完成满分

> 中间的一次满分是非常破防后直接提交的别人的代码。不过随后又借助满分答案修正了自己的代码

![](/pic/CS/CS61B/week3/8.png)

+++

## Packages



> A package is a collection of Java classes that all work together towards some common goal. We’ve already seen packages in CS 61B without knowing it. For example, `org.junit` is a package that contains various classes useful for testing, including our familiar `Assert` class, which contains useful static methods like `assertEquals`. In other words, when we saw `org.junit.Assert.assertEquals`, the `org.junit` was the package name, `Assert` was the class name, and `assertEquals` was the method name. We call `org.junit.Assert.assertEquals` the “canonical name” of the method, and we call `assertEquals` the “simple name” of the method.

软件包是 Java 类的集合，所有这些类都为某个共同目标而工作。在 CS 61B 中，我们已经在不知不觉中看到了包。例如，org.junit 是一个包，其中包含各种对测试有用的类，包括我们熟悉的 Assert 类，它包含有用的静态方法，如 assertEquals。换句话说，当我们看到 org.junit.Assert.assertEquals 时，org.junit 是包名，Assert 是类名，assertEquals 是方法名。我们称 org.junit.Assert.assertEquals 为方法的 "规范名称"，称 assertEquals 为方法的 "简单名称"。

> 翻译来自[DeepL翻译：全世界最准确的翻译](https://www.deepl.com/translator#en/zh/A)

> When creating a package, we specify that code is part of a package by specifying the package name at the top of the file using the `package` keyword. For example, if we wanted to declare that a file is part of the `deque` package, we’d add the following line to the top of the file.

> ```java
> package deque;
> ```

## My answer

关于具体代码，你可以通过访问我的[cypressen/cs61b (github.com)](https://github.com/cypressen/cs61b)，它将会更新至同学习报告的进度。

关于此次作业，我并不推荐看我的代码。（主要是懒得优化，对此次的`proj`破防了很多次）

以下我将分享一些可能的困难。

### LinkedListDeque

#### Sentinel

在讲座中，教授提到建议我们在`proj1`中使用双向链表，也就是循环链表。但是讲座并没有直接带我们写一遍代码，仅仅是给出了图示。

所以在设计由一个`sentinel`实现的双向链表上，可能会遇到一些困难

**关于链表为空的时候，`sentinel`的前后指向**

这个第一次考虑是在初始化空列表的时候，最开始我设置的是两个都为null，最后发现这并不符合不变性思想。

你可以尝试（或许你正在这么做），在设置前后都为null的时候，是无法避免在`add`方法和`remove`方法去多写一条if。

正确的则是，它应该是个闭环，所以在空列表的时候，`sentinel`的前后指向为`sentinel`本身。

你如果在此遇上困难，建议借助图画。

### ArrayDeque

#### ArrayDequeTest

我们需要一个`ArrayDequeTest`文件，或许你借官方文档注意到了这点。但我当时对是否要增加这样的文件是有点疑惑的。

事实上，在我做完所有的事后，发现Test真的很重要，对于自己写的绝大部分类，都有专门附上一个Test文件的必要。

#### Resize

`resize`方法，在`check point`之前文档没有叫我们去实现`resize`方法，但是在最后是需要该方法的，尽管官方文档并没有明确指出。

包括`equals` 和`Iterator`也是如此。

受此提醒，你或许需要重新审视自己所完成的内容，是否会有残缺。

### MaxArrayDeque

关于关键字`extends`，在我的印象中，讲座似乎没有涉及这个关键字。在`lec8`中，似乎没有出现。

#### Comparator

对于我这种Java跟着课程走的来说，`comparator`也是陌生的。在这个时候就必须借助`google`或其他人的代码了。

在你了解了知识点后，依旧还是难以下手，建议去看看别人的代码，或与他人交流（如果有的话）。

#### Test

当然，你也要同`ArrayDeque`一样，为此写Test。

### AutoGrader

在提交评测期间，我依赖了`AutoGrader`的评测系统（课程并不建议这么做），我这么做是因为我低效地使用评测后的报错信息。

也就是，在我没有拿到满分的时候我没去关注报错信息，选择的是直接复制报错到搜索栏上，而没有主动去看报错信息的甚至一个单词。这是错误的！！

你应该做的是，借给出的异常信息做出针对修改。当然，你也可以选择为自己写一个`AutoGrader`，但这也是相当花费精力的（需要考量多种情况，这会令人头疼）。

高效地使用报错信息会快速的帮助你修改代码。

# VOCABULARY

| 词                           | 解释                | 备注                                                         |
| ---------------------------- | ------------------- | ------------------------------------------------------------ |
| `generics`                   | 泛型                |                                                              |
| `hypernym`                   | 上位词              |                                                              |
| `hyponym`                    | 下位词              |                                                              |
| `specification`              | 规范                |                                                              |
| `override`                   | 覆写                |                                                              |
| `superclass`                 | 父类                |                                                              |
| `subclass`                   | 子类                |                                                              |
| `Interface Inheritance`      | 接口继承            |                                                              |
| `Implementation Inheritance` | 实现继承            |                                                              |
| `signature`                  | 函数签名 / 方法签名 | 由函数名、参数的数量和参数的类型组成（**不包括**返回值类型） |
