---
title: '[CS61B_SP21]Week8_report'
date: 2024-07-6 21:00:07
tags: [java,CS61B]
cover: https://ooo.0x0.ooo/2024/05/25/OJg0Dc.jpg
sticky: true
math: true
categories: 
- [CS,CS61B]
---

# Intro

大一终于结束，终于能有事件继续跟进CS61B的学习。

这周的内容主要是讲了堆以及图相关的内容，其重点就是堆的概念以及图的遍历方法。

> Suggest
>
> - [Heaps](#heaps) 堆的实现
>
> - [DFS in graph](#dfs-in-graph) 图中的深搜
> - [BFS Implementation](#bfs-implementation) 图中的广搜

# Lecture 20. Heaps and PQs

## PQs

优先队列 Priority Queue.

其最主要的特征就是根据设置的优先规则储存数据（例如min或max）

例如MinPQ

```java
/** (Min) Priority Queue: Allowing tracking and removal of the
  * smallest item in a priority queue. */
public interface MinPQ<Item> {
	/** Adds the item to the priority queue. */
	public void add(Item x);
	/** Returns the smallest item in the priority queue. */
	public Item getSmallest();
	/** Removes the smallest item from the priority queue. */
	public Item removeSmallest();
	/** Returns the size of the priority queue. */
	public int size();
}
```

## Heaps

**堆(heap)**通常用于实现PQ。

>  以下的讨论均以 Binary min-heap为例

堆可以用二叉树来表示，其需要维护的特征如下：

- 每一个节点的数据都要比它的两个子节点小（min-heap场景)
- 只能在最后一层缺失节点，并且所有节点都尽量向左对齐

我们将第一则称为`Min-heap property`，第二则称为`Complete property`

如下图所示：

![](/pic/CS/CS61B/week8/1.png)

---

下面将简单介绍一下如何实现PQ的方法

### Methods

**add(x)**: 将x直接添加到最后一层空缺的第一位置，随后向上比对数据大小、交换数据以维护`Min-heap property`。

**getSmallest()**: 直接返回root node。

**removeSmallest()**: 将根节点与最后一层最后一项节点交换，然后移除交换后的最后一项（也就是之前的根节点），随后维护Min-heap property。

## Tree Representations

可以直接以二叉树的形式实现，也可以用有序数组实现。

但最适合实现的是如下所示的数组

![](/pic/CS/CS61B/week8/2.png)

我们将会利用该数组的元素信息和下标信息实现heap

元素信息：节点的数据内容

下标信息：节点在数中的位置（也就是将数组中的下标映射到二叉树中）

> 在我看来，可以这样实现的重要前提就是堆的`Complete property`

那么，若想找到一个节点(下标为`x`)的父节点，可以有如下方法

```java
int parent(int index){
    if(index == 0)return 0;
    return (index - 1)/2; 
}
```

假如设置数组的第二位元素(下标1)为根节点那么如上的`if(index == 0)`可以改为`if(index == 1)`，下一条的`return`同理

同样，我们也可以表示左孩和右孩

`parent(x) = x/2`

`leftChild(x) = x*2 `

`rightChild(x) = x*2 +1`

最后，我们就用这样的heap实现了PQ

得到的性能与其他数据结构对比

![](/pic/CS/CS61B/week8/3.png)





# Lecture 21. Tree and Graph Traversals


## Graph  
- graph  
   - vertices（a.k.a nodes):  节点  
   - edges: 边  
   - adjacent: 邻接  
   - labels(or weights): 权重  
   - path: 路  
   - cycle: 回路  
   - connected: 连通的  

## Graph problems  
### s-t Connectivity Problem  
s-t connectivity problem: 节点s和节点t是否连接  
考虑递归实现  
－ Does s == t? (the same node) If so, return true.  
- Otherwise, if connected(v,t) for any neighbor v of s, return true.  
- Return false.  
以上为最容易想到的操作，但是它存在一个问题
注意第二点 **for any neighbor v of s** 那么意味着，对于当前节点的邻居来说，该节点也为其邻居。也就是会重复访问同一个节点，甚至导致死循环。
因此，需要标记每一个访问过的节点，根据标记信息，避免重复访问。  
SO  
- Mark s.  
- Does s == t? If so, return true.  
- Otherwise, if connected(v,t) for **any unmarked neighbor v of s**, return true.  
- Return false.  

### DFS in graph  
- Mark v  
- For each unmarked adjacent vertex w:  
   - set edgeTo[w] = v.  
   - dfs(w)  

> 如上所示的为DFS Preorder  
> DFS Preorder: Action is before dfs(s)  
> DFS Postorder: Action is after dfs(s)  

### BFS
BFS stands for "breath first search".  
**Search is wide, not deep**  

## Summary  
**Tree traversals**  

- Preorder, inorder, postoder, level order  

**Graph traversals**  
- DFS preorder, DFS postorder, BFS



# Lecture 22. Graph Traversals and Implementations

##  BFS Implementation

Problem: Find shortest path between s(start vertex) and every other vertex.  
process

- Initialize the fringe (a queue with a strating vertex s) and mark that vertex.
- repeat untile fringe is empty:
    - Remove vertex v from fringe.
    - For each un marked neighbor n of v: mark n, add n to fringe, set edgTo[n] =v, set distTo[n] = distTo[v] + 1.