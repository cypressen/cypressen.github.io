---
title: '[CS61B_SP21]Week5_report'
date: 2024-04-25 14:42:22
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/04/25/OpPnoI.jpg
sticky: true 
math: true
categories: 
- [CS,CS61B]
---
# Intro

虽然`project 2`是在本周开启的，但是我打算在知识较为充裕的情况下完成

本周讲的内容很少，但依旧给出*Suggest*

> Suggest:
>
> - [Asymptotics I](#lecture-13-asymptotics-I) 关于复杂度表示符号的概念

# Lecture 12. Command Line Programming, Git, Project 2 Preview

在这节讲座中，主要讨论了git是如何基本实现版本管理。关于git，在上周的`lab 4`已经涉及到了大部分关于基础的知识，故在这部分将不会详细说明。

## public static void main(String[] args)

What does args mean?

我们可以通过命令行来编译java文件-> `javac xxx.java` `java xxx`/`java ./xxx`

这两段命令分别是编译`compiler`和解释`interpreter`

若在`java xxx`后面追加字符串如`abcd` -> `java xxx abcd`

那么，这个`args` String数组的第`0`位将会是`abcd`

至此，我们会更加熟悉一些command背后发生了什么

## Git: SHA-1

git采用了`SHA-1`标识各个版本和各个文件，我们会在`git log`后见到这些哈希值

> In [cryptography](https://en.wikipedia.org/wiki/Cryptography), **SHA-1** (**Secure Hash Algorithm 1**) is a [hash function](https://en.wikipedia.org/wiki/Hash_function) which takes an input and produces a 160-[bit](https://en.wikipedia.org/wiki/Bit) (20-[byte](https://en.wikipedia.org/wiki/Byte)) hash value known as a [message digest](https://en.wikipedia.org/wiki/Message_digest) – typically rendered as 40 [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) digits. It was designed by the United States [National Security Agency](https://en.wikipedia.org/wiki/National_Security_Agency), and is a U.S. [Federal Information Processing Standard](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard).The algorithm has been cryptographically broken，but is still widely used.

> 在密码学中，SHA-1（安全哈希算法 1）是一种哈希函数，它接受输入并生成一个 160 位（20 字节）哈希值，称为消息摘要——通常呈现为 40 个十六进制数字。它由美国国家安全局设计，是美国联邦信息处理标准。该算法已被加密破解 ，但仍被广泛使用。

## Git: merge conflict

这一小部分将会解释merge conflict是如何发生的。

如何单机实现`merge conflict`:

- 在提交几个版本后，使用`git checkout -b anotherBranch xxxhashcode` xxxhashcode也就是版本的哈希值

- 随后就进入`anotherBranch`对目标文件做出修改（特意制造merge conflict）

- 回到`main/master`分支，使用`git merge anotherBranch`。这样就可以特意的实现一个merge conflict

## Project 2 Preview

在`Project 2`将会模拟实现git

这将会涉及以下的内容

> - Along the way we got a brief look at 4 different unrelated topics:
>   - Maps: Same as a Python dictionary.
>   - Hashing: Representing an object by a sequence of (160) bits.
>   - Serialization: Saving and loading Java objects from a file.
>   - Graphs: Generalization of a Linked List.

# Lecture 13. Asymptotics I

渐进分析 `asymptotics`

在这次讲座中，主要讨论了时间复杂度。在这之前，我们或许已经见过像$O(N^2)$​​这样的表达。这部分的内容将会继续讨论与之相关的内容。

关于下面将会主要讨论的Θ和O，它们有着明确的数学定义。但是若用数学定义的语言去描述，会有些难懂（至少我是如此以为）

所以我会避免涉及一些术语的数学说明。这可能会导致不太严谨，但我想这在基本了解上会更加轻松。

## Θ: Big-Theta

借讲座中出现的一个例子: $R(N) = 40 sin(N) + 4N^2$  


其对应的Θ会是  $Θ(N^2)$

在这里我们作一个设置 $N^2 = f(N)$

故，以上的 $Θ(N^2)$可以表示为$Θ(f(N))$ ，这是一个通用的表示。为了理解下面的内容，我们需要这样的表示。

至此，会发现这和Big O Notation的使用是一模一样的。但是其意义是不同的。

---



Θ，用这个代表`order of growth` *(o.o.g)* 增长量级

> Using “Big-Theta” instead of “order of growth” does not change the way we analyze code at all.

对于如上的$R(N)$ 和 $Θ(N^2)$ 的关系会有如下表示：

$R(N) = 40 sin(N) + 4N^2 ∈Θ(N^2)$ 

**为什么会是∈呢?**

Θ表示的是`o.o.g`， 那么$Θ(N^2)$ 表示的是抛物线$N^2$的增长量级。那么像$2N^2+N$ 也会对应$Θ(N^2)$。因此  $Θ(N^2)$ 代表了一类的`o.o.g`，在这里$R(N)$​​属于这一类。

**为什么要有这样的表达?**

在继续讨论这个问题之前，先将式子通用化以便进行广泛的讨论

$R(N) ∈ Θ(f(N))$ ，$R(N)$可以是任意函数

紧接着将伴随这样的不等式

$k_1 · f(N) <= R(N) <= k_2 · f(N)$，$k_1$ $k_2$均为正数常量

为了解释上面那个问题，先来说明这个不等式意味着什么

**$k_1,k_2$​会是什么?**

依旧以最开始的式子为例子

$R(N) = 40 sin(N) + 4N^2$ 经过初步简化后会得到$4N^2$ 

那么，可以大致地取$k_1 = 3$, $k_2 = 5$​

代入到刚才的不等式，将会是

$3 N^2 <= 40 sin(N) + 4N^2 <= 5 N^2$​

将这个不等式用坐标系描绘，得到

![](/pic/CS/CS61B/week5/1.png)

> from this [link](https://sp18.datastructur.es/materials/demos/asymptotics.html?rN=4*N^2+40*sin(N)&fN=N^2&k1=3&k2=5&maxN=15&maxY=1000)

可以看到，5和3把$R(N)$夹在它们之间了。所以这就是为什么可以取5和3 -> 上下渐进原来的函数$R(N)$​ -> 这自然会扩展到极限的范畴

那么为了区别O，这里特意指出Θ的一点: 借$k_1, k_2$上下渐进原函数

---

## O: Big-Oh

O实际上就是忽略了Θ的下界

$R(N) ∈ O(f(N))$

$R(N) <= k_2 · f(N)$

O常用的原因就在于，它标识了上界，也就是最坏的情况下的复杂度。大家通常会考虑最坏的情况

## Ω: Big-Omega

与O相反，忽略的Θ的上界，标识了下界。对应了最好的情况。

## Big-heta vs. Big-Oh

|                     | Informal meaning                               | Family   | Family Members                     |
| ------------------- | ---------------------------------------------- | -------- | ---------------------------------- |
| Big-Theta $Θ(f(N))$ | Order of growth is f(N).                       | $Θ(N^2)$ | $N^2/2$, $2N^2$, $N^2 + 38N + N$ |
| Big-Oh $O(f(N))$    | Order of growth is less than or equal to f(N). | $O(N^2)$ | $N^2/2$, $2N^2$, $lg(N)$          |
|                     |                                                |          |                                    |

## TIPS

命令`time java xxx`可以获得`xxx.class`的运行时间

## Episode

Josh Hug教授在讲座视频开头的小段闲聊借自己换了墙纸透露了自己有baby了 XD

> "Although it wasn't just for you, we also had a baby."

# VOCABULARY

| 词                | 解释     | 备注 |
| ----------------- | -------- | ---- |
| `order of growth` | 增长量级 |      |
| `asymptotics`     | 渐进分析 |      |
