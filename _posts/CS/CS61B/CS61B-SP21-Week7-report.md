---
title: '[CS61B_SP21]Week7_report'
date: 2024-05-23 21:58:55
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/05/12/OJbu6i.jpg
sticky: true
math: true
categories: 
- [CS,CS61B]

---

# Intro

> Suggest:
>
> [B-tree](#B-TREES-/-2-3-TREES-/-2-3-4-TREES) 绝对平衡的树
>
> [LLRB BST](#LLRB-BST) 左倾红黑树



# Lecture 17. B-Trees (2-3, 2-3-4 Trees)

## BST Height and The Useful BIG O

BST height is all four of these:

- $O(N)$
- $Θ(log n)$ in the best case ("bushy").
- $Θ(N)$ in the worst case ("spindly").
- $O(N^2)$

> 需要注意的是 最后一条是正确的。因为O的意思就是less than or equal。
>
> bushy: bushy hair or fur is very thick. 对应树就是茂密，节点密度高
>
> spindly: long or tall and thin, and looking weak. 对应树就是稀疏，节点密度低

The middle two statements are more informative.

- Big O is NOT mathematically the same thing as “worst case”.
  - e.g. BST heights are $O(N^2)$, but are not quadratic in the worst case.
  - … but Big O often used as shorthand for “worst case”.

> quadratic: 二次

一般情况下，以$O(N)$作为用来讨论最坏情况的形式。$O(N^2)$之类的通常不会讨论，即便它们在概念上是正确的。

所以，我们将上面列的四条再进一步简化，得到：

BST height is both of these:

- $Θ(log N)$ in the best case (“bushy”).
- $Θ(N)$ in the worst case (“spindly”).

## Height, Depth, and Performance

### Height and Depth 

Height and average depth are important properties of BSTs.

- The **“depth” of a node** is how far it is from the root, e.g. depth(g) = 2.
- The **“height” of a tree** is the depth of its deepest leaf, e.g. height(T) = 4.
- The **“average depth”** of a tree is the average depth of a tree’s nodes.
  - (**0**x1 + **1**x2 + **2**x4 + **3**x6 + **4**x1)/(1+2+4+6+1) = 2.35

![](/pic/CS/CS61B/week7/1.png)

Height and average depth determine runtimes for BST operations.

- The **“height” of a tree** determines the worst case runtime to find a node.
  - Example: Worst case is contains(s), requires 5 comparisons (height + 1).
- The **“average depth”** determines the average case runtime to find a node.
  - Example: Average case is 3.35 comparisons (average depth + 1).

以上内容提到了或许未曾了解的**"average depth"**

## Performance

**Average Depth.** If N distinct keys are inserted into a BST, the expected average depth is ~ $2 ln N = Θ(log N)$​.

- Thus, average runtime for contains operation is Θ(log N) on a tree built with random inserts.

**Tree Height.** If N distinct keys are inserted in random order, expected tree height is ~ 4.311 ln N [(see Reed, 2003)](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.152.1289&rep=rep1&type=pdf).

- Thus, worst case runtime for contains operation is Θ(log N) on a tree built with random inserts.
- Proof is well beyond the scope of the course (and is 27 pages long!).

> Note: ~ is the same thing as Big Theta, but you don’t drop the multiplicative constants.

若向一个空的BST随机添加数据，它的密度总会往"bushy"方向进行。因此，通过随机插入建立的BST可以说是拥有$Θ(log N)$的表现，但是我们并不总是依靠**随机**建立BST。

因此，为了建立"bushy" 平衡的BST，我们后面讲讨论其方法。

## B-trees / 2-3 trees / 2-3-4 trees

### B-trees

**B-tree**需含有一个参数L，用来指一个节点的数据数目上限。例如L = 3，就可以有如图所示的树

![](/pic/CS/CS61B/week7/2.png)

通过这种将一个节点变化为数组形式的方式，使得B-tree可以保持非常不错的平衡度。

B-trees of order L = 3 (like we used today) are also called a 2-3-4 tree or a 2-4 tree. 

- “2-3-4” refers to the number of children that a node can have, e.g. a 2-3-4 tree node may have 2, 3, or 4 children.

B-trees of order L=2 are also called a 2-3 tree.

2-3 trees就指的是L = 2的B-tree, 2-3-4 则是L = 3。依次类推。

> *The origin of "B-tree" has never been explained by the authors. As we shall see, "balanced," "broad," or "bushy" might apply. Others suggest that the "B" stands for Boeing. Because of his contributions, however, it seems appropriate to think of B-trees as "Bayer"-trees.* 
>
> \- Douglas Corner (The Ubiquitous B-Tree) 

B-tree 是如何拥有能保持高度平衡的特性呢？

### B-Tree Bushiness Invariants

Because of the way B-Trees are constructed, we get two nice invariants:

- All leaves must be the same distance from the source.
- A non-leaf node with k items must have exactly k+1 children.
- Example: The tree given below is impossible.
  - Leaves ([1] and [5 6 7]) are a different distance from the source.
  - Non-leaf node [2 3] has two items but only only one child. Should have three children.
  - ![](/pic/CS/CS61B/week7/3.png)注意，该树不存在如上规则下

We have not proven these invariants rigorously, but try thinking them through.

其实思考的话，假设在L = 3的情况下插入数据至一个空树，在第三次插入后，它必会是一个满的节点，在进行第四次插入时，它必定会分裂（也就是将一个数据向上提，并以此数据的位置做原数组的分裂操作，分裂后的两个数组各自变化为节点，这样，一次分裂就必定会产生两个节点并且连接在被提上去的数据所属的节点下），分裂后依旧能够保证平衡。

可以通过[This link](https://www.cs.usfca.edu/~galles/visualization/BTree.html)进行测试。

> 略: 关于讨论B-tree runtime —— $O(log N)$

# Lecture 18. Red Black Trees

该部分包含大量的图示，为了节约内存，这里直接贴出讲座使用的[slides](https://docs.google.com/presentation/d/1S27xlCPX0Up8WAHZPBqmbcrcKo4FNbyG6eTHamOxzgA/edit#slide=id.g524ce9c5c7_7_0)

## Rotation

旋转操作，rotation

分为**左旋**和**右旋** (`rotateLeft()`と`rotateRight()`)

---

**左旋**

![](/pic/CS/CS61B/week7/4.png)

图示进行的是对G的左旋操作 `G.rotateLeft()`

关注点:

- 主要的操作对象为 `G`  `G.right` `G.right.left`
- 旋转目标（即G）下降一个高度
- 若旋转目标的右孩存在左孩，则将该左孩拼接到旋转目标的右孩上
- 不关心除主要操作对象外的其他节点

**右旋**
![](/pic/CS/CS61B/week7/5.png)

图示进行的是对P的右旋操作 `P.rotateRight()`

关注点 同理左旋

---

值得注意的是，旋转目标所在的子树都会下降一个高度。

## LLRB BST

至此，目前的讨论了的知识已经可以用来构成一颗左倾红黑树

为了接下来的讨论，这里再点一下需要的知识：BST, B-Tree, Rotation

:exclamation:请尽量配合这部分最开头给出的幻灯片阅读下面内容

---



我们已知B-Tree拥有可以保持绝对平衡的特性，但是去直接实现一个B-Tree是复杂的。故，为了探寻一种实现的复杂程度相对较低的BST，我们将讨论LLRB的实现。

>  **Left-Leaning Red Black Binary Search Tree** (LLRB) **左倾红黑树**

### B-Tree的映射

LLRB的设计以B-Tree为基础，LLRB相当于是B-Tree的一般BST形式的映射。

> B-Tree的每个节点包含的数据量不一定相同
>
> 映射也可以简单看成把数据组形式的节点拆分再通过一条红线联系

![](/pic/CS/CS61B/week7/6.png)

它就是通过**红色的**(***red***) **路径**(***path***)进行映射，这个路径通常考量左向

### 判断是否为正确的映射

注意幻灯片里的一道题

![](/pic/CS/CS61B/week7/7.png)

很简单的思路，就是按上诉的映射规则逆向还原节点，再判断是否为B-Tree

>  答案详见幻灯片

---

事实上，这里有一个更好的方法。

![](/pic/CS/CS61B/week7/8.png)

观察该B-Tree，一条线上，一个组合的节点对应了一次拆分，而一次拆分产生一条红线。

若一条线上有N个节点，那么就会有$N-1$条**黑线**(***black***)和最多$N$条**红线**(***red***)

黑线的数量对应了高度$H$，那么对应的最多红线就是$H+1$

故，在以此B-Tree为基础映射得到的LLRB的最大高度为$2H+1$​

这里提一点： 黑线数量在映射过程中不会改变，并且根据B-Tree高度平衡的特点，各条线上的黑线数量都是相同的

因此，可以借助这一点重新回顾刚才的问题，可以快速做出判断。

另外，在得出映射后的LLRB高度不超过$2H+1$这个结论后，可以得出LLRB的插入、查找之类的操作的时间复杂度为$Θ(log H)$

### 映射的方法

幻灯片里已经总结出：

- Right red link -> rotate left.
- Two consecutive left links -> rotate right.
- Red left and right -> color flip.

> - 向树里添加节点总是使用红线 (插入规则依旧是BST规则)
> - 若红线在右向连接，则需要对父节点进行左旋操作
> - 若一个节点上下均为红线连接，则对该节点的父节点进行右旋操作
> - 若一个节点左右孩均红线连接，则将连接该节点的所有路径颜色翻转(*flip*)

This [link](https://docs.google.com/presentation/d/1jgOgvx8tyu_LQ5Y21k4wYLffwp84putW8iD7_EerQmI/edit?usp=sharing) might help you understand the methods above

# Lecture 19. Hashing

这部分将略去讲座中讨论创造一个hashTable的过程，在这里只指出最后我们会获得一个可以根据阈值参数Q增长的哈希表。

Q是预先设定的，当哈希表中的item数量N，除以bucket数量M，即(N / M) 的值大于阈值Q时，数组会按照设置的倍数进行增长。

最后会得到时间复杂度为常数级的`add(x), contains(x)`方法。

![](/pic/CS/CS61B/week7/9.png)

---

## Hash Tables in Java

### int hashCode()

![](/pic/CS/CS61B/week7/10.png)

`int hashCode()`已经在类`Object`中声明，因此，自定义类可以Override该方法。

## Choosing a Base

假如对一个字符串类型写一个哈希函数，遍历每一个字符，获得对应的ASCII码乘对应位数次方的基数，再累加起来，获得哈希值。

如下图所示

![](/pic/CS/CS61B/week7/11.png)

在Java 8 中，使用了素数31作为基数

> A typical hash code base is a small prime.
>
> - Why prime?
>   - Never even: Avoids the overflow issue on previous slide.
>   - Lower chance of resulting hashCode having a bad relationship with the number of buckets: See study guide problems and hw3.
> - Why small?
>   - Lower cost to compute.





