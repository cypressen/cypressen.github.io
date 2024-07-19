---
title: '[CS61B_SP21]Week2_report'
date: 2024-03-22 15:52:24
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/03/22/OgKdpY.jpg
sticky: false
categories: 
- [CS,CS61B]
---
# Intro

这周的课程主要讲了关于测试、调试、链表、以及一些编程思想。

这篇博文大量引用了原文，有一部分是我认为比较有趣或是经典的话。

博文的篇幅可能较大，所以我将精选一部分内容在*Suggest*列出

>Suggest
>
>- [Reference Type](#reference-type) 关于Java的值传递特性
>
>- [Better way to write list](#better-way-to-write-list) 记录了优化糟糕的列表编写方式的过程
>
>- [Invariants](#invariants) 不变性思想

:::info

在你阅读之前，你或许需要做完Week 2的内容

:::

# Lecture 3. Testing

> How do you know that your code works?  

>  In the real world, programmers believe their code works because of tests they write themselves

测试自己的代码，这似乎于调试不同

##  `JUnit`

```java TestSort
public class TestSort {
    public static void Testsort() {
        String[] input = {"i", "have", "an", "egg"};
        String[] expected = {"an", "egg", "have", "i"};
        Sort.sort(input);

        for (int i = 0; i < input.length; i++) {
            if (input[i] != expected[i]) {
                System.out.println("The position '" + i + "' seems to be wrong. Expected '" + expected[i] + "' but get '" + input[i]+"'");
            }
        }
    }

    public static void main(String[] args) {
        Testsort();
    }
}
```

```java Sort
public class Sort {
    public static void sort(String[] arr){
    // some sort method, like selection sort.
    }
}
```

在`TestSort`中，中间这块代码有点冗长

```java 
for (int i = 0; i < input.length; i++) {
	if (input[i] != expected[i]) {
                System.out.println("The position '" + i + "' seems to be wrong. Expected '" + expected[i] + "' but get '" + input[i]+"'");
            }
        }
```

> It was just tedious to write something like this.

引入`JUnit`方法来替代

:::info

`JUnit`需要在项目结构里引入库。

具体操作为:  项目结构-> 库-> 新建项目库 -> 选择“java” -> 在IDEA文件目录下"/lib"根目录找到"junit4.jar"

:::
```java TestSort
public class TestSort {
    public static void Testsort() {
        String[] input = {"i", "have", "an", "egg"};
        String[] expected = {"an", "egg", "have", "i"};
        Sort.sort(input);
        
        org.junit.Assert.assertArrayEquals(expected,input);
    }

    public static void main(String[] args) {
        Testsort();
    }
}
```



![终端输出](/pic/CS/CS61B/week2/1.png)

> Silence is an indication that things are working well

没有令人头大的输出是极好的。

### Tips

```java tips
import org.junit.Test; // with this import, you can use @Test instead of verbose @org.junit.Test
import static org.junit.Assert.*; // and the same, with this, use assertArrayEquals instead of verbose org.junit.Assert.assertArrayEquals
// they are like `using` in cpp;
```




### ATTENTION
`==` `!=` 不总是有用

```java
if(input != expected){ ... }
```

在这里是对变量的值进行比较，而它们的值为地址  
详见[Reference Type](#reference-type) 

## `Sort  ` & `TestSort` 

在IDEA，可以借助IDEA的功能实现可视化更好的测试

就像在`proj0`的各种Test那样

> `Autograder` in this course, is based on JUnit.

作业评分系统`Autograder`也与`JUnit`有关

```java Sort
public class Sort {

    /** 具体设计：
     *  使用递归（recursion），借用helper，选择排序
     * 1. 找出候选范围中的最小值，返回索引
     * 2. 交换
     * 3. 递归
     */
    public static void sort(String[] arr) {
        sort(arr, 0);
    }

    // find the smallest one in arr range from "start" to end;
    private static int findSmallest(String[] arr, int start) {
        int smallestIndex = start;
        for (int i = start; i < arr.length; i++) {
            //arr[i].compareTo(); from the internet, if arr[i] < arr[smallestIndex], return -1.
            if (arr[i].compareTo(arr[smallestIndex]) < 0) {
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }

    // swap two elements by index
    private static void swap(String[] arr, int index1, int index2) {
        String temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    // recursion
    private static void sort(String[] arr, int start) {
        if (start == arr.length - 1) {
            return;
        }
        int smallestIndex = findSmallest(arr, start);
        swap(arr, start, smallestIndex);
        sort(arr, start + 1);
    }
}
```

```java TestSort
import org.junit.Test; // with this import, you can use @Test instead of verbose @org.junit.Test
import static org.junit.Assert.*; // and the same, with this, use assertArrayEquals instead of verbose org.junit.Assert.assertArrayEquals
// they are like `using` in cpp;

public class TestSort {
    // while using junit test, you need to make sure your method is non-static.
    @Test
    public void Testsort() {
        String[] input = {"i", "have", "an", "egg"};
        String[] expected = {"an", "egg", "have", "i"};
        Sort.sort(input);
        assertArrayEquals(expected, input);
    }
    /*
    @TEST
    public void TestOtherMethod(){ ... }
     */
}
```

# Lecture 4. References, Recursion, and Lists

## mystery of the `Walrus`

在CPP，我们可以直接使用`=`来显性拷贝同类对象，但是在Java，似乎不是这么简单

### Different from CPP

这里有CPP和Java逻辑上相同的两段代码

#### CPP

```cpp 
#include<iostream>
class Walrus {
public:
	int weight;
	int tuskSize;
	Walrus(int w, int s): weight(w), tuskSize(s) {}
};
int main() {
	Walrus w1(1, 10);
	Walrus w2 = w1;
	w2.weight = 5;
	std::cout << w1.weight << "  " << w1.tuskSize << std::endl;
	std::cout << w2.weight << "  " << w2.tuskSize << std::endl;
	return EXIT_SUCCESS;
}
```

```
1  10
5  10
```

#### Java

```java Walrus
public class Walrus {
    public int weight;
    public int tuskSize;
    public Walrus(int w, int s){
        weight = w;
        tuskSize = s;
    }
}
```

```java Main
public class Main {
    public static void main(String[] args) {
       Walrus w1 = new Walrus(1,10);
       Walrus w2 = w1;
       w2.weight = 5;
       System.out.println(w1.weight + " " + w1.tuskSize);
       System.out.println(w2.weight + " " + w2.tuskSize);
    }
}
```

```
5 10
5 10
```

对比之下，在Java中，`w2`拷贝`w1`，`w1`却和`w2`一同被修改了。这就好似，`w2`引用了`w1`

### Reference Type

>  There are 8 primitive types in Java:
>
> * byte, short, **int** , long, float, **double**, boolean, char
>
> Everything else, including arrays, is a **reference type**.

> When we instantiate an Object(e.g. Dog, Walrus, Planet):
>
> - Java first allocates a box of bits for each instance variable of the class and   
>  fills them with a default value (e.g. 0, null).    
> - The constructor then usually fills every such box with some other value.  

> When we declare a variable of any reference type (Walrus, Dogs, Planet):
>
> - Java allocates exactly a box of size 64 bits, no matter what type of object.
> - These bits can be either set to:
>   - Null (all zeros).
>   - The 64 bits "address" of a specific instance of that class (returned by `new`).

在Java，对象都是由占64bits的变量来索引的，也就是说，变量的内容是对象的地址

故，默认情况下，在进行拷贝的时候，实际上拷贝的就是地址。

> Everything else, including arrays, is a **reference type**.  

> This is sometimes called "box and pointer" notation.

#### ATTENTION
对基本类型不适用 `byte` `short` `int` `long` `float` `double` `boolean` `char`
```java Main
public class Main {
   public static void main(String[] args) {
      int a = 2;
      int b = a;
      b += 1;
      System.out.println("a = " + a);
      System.out.println("b = " + b);
   }
}
```
```
a = 2
b = 3
```

### Parameter Passing

>  Passing parameters obeys the same rule: Simply **copy the bits** to the new scope.

> **copy the bits**: This is also called pass by value.

参数传递就是值传递，而储存对象的变量的值，为对应的地址

```java Main
public class Main {
   public static void makeSomeChange(Walrus w, int num) {
      w.weight += 10;
      num -= 10;
   }
   public static void main(String[] args) {
      Walrus w = new Walrus(100, 10);
      int num = 20;
      makeSomeChange(w, num);
      System.out.println("w.weight = " + w.weight + "  num = " + num);
   }
}
```

```
w.weight = 110  num = 20
```

一般情况，对象会以引用的方式来传递。

### Golden Rules of Equals (GRoE)

> b = a; **copes the bits** from a into b
>
> Passing parameters **copes the bits**

这就是 mystery of the `Walrus` 

## List

:::danger

以下代码请不要参考，建议忽略

:::

以下的代码将会在后面进行优化讨论

```java IntLists
public class IntList {
	public int first;
	public IntList rest;
	public IntList(int f, IntList r) {
		first = f;
		rest = r;
	}
	/** return the size of the list using recursion */
	public int size() {
		if (this.rest  == null) {
			return 1;
		}
		return 1 + this.rest.size();
	}
	/** return the size of the list using no recursion */
	public int iterativeSize() {
		IntList p = this;
		int listSize = 0;
		while (p != null) {
			listSize++;
			p = p.rest;
		}
		return listSize;
	}
	/** return the ith item in list
	 *  0th is the first item */
	public int get(int i) {
		if (i == 0) {
			return first;
		}
		return rest.get(i - 1);
	}

	public static void main(String[] args) {
        // 逆序构建
		IntList myList = new IntList(15, null);
		myList = new IntList(10, myList);
		myList = new IntList(5, myList);

		System.out.println(myList.size());
		System.out.println(myList.iterativeSize());

		System.out.println(myList.get(0));
		System.out.println(myList.get(1));
		System.out.println(myList.get(2));
	}
}
```

```
3
3
5
10
15
```

# Lecture 5.  SLLists, Nested Classes, Sentinel Nodes

## A Better way to write list

这节课主要的内容就是如何去写一个更优雅的list，因此，会有部分代码块随着我们的思维方式频繁地发生改动，这是学习的过程，是锻炼思想的过程。故，我将保留看起来糟糕的代码，并对代码进行反思，引出思考的结果。

这部分可能看起来有点冗长，在我未开始动手之前就感觉这部分会占很大的文字空间。但是，我想，描述思维的过程，或许就得这样。

### Step 1

SLList，IntNode各做一个类，而后SLList嵌套IntNode，不像Lecture 4 中展示的方法，仅设置一个IntList类。现在我们将list整体和list节点区分对待。

可以直接复制IntNode类的代码到SLList的代码中。

在此基础上，我们写出了一些基本方法 `addFirst` `addLast` `getFirst`

```java Step1
public class SLList {
	public class IntNode {
		public int item;
		public IntNode next;
		public IntNode(int i, IntNode n) {
			item = i;
			next = n;
		}
	}
	public IntNode first;

	public SLList(int x) {
		first = new	IntNode(x, null);
	}
	public void addFirst(int x) {
		first = new	IntNode(x, first);
	}
	public void addLast(int x) {
		IntNode p = first;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
	}
	public int getFirst() {
		return first.item;
	}
	
	public static void main(String[] args) {
		SLList L = new SLList(15);
		L.addFirst(10);
		L.addFirst(5);
		L.addLast(19);
		System.out.println(L.getFirst()); // print 5
	}
}
```

我们将思考`size`方法获得list的大小。

考虑使用递归。递归需要传递下一个节点，但是对于SLList类是没有对应的成员的，而IntNode有。

所以，在这里我们考虑形参有一个`IntNode`类型，所以得到`int size(IntNode p)`

那么修饰词呢，最容易想到的就是public。OK，but how about `public static`?

在size中我们并没有操作`SLList`的实例成员，我们想要操作的是`IntNode`，操作的仅有参数。

So, `public static` seems to be better.

但是，如果是这样的话，我们又将以`SLList.size(L.first);`的方式调用，这样的话，那太糟糕了。

如果是`L.size();`这会更好。但这又与size需要一个参数矛盾。因此我们思考重载一个`size`，声明`public int size()`

那么，`public int size()`成为公开的了，就可以将`public int size( IntNode p )`的`public`替换为`private`

因此，`size`方法将会是如下所示:

```java size()
	
	private static int size(IntNode p) { // helper method. "This speaks the secret language of the gods."
		if (p.next == null) {
			return 1;
		}
		return 1 + size(p.next);
	}
	public int size() { // "This speaks the language of mortals."
		return size(first);
	}
```

以`L.size()`调用。

受`private`和`static`的启发，重新审视刚才的代码，我们将做出如下更改：

```java extra changes
	private static class IntNode { // 在此类中，我们并不用SLList的实例成员，也没必要public
		public int item;
		public IntNode next;
		public IntNode(int i, IntNode n) {
			item = i;
			next = n;
		}
	}
	private IntNode first; // 避免诸如 first.next.next = first; 的操作
```

Well，我们使得我们的代码更有限制，这样可以让一些操作变得合法。

### Step 2

所以，我们得到：

```java Step2
public class SLList {
	private static class IntNode {
		public int item;
		public IntNode next;
		public IntNode(int i, IntNode n) {
			item = i;
			next = n;
		}
	}
	private IntNode first;

	public SLList(int x) {
		first = new	IntNode(x, null);
	}
	public void addFirst(int x) {
		first = new	IntNode(x, first);
	}
	public void addLast(int x) {
		IntNode p = first;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
	}
	public int getFirst() {
		return first.item;
	}
	private static int size(IntNode p) {
		if (p.next == null) {
			return 1;
		}
		return 1 + size(p.next);
	}
	public int size() {
		return size(first);
	}

	public static void main(String[] args) {
		SLList L = new SLList(15);
		L.addFirst(10);
		L.addFirst(5);
		L.addLast(19);
		System.out.println(L.size()); // print 4
	}
}
```

这里，我们考虑一些性能问题，比如思考`size`方法。

如果我们有100,000个 or more 节点呢，`size`递归将会花费非常糟糕的时间，那有没有解决方案呢？

在复杂度上，我们可以用空间换时间。

所以，这里可以声明一个实例成员`size`，在会对节点数量进行增删的方法中维护`size`的值。这样，我们就可以删除递归的`size`方法。

```java Fast size
	private int size;
	public SLList(int x) {
		first = new	IntNode(x, null);
		size = 1;
	}
	public void addFirst(int x) {
		first = new	IntNode(x, first);
		size++;
	}
	public void addLast(int x) {
		IntNode p = first;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
		size++;
	}	
	public int size() {
		return size;
	}
```

对于`addLast`同样会有`size`那样的问题，但是我们这边不做考虑。

关于构造方法，我们自然需要一个空的构造方法。

```java SLList()
	public SLList() {
		first = null;
		size = 0;
	}
```

但是需要注意，我们此前的所有方法都是以非空列表实现的，因此我们将重新审视已有的方法，以适应空列表。

经测试，在`addLast`存在问题，若`first == null`，我们无法访问`p.next`，这就相当于在访问`null.next`，很显然，这是不合法的。

因此，最开始想到的方案就是在`addLast`增加一次判断。

```java after
	public void addLast(int x) {
		if(first == null){
			return;
		}
		IntNode p = first;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
		size++;
	}
```

> But...it's a little ugly.
>
> I mean it's just getting a little bloated.

Well，我们的目光不应该只放在应对特殊的处理，我们需要用特殊的思维来处理特殊本身。

也就是，尝试将它化为一般情况。

> Code that has special cases is hard to reasonable, human beings only have so much working memory, so whenever you have code that requires you to be thinking about, exceptions to the rules and so forth. It's just harder than something where everything behaves in one consistent way.

在这里，我们引入`sentinel node`，在之前我们或许见过相似的身影，即`dummy node`

```java sentinel
	private IntNode sentinel;
	public SLList() {
		sentinel = new IntNode(-1,null); // sentinel.item 可以是任意数字
		size = 0;
	}
	public SLList(int x) {
		sentinel = new IntNode(-1,null);
		sentinel.next = new IntNode(x,null);
		size = 1;
	}
	public void addFirst(int x) {
		sentinel.next = new IntNode(x,sentinel.next);
		size++;
	}
	public void addLast(int x) {
		IntNode p = sentinel;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
		size++;
	}
	public int getFirst() {
		return sentinel.next.item;
	}
```

所以，我们最开始的`first`可以删去了。

### Final

```java Final
public class SLList {
	private static class IntNode {
		public int item;
		public IntNode next;
		public IntNode(int i, IntNode n) {
			item = i;
			next = n;
		}
	}
	/** The first item (if it exists) is at sentinel.next
     *  sentinel node, which is just like dummy node*/
	private IntNode sentinel;
	/** Fast size()*/
	private int size;

	public SLList() {
		// sentinel.item 可以是任意数字
		sentinel = new IntNode(-1, null); 
		size = 0;
	}
	public SLList(int x) {
		sentinel = new IntNode(-1, null);
		sentinel.next = new IntNode(x, null);
		size = 1;
	}
	public void addFirst(int x) {
		sentinel.next = new IntNode(x, sentinel.next);
		size++;
	}
	public void addLast(int x) {
		IntNode p = sentinel;
		while (p.next != null) {
			p = p.next;
		}
		p.next = new IntNode(x, null);
		size++;
	}
	public int getFirst() {
		return sentinel.next.item;
	}
	public int size() {
		return size;
	}

	public static void main(String[] args) {
		SLList L1 = new	SLList(15);
		L1.addLast(5);
		L1.addFirst(20);

		System.out.println(L1.size()); 
		System.out.println(L1.getFirst());


		SLList L2 = new	SLList();
		L2.addLast(5);
		L2.addFirst(20);
		System.out.println(L2.size());
		System.out.println(L2.getFirst());
	}
}
```

### Sum

- 在类范围将列表和节点分隔又联系起来，尽可能单元化
- 有时候，我们需要做出空间换取时间或者时间换空间的策略
- 使用`private` `static`等关键词使代码更规范
- 将特殊情况一般化
- 在做出关联性改变的时候需要重新审视先前的结果


## Invariants

>  An invariant is a condition that is guaranteed to be true during code execution.
>
> (assuming there are no bus in your code)

>  An SLList with a sentinel node has at least the following invariants:
>
> - The sentinel reference always points to a sentinel node.
> - The first node (if it exists), is always at sentinel.next.
> - The size variable is always the total number of items that have been added.

> Invariants make it easier to reason about code:
>
> - Can assume they are true to simplify code (e.g. addLast doesn't need to worry about nulls).
> - Must ensure that methods preserve invariants.

这是所谓的 **结构化编程中的invariants思想**

在这部分的体现就是，用`sentinel` 来替代 `if(first == null){return;}`,或者，使得先前的情况为永真。



## Episode

在Lecture 5，教授 Josh Hug的手机响了，有如下对话

> \*rings* uh oh, my phone's ringing.
> 
> Hello, hi! You're in a video on the Internet forever.
> 
> "What? "----from the phone, confused.
> 
> Oh, I was recording a video for class.



# Lab 2

## Lab 2 setup

这部分文档说明了在IDEA如何使用pom.xml文件打开项目。

在项目结构中找到库，发现它已经为我们引入了项目需要的库。

![](/pic/CS/CS61B/week2/2.png)

但是，或许由于官方的教程老旧，在我以同样的方式打开lab 2...

## oops!!! many RED!!!

![我死了](/pic/CS/CS61B/week2/3.png)

不过好在，有人踩过这坑
+++success 解决方法

![1](/pic/CS/CS61B/week2/t1.png)

![2](/pic/CS/CS61B/week2/t2.png)

![3](/pic/CS/CS61B/week2/t3.png)

![4](/pic/CS/CS61B/week2/t4.png)

![5](/pic/CS/CS61B/week2/t5.png)

![6](/pic/CS/CS61B/week2/t6.png)
+++

## Lab 2

Lab2的作业内容主要了解了调试和测试。

这边直接给出答案。 

### Part A

修改了` while (head.next != null)` 

```java
    public static void addConstant(IntList lst, int c) {
        IntList head = lst;
        while (head != null) {
            head.first += c;
            head = head.rest;
        }
    }
```

### Part B

修改了`while (x > 10)`

```java
    public static boolean firstDigitEqualsLastDigit(int x) {
        int lastDigit = x % 10;
        while (x >= 10) {
            x = x / 10;
        }
        int firstDigit = x % 10;
        return firstDigit == lastDigit;
    }
```

### Part C

修改了` currElemIsPrime ||squarePrimes(lst.rest)`

```java
public static boolean squarePrimes(IntList lst) {
        // Base Case: we have reached the end of the list
        if (lst == null) {
            return false;
        }

        boolean currElemIsPrime = Primes.isPrime(lst.first);

        if (currElemIsPrime) {
            lst.first *= lst.first;
        }
        boolean nextPrime = squarePrimes(lst.rest); // ensure recurse first
        return nextPrime || currElemIsPrime; // squarePrimes(lst.rest) || currElemIsPrime
    }
```

在`SquarePrimesTest`中通过自己添加的这段测试，配合调试找出问题

```java
    @Test
    public void testSquarePrimeMorePrime() {
        IntList lst = IntList.of(1,2,3);
        boolean changed = IntListExercises.squarePrimes(lst);
        assertEquals("1 -> 4 -> 9", lst.toString());
        assertTrue(changed);
    }
```



# VOCABULARY

|     词      |      解释      |                     备注                     |
| :---------: | :------------: | :------------------------------------------: |
|  `assert`   |      断言      |                                              |
| `recursion` |      递归      |                                              |
| `primitive` |     原始的     |                                              |
| `parameter` |      参数      |                                              |
| `sentinel`  |      哨兵      | `sentinel node` ，就好似`dummy node`(哑节点) |
| `invariant` | 不变性，不变量 |                                              |

