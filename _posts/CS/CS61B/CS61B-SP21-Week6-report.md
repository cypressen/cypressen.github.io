---
title: '[CS61B_SP21]Week6_report'
date: 2024-05-2 21:52:55
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/05/02/OpVqqY.png
sticky: false
math: false
categories: 
- [CS,CS61B]

---

# Intro

这周的内容基本上在先前接触过，因此本文篇幅很小。

虽然说主讲的是复杂度分析相关，但目前本人对此难以进行阐述，无非就是把教授在讲座上所讲的内容复述一遍。故，这篇会大部分留白，以后有机会可能补充。

> 教授在这几节讲座很少写代码，相对的，分析的内容会增多。

# Lecture 14. Disjoint Sets

[cs61b 2020 lec14 ds1 disjoint sets - Google 幻灯片](https://docs.google.com/presentation/d/1I9Jzt95GvxRqwGMzN7DSEIREKhMZ0qEUzPyWLl6CU5g/edit#slide=id.g636c46f3c_01382)

Just read this slide

# Lecture 15. Asymptotics II

[cs61b 2020 lec15 asymptotics2 - Google 幻灯片](https://docs.google.com/presentation/d/1iZsMIEtFT8gTmYeZ2Ng4ejJbHpZeNVRx-S4NgeWq84w/edit)

Just read this slide

# Lecture 16. ADTs, Sets, Maps, BSTs

## BSTs

在视频中分析了如何从单向有序链表转换成二叉搜索树。

这边给出自写简单实现的代码：

> 没有实现toString，可以使用IDEA可视化调试看到转换后的BST各个节点的信息。

```java MyBST.java
package javaCode;

public class MyBST {

    private static class Node {

        public int item;
        public Node leftNode;
        public Node rightNode;

        public Node() {
            item = 0;
            leftNode = rightNode = null;
        }

        public Node(int i) {
            item = i;
            leftNode = null;
            rightNode = null;
        }
    }

    private Node sent;
    private int size;

    public MyBST() {
        sent = new Node();
        size = 0;
    }

    private Node insert(Node node, int n) {
        if (node == null) {
            return new Node(n);
        } else if (n < node.item) {
            node.leftNode = insert(node.leftNode, n);
        } else if (n > node.item) {
            node.rightNode = insert(node.rightNode, n);
        }
        return node;
    }

    public void insert(int n) {
        sent.leftNode = insert(sent.leftNode, n);
        size +=1;
    }

}
```

```java Main.java
package javaCode;

import java.util.LinkedList;
import java.util.List;

public class Main {

    public static void orderedListToBST(List<Integer> list, int lo, int hi, MyBST tr) {
        if(lo > hi)
            return;
        int mid = (lo + hi) / 2;
        tr.insert(list.get(mid));
        orderedListToBST(list,lo,mid-1,tr);
        orderedListToBST(list,mid+1,hi,tr);
    }

    public static void main(String[] args) {

        List<Integer> list = new LinkedList<>();
        MyBST tr = new MyBST();
        for (int i = 1; i <= 7; i += 1) {
            list.add(i);
        }
        orderedListToBST(list,0,list.size() - 1,tr);
    }
}
```



# Lab 6

> 在我的博客主页上有我的github主页链接，答案都在仓库中

> 可以尝试使用Deepl翻译器阅读原文

## Make

对于测试这种联合命令行运行的程序，JUnit测试会显得疲软。而make可以用来处理测试。

以下分享我认为需要注意的地方

### make.exe

:exclamation: 以下内容需要mingw64​

在终端输入

```bash
make -version
```

理想的情况下会有类似这样的输出

```bash
GNU Make 4.2.1
Built for x86_64-w64-mingw32
Copyright (C) 1988-2016 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

若没有，试着输入

```bash
mingw32-make.exe -version
```

如果有如上的输出，说明只需要在对应的mingw的\bin目录下找到mingw32-make.exe，然后拷贝一份，命名为make.exe

完成后再如上操作。

### make 

`make`可以编译当前目录下所有的\*.java文件生成\*.class文件

```bash
make
```

`make clean `则会清除包含*.class文件的不需要的文件

```bash
make clean
```

`make check` 会启动测试文件进行命令行终端测试

```bash
make check
```

## $REPO_DIR

> If you see an error message, then it means you are either not in the `testing` directory, or your `REPO_DIR` environment variable isn’t set correctly. Check those two things, and if you’re still confused then ask a TA.

如果在#Mandatory Epilogue: Debugging 部分遇到python给的关于REPO_DIR报错，需要检查自己REPO_DIR是否为含有所有作业的文件夹。若电脑环境变量中没有REPO_DIR，需要自己新建REPO_DIR然后赋值为需要的文件夹路径。



